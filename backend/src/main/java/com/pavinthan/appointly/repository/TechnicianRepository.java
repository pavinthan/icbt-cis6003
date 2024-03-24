package com.pavinthan.appointly.repository;

import com.pavinthan.appointly.model.Technician;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TechnicianRepository extends JpaRepository<Technician, UUID> {
}
