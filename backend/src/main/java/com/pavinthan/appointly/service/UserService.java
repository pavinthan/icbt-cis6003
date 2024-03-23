package com.pavinthan.appointly.service;

import com.pavinthan.appointly.dto.*;
import com.pavinthan.appointly.exception.AppException;
import com.pavinthan.appointly.model.User;
import com.pavinthan.appointly.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return UserDto.from(users);
    }

    public UserDto getUserById(UUID id) {
        User user = userRepository.findById(id).orElse(null);
        return UserDto.from(user);
    }

    public UserDto login(LoginRequestDto loginDto) {
        User user = userRepository.findByEmail(loginDto.getEmail()).orElse(null);

        if(user != null) {
            if(passwordEncoder.matches(CharBuffer.wrap(loginDto.getPassword()), user.getPassword())) {
                return UserDto.from(user);
            }
        }

        throw new AppException("User not found", HttpStatus.NOT_FOUND);
    }

    public UserDto register(RegisterUserRequestDto registerDto) {
        User existingUser = userRepository.findByEmail(registerDto.getEmail()).orElse(null);

        if(existingUser != null) {
            throw new AppException("User already exists", HttpStatus.CONFLICT);
        }

        String password = passwordEncoder.encode(CharBuffer.wrap(registerDto.getPassword()));

        User input = new User(
                registerDto.getFirstName(),
                registerDto.getLastName(),
                registerDto.getEmail(),
                registerDto.getPhoneNumber(),
                password
        );

        User user = userRepository.save(input);

        return UserDto.from(user);
    }
}
