import React from "react";
import { instaImage, categoryImage } from "@/app/utils/data";
import { Responsive } from "@/app/utils/Responsive";

const RightComponentInstagram = ({ state }) => {
  const { isSmallScreen } = Responsive();

  let backgroundId = state.background || 6;
  let backgroundData = instaImage.filter((el) => el.id === backgroundId);
  let background =
    backgroundData.length > 0
      ? backgroundData[0].src
      : "https://neon.ipsator.com/c/image/upload/v1697634854/irctc/post/bg/instagram-story/post-instagram-story-bg-2.jpg";

  let categoryId = state.category;
  let categoryData = categoryImage.filter((el) => el.id === categoryId);
  let category =
    categoryData.length > 0
      ? categoryData[0].src
      : "https://neon.ipsator.com/c/image/upload/v1697634895/irctc/post/elements/food/post-food-1.png";

  return (
    <div
      //   className="flex flex-wrap w-full bg-contain bg-center bg-no-repeat relative"
      id="main_div"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: `${isSmallScreen ? "350px 600px" : "500px 600px"}`,
        backgroundRepeat: `${state.bp[2] || "no-repeat"}`,
        width: "100%",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid black",
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
          paddingTop: "80px",
          whiteSpace: "-moz-pre-wrap",
          textAlign: "center",
          // border: "1px solid black",
        }}
      >
        <p
          style={{
            fontSize: "27px",
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
          width: "250px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "-moz-pre-wrap",
          textAlign: "center",
          marginTop: "15px",
          // border: "1px solid black",
        }}
      >
        <p
          style={{
            fontSize: "15px",
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
          width: `${isSmallScreen ? "300px" : "500px"}`,
          // border: "1px solid black",
        }}
      >
        <img
          src={category}
          alt=""
          style={{
            height: "200px",
            marginTop: `${isSmallScreen? "18%": "14%"}`,
            // border: "1px solid black"
          }}
          className="category_img"
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "80px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          margin: "auto",
          marginTop:`${isSmallScreen ? "-10px" : "5px"}`,
          width: `${isSmallScreen ? "340px" : "500px"}`,
          gap: `${isSmallScreen ? "2px" : "10px"}`,
          // border: "1px solid black",
          padding: "1px",
        }}
        id="special_text_div"
      >
        <div style={{ flex: "4" }}>
          <img
            src={
              state.vendorLogo ||
              "https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-5.png"
            }
            style={{ height: "140px", padding: "15px" }}
          />
        </div>
        <div style={{ flex: "6" }}>
          <p
            className="special_text"
            style={{
              color: `${
                backgroundId === 1 || backgroundId === 6
                  ? "rgb(123,64,8)"
                  : "white"
              }`,
              fontSize: `${isSmallScreen ? "12px" : "20px"}`,
            }}
          >
            {state.special}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightComponentInstagram;
