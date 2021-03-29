package com.nju.board.controller;

import com.nju.board.model.User;
import com.nju.board.vo.LoginForm;
import com.nju.board.vo.ResponseMsg;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private int tmp = 0;
    public static List<User> users = new ArrayList<>();

    public UserController() {
        users = new ArrayList<>();
        users.add(new User(1l, "Jack"));
        users.add(new User(2l, "Bob"));
        users.add(new User(3l, "Mike"));
    }

    @PostMapping("/login")
    public ResponseMsg login(@RequestBody LoginForm loginForm) {
        // TODO
        User user = new User();
        tmp = (tmp + 1) % 3;
        return ResponseMsg.success(users.get(tmp));
    }

}
