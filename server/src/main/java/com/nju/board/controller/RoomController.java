package com.nju.board.controller;

import com.nju.board.service.RoomService;
import com.nju.board.vo.ResponseMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping("/all")
    public ResponseMsg all() {
        try {
            return ResponseMsg.success(roomService.getAllRoom());
        } catch (Exception e) {
            return ResponseMsg.fail("/room/all");
        }
    }

}
