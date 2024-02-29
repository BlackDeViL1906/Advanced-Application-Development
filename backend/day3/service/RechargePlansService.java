package com.recharge.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recharge.demo.model.RechargePlans;
import com.recharge.demo.repository.RechargePlansRepository;

@Service
public class RechargePlansService {

    @Autowired
    private RechargePlansRepository rechargePlansRepository;

    public List<RechargePlans> getAllRechargePlans() {
        return rechargePlansRepository.findAll();
    }

    public List<RechargePlans> getRechargePlanByServiceProvider(String serviceProvider) {
        return rechargePlansRepository.findByServiceprovider(serviceProvider);
    }

    public RechargePlans createRechargePlan(RechargePlans rechargePlan) {
        return rechargePlansRepository.save(rechargePlan);
    }

    public RechargePlans updateRechargePlan(Long id, RechargePlans rechargePlanDetails) {
        RechargePlans existingRechargePlan = rechargePlansRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recharge plan not found with plain code: " + id));

        existingRechargePlan.setPlan_price(rechargePlanDetails.getPlan_price());
        existingRechargePlan.setPlan_validity(rechargePlanDetails.getPlan_validity());
        existingRechargePlan.setPlan_data(rechargePlanDetails.getPlan_data());
        existingRechargePlan.setPlan_subscriptions(rechargePlanDetails.getPlan_subscriptions());

        return rechargePlansRepository.save(existingRechargePlan);
    }

    public void deleteRechargePlan(Long pid) {
        RechargePlans existingRechargePlan = rechargePlansRepository.findById(pid)
                .orElseThrow(() -> new RuntimeException("Recharge plan not found with service provider: " + pid));
        rechargePlansRepository.delete(existingRechargePlan);
    }
}
