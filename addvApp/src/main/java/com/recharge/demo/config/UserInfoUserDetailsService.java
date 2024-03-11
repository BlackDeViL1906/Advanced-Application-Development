package com.recharge.demo.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.recharge.demo.model.LoginModel;
import com.recharge.demo.repository.LoginRepository;

@Component
public class UserInfoUserDetailsService implements UserDetailsService {
    @Autowired
    private LoginRepository repository;

    @Override
    public UserDetails loadUserByUsername(String usermail) throws UsernameNotFoundException {
        Optional<LoginModel> loginInfo = repository.findByEmailid(usermail);
        return loginInfo.map(UserInfoUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + usermail));

    }
}
