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
import loginbcg from "../assets/images/cardbg.jpg";
import { GoogleLogin } from "@react-oauth/google";
import Lottie from "react-lottie";
import logAnimation from "../lotties/login-lottie.json";
import rzlogo from "../assets/images/logo.jpg";

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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="log-container">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol>
            <MDBRow>
              <MDBCol className="login-left">
                <div className="logo-head">
                  <div>
                    <img
                      src={rzlogo}
                      alt="Logo"
                      style={{
                        height: "100px",
                        width: "100px",
                        marginLeft: "0%",
                        marginTop: "3%",
                      }}
                    />
                  </div>
                  <div>
                    <h1
                      style={{
                        marginTop: "5%",
                        fontFamily: "Felix Titling",
                        fontSize: "50px",
                      }}
                    >
                      Recharge Zone
                    </h1>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center "
                  style={{
                    marginBottom: "5.5%",
                    marginRight: "20%",
                  }}
                >
                  <Lottie
                    options={defaultOptions}
                    height={500}
                    width={500}
                    style={{ borderRadius: "5%" }}
                    className="lottie-animation"
                  />
                </div>
              </MDBCol>
              <MDBCol
                className="login-right"
                style={{
                  backgroundImage: `url(${loginbcg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  marginRight: "-8%",
                  marginLeft: "-4%",
                  marginBottom: "-7.5%",
                }}
              >
                <MDBCard
                  style={{
                    width: "50%",
                    height: "70%",
                    marginLeft: "25%",
                    marginTop: "15%",
                  }}
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
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
