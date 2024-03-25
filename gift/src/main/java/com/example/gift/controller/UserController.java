package com.example.gift.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gift.dto.request.AddressRequest;
import com.example.gift.dto.request.PhoneRequest;
import com.example.gift.dto.response.ProfileResponse;
import com.example.gift.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
@Tag(name = "User Controller", description = "It's used to update and authorize the user credentials.")
public class UserController {
    
    @Autowired
    private UserService service;

    @GetMapping("/get/{id}")
    @Operation(summary = "Get User Details", description = "Getting User Details to display in Profile")
    public ResponseEntity<ProfileResponse> getUser(@PathVariable("id") long id) {
        ProfileResponse user = service.getUser(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PatchMapping("/update-address")
    @Operation(summary = "Update User address", description = "Updating user's address")
    public ResponseEntity<ProfileResponse> updateAddress(@RequestBody AddressRequest a) {
        ProfileResponse updatedUser = service.updateAddress(a);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PatchMapping("/update-phone")
    @Operation(summary = "Update User's Phone No", description = "Updating user's Phone no")
    public ResponseEntity<ProfileResponse> updatePhone(@RequestBody PhoneRequest p) {
        ProfileResponse updatedUser = service.updatePhone(p);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    @Operation(summary = "Delete User", description = "Deleting the User's Credentials and remove the user")
    public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
        if (service.deleteUser(id)) {
            return ResponseEntity.ok("Deletion process Completed Successfully..");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
