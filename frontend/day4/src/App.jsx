import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ClientProfile from "./components/Profile";
import HomeCard from "./components/HomeCard";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="638357412327-rckmgh9usb51m1r3lvdkm0vabogbfjip.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ClientProfile />} />
          <Route path="/hc" element={<HomeCard />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
