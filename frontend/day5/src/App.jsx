import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ClientProfile from "./components/Profile";
import HomeCard from "./components/HomeCard";
import RechargePlans from "./pages/RechargPlans";
import PrepaidPage from "./pages/Prepaid";
import PostpaidPage from "./pages/Postpaid";
import ContactUsPage from "./pages/ContactUs";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="638357412327-rckmgh9usb51m1r3lvdkm0vabogbfjip.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ClientProfile />} />
          <Route path="/hc" element={<HomeCard />} />
          <Route path="/rp" element={<RechargePlans />} />
          <Route path="/prepaidplans" element={<PrepaidPage />} />
          <Route path="/postpaidplans" element={<PostpaidPage />} />
          <Route path="/help" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
