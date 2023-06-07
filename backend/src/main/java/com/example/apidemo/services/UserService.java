package com.example.apidemo.services;

import com.example.apidemo.models.User;
import com.example.apidemo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        user.setCheckingAccount(100);
        user.setSavingsAccount(1000);
        user.setCreditCard(0);
        return userRepository.save(user);
    }
    public User getUserByEmail(String email) { return userRepository.findByEmail(email); }
}