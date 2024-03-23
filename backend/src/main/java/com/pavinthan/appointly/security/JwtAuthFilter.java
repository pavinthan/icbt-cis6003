package com.pavinthan.appointly.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.lang.NonNull;
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
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {
        String header = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(header != null) {
            String[] elements = header.split(" ");

            if(elements.length == 2 && "Bearer".equals(elements[0])) {
                String token = elements[1];

                try {
                    String method = request.getMethod();
                    String allowedMethod = HttpMethod.GET.toString();

                    if (allowedMethod.equals(method)) {
                        SecurityContextHolder.getContext().setAuthentication(
                                userAuthProvider.validateToken(token)
                        );
                    } else {
                        SecurityContextHolder.getContext().setAuthentication(
                                userAuthProvider.validateTokenStrongly(token)
                        );
                    }
                } catch (Exception e) {
                    SecurityContextHolder.clearContext();
                    throw e;
                }
            }
        }

        filterChain.doFilter(request, response);
    }
}
