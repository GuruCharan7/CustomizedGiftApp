package com.example.gift.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gift.dto.request.OrderRequest;
import com.example.gift.dto.response.OrderResponse;
import com.example.gift.service.OrderService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/order")
@RequiredArgsConstructor
@Tag(name = "Order Controller", description = "It's used to describe and authorize the Order and its details.")
public class OrderController {
    
    @Autowired
    OrderService service;

   @PostMapping("/add")
    @Operation(summary = "Add Order", description = "Placing the Order")
    public ResponseEntity<String> addOrder(@RequestBody OrderRequest o) {
        String result = service.addOrder(o);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/get")
    @Operation(summary = "Get Orders", description = "Getting all the Orders")
    public ResponseEntity<List<OrderResponse>> getOrder() {
        List<OrderResponse> orders = service.getOrder();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/get/{id}")
    @Operation(summary = "Get Orders", description = "Getting all the Orders By User ID")
    public ResponseEntity<OrderResponse> getOrderByUser(@PathVariable("id") long id) {
        OrderResponse order = service.getOrderByUser(id);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/put/{id}")
    @Operation(summary = "Update Orders", description = "Updating the delivery status of the order")
    public OrderResponse updateDelivery(@PathVariable("id") long id){

        return service.updateDelivery(id);
    }

    @DeleteMapping("/delete/{id}")
    @Operation(summary = "Delete Order", description = "Deleting the Order")
    public ResponseEntity<String> delOrder(@PathVariable("id") long id) {
        String result = service.delOrder(id);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
