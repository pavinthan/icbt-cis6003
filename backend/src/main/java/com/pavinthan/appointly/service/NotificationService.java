package com.pavinthan.appointly.service;

public interface NotificationService {
    public void sendEmail(String toAddress, String subject, String body);
}
