package com.recharge.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RechargePlans {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long plan_code;
    private String serviceprovider;
    private String plan_price;
    private String plan_validity;
    private String plan_data;
    private String plan_subscriptions;
    private Long plan_subs_count;
}
