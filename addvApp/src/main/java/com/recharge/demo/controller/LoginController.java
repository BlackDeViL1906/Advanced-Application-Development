package com.recharge.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.recharge.demo.dto.AuthRequest;
import com.recharge.demo.model.LoginModel;
import com.recharge.demo.service.JwtService;
import com.recharge.demo.service.LoginService;

@RestController
@RequestMapping("/api/recharge")
@CrossOrigin(origins="http://localhost:5173/",allowedHeaders = "*")

public class LoginController {
    @Autowired
    private LoginService loginService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/getAll")
    public List<LoginModel> getAllLogins() {
        return loginService.getAllLogins();
    }
    

    @GetMapping("/{id}")
    public LoginModel getLoginById(@PathVariable Long id) {
        return loginService.getLoginById(id)
                .orElseThrow(() -> new RuntimeException("Login not found with id: " + id));
    }

    @PostMapping("/addUser")
    public LoginModel saveLogin(@RequestBody LoginModel login) {
        return loginService.saveLogin(login);
    }

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getEmail());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }

    @PutMapping("/{id}")
public LoginModel updateLogin(@PathVariable Long id, @RequestBody LoginModel updatedLogin) {
    return loginService.getLoginById(id)
            .map(login -> {
                login.setEmailid(updatedLogin.getEmailid());
                login.setPassword(passwordEncoder.encode(updatedLogin.getPassword()));
                login.setCurrPlan(updatedLogin.getCurrPlan());
                login.setRole(updatedLogin.getRole());
                login.setUsername(updatedLogin.getUsername());
                // Update other fields as needed
                return loginService.saveLogin(login);
            })
            .orElseThrow(() -> new RuntimeException("Login not found with id: " + id));
}


    @DeleteMapping("/{id}")
    public void deleteLogin(@PathVariable Long id) {
        loginService.deleteLogin(id);
    }
}
