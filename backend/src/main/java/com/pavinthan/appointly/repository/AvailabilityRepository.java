package com.pavinthan.appointly.repository;

import com.pavinthan.appointly.model.Availability;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvailabilityRepository extends JpaRepository<Availability, String> {
}
