package com.example.gift.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.gift.dto.request.OrderRequest;
import com.example.gift.dto.response.OrderResponse;
import com.example.gift.model.Gift;
import com.example.gift.model.Orders;
import com.example.gift.model.User;
import com.example.gift.repository.GiftRepository;
import com.example.gift.repository.OrderRepository;
import com.example.gift.repository.UserRepository;
import com.example.gift.service.OrderService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{
    
    private final OrderRepository orderRepo;

    private final GiftRepository giftRepository;

    private final UserRepository userRepository;

    public String addOrder(OrderRequest o){

        User user = userRepository.findById(o.getUid()).get();

        if(user == null)
            return "User not found";
            
            Gift gift = giftRepository.findById(o.getGiftId()).get();
            
        if(gift == null)
            return "Gift not found";
            
        Orders temp = Orders.builder()
                        .price(o.getPrice())
                        .quantity(o.getQuantity())
                        .uid(user)
                        .giftId(gift)
                        .orderDate(new Date())
                        .build();
        
        Orders orders = orderRepo.save(temp);

        if(orders != null)
            return "Order added successfull";
        
        return "Something went wrong!";
    }

    public List<OrderResponse> getOrder(){

        List<Orders> orders = orderRepo.findAll();
        List<OrderResponse> response = new ArrayList<>();
        for (Orders order : orders) {
            response.add(OrderResponse.builder()
                            .orderId(order.getOrderId())
                            .giftName(order.getGiftId().getGiftName())
                            .userName(order.getUid().getUsername())
                            .price(order.getPrice())
                            .quantity(order.getQuantity())
                            .isDelivered(order.isDelivered())
                            .build());
        }

        return response;
    }

    public OrderResponse getOrderByUser(long id){

        List<Orders> orders = orderRepo.findAll();
        OrderResponse response = null;
        for (Orders order : orders) {
            if(order.getUid().getId() == id){
                response = OrderResponse.builder()
                                        .orderId(order.getOrderId())
                                        .giftName(order.getGiftId().getGiftName())
                                        .userName(order.getUid().getName())
                                        .price(order.getPrice())
                                        .quantity(order.getQuantity())
                                        .isDelivered(order.isDelivered())
                                        .build();

                break;
            }
        }

        return response;
    }

    public String delOrder(long id){

        orderRepo.deleteById(id);
        return "Deleted Successfully";
    }

    public OrderResponse updateDelivery(long id){

        Orders o = orderRepo.findById(id).get();
        o.setDelivered(!o.isDelivered());
        orderRepo.save(o);

        return OrderResponse.builder()
                        .orderId(o.getOrderId())
                        .userName(o.getUid().getName())
                        .price(o.getPrice())
                        .quantity(o.getQuantity())
                        .isDelivered(o.isDelivered())
                        .giftName(o.getGiftId().getGiftName())
                        .build();
    }
}
