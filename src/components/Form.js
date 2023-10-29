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
  const handleChange = (e) => {
    let name = e.target.name;
    let value;
    if (name == "vendorLogo") {
      const imageFile = e.target.files[0];
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
      if (value.length >= e.target.maxLength) {
        alert(`Maximum length of ${e.target.maxLength} characters reached.`);
        console.log(value.length);
        return;
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

  return (
    <div className="form_container">
      <h1 className="form_heading">
        Vendor Form
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-10 mx-auto">
        <Button onClick={() => handleSocailMedia(1080, 1080, 6)}>
          Instagram
          <FaInstagramSquare className="inst_icon" />
        </Button>
        <Button onClick={() => handleSocailMedia(1080, 1920, 1)}>
          Whatsapp
          <FaWhatsappSquare className="whatsapp_icon" />
        </Button>
      </div>

      <Label>Title</Label>
      <Input
        value={state.title}
        type="text"
        name="title"
        placeholder="Please enter a title"
        onChange={handleChange}
        maxLength={22}
        required
      />

      <Label>Sub Title</Label>
      <Input
        value={state.description}
        type="text"
        name="description"
        placeholder="Please enter a description"
        onChange={handleChange}
        maxLength={40}
      />

      <Label>Vendor Logo (jpg, png, jpeg) </Label>
      <Input type="file" name="vendorLogo" onChange={handleChange} />

      <Label>Vendor Details</Label>
      <Input
        value={state.special}
        type="text"
        name="special"
        placeholder="Please enter special text"
        onChange={handleChange}
        maxLength={60}
      />

      <PopoverDemo
        BgImages={state.height === 1920 ? whatsappImage : instaImage}
        title={"Background"}
        setState={setState}
        state={state}
      />

      <PopoverDemo
        BgImages={categoryImage}
        title={"Category"}
        setState={setState}
        state={state}
      />

      <a
        href={`/api/${state.height === 1920 ? "whats" : "insta"}?title=${
          state.title
        }&description=${state.description}&width=${state.width}&height=${
          state.height
        }&background=${state.background}&category=${state.category}&special=${
          state.special
        }&vendorlogo=${state.vendorLogo}`}
        target="_blank"
        className="download_button"
      >
        Download
      </a>
    </div>
  );
};

export default Form;
