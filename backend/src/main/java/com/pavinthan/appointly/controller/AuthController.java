package com.pavinthan.appointly.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @PostMapping("/register")
    public String register() {
        return "";
    }

    @PostMapping("/login")
    public  String login() {
        return  "";
    }
}
