package com.example.gift.service;

import com.example.gift.dto.request.ForgotPasswordRequest;
import com.example.gift.dto.request.LoginRequest;
import com.example.gift.dto.request.RegisterRequest;
import com.example.gift.dto.response.BasicResponse;
import com.example.gift.dto.response.LoginResponse;

public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);

}