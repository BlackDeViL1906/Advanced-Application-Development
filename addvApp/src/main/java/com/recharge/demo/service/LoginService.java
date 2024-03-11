package com.recharge.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.recharge.demo.repository.LoginRepository;
import com.recharge.demo.model.LoginModel;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

        @Autowired
    private PasswordEncoder passwordEncoder;


    public List<LoginModel> getAllLogins() {
        return loginRepository.findAll();
    }

    public Optional<LoginModel> getLoginById(Long id) {
        return loginRepository.findById(id);
    }

    public LoginModel saveLogin(LoginModel login) {
        login.setPassword(passwordEncoder.encode(login.getPassword()));
        return loginRepository.save(login);
    }

    public void deleteLogin(Long id) {
        loginRepository.deleteById(id);
    }
}
