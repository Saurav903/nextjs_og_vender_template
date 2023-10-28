import React from "react";
import { whatsappImage, instaImage, categoryImage } from "@/app/utils/data";

const RightComponentInstagram = ({ state }) => {
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
      : "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png";

  return (
    <div
      //   className="flex flex-wrap w-full bg-contain bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: `${state.bp[0] || "center"}`,
        backgroundSize: `${"500px 600px"}`,
        backgroundRepeat: `${state.bp[2] || "no-repeat"}`,
        width: "100%",
        height: "700px",
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
          paddingTop: "80px",
          whiteSpace: "-moz-pre-wrap",
          textAlign: "center",
          //   border: "1px solid black",
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
          //   border: "1px solid black",
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
          width: "500px",
          // border: "1px solid black",
        }}
      >
        <img
          src={category}
          alt=""
          style={{ height: "150px", marginTop: "14%" }}
        />
      </div>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          minHeight: "80px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          margin: "auto",
          marginTop: "10px",
          width: "500px",
          gap: "10px",
          //   border: "1px solid black",
        }}
      >
        <div style={{ flex: "3" }}>
          <img
            src={
              state.vendorLogo ||
              "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png"
            }
            style={{ width: "500px", height: "150px", padding: "15px" }}
          />
        </div>
        <div style={{ flex: "7" }}>
          <p
            style={{
              color: `${
                backgroundId === 1 || backgroundId === 6
                  ? "rgb(123,64,8)"
                  : "white"
              }`,
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
