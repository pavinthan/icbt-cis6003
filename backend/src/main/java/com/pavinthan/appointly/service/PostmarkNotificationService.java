package com.pavinthan.appointly.service;

import org.springframework.stereotype.Service;

@Service
public class PostmarkNotificationService implements NotificationService {
    @Override
    public void sendEmail(String toAddress, String subject, String body) {

    }
}
