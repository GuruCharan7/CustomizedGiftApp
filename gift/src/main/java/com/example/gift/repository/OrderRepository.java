package com.example.gift.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gift.model.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long>{
    
    
}
