import React, { useState, useEffect } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { FaCircleArrowLeft } from "react-icons/fa6";
import jioIcon from "../assets/images/jio_icon.png";

import { Link } from "react-router-dom";
import axios from "axios";

const JioPrepaid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jioPlans, setJioPlans] = useState([]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredPlans = jioPlans.filter((plan) =>
      plan.plan_price.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setJioPlans(filteredPlans);
  };

  const fetchJioPlans = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const value1 = "Jio";
      const response = await axios.get(
        `http://localhost:8080/api/plans/${value1}`,
        config
      );
      setJioPlans(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJioPlans();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", marginTop: "1%" }}>
        <Link to="/adminprepaidplans">
          <FaCircleArrowLeft
            style={{
              color: "#545454",
              paddingLeft: "5px",
              fontSize: "28px",
              marginTop: "15px",
            }}
          />
        </Link>
        <h1
          style={{
            fontFamily: "Copperplate Gothic Bold",
            fontSize: "50px",
            marginLeft: "1%",
          }}
        >
          Jio Plans
        </h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex"
          style={{
            width: "450px",
            marginTop: "2%",
            marginLeft: "45%",
            height: "35px",
          }}
        >
          <MDBInput
            type="text"
            value={searchQuery}
            label="Search"
            onChange={handleChange}
          />
          <MDBBtn
            type="submit"
            color="primary"
            style={{
              marginLeft: "5%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <p style={{ marginRight: "15px" }}>Search</p>
          </MDBBtn>
        </form>
      </div>
      <MDBRow className="row-cols-1 row-cols-md-4 g-4">
        {jioPlans.map((plan, index) => (
          <MDBCol key={index}>
            <div style={{ marginTop: "7%", marginLeft: "7%" }}>
              <div
                className="prepaid-plan-card"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2>₹{plan.plan_price}</h2>
                  <img src={jioIcon} height="40px" width="65x" alt="Jio Icon" />
                </div>
                <p>Validity: {plan.plan_validity}</p>
                <p>Data: {plan.plan_data}</p>
                <p>Subscriptions: {plan.plan_subscriptions}</p>
                <div
                  style={{
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
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
};
export default JioPrepaid;
