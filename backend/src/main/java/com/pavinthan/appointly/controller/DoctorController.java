package com.pavinthan.appointly.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DoctorController {

    @GetMapping("/doctors")
    public ResponseEntity<String> getDoctor() {
        return ResponseEntity.ok("Doctor list");
    }
}
