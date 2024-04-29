package com.example.gift.service;

import java.util.List;

import com.example.gift.model.Gift;

public interface GiftService {

    public String addGift(Gift g);

    public List<Gift> getGifts();


    public Gift getGift(long id);
    

    public String updateGift(Gift g);


    public String delGift(long id);

}
