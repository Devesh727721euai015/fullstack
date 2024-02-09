package com.yoga.dev.Service;

import com.yoga.dev.dto.response.BasicResponse;
import com.yoga.dev.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
