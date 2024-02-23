import React from "react";
import "../assets/css/Prepaid.css";
import jioIcon from "../assets/images/jio_icon.png";
import airtelIcon from "../assets/images/airtel_logo.png";
import vfIcon from "../assets/images/vodafone-logo.webp";
import bsnlIcon from "../assets/images/bsnl.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Sidebar from "../components/Sidebar";

const PrepaidPage = () => {
  const plansData = [
    {
      rupees: 100,
      validity: "30 days",
      data: "2 GB",
      subscriptions: ["YouTube", "Netflix", "Disney+"],
    },
    {
      rupees: 200,
      validity: "45 days",
      data: "5 GB",
      subscriptions: ["Prime Video", "Disney+"],
    },
    {
      rupees: 200,
      validity: "45 days",
      data: "5 GB",
      subscriptions: ["Prime Video", "Disney+"],
    },
    {
      rupees: 200,
      validity: "45 days",
      data: "5 GB",
      subscriptions: ["Prime Video", "Disney+"],
    },
    {
      rupees: 200,
      validity: "45 days",
      data: "5 GB",
      subscriptions: ["Prime Video", "Disney+"],
    },
  ];

  return (
    <div className="prepaid-plan-container">
      <Sidebar />
      <div style={{ paddingLeft: "4%", paddingTop: "7%" }}>
        <h1 style={{ fontFamily: "Arial Black" }}>Prepaid Plans</h1>
        <h1
          style={{
            fontFamily: "Arial Black",
            fontSize: "25px",
            marginTop: "3%",
            marginBottom: "2%",
          }}
        >
          Jio Prepaid Plans
        </h1>
      </div>
      <Splide options={{ perPage: 4 }} className="custom-splide">
        {plansData.map((plan, index) => (
          <SplideSlide key={index}>
            <div className="prepaid-plan-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>₹{plan.rupees}</h2>
                <img src={jioIcon} height="40px" width="65x" alt="Jio Icon" />
              </div>
              <p>Validity: {plan.validity}</p>
              <p>Data: {plan.data}</p>
              <p>Subscriptions: {plan.subscriptions.join(", ")}</p>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginTop: "auto",
                }}
              >
                <button
                  style={{
                    borderRadius: "20px",
                    width: "180px",
                    height: "40px",
                    backgroundColor: "#002080",
                    border: "none",
                    color: "white",
                  }}
                >
                  Recharge
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <h1
        style={{
          fontFamily: "Arial Black",
          fontSize: "25px",
          marginTop: "1%",
          marginBottom: "2%",
          marginLeft: "4%",
        }}
      >
        Airtel Prepaid Plans
      </h1>
      <Splide options={{ perPage: 4 }} className="custom-splide">
        {plansData.map((plan, index) => (
          <SplideSlide key={index}>
            <div className="prepaid-plan-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>₹{plan.rupees}</h2>
                <img
                  src={airtelIcon}
                  height="40px"
                  width="70x"
                  alt="Jio Icon"
                />
              </div>
              <p>Validity: {plan.validity}</p>
              <p>Data: {plan.data}</p>
              <p>Subscriptions: {plan.subscriptions.join(", ")}</p>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginTop: "auto",
                }}
              >
                <button
                  style={{
                    borderRadius: "20px",
                    width: "180px",
                    height: "40px",
                    backgroundColor: "#DF0C0C",
                    border: "none",
                    color: "white",
                  }}
                >
                  Recharge
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <h1
        style={{
          fontFamily: "Arial Black",
          fontSize: "25px",
          marginTop: "1%",
          marginBottom: "2%",
          marginLeft: "4%",
        }}
      >
        Vodafone Prepaid Plans
      </h1>
      <Splide options={{ perPage: 4 }} className="custom-splide">
        {plansData.map((plan, index) => (
          <SplideSlide key={index}>
            <div className="prepaid-plan-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>₹{plan.rupees}</h2>
                <img
                  src={vfIcon}
                  height="60px"
                  width="60px"
                  alt="Vodafone Icon"
                />
              </div>
              <p>Validity: {plan.validity}</p>
              <p>Data: {plan.data}</p>
              <p>Subscriptions: {plan.subscriptions.join(", ")}</p>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginTop: "auto",
                }}
              >
                <button
                  style={{
                    borderRadius: "20px",
                    width: "180px",
                    height: "40px",
                    backgroundColor: "white",
                    border: "none",
                    color: "#DF0C0C",
                  }}
                >
                  Recharge
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <h1
        style={{
          fontFamily: "Arial Black",
          fontSize: "25px",
          marginTop: "1%",
          marginBottom: "2%",
          marginLeft: "4%",
        }}
      >
        BSNL Prepaid Plans
      </h1>
      <Splide options={{ perPage: 4 }} className="custom-splide">
        {plansData.map((plan, index) => (
          <SplideSlide key={index}>
            <div className="prepaid-plan-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>₹{plan.rupees}</h2>
                <img
                  src={bsnlIcon}
                  height="50px"
                  width="50px"
                  alt="Vodafone Icon"
                />
              </div>
              <p>Validity: {plan.validity}</p>
              <p>Data: {plan.data}</p>
              <p>Subscriptions: {plan.subscriptions.join(", ")}</p>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginTop: "auto",
                }}
              >
                <button
                  style={{
                    borderRadius: "20px",
                    width: "180px",
                    height: "40px",
                    background: "linear-gradient(to right, #DF0C0C, #002080)",
                    // backgroundColor: "#DF0C0C",
                    border: "none",
                    color: "white",
                  }}
                >
                  Recharge
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default PrepaidPage;
