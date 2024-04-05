package com.pavinthan.appointly.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@AutoConfigureMockMvc
@WebMvcTest(AuthController.class)
public class AuthControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    public void shouldGetUserThrowErrorIfUserUnauthenticated() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/user")
                .contentType("application/json"))
                .andExpect(MockMvcResultMatchers.status().isUnauthorized());
    }
}
