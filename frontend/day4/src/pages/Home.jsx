import React from "react";
import Sidebar from "../components/Sidebar";
import HomeFooter from "../components/Footer";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import HomeCarousel from "../components/Carousel";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa6";
import imgIndia from "../assets/images/india.png";

const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <HomeCarousel />
      <div
        className="home-content"
        style={{ display: "flex", overflowX: "hidden" }}
      >
        <div className="home-left-text" style={{ width: "50%" }}>
          <h1
            style={{
              marginTop: "13%",
              marginLeft: "10%",
              fontFamily: "Copperplate Gothic Bold",
            }}
          >
            Manage your Digital Life with the
          </h1>
          <h1
            style={{ marginLeft: "10%", fontFamily: "Copperplate Gothic Bold" }}
          >
            Recharge Zone
          </h1>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "20px",
                  paddingLeft: "115px",
                  columnGap: "20px ",
                }}
              >
                <div>
                  <RiVerifiedBadgeFill
                    style={{
                      marginLeft: "9%",
                      marginTop: "2%",
                      fontSize: "30px",
                      color: "#00e68a",
                    }}
                  />
                </div>
                <div>Recharge,Pay bills and Check Balance</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "20px",
                  paddingLeft: "115px",
                  columnGap: "20px ",
                }}
              >
                <div>
                  <RiVerifiedBadgeFill
                    style={{
                      marginLeft: "9%",
                      marginTop: "2%",
                      fontSize: "30px",
                      color: "#00e68a",
                    }}
                  />
                </div>
                <div>Shop and UPI</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "20px",
                  paddingLeft: "115px",
                  columnGap: "20px ",
                }}
              >
                <div>
                  <RiVerifiedBadgeFill
                    style={{
                      marginLeft: "9%",
                      marginTop: "2%",
                      fontSize: "30px",
                      color: "#00e68a",
                    }}
                  />
                </div>
                <div>Instant help with RechargeZone</div>
              </div>
            </li>
          </ul>
        </div>
        <div
          style={{
            border: "1px solid #bfbfbf",
            height: "450px",
            marginTop: "6%",
          }}
        ></div>
        <div className="home-right-text" style={{ width: "50%" }}>
          <h1
            style={{
              marginTop: "13%",
              marginLeft: "5%",
              fontFamily: "Copperplate Gothic Bold",
            }}
          >
            Here's why India prefers our Responsive
          </h1>
          <h1
            style={{ marginLeft: "5%", fontFamily: "Copperplate Gothic Bold" }}
          >
            RechargeZone
          </h1>
          <div style={{ display: "flex", columnGap: "80px" }}>
            <div style={{ marginLeft: "7%", width: "250px" }}>
              <BsFillLightningChargeFill
                style={{
                  height: "40px",
                  width: "50px",
                  marginLeft: "30%",
                  marginTop: "10%",
                  color: "#2C91E4",
                }}
              />

              <p
                style={{
                  marginLeft: "27%",
                  marginTop: "4%",
                  textWrap: "nowrap",
                  fontFamily: "Copperplate Gothic Bold",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Fast 5G
              </p>
              <p
                style={{
                  textWrap: "pretty",
                  marginLeft: "5%",
                  marginTop: "-3%",
                }}
              >
                Experience the internet at lightning speed with no latency.
              </p>
            </div>
            <div style={{ marginLeft: "5%", width: "250px" }}>
              <img
                src={imgIndia}
                style={{
                  height: "40px",
                  width: "40px",
                  marginLeft: "30%",
                  marginTop: "10%",
                }}
              />

              <p
                style={{
                  marginLeft: "10%",
                  marginTop: "4%",
                  textWrap: "nowrap",
                  fontFamily: "Copperplate Gothic Bold",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Pan India Coverage
              </p>
              <p
                style={{
                  textWrap: "pretty",
                  marginLeft: "5%",
                  marginTop: "-3%",
                }}
              >
                Enjoy HD-quality voice calls and faster data speeds anywhere in
                India.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", columnGap: "80px" }}>
            <div style={{ marginLeft: "7%", width: "250px" }}>
              <FaFileInvoice
                style={{
                  height: "40px",
                  width: "50px",
                  marginLeft: "30%",
                  marginTop: "0%",
                  color: "#2C91E4",
                }}
              />

              <p
                style={{
                  marginLeft: "27%",
                  marginTop: "4%",
                  textWrap: "nowrap",
                  fontFamily: "Copperplate Gothic Bold",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Fast 5G
              </p>
              <p
                style={{
                  textWrap: "pretty",
                  marginLeft: "5%",
                  marginTop: "-3%",
                }}
              >
                Experience the internet at lightning speed with no latency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="home-service-container"
        style={{
          backgroundColor: "rgb(10, 21, 21)",
        }}
      ></div>
      <HomeFooter />
    </div>
  );
};
export default HomePage;
