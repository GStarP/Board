package com.nju.board.service;

import com.nju.board.model.Room;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {

    public static List<Room> rooms;

    public RoomService() {
        rooms = new ArrayList<>();
        rooms.add(new Room(1l, 2));
        rooms.add(new Room(2l, 2));
        rooms.add(new Room(3l, 2));
    }

    public List<Room> getAllRoom() {
        return rooms;
    }

}
