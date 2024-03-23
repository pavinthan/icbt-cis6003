package com.pavinthan.appointly.exception;

import org.springframework.http.HttpStatus;

public class AppException extends RuntimeException {
    private final String message;

    private final HttpStatus code;

    public AppException(String message, HttpStatus code) {
        this.message = message;
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public HttpStatus getCode() {
        return code;
    }
}
