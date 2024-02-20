import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <div className="header">
                  <h1>ReChargeZone Plus</h1>
                  <p>
                    Seamless Mobile Top-Ups with Advanced Java Full-Stack on AWS
                    Cloud
                  </p>
                </div>
                <div className="content">
                  <p>
                    Welcome to ReChargeZone Plus! Top up your mobile seamlessly
                    with our advanced Java full-stack solution hosted on the AWS
                    Cloud.
                  </p>
                  <p>Get started by signing up or log in to your account.</p>
                  <div className="buttons">
                    <Link to="/signup" className="btn btn-primary">
                      Sign Up
                    </Link>
                    <Link to="/login" className="btn btn-secondary">
                      Log In
                    </Link>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer">
        <p>© 2024 ReChargeZone Plus. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
