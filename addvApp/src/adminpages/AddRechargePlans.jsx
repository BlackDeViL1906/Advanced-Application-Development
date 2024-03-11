import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import "../assets/css/RechargePlanForm.css";

const RechargePlanForm = () => {
  const [serviceProvider, setServiceProvider] = useState("");
  const [planData, setPlanData] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [planSubscription, setPlanSubscription] = useState("");
  const [planValidity, setPlanValidity] = useState("");
  const [planType, setPlanType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:8080/api/plans",
        {
          planData: planData,
          planPrice: planPrice,
          planSubscriptions: planSubscription,
          planValidity: planValidity,
          serviceProvider: serviceProvider,
          planType: planType,
        },
        config
      );
      console.log("Response from server:", response.data);
      console.log(serviceProvider);
      console.log(planData);
      console.log(planPrice);
      console.log(planSubscription);
      console.log(planValidity);
      setServiceProvider("");
      setPlanData("");
      setPlanPrice("");
      setPlanSubscription("");
      setPlanValidity("");
      setPlanType("");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <MDBContainer>
      <MDBRow style={{ justifyContent: "center", marginTop: "5%" }}>
        <MDBCol md="6">
          <form onSubmit={handleSubmit} className="custom-form">
            <h1>Add Plans</h1>
            <MDBInput
              className="recharge-plan-field"
              label="Service Provider"
              type="text"
              value={serviceProvider}
              onChange={(e) => setServiceProvider(e.target.value)}
              required
            />
            <MDBInput
              className="recharge-plan-field"
              label="Plan Data"
              type="text"
              value={planData}
              onChange={(e) => setPlanData(e.target.value)}
              required
            />
            <MDBInput
              className="recharge-plan-field"
              label="Plan Price"
              type="number"
              value={planPrice}
              onChange={(e) => setPlanPrice(e.target.value)}
              required
            />
            <MDBInput
              className="recharge-plan-field"
              label="Plan Subscription"
              type="text"
              value={planSubscription}
              onChange={(e) => setPlanSubscription(e.target.value)}
              required
            />
            <MDBInput
              className="recharge-plan-field"
              label="Plan Validity"
              type="text"
              value={planValidity}
              onChange={(e) => setPlanValidity(e.target.value)}
              required
            />
            <MDBInput
              className="recharge-plan-field"
              label="Plan Type"
              type="text"
              value={planType}
              onChange={(e) => setPlanType(e.target.value)}
              required
            />
            <div className="text-center mt-4">
              <MDBBtn type="submit" className="custom-button">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RechargePlanForm;
