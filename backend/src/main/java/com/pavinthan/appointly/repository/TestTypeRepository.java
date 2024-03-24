package com.pavinthan.appointly.repository;

import com.pavinthan.appointly.model.TestType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TestTypeRepository extends JpaRepository<TestType, UUID> {
}
