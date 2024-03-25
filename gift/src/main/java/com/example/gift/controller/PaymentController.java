package com.example.gift.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gift.dto.request.PaymentRequest;
import com.example.gift.model.Payment;
import com.example.gift.service.PaymentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/payment")
@RequiredArgsConstructor
@Tag(name = "Payment Controller", description = "It's used to store and analyze the payment data.")
public class PaymentController {

    @Autowired
    PaymentService service;

   @PostMapping("/add")
    @Operation(summary = "Add Payments", description = "Create the records in Payment Table.")
    public ResponseEntity<String> addPayment(@RequestBody PaymentRequest p) {
        String result = service.addPayment(p);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/get")
    @Operation(summary = "Get Payments", description = "Display all the records in Payment Table.")
    public ResponseEntity<List<Payment>> getAllPayments() {
        List<Payment> payments = service.getAllPayments();
        return ResponseEntity.ok(payments);
    }
    
}
