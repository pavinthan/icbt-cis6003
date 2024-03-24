package com.pavinthan.appointly.repository;

import com.pavinthan.appointly.model.TestReport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TestReportRepository extends JpaRepository<TestReport, UUID> {
}
