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
import { useNavigate } from "react-router-dom";
import loginbcg from "../assets/images/cardbg.jpg";
import { GoogleLogin } from "@react-oauth/google";
import Lottie from "react-lottie";
import logAnimation from "../lotties/login-lottie.json";
import rzlogo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const nav = useNavigate();

  const validateInputs = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate inputs
    const errors = validateInputs();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    if (username == "admin@gmail.com" && password == "admin@123") {
      nav("/admindash");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/recharge/authenticate",
          {
            email: username,
            password: password,
          }
        );
        console.log(response.data);
        localStorage.setItem("token", response.data);
        setSnackbarSeverity("success");
        setSnackbarMessage("Successfully logged in!");
        setSnackbarOpen(true);

        setTimeout(() => {
          nav("/home");
        }, 1000);
      } catch (error) {
        console.error("Login failed");
        console.error(error);

        setSnackbarSeverity("error");
        setSnackbarMessage("Invalid credentials. Please try again.");
        setSnackbarOpen(true);

        setTimeout(() => {}, 5000);
      }
    }
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
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
                        label="User Mail"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{
                          marginTop: "15%",
                          fontFamily: "Noto Serif Vithkuqi",
                        }}
                        errorMessage={errors.username}
                      />
                      <MDBInput
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                          marginTop: "5%",
                          fontFamily: "Noto Serif Vithkuqi",
                        }}
                        errorMessage={errors.password}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          marginLeft: "10%",
                          marginRight: "10%",
                        }}
                      >
                        <div
                          className="text-center"
                          style={{ marginTop: "15%" }}
                        >
                          <MDBBtn
                            color="primary"
                            onClick={handleLogin}
                            className="log-button"
                          >
                            Login
                          </MDBBtn>
                        </div>
                        <div style={{ marginTop: "16%" }}>
                          <p>or</p>
                        </div>
                        <div
                          className="text-center"
                          style={{ marginTop: "15%" }}
                        >
                          <Link to="/signup">
                            <MDBBtn color="primary" className="log-button">
                              SignUp
                            </MDBBtn>
                          </Link>
                        </div>
                      </div>

                      <div className="justify-content-center align-items-center">
                        <div
                          className="text-center "
                          style={{ marginTop: "15%", marginLeft: "20%" }}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
