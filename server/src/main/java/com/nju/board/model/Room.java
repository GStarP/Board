package com.nju.board.model;

import java.util.ArrayList;
import java.util.List;

public class Room {

    private Long roomId;
    private int size;
    private List<User> users;

    public Room(Long roomId, int size) {
        this.roomId = roomId;
        this.size = size;
        this.users = new ArrayList<>();
    }

    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public List<User> getUsers() {
        return users;
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void removeUser(Long userId) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUserId() == userId) {
                users.remove(i);
                return;
            }
        }
    }

}
