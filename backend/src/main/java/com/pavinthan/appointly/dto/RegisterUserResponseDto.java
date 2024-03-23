package com.pavinthan.appointly.dto;

public class RegisterUserResponseDto {
    String token;

    private UserDto user;

    public RegisterUserResponseDto() {

    }

    public RegisterUserResponseDto(String token, UserDto user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }
}
