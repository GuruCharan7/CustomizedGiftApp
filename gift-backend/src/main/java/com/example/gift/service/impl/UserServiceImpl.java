package com.example.gift.service.impl;

import org.springframework.stereotype.Service;

import com.example.gift.dto.request.AddressRequest;
import com.example.gift.dto.request.PhoneRequest;
import com.example.gift.dto.response.ProfileResponse;
import com.example.gift.model.User;
import com.example.gift.repository.UserRepository;
import com.example.gift.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepo;

    public ProfileResponse getUser(long id) {

        User u = userRepo.findById(id).get();
        ProfileResponse p = new ProfileResponse(u.getId(), u.getName(), u.getPhoneNo(), u.getAddress());
        return p;
    }

    public ProfileResponse updateAddress(AddressRequest a) {
        User u = userRepo.findById(a.getId()).get();
        u.setAddress(a.getAddress());
        userRepo.save(u);
        ProfileResponse p = new ProfileResponse(u.getId(), u.getName(), u.getPhoneNo(), u.getAddress());
        return p;
    }

    public ProfileResponse updatePhone(PhoneRequest p) {
        User u = userRepo.findById(p.getId()).get();
        u.setPhoneNo(p.getPhoneNo());
        userRepo.save(u);
        ProfileResponse p1 = new ProfileResponse(u.getId(), u.getName(), u.getPhoneNo(), u.getAddress());
        return p1;
    }

    public boolean deleteUser(long id) {
        User u = userRepo.findById(id).get();
        if (u.getId() != id)
            return false;

        userRepo.deleteById(id);
        return true;
    }
}
