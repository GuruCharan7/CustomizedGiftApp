package com.example.gift.service;

import com.example.gift.dto.request.AddressRequest;
import com.example.gift.dto.request.PhoneRequest;
import com.example.gift.dto.response.ProfileResponse;

public interface UserService {

    public ProfileResponse getUser(long id);

    public ProfileResponse updateAddress(AddressRequest a);
    
    public ProfileResponse updatePhone(PhoneRequest p);

    public boolean deleteUser(long id);
}
