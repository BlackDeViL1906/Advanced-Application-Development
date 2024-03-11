package com.recharge.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.recharge.demo.model.RechargePlans;
import java.util.List;


@Repository
public interface RechargePlansRepository extends JpaRepository<RechargePlans, Long> {
 List<RechargePlans> findByServiceprovider(String serviceprovider);
 List<RechargePlans> findByServiceproviderAndPlanType(String serviceProvider, String planType);

}