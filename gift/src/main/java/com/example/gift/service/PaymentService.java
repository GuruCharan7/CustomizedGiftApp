package com.example.gift.service;

import java.util.List;

import com.example.gift.dto.request.PaymentRequest;
import com.example.gift.model.Payment;

public interface PaymentService {
    
    public String addPayment(PaymentRequest p);

    public List<Payment> getAllPayments();
}
