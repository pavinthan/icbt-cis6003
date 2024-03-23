package com.pavinthan.appointly.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @JsonProperty("Id")
    @Column(name = "id", columnDefinition = "serial")
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    @JsonProperty("FirstName")
    @Column(name = "first_name")
    String firstName;

    @JsonProperty("LastName")
    @Column(name = "last_name")
    String lastName;

    @JsonProperty("Email")
    @Column(name = "email")
    String email;

    @JsonProperty("CreatedAt")
    @Column(name = "createdAt", columnDefinition = CreatedDate)
    String createdAt;
}
