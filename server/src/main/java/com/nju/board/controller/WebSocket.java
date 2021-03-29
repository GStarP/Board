package com.nju.board.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.nju.board.model.Room;
import com.nju.board.model.User;
import com.nju.board.service.RoomService;
import org.springframework.stereotype.Component;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@ServerEndpoint(value = "/ws/{userId}")
public class WebSocket {

    // 总连接数
    private static int connectionNum = 0;
    // 保存所有连接的字典
    private static Map<Long, WebSocket> connections = new ConcurrentHashMap<>();

    private Long userId;
    private Session session;

    @OnOpen
    public void onOpen(@PathParam("userId") Long userId, Session session) {
        System.out.println("user" + userId + " connect");
        this.userId = userId;
        this.session = session;
        connectionNum++;
        connections.put(userId, this);
    }

    @OnClose
    public void onClose() {
        System.out.println("user" + this.userId + " disconnect");
        connectionNum--;
        connections.remove(this.userId);
    }

    @OnMessage
    public void onMessage(String msg) {
        System.out.println("receive message: " + msg);
        JSONObject param = JSON.parseObject(msg);
        Long userId = param.getLong("userId");
        Long roomId = param.getLong("roomId");
        for (Room room : RoomService.rooms) {
            room.removeUser(userId);
        }
        RoomService.rooms.get(roomId.intValue() - 1).addUser(UserController.users.get(userId.intValue() - 1));

        for (WebSocket io : connections.values()) {
            io.session.getAsyncRemote().sendText(JSONObject.toJSONString(RoomService.rooms));
        }
    }

}
