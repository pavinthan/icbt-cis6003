package com.pavinthan.appointly.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class TechnicianController {

    @GetMapping("/technicians")
    public ResponseEntity<String> listAllTechnicians() {
        return ResponseEntity.ok("Doctor list");
    }

    @PostMapping("/technicians")
    public ResponseEntity<String> createTechnician() {
        return ResponseEntity.ok("Doctor created");
    }

    @GetMapping("/technicians/{id}")
    public ResponseEntity<String> getTechnician(@PathVariable UUID id) {
        return ResponseEntity.ok("Doctor" + id);
    }
}
