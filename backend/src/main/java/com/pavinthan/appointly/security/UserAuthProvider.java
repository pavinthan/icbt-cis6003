package com.pavinthan.appointly.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.pavinthan.appointly.dto.UserDto;
import com.pavinthan.appointly.exception.UserNotFoundException;
import com.pavinthan.appointly.service.UserService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Collections;
import java.util.Date;
import java.util.UUID;

@Component
public class UserAuthProvider {
    private final UserService userService;

    @Autowired
    public UserAuthProvider(UserService userService) {
        this.userService = userService;
    }

    @Value("${security.jwt.token.secret-key:secret-value}")
    private String secretKey;

    @PostConstruct
    public void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(UUID userId) {
        Date now = new java.util.Date();
        Date validity = new Date(now.getTime() + 3_600_000);

        return JWT.create()
                .withIssuer(userId.toString())
                .withIssuedAt(now)
                .withExpiresAt(validity)
                .sign(Algorithm.HMAC256(secretKey));
    }

    public Authentication validateToken(String token) {
        JWTVerifier verify = JWT.require(Algorithm.HMAC256(secretKey))
                .build();

        DecodedJWT decodedToken = verify.verify(token);

        String userId = decodedToken.getIssuer();

        UserDto user = userService.getUserById(userId);

        if (user == null) {
            throw new UserNotFoundException("User not found", HttpStatus.NOT_FOUND);
        }

        return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
    }
}
