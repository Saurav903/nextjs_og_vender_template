import React from "react";

import { whatsappImage, categoryImage } from "@/app/utils/data";
import { Responsive } from "@/app/utils/Responsive";

const RightComponentWhatsapp = ({ state }) => {

  const { isSmallScreen } = Responsive();

  let backgroundId = state.background || 1;
  let backgroundData = whatsappImage.filter((el) => el.id === backgroundId);
  let background =
    backgroundData.length > 0
      ? backgroundData[0].src
      : "https://neon.ipsator.com/c/image/upload/v1697634854/irctc/post/bg/instagram-story/post-instagram-story-bg-2.jpg";

  let categoryId = state.category;
  let categoryData = categoryImage.filter((el) => el.id === categoryId);
  let category =
    categoryData.length > 0
      ? categoryData[0].src
      : "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png";


  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: `${state.bp[0] || "center"}`,
        backgroundSize: `${isSmallScreen ? "350px 760px" : "500px 760px"}`,
        backgroundRepeat: `${state.bp[2] || "no-repeat"}`,
        width: "100%",
        height: "760px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "225px",
          //   margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
          whiteSpace: "-moz-pre-wrap",
          textAlign: "center",
          minHeight: "150px",
          border: "1px solid black",
        }}
      >
        <p
          style={{
            fontSize: "35px",
            color: `${
              backgroundId === 1 || backgroundId === 6
                ? "rgb(123,64,8)"
                : "white"
            }`,
          }}
        >
          {state.title}
        </p>
      </div>
      <div
        style={{
          width: "300px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "-moz-pre-wrap",
          textAlign: "center",
          marginTop: "20px",
          minHeight: "60px",
          border: "1px solid black",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            color: `${
              backgroundId === 1 || backgroundId === 6
                ? "rgb(123,64,8)"
                : "white"
            }`,
          }}
        >
          {state.description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${isSmallScreen ? "320px" : "500px"}`,
          border: "1px solid black",
        }}
      >
        <img
          src={category}
          alt=""
          style={{ 
            height: "300px",
             paddingTop: `${isSmallScreen ? "30%":"20%"}` 
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          padding: "3%",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          margin: "auto",
          marginTop: "55px",
          width: `${isSmallScreen ? "320px" : "500px"}`,
          gap: "10px",
          border: "1px solid black",
          minHeight: "170px",
        }}
      >
        <div style={{ 
          flex: "4",
          border: "1px solid black",
          }}>
          <img
            src={
              `${state.vendorLogo}` ||
              "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png"
            }
          />
        </div>
        <div style={{ flex: "6" }}>
          <p
            style={{
              fontSize: "18px",
              color: `${
                backgroundId === 1 || backgroundId === 6
                  ? "rgb(123,64,8)"
                  : "white"
              }`,
              paddingBottom: "30px",
            }}
          >
            {state.special}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightComponentWhatsapp;
