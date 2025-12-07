package com.example.Green_Commerce.model;
import jakarta.validation.constraints.Email;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Check;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Email
    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    @Check(constraints = "role IN ('ROLE_USER', 'ROLE_ADMIN')")
    private  String role;
}
