package com.pavinthan.appointly.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class AppointmentController {

    @GetMapping("/appointments")
    public ResponseEntity<String> listAllAppointmentForDoctor() {
        return ResponseEntity.ok("Doctor list");
    }


    @PostMapping("/appointments")
    public ResponseEntity<String> createAppointment() {
        return ResponseEntity.ok("Doctor created");
    }

    @GetMapping("/appointments/{id}")
    public ResponseEntity<String> getAppointment(@PathVariable UUID id) {
        return ResponseEntity.ok("Doctor" + id);
    }
}
