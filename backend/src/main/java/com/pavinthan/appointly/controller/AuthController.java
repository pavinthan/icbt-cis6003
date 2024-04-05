package com.pavinthan.appointly.controller;

import com.pavinthan.appointly.dto.*;
import com.pavinthan.appointly.exception.AppException;
import com.pavinthan.appointly.security.UserAuthProvider;
import com.pavinthan.appointly.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("/user")
    public  ResponseEntity<UserDto> user(@AuthenticationPrincipal UserDto principal) {
        UserDto user = userService.getUserById(principal.getId());

        if(user == null) {
            throw new AppException("User not found", HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(user);
    }
}
