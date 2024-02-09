package com.yoga.dev.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.dev.Models.User;

import java.util.Optional;
public interface UserRepository extends JpaRepository<User,String>{
    Optional <User> findByEmail(String username);
}
