package com.pavinthan.appointly.repository;

import com.pavinthan.appointly.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<User, String> {
}