package com.example.gift.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gift.model.Gift;
import com.example.gift.service.GiftService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/gift")
@RequiredArgsConstructor
@Tag(name = "Gift Controller", description = "It's used to describe and authorize the gift and its theme details.")
public class GiftController {

    @Autowired
    GiftService service;

    @PostMapping("/add")
    @Operation(summary = "Add Gift", description = "Creating a new Theme in Gifts")
    public ResponseEntity<String> addGift(@RequestBody Gift g){
        String result = service.addGift(g);
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @GetMapping("/get")
    @Operation(summary = "Get Gifts", description = "Display all the Gifts")
    public ResponseEntity<List<Gift>> getGifts(){
        List<Gift> gifts = service.getGifts();
        return ResponseEntity.ok(gifts);
    }

    @GetMapping("/get/{id}")
    @Operation(summary = "Get Gift by ID", description = "Display Gift by ID")
    public ResponseEntity<Gift> getGift(@PathVariable("id") long id){
        Gift gift = service.getGift(id);
        return ResponseEntity.ok(gift);
    }

    @PutMapping("/update-gift")
    @Operation(summary = "Updating gift", description = "Updating the gift record")
    public ResponseEntity<String> updateGift(@RequestBody Gift g){
        String result = service.updateGift(g);
        return ResponseEntity.ok(result);
    }

    // @DeleteMapping("/delete/{id}")
    // @Operation(summary = "Delete Gift by ID", description = "Delete Gift by ID")
    // public ResponseEntity<String> delGift(@PathVariable("id") long id){
    //     String result = service.delGift(id);
    //     return ResponseEntity.ok(result);
    // }
    
}
