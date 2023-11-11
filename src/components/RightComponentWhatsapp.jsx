"use client";
import React, { useEffect } from "react";
import styles from "../app/style/rightcomponent.module.css";

import { whatsappImage, categoryImage } from "@/app/utils/data";

const RightComponentWhatsapp = ({ state }) => {
  let backgroundId = state.background || 17;
  let backgroundData = whatsappImage.filter((el) => el.id === backgroundId);
  let background =
    backgroundData.length > 0
      ? backgroundData[0].src
      : "https://neon.ipsator.com/c/image/upload/v1698930095/irctc/post/bg/instagram-story/post-instagram-story-bg-5.jpg";

  let categoryId = state.category;
  let categoryData = categoryImage.filter((el) => el.id === categoryId);
  let category =
    categoryData.length > 0
      ? categoryData[0].src
      : "https://neon.ipsator.com/c/image/upload/v1698930176/irctc/post/elements/food/post-food-8.png";

  console.log(state.vendorlog);

  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url(${background})`,
        border: '1px solid grey',
        borderRadius: '16px',
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
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
          paddingTop: "50px",
          marginBottom: "10px",
          marginTop: "30px",
        }}
      >
        <img className={styles.categoryimg} src={category} alt="" />
      </div>
      <div className={styles.foots}>
        <div style={{ flex: "3" }}>
          <img
            src={`${
              state.vendorLogo ||
              "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png"
            }`}
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
