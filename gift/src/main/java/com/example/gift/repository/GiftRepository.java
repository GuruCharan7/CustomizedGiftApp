package com.example.gift.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gift.model.Gift;

public interface GiftRepository extends JpaRepository<Gift, Long>{
    
}
