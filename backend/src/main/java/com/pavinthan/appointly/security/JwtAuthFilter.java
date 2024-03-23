package com.pavinthan.appointly.security;

import com.pavinthan.appointly.security.UserAuthProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JwtAuthFilter extends OncePerRequestFilter {
    private final UserAuthProvider userAuthProvider;

    public JwtAuthFilter(UserAuthProvider userAuthProvider) {
        this.userAuthProvider = userAuthProvider;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest httpServletRequest,
            HttpServletResponse httpServletResponse,
            FilterChain filterChain) throws ServletException, IOException {
        String header = httpServletRequest.getHeader(HttpHeaders.AUTHORIZATION);

        if(header != null) {
            String[] elements = header.split(" ");

            if(elements.length != 2 || !"Bearer".equals(elements[0])) {
                return;
            }

            String token = elements[1];

            try {
                SecurityContextHolder.getContext().setAuthentication(
                        userAuthProvider.validateToken(token)
                );
            } catch (Exception e) {
                httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            }
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
