import React from "react";
import "../assets/css/Prepaid.css";
import jioIcon from "../assets/images/jio_icon.png";
import airtelIcon from "../assets/images/airtel_logo.png";
import vfIcon from "../assets/images/vodafone-logo.webp";
import bsnlIcon from "../assets/images/bsnl.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AdminSidebar from "./AdminSidebar";
import { MDBBtn } from "mdb-react-ui-kit";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const AdminPrepaidPage = () => {
  const [jioPlans, setJioPlans] = useState([]);
  const [airtelPlans, setAirtelPlans] = useState([]);
  const [vodafonePlans, setVodafonePlans] = useState([]);
  const [bsnlPlans, setBsnlPlans] = useState([]);

  const fetchJioPlans = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const value1 = "Jio";
      const value2 = "Prepaid";
      const response = await axios.get(
        `http://localhost:8080/api/plans/${value1}/${value2}`,
        config
      );
      setJioPlans(response.data);
      console.log(jioPlans);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAirtelPlans = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const value1 = "Airtel";
      const value2 = "Prepaid";
      const response = await axios.get(
        `http://localhost:8080/api/plans/${value1}/${value2}`,
        config
      );
      setAirtelPlans(response.data);
      console.log(airtelPlans);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchVodafonePlans = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const value1 = "Vodafone";
      const value2 = "Prepaid";
      const response = await axios.get(
        `http://localhost:8080/api/plans/${value1}/${value2}`,
        config
      );
      setVodafonePlans(response.data);
      console.log(vodafonePlans);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchBSNLPlans = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const value1 = "BSNL";
      const value2 = "Prepaid";
      const response = await axios.get(
        `http://localhost:8080/api/plans/${value1}/${value2}`,
        config
      );
      setBsnlPlans(response.data);
      console.log(bsnlPlans);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchJioPlans();
    fetchAirtelPlans();
    fetchVodafonePlans();
    fetchBSNLPlans();
  }, []);

  const handleDelete = async (planCode) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:8080/api/plans/${planCode}`, config);
      fetchJioPlans();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="prepaid-plan-container">
      <AdminSidebar />
      <div style={{ paddingTop: "7%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingLeft: "2%",
            }}
          >
            <Link to="/home">
              <FaCircleArrowLeft
                style={{
                  color: "#545454",
                  paddingLeft: "3px",
                  fontSize: "28px",
                  marginBottom: "6px",
                }}
              />
            </Link>
            <h1
              style={{
                fontFamily: "Copperplate Gothic Bold",
                fontSize: "50px",
              }}
            >
              Prepaid Plans
            </h1>
          </div>
          <div>
            <Link to="/addplans">
              <MDBBtn style={{ marginRight: "55px" }}>
                <IoIosAdd
                  style={{
                    fontSize: "20px",
                    marginRight: "2px",
                    marginBottom: "2px",
                  }}
                />
                Add Plans
              </MDBBtn>
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1
            style={{
              fontFamily: "Arial Black",
              fontSize: "25px",
              marginTop: "3%",
              marginBottom: "2%",
              paddingLeft: "4%",
            }}
          >
            Jio Prepaid Plans
          </h1>
          <h2
            style={{
              fontFamily: "Latha",
              fontSize: "20px",
              marginTop: "3%",
              marginBottom: "2%",
              marginRight: "5%",
              color: "#002080",
              fontWeight: "bold",
            }}
          >
            See All
          </h2>
        </div>
      </div>
      <Splide options={{ perPage: 4 }} className="custom-splide">
        {jioPlans.map((plan, index) => (
          <SplideSlide key={index}>
            <div className="prepaid-plan-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>₹{plan.plan_price}</h2>
                <img src={jioIcon} height="40px" width="65x" alt="Jio Icon" />
              </div>
              <p>Validity: {plan.plan_validity}</p>{" "}
              <p>Data: {plan.plan_data}</p>
              <p>Subscriptions: {plan.plan_subscriptions}</p>{" "}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  marginTop: "auto",
                }}
              >
                <Link
                  to={{
                    pathname: "/editplan",
                    state: { planDetails: plan },
                    search: `?plan_code=${plan.plan_code}`,
                  }}
                >
                  <MDBBtn>
                    <div style={{ justifyContent: "space-evenly" }}>
                      <MdEdit
                        style={{
                          fontSize: "20px",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "5%",
                        }}
                      />
                      Edit
                    </div>
                  </MDBBtn>
                </Link>
                <MDBBtn
                  color="danger"
                  onClick={() => handleDelete(plan.plan_code)}
                >
                  <MdDelete
                    style={{
                      fontSize: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "5%",
                    }}
                  />
                  Delete
                </MDBBtn>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1
          style={{
            fontFamily: "Arial Black",
            fontSize: "25px",
            marginTop: "2.5%",
            marginBottom: "0%",
            marginLeft: "4%",
          }}
        >
          Airtel Prepaid Plans
        </h1>
        <h2
          style={{
            fontFamily: "Latha",
            fontSize: "20px",
            marginTop: "3%",
            marginBottom: "2%",
            marginRight: "5%",
            color: "#002080",
            fontWeight: "bold",
          }}
        >
          See All
        </h2>
      </div>
      <Splide options={{ perPage: 4 }} className="custom-splide">
        {airtelPlans.map((plan, index) => (
          <SplideSlide key={index}>
            <div className="prepaid-plan-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>₹{plan.plan_price}</h2>
                <img
                  src={airtelIcon}
                  height="40px"
                  width="70x"
                  alt="Jio Icon"
                />
              </div>
              <p>Validity: {plan.plan_validity}</p>
              <p>Data: {plan.plan_data}</p>
              <p>Subscriptions: {plan.plan_subscriptions}</p>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  marginTop: "auto",
                }}
              >
                <MDBBtn>
                  <div style={{ justifyContent: "space-evenly" }}>
                    <MdEdit
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "5%",
                      }}
                    />
                    Edit
                  </div>
                </MDBBtn>
                <MDBBtn
                  color="danger"
                  onClick={() => handleDelete(plan.plan_code)}
                >
                  <MdDelete
                    style={{
                      fontSize: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "5%",
                    }}
                  />
                  Delete
                </MDBBtn>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1
          style={{
            fontFamily: "Arial Black",
            fontSize: "25px",
            marginTop: "2.5%",
            marginBottom: "2%",
            marginLeft: "4%",
          }}
        >
          Vodafone Prepaid Plans
        </h1>
        <h2
          style={{
            fontFamily: "Latha",
            fontSize: "20px",
            marginTop: "3%",
            marginBottom: "2%",
            marginRight: "5%",
            color: "#002080",
            fontWeight: "bold",
          }}
        >
          See All
        </h2>
      </div>
      <Splide options={{ perPage: 4 }} className="custom-splide">
        {vodafonePlans.map((plan, index) => (
          <SplideSlide key={index}>
            <div className="prepaid-plan-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>₹{plan.plan_price}</h2>
                <img
                  src={vfIcon}
                  height="60px"
                  width="60px"
                  alt="Vodafone Icon"
                />
              </div>
              <p>Validity: {plan.plan_validity}</p>{" "}
              <p>Data: {plan.plan_data}</p>
              <p>Subscriptions: {plan.plan_subscriptions}</p>{" "}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  marginTop: "auto",
                }}
              >
                <MDBBtn>
                  <div style={{ justifyContent: "space-evenly" }}>
                    <MdEdit
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "5%",
                      }}
                    />
                    Edit
                  </div>
                </MDBBtn>
                <MDBBtn
                  color="danger"
                  onClick={() => handleDelete(plan.plan_code)}
                >
                  <MdDelete
                    style={{
                      fontSize: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "5%",
                    }}
                  />
                  Delete
                </MDBBtn>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1
          style={{
            fontFamily: "Arial Black",
            fontSize: "25px",
            marginTop: "2.5%",
            marginBottom: "2%",
            marginLeft: "4%",
          }}
        >
          BSNL Prepaid Plans
        </h1>
        <h2
          style={{
            fontFamily: "Latha",
            fontSize: "20px",
            marginTop: "3%",
            marginBottom: "2%",
            marginRight: "5%",
            color: "#002080",
            fontWeight: "bold",
          }}
        >
          See All
        </h2>
      </div>
      <Splide options={{ perPage: 4 }} className="custom-splide">
        {bsnlPlans.map((plan, index) => (
          <SplideSlide key={index}>
            <div className="prepaid-plan-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>₹{plan.plan_price}</h2>
                <img
                  src={bsnlIcon}
                  height="50px"
                  width="50px"
                  alt="Vodafone Icon"
                />
              </div>
              <p>Validity: {plan.plan_validity}</p>{" "}
              <p>Data: {plan.plan_data}</p>
              <p>Subscriptions: {plan.plan_subscriptions}</p>{" "}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  marginTop: "auto",
                }}
              >
                <MDBBtn>
                  <div style={{ justifyContent: "space-evenly" }}>
                    <MdEdit
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "5%",
                      }}
                    />
                    Edit
                  </div>
                </MDBBtn>
                <MDBBtn
                  color="danger"
                  onClick={() => handleDelete(plan.plan_code)}
                >
                  <MdDelete
                    style={{
                      fontSize: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "5%",
                    }}
                  />
                  Delete
                </MDBBtn>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default AdminPrepaidPage;
