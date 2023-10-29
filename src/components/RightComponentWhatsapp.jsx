"use client";
import React, { useEffect } from "react";
import styles from "../app/style/rightcomponent.module.css";

import { whatsappImage, categoryImage } from "@/app/utils/data";

const RightComponentWhatsapp = ({ state }) => {
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

  console.log(state.vendorlog);

  return (
    <div
      //   className="flex flex-wrap w-full bg-contain bg-center bg-no-repeat relative"
      className={styles.main}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className={styles.titlediv}>
        <p
          className={styles.title}
          style={{
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
      <div className={styles.descript}>
        <p
          className={styles.descriptpara}
          style={{
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
        }}
      >
        <img className={styles.categoryimg} src={category} alt="" />
      </div>
      <div className={styles.foots}>
        <div style={{ flex: "3" }}>
          <img
            src={
              `${state.vendorLogo}` ||
              "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png"
            }
          />
        </div>
        <div style={{ flex: "7" }}>
          <p
            className={styles.footp}
            style={{
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
