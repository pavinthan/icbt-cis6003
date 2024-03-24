package com.pavinthan.appointly.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class DoctorController {

    @GetMapping("/doctors")
    public ResponseEntity<String> listAllDoctors() {
        return ResponseEntity.ok("Doctor list");
    }

    @PostMapping("/doctors")
    public ResponseEntity<String> createDoctor() {
        return ResponseEntity.ok("Doctor created");
    }

    @GetMapping("/doctors/{id}")
    public ResponseEntity<String> getDoctor(@PathVariable UUID id) {
        return ResponseEntity.ok("Doctor" + id);
    }
}
