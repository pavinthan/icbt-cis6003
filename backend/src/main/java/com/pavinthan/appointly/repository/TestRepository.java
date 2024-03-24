package com.pavinthan.appointly.repository;

import com.pavinthan.appointly.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TestRepository extends JpaRepository<Test, UUID> {
}
