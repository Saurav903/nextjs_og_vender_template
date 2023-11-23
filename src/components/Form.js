"use client";
import React from "react";
import { PopoverDemo } from "../components/ModalFInal";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { whatsappImage, instaImage, categoryImage } from "@/app/utils/data";
import { uploadImageAndGetURL } from "@/Server/server";

const Form = ({ setState, state }) => {
  const handleChange = (e, wordLimit) => {
    let name = e.target.name;
    let value;
    if (name == "vendorLogo") {
      const imageFile = e.target.files[0];
      const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];

      // only allows above images types
      if (!allowedTypes.includes(imageFile?.type)) {
        alert("Only JPEG, JPG, and PNG images are allowed");
        clearInput();
        return;
      }

      if(imageFile.size > 1*1000*1024){
        alert("Image size must be smaller than 1MB");
        return;
      }

      uploadImageAndGetURL(imageFile)
        .then((url) => {
          console.log("URL:", url);
          setState({ ...state, [name]: url });
        })
        .catch((error) => {
          console.error("Image upload failed:", error);
        });
    } else {
      value = e.target.value;
      const words = value.trim().split(/\s+/);

      if (words.length > wordLimit) {
        alert(`Maximum limit of ${wordLimit} words reached for this input.`);
        return
      }
    }
    setState({ ...state, [name]: value });
  };

  const handleSocailMedia = (width, height, background) =>
    setState({
      ...state,
      width,
      height,
      background,
    });

  const handleClick = () => {
    const url = `/api/${state.height === 1920 ? "whats" : "insta"}?title=${
      state.title
    }&description=${state.description}&width=${state.width}&height=${
      state.height
    }&background=${state.background}&category=${state.category}&special=${
      state.special
    }&vendorlogo=${state.vendorLogo}`;
    const link = document.createElement("a");
    link.href = url;
    link.download = state.title;
    window.open(url, "_blank");
    link.click();
  };

  const clearInput = () => {
    // Assuming you have a reference to your input element with the id "imageInput"
    const imageInput = document.getElementById("vendor-logo");
    if (imageInput) {
      imageInput.value = ""; // Clear input value
    }
  };

  return (
    <div className="form_container">
      <h1 className="form_heading text-center">
        eCatering Marketing Post Generator
      </h1>

      <div className="flex flex-col md:flex-row gap-5 mx-auto mb-4">
        <Button onClick={() => handleSocailMedia(1080, 1080, 20)}>
          Instagram
          <FaInstagramSquare className="inst_icon" />
        </Button>
        <Button onClick={() => handleSocailMedia(1080, 1920, 17)}>
          Whatsapp
          <FaWhatsappSquare className="whatsapp_icon" />
        </Button>
      </div>

      <Label>Background</Label>
      <PopoverDemo
        BgImages={state.height === 1920 ? whatsappImage : instaImage}
        title={"Background"}
        setState={setState}
        state={state}
      />

      <Label>Category</Label>
      <PopoverDemo
        BgImages={categoryImage}
        title={"Category"}
        setState={setState}
        state={state}
      />

      <Label>Title</Label>
      <Input
        value={state.title}
        type="text"
        name="title"
        placeholder="Please enter a title"
        onChange={(e) => handleChange(e, 3)}
        // maxLength={21}
        required
      />

      <Label>Sub Title</Label>
      <Input
        value={state.description}
        type="text"
        name="description"
        placeholder="Please enter a description"
        onChange={(e) => handleChange(e, 8)}
        // maxLength={55}
      />

      <Label>Vendor Logo (jpg, png, jpeg) </Label>
      <Input
        type="file"
        id="vendor-logo"
        accept=".jpg, .jpeg, .png"
        name="vendorLogo"
        onChange={(e) => handleChange(e)}
      />

      <Label>Vendor Details</Label>
      <Input
        value={state.special}
        type="text"
        name="special"
        placeholder="Please enter special text"
        onChange={(e) => handleChange(e, 9)}
        // maxLength={60}
      />

      <a className="download_button" onClick={handleClick}>
        Download
      </a>
    </div>
  );
};

export default Form;

/// form done
