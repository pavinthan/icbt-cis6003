package com.pavinthan.appointly.controller;

import com.pavinthan.appointly.dto.*;
import com.pavinthan.appointly.security.UserAuthProvider;
import com.pavinthan.appointly.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    private final UserService userService;

    private final UserAuthProvider userAuthProvider;

    @Autowired
    public AuthController(UserService userService, UserAuthProvider userAuthProvider) {
        this.userService = userService;
        this.userAuthProvider = userAuthProvider;
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterUserResponseDto> register(@RequestBody RegisterUserRequestDto createUserDto) {
        UserDto user = userService.register(createUserDto);
        return ResponseEntity.ok(new RegisterUserResponseDto(userAuthProvider.createToken(user), user));
    }

    @PostMapping("/login")
    public  ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto loginDto) {
        UserDto user = userService.login(loginDto);
        return ResponseEntity.ok(new LoginResponseDto(userAuthProvider.createToken(user), user));
    }
}
