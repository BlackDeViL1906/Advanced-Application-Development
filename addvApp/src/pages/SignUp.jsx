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
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import axios from "axios";
import Lottie from "react-lottie";
import logAnimation from "../lotties/login-lottie.json";
import loginbcg from "../assets/images/cardbg.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const nav = useNavigate();

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Passwords do not match");
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/recharge/addUser",
        {
          emailid: email,
          password: password,
          username: username,
          role: "ROLE_USER",
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        nav("/");
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage("An error occurred. Please try again.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarOpen(true);
    }
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
    <div
      className="signup-page"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        className="d-flex align-items-center "
        style={{ marginTop: "5%", width: "50%" }}
      >
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          style={{ borderRadius: "5%" }}
          className="lottie-animation"
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${loginbcg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginLeft: "-4%",
          marginBottom: "-7.5%",
          width: "50%",
          height: "100vh",
        }}
      >
        <MDBContainer className="py-5">
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBCard
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "30%",
                  width: "400px",
                }}
              >
                <MDBCardBody>
                  <form onSubmit={handleSignup}>
                    <p className="h4 text-center mb-4">Sign up</p>
                    <MDBInput
                      label="Username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      style={{ marginTop: "5%" }}
                    />
                    <MDBInput
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ marginTop: "5%" }}
                    />
                    <MDBInput
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{ marginTop: "5%" }}
                    />
                    <MDBInput
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      style={{ marginTop: "5%" }}
                    />
                    <div className="text-center mt-4">
                      <MDBBtn type="submit">Sign up</MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
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

export default Signup;
