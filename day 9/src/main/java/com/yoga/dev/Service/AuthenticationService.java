

package com.yoga.dev.Service;

import com.yoga.dev.dto.request.LoginRequest;
import com.yoga.dev.dto.request.RegisterRequest;
import com.yoga.dev.dto.response.LoginResponse;
import com.yoga.dev.dto.response.RegisterResponse;

public interface AuthenticationService {
  RegisterResponse register(RegisterRequest request);

  LoginResponse login(LoginRequest request);
}
