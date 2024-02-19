import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../assets/css/Login.css";
import { useNavigate, Link } from "react-router-dom";
import loginbcg from "../assets/images/mobile-topup1.jpg";
import logbg from "../assets/images/logni-bg.jpg";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    nav("/home");
  };

  const handleGoogleLogin = (credentialResponse) => {
    console.log("Google Login Response:", credentialResponse);
    nav("/home");
  };

  return (
    <div className="log-container">
      <MDBContainer className="my-5" style={{ backgroundImage: logbg }}>
        <MDBRow className="justify-content-center">
          <MDBCol>
            <div
              className="d-flex align-items-center "
              style={{ marginTop: "5%" }}
            >
              <img
                src={loginbcg}
                alt="Image"
                style={{ width: "700px", height: "500px" }}
              />

              <MDBCard
                style={{ width: "30%", height: "450px", marginLeft: "10%" }}
              >
                <MDBCardBody>
                  <h2 style={{ fontFamily: "Noto Serif Vithkuqi" }}>Login</h2>
                  <form>
                    <MDBInput
                      label="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        marginTop: "15%",
                        fontFamily: "Noto Serif Vithkuqi",
                      }}
                    />
                    <MDBInput
                      type="password"
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        marginTop: "5%",
                        fontFamily: "Noto Serif Vithkuqi",
                      }}
                    />
                    <div className="text-center" style={{ marginTop: "5%" }}>
                      <MDBBtn
                        color="primary"
                        onClick={handleLogin}
                        className="log-button"
                      >
                        Login
                      </MDBBtn>
                    </div>
                    <div className="justify-content-center align-items-center">
                      <div
                        className="text-center "
                        style={{ marginTop: "8%", marginLeft: "20%" }}
                      >
                        <GoogleLogin
                          onSuccess={handleGoogleLogin}
                          clientId="638357412327-rckmgh9usb51m1r3lvdkm0vabogbfjip.apps.googleusercontent.com"
                          buttonText="Sign In with Google"
                        />
                      </div>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
