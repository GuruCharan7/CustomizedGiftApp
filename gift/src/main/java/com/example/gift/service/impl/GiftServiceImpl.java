package com.example.gift.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.gift.model.Gift;
import com.example.gift.repository.GiftRepository;
import com.example.gift.service.GiftService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GiftServiceImpl  implements GiftService {
    
    
    private final GiftRepository giftRepo;

    @Override
    public String addGift(Gift g){
        
        giftRepo.save(g);
        return "Gift added Successfully...";
    }
    
    @Override
    public List<Gift> getGifts(){
        
        return giftRepo.findAll();
    }
    
    @Override
    public Gift getGift(long id){
        
        return giftRepo.findById(id).get();
    }
    
    @Override
    public String updateGift(Gift g){
        
        Gift temp = getGift(g.getGiftId());
        temp.setGiftName(g.getGiftName());
        temp.setImageUrl(g.getImageUrl());
        temp.setPrice(g.getPrice());
        temp.setTheme(g.getTheme());
        
        return "Updated Successfully...";
        
    }
    
    @Override
    public String delGift(long id){
        
        giftRepo.deleteById(id);
        return "Deleted Successfully...";
    }
}
