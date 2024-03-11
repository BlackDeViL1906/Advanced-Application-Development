import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import AdminSidebar from "./AdminSidebar";
import adminWelc from "../assets/images/admin_welcome.jpg";
import PieChartC from "../pages/PieChart";

const OrderDashboard = () => {
  const ordersData = [
    { id: 1, product: "Product A", amount: 100 },
    { id: 2, product: "Product B", amount: 150 },
    { id: 3, product: "Product C", amount: 200 },
  ];

  const graphData = [
    { name: "Jan", jio: 400, airtel: 190 },
    { name: "Feb", jio: 300, airtel: 200 },
    { name: "Mar", jio: 200, airtel: 300 },
    { name: "Apr", jio: 300, airtel: 150 },
    { name: "May", jio: 350, airtel: 400 },
    { name: "Jun", jio: 600, airtel: 500 },
  ];

  return (
    <MDBContainer fluid>
      <AdminSidebar />
      <div
        style={{
          backgroundImage: `url(${adminWelc})`,
          marginTop: "7%",
          height: "400px",
          width: "1400px",
          backgroundSize: "cover",
          marginLeft: "3%",
          borderRadius: "20px",
        }}
      >
        <p
          style={{ fontSize: "50px", paddingTop: "40px", paddingLeft: "60px" }}
        >
          Welcome Admin!
        </p>
      </div>
      <MDBContainer className="mt-4" style={{ paddingTop: "4%" }}>
        <MDBRow>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <MDBCol md>
              <h2>Recharge Orders</h2>
              <LineChart width={500} height={300} data={graphData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="jio" stroke="#8884d8" />
                <Line type="monotone" dataKey="airtel" stroke="#ff6347" />
              </LineChart>
            </MDBCol>
            <MDBCol md>
              <h2>Trends</h2>
              <BarChart width={500} height={300} data={graphData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jio" fill="#8884d8" />
                <Bar dataKey="airtel" fill="#ff6347" />
              </BarChart>
            </MDBCol>
          </div>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <h2 style={{ marginLeft: "8%", marginTop: "4%" }}>Users</h2>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "2%" }}>
          <PieChartC />

          <div style={{ width: "50%" }}></div>
        </div>
      </MDBContainer>
      <MDBContainer>
        <div>
          <h2 style={{ marginTop: "3%" }}>Most Recharged Plans</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "3%",
          }}
        >
          <MDBCard style={{ maxWidth: "20rem" }}>
            <MDBCardBody>
              <MDBCardTitle>#1 Jio Prepaid</MDBCardTitle>
              <MDBCardText>Plan Data: 3 GB/day</MDBCardText>
              <MDBCardText>Plan Validity : 56 days</MDBCardText>
              <MDBCardText>
                Plan Subscriptions: Disney+, Netflix, Jio Cinema
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ maxWidth: "20rem" }}>
            <MDBCardBody>
              <MDBCardTitle>#2 Jio Prepaid</MDBCardTitle>
              <MDBCardText>Plan Data: 2.5GB/day</MDBCardText>
              <MDBCardText>Plan Validity : 48 days</MDBCardText>
              <MDBCardText>
                Plan Subscriptions: Disney+, Netflix, Jio Cinema
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ maxWidth: "20rem" }}>
            <MDBCardBody>
              <MDBCardTitle>#3 Airtel Prepaid</MDBCardTitle>
              <MDBCardText>Plan Data: 1.5GB/day</MDBCardText>
              <MDBCardText>Plan Validity : 48 days</MDBCardText>
              <MDBCardText>
                Plan Subscriptions: Disney+, Netflix, You Tube
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
      <MDBContainer style={{ marginTop: "5%" }}></MDBContainer>
    </MDBContainer>
  );
};

export default OrderDashboard;
