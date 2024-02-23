import React from "react";
import { Carousel } from "antd";
import cimg1 from "../assets/images/carouselimg.jpg";
import cimg2 from "../assets/images/carouselimg1.jpg";
import cimg3 from "../assets/images/carouselimg2.jpg";

const HomeCarousel = () => (
  <Carousel
    autoplay
    // effect="fade"
    style={{ marginTop: "5%", transition: "ease" }}
  >
    <div>
      <div
        style={{
          height: "500px",
          lineHeight: "260px",
          //   textAlign: "center",
          backgroundImage: `url(${cimg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      ></div>
      <div>
        <h1
          style={{
            color: "white",
            fontFamily: "Copperplate Gothic Bold",
            fontSize: "60px",
            position: "absolute",
            top: "90px",
            left: "1600px",
            alignItems: "flex-start",
          }}
        >
          " Recharging is no more
          <h1
            style={{
              color: "white",
              fontFamily: "Copperplate Gothic Bold",
              fontSize: "60px",
              position: "absolute",
              left: "30px",
            }}
          >
            a hazzle now !"
          </h1>
        </h1>
      </div>
    </div>
    <div>
      <div
        style={{
          height: "500px",
          lineHeight: "260px",
          //   textAlign: "center",
          backgroundImage: `url(${cimg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div style={{ width: "1300px" }}>
        <h1
          style={{
            color: "white",
            fontFamily: "Copperplate Gothic Bold",
            fontSize: "60px",
            position: "absolute",
            top: "90px",
            left: "3130px",
            alignItems: "flex-start",
          }}
        >
          " Simple UI with
          <h1
            style={{
              color: "white",
              fontFamily: "Copperplate Gothic Bold",
              fontSize: "60px",
              position: "absolute",
              left: "30px",
            }}
          >
            enhanced Adaptivity !"
          </h1>
        </h1>
      </div>
    </div>
    <div>
      <div
        style={{
          height: "500px",
          lineHeight: "260px",
          //   textAlign: "center",
          backgroundImage: `url(${cimg3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div>
        <h1
          style={{
            color: "white",
            fontFamily: "Copperplate Gothic Bold",
            fontSize: "60px",
            position: "absolute",
            top: "90px",
            left: "4670px",
            alignItems: "flex-start",
          }}
        >
          " Enjoy Exclusive 5G
          <h1
            style={{
              color: "white",
              fontFamily: "Copperplate Gothic Bold",
              fontSize: "60px",
              position: "absolute",
              left: "30px",
            }}
          >
            Offers now !"
          </h1>
        </h1>
      </div>
    </div>
  </Carousel>
);
export default HomeCarousel;
