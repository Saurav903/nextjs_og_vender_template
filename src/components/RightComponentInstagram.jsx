import React from "react";
import { whatsappImage, instaImage, categoryImage } from "@/app/utils/data";
import styles from "../app/style/instagram.module.css";

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
      : "https://neon.ipsator.com/c/image/upload/v1697634895/irctc/post/elements/food/post-food-1.png";

  return (
    <div
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
          // border: "1px solid black",
        }}
      >
        <img className={styles.categoryimg} src={category} alt="" />
      </div>
      <div className={styles.foots}>
        <div style={{ flex: "3" }}>
          <img
            className={styles.footimg}
            src={
              state.vendorLogo ||
              "https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-5.png"
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
