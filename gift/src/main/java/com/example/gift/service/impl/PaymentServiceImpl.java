package com.example.gift.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.gift.dto.request.PaymentRequest;
import com.example.gift.model.Payment;
import com.example.gift.model.User;
import com.example.gift.repository.PaymentRepository;
import com.example.gift.repository.UserRepository;
import com.example.gift.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService{

    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;

    public String addPayment(PaymentRequest p){

        User user = userRepository.findById(p.getUser_id()).get();

        if(user == null)
            return "User not found";

        Payment temp = Payment.builder()
                            .date(new Date())
                            .paid(p.getPaid())
                            .status(p.getStatus())
                            .modeOfPayment(p.getModeOfPayment())
                            .uid(user)
                            .build();

        paymentRepository.save(temp);
        
        return "Added Successfully";
    }
    
    public List<Payment> getAllPayments(){

        return paymentRepository.findAll();
    }
}
