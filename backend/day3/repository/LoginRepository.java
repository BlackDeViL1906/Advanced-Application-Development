package com.recharge.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.recharge.demo.model.LoginModel;
import java.util.Optional;



public interface LoginRepository extends JpaRepository<LoginModel, Long> {
    Optional<LoginModel> findByEmailid(String emailid);
}
