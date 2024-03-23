package com.pavinthan.appointly.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.pavinthan.appointly.dto.UserDto;
import com.pavinthan.appointly.exception.AppException;
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

    public String createToken(UserDto user) {
        Date now = new java.util.Date();
        Date validity = new Date(now.getTime() + 3_600_000);

        return JWT.create()
                .withSubject(user.getId().toString())
                .withIssuedAt(now)
                .withExpiresAt(validity)
                .withClaim("firstName", user.getFirstName())
                .withClaim("lastName", user.getLastName())
                .withClaim("email", user.getEmail())
                .withClaim("phoneNumber", user.getPhoneNumber())
                .sign(Algorithm.HMAC256(secretKey));
    }

    public Authentication validateToken(String token) {
        JWTVerifier verify = JWT.require(Algorithm.HMAC256(secretKey))
                .build();

        DecodedJWT decodedToken = verify.verify(token);

        UUID userId = UUID.fromString(decodedToken.getSubject());

        UserDto user = new UserDto();
        user.setId(userId);
        user.setFirstName(decodedToken.getClaim("firstName").asString());
        user.setLastName(decodedToken.getClaim("lastName").asString());
        user.setEmail(decodedToken.getClaim("email").asString());
        user.setPhoneNumber(decodedToken.getClaim("phoneNumber").asString());

        return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
    }

    public Authentication validateTokenStrongly(String token) {
        JWTVerifier verify = JWT.require(Algorithm.HMAC256(secretKey))
                .build();

        DecodedJWT decodedToken = verify.verify(token);

        UUID userId = UUID.fromString(decodedToken.getSubject());

        UserDto user = userService.getUserById(userId);

        if (user == null) {
            throw new AppException("User not found", HttpStatus.NOT_FOUND);
        }

        return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
    }
}
