import Image from "next/image";
import React from "react";

const InstaCall = ({ state }) => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        border: "none",
      }}
    >
      <img
        src={`/api/insta?title=${state.title}&description=${
          state.description
        }&width=${state.width}&height=${state.height}&background=${
          state.background
        }&category=${state.category}&special=${state.special}&vendorlogo=${
          state.vendorLogo ||
          "https://neon.ipsator.com/c/image/upload/v1697634893/irctc/post/elements/food/post-food-2.png"
        }&imageid=${state.imageId}`}
        alt="pic"
        width={"100%"}
      />
    </div>
  );
};

export default InstaCall;
