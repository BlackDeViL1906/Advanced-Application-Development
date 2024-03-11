import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ClientProfile from "./components/Profile";
import CardComp from "./components/CardComp";
import PrepaidPage from "./pages/Prepaid";
import PostpaidPage from "./pages/Postpaid";
import ContactUsPage from "./pages/ContactUs";
import AdminDashboard from "./adminpages/AdminDashBoard";
import Signup from "./pages/SignUp";
import PieChartC from "./pages/PieChart";
import AdminPrepaidPage from "./adminpages/AdminPrepaid";
import UserManagementPage from "./adminpages/ManageUsers";
import RechargePlanForm from "./adminpages/AddRechargePlans";
import JioPrepaid from "./adminpages/JioPrepaid";
import AdminPostpaidPage from "./adminpages/AdminPostPaid";
import EditRechargePlanForm from "./adminpages/EditRechargePlans";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="638357412327-rckmgh9usb51m1r3lvdkm0vabogbfjip.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ClientProfile />} />
          <Route path="/hc" element={<CardComp />} />
          <Route path="/pc" element={<PieChartC />} />
          <Route path="/prepaidplans" element={<PrepaidPage />} />
          <Route path="/adminprepaidplans" element={<AdminPrepaidPage />} />
          <Route path="/adminpostpaidplans" element={<AdminPostpaidPage />} />
          <Route path="/editplan" element={<EditRechargePlanForm />} />
          <Route path="/postpaidplans" element={<PostpaidPage />} />
          <Route path="/help" element={<ContactUsPage />} />
          <Route path="/admindash" element={<AdminDashboard />} />
          <Route path="/usermanag" element={<UserManagementPage />} />
          <Route path="/addplans" element={<RechargePlanForm />} />
          <Route path="/adminjioplans" element={<JioPrepaid />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
