package com.example.gift.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gift.model.Token;

public interface TokenRepository extends JpaRepository<Token, String>{
    List<Token> findAllByUser_IdAndRevokedFalseAndExpiredFalse(Long id);

    Optional<Token> findByToken(String token);
}
