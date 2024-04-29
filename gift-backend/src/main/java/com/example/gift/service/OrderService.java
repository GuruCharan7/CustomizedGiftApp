package com.example.gift.service;

import java.util.List;

import com.example.gift.dto.request.OrderRequest;
import com.example.gift.dto.response.OrderResponse;

public interface OrderService {

    public String addOrder(OrderRequest o);

    public List<OrderResponse> getOrder();

    public OrderResponse getOrderByUser(long id);

    public String delOrder(long id);

    public OrderResponse updateDelivery(long id);
    
}
