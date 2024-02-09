package com.yoga.dev.dto.response;

import com.yoga.dev.Enum.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private String id;
    private String username;
    private String email;
    private Role role;
    private String image;
    private Long phoneNumber;
    private String Address;

}
