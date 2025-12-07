package com.example.Green_Commerce.controller;

import com.example.Green_Commerce.model.User;
import com.example.Green_Commerce.service.UserService;
import com.example.Green_Commerce.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    // REGISTER
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User savedUser = userService.registerUser(user);
        return ResponseEntity.ok(savedUser);
    }

    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        User existingUser = userService.getUserByEmail(user.getEmail());

        if (existingUser == null) {
            return ResponseEntity.status(401).body(
                    Map.of("error", "User not found")
            );
        }

        if (!passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            return ResponseEntity.status(401).body(
                    Map.of("error", "Invalid credentials")
            );
        }

        // Generate JWT token
        String token = jwtUtil.generateToken(existingUser.getEmail());

        // Return JSON (token + role)
        return ResponseEntity.ok(
                Map.of(
                        "token", token,
                        "role", existingUser.getRole()
                )
        );
    }

}

