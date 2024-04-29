package com.example.gift.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.example.gift.dto.request.ForgotPasswordRequest;
import com.example.gift.dto.request.LoginRequest;
import com.example.gift.dto.request.RegisterRequest;
import com.example.gift.dto.response.BasicResponse;
import com.example.gift.dto.response.LoginResponse;
import com.example.gift.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/authentication")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "It's used to authenticated and authorize the user.")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @Operation(summary = "User registration", description = "For the registration process, I collect user credentials such as email and password.")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest){
        BasicResponse<String> response =  new BasicResponse<>();
        try {
            response = authenticationService.register(registerRequest);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong.");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }

    }

    @PostMapping("/login")
    @Operation(summary = "User authentication", description = "Upon successful authentication using user credentials (email and password), a JSON Web Token.")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        BasicResponse<LoginResponse> response = new BasicResponse<>();
        try {
            response = authenticationService.login(loginRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong.");
            response.setData(LoginResponse.builder().accessToken("").build());
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchExchange("/forgot-password")
    @Operation(summary = "Reset User password", description = "For the \"forgot password\" feature, I collect the user's email, their current password along with with the confirmation password to change.")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest){
        BasicResponse<String> response = new BasicResponse<>();
        try {
            response = authenticationService.forgotPassword(forgotPasswordRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong.");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}
