package com.pavinthan.appointly.repository;

import com.pavinthan.appointly.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, String> {
}
