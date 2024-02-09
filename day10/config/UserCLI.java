package com.yoga.dev.config;


import static com.yoga.dev.Enum.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.yoga.dev.Models.User;
import com.yoga.dev.Repository.UserRepository;

import lombok.RequiredArgsConstructor;
@Component
@RequiredArgsConstructor
// @SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        if(userRepository.count()>0)
        return;
        var user=User.builder()
            .name("ATCHAYA_S")
            .email("atchayaachu@gmail.com")
            .password(passwordEncoder.encode("atchaya@123"))
            .role(ADMIN)
            .build();
        userRepository.save(user);

    }

}