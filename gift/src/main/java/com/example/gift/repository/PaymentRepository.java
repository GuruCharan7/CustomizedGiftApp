package com.example.gift.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gift.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{
    
}
