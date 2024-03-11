package com.recharge.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RechargePlansDTO {
    private String serviceProvider;
    private String planPrice;
    private String planValidity;
    private String planData;
    private String planSubscriptions;
    private String planType;
}