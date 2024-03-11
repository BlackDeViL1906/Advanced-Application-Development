package com.recharge.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.recharge.demo.dto.RechargePlansDTO;
import com.recharge.demo.model.RechargePlans;
import com.recharge.demo.service.RechargePlansService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/plans")
@CrossOrigin(origins="http://localhost:5173/",allowedHeaders = "*")

public class RechargePlansController {

    @Autowired
    private RechargePlansService rechargePlansService;

    @GetMapping
    public List<RechargePlans> getAllRechargePlans() {
        return rechargePlansService.getAllRechargePlans();
    }

    @GetMapping("/{serviceProvider}")
    public List<RechargePlans> getRechargePlanByServiceProvider(@PathVariable String serviceProvider) {
        return rechargePlansService.getRechargePlanByServiceProvider(serviceProvider);
    }
    
    @GetMapping("/{serviceProvider}/{planType}")
    public List<RechargePlans> getRechargePlanByServiceProviderAndPlanType(
            @PathVariable String serviceProvider,
            @PathVariable String planType) {
        return rechargePlansService.getRechargePlanByServiceProviderAndPlanType(serviceProvider, planType);
    }

    @PostMapping
public ResponseEntity<RechargePlansDTO> createRechargePlan( @RequestBody RechargePlansDTO rechargePlansDTO) {
    RechargePlans rechargePlans = convertToEntity(rechargePlansDTO);
    RechargePlans savedRechargePlans = rechargePlansService.createRechargePlan(rechargePlans);
    RechargePlansDTO savedRechargePlansDTO = convertToDTO(savedRechargePlans);
    return new ResponseEntity<>(savedRechargePlansDTO, HttpStatus.CREATED);
}


    @PutMapping("/{plan_code}")
    public ResponseEntity<RechargePlans> updateRechargePlan(@PathVariable Long plan_code, @Valid @RequestBody RechargePlansDTO rechargePlansDTO) {
        try{
            RechargePlans rechargePlan=convertToEntity(rechargePlansDTO);
            return new ResponseEntity<>(rechargePlansService.updateRechargePlan(plan_code,rechargePlan),HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }
    
    @DeleteMapping("/{plan_code}")
    public ResponseEntity<Void> deleteRechargePlan(@PathVariable Long plan_code) {
        try{
            rechargePlansService.deleteRechargePlan(plan_code);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }

    private RechargePlansDTO convertToDTO(RechargePlans rechargePlans) {
        RechargePlansDTO dto = new RechargePlansDTO();
        dto.setServiceProvider(rechargePlans.getServiceprovider());
        dto.setPlanPrice(rechargePlans.getPlan_price());
        dto.setPlanValidity(rechargePlans.getPlan_validity());
        dto.setPlanData(rechargePlans.getPlan_data());
        dto.setPlanSubscriptions(rechargePlans.getPlan_subscriptions());
        return dto;
    }

    private RechargePlans convertToEntity(RechargePlansDTO rechargePlansDTO) {
        RechargePlans rechargePlans = new RechargePlans();
        rechargePlans.setServiceprovider(rechargePlansDTO.getServiceProvider());
        rechargePlans.setPlan_price(rechargePlansDTO.getPlanPrice());
        rechargePlans.setPlan_validity(rechargePlansDTO.getPlanValidity());
        rechargePlans.setPlan_data(rechargePlansDTO.getPlanData());
        rechargePlans.setPlan_subscriptions(rechargePlansDTO.getPlanSubscriptions());
        rechargePlans.setPlanType(rechargePlansDTO.getPlanType());
        return rechargePlans;
    }
}