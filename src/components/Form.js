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
    }
    setState({ ...state, [name]: value });
  };
  
  return (
    <div className="flex flex-col w-full h-full gap-5 px-20 py-12 mx-auto border border-gray-400 rounded-lg bg-gradient-to-r from-blue-200 to-red-200">
      <h1 className="mx-auto text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-600">
        Vendor Form
      </h1>

      <div className="flex gap-5 mx-auto">
        <Button
          onClick={() =>
            setState({
              ...state,
              width: 1080,
              height: 1080,
              background:
                "https://neon.ipsator.com/c/image/upload/v1697725263/irctc/post/bg/post-post-bg-3.jpg",
              imageId: 6,
            })
          }
        >
          Instagram
          <FaInstagramSquare className="text-red-500 text-[25px]" />
        </Button>
        <Button
          onClick={() =>
            setState({
              ...state,
              width: 1080,
              height: 1920,
              background:
                "https://neon.ipsator.com/c/image/upload/v1697634853/irctc/post/bg/instagram-story/post-instagram-story-bg-1.jpg",
              imageId: 2,
            })
          }
        >
          Whatsapp
          <FaWhatsappSquare className="text-green-500 text-[25px]" />
        </Button>
      </div>
      <Label>Title</Label>
      <Input
        value={state.title}
        type="text"
        name="title"
        placeholder="Please enter a title"
        onChange={handleChange}
        maxLength={25}
      />

      <Label>Sub Title</Label>
      <Input
        value={state.description}
        type="text"
        name="description"
        placeholder="Please enter a description"
        onChange={handleChange}
        maxLength={25}
      />

      <Label>Vendor Logo (jpg,png,jpeg) </Label>
      <Input
        type="file"
        name="vendorLogo"
        onChange={handleChange}
      />

      <Label>Vendor Details</Label>
      <Input
        value={state.special}
        type="text"
        name="special"
        placeholder="Please enter special text"
        onChange={handleChange}
        maxLength={30}
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

      <br />
      {state.height === 1920 ? (
        <a
          href={`/api/whats?title=${state.title}&description=${state.description}&width=${state.width}&height=${state.height}&background=${state.background}&category=${state.category}&special=${state.special}&vendorlogo=${state.vendorLogo}`}
          target="_blank"
          className="flex items-center justify-center w-2/5 gap-2 p-1 mx-auto text-lg font-bold text-blue-900 border border-gray-500 rounded-md cursor-pointer bg-gradient-to-r from-blue-300 to-red-400"
        >
          Download
        </a>
      ) : (
        <a
          href={`/api/insta?title=${state.title}&description=${state.description}&width=${state.width}&height=${state.height}&background=${state.background}&category=${state.category}&special=${state.special}&vendorlogo=${state.vendorLogo}`}
          target="_blank"
          className="flex items-center justify-center w-2/5 gap-2 p-1 mx-auto text-lg font-bold text-blue-900 border border-gray-500 rounded-md cursor-pointer bg-gradient-to-r from-blue-300 to-red-400"
        >
          Download
        </a>
      )}
    </div>
  );
};

export default Form;
