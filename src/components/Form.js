"use client";
import React from "react";
import { PopoverDemo } from "../components/ModalFInal";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { whatsappImage, instaImage, categoryImage } from "@/app/utils/data";
import axios from "axios";

const Form = ({ setState, state }) => {
  const uploadImageAndGetURL = (imageFile) => {
    return new Promise(async (resolve, reject) => {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
          formData
        );
        const imageURL = response.data.data.url;
        resolve(imageURL);
      } catch (error) {
        reject(error);
      }
    });
  };

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
    <div className="w-full h-full py-12 border border-gray-400 flex flex-col px-20 mx-auto gap-5 rounded-lg bg-gradient-to-r from-blue-200 to-red-200">
      <h1 className="font-extrabold mx-auto text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">
        Vendor Form
      </h1>

      <div className="flex gap-5 mx-auto">
        <Button
          className="border border-gray-500 p-2 rounded-md flex gap-2 items-center bg-gray-100"
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
          className="border border-gray-500 p-2 rounded-md flex gap-2 items-center bg-gray-100"
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
        className="border border-gray-500 bg-gray-100"
        type="text"
        name="title"
        placeholder="Please enter a title"
        onChange={handleChange}
      />

      <Label>Sub Title</Label>
      <Input
        className="border border-gray-500  bg-gray-100"
        type="text"
        name="description"
        placeholder="Please enter a description"
        onChange={handleChange}
      />

      <Label>Vendor Logo (jpg,png,jpeg) </Label>
      <Input
        className="border border-gray-500 bg-gray-100"
        type="file"
        name="vendorLogo"
        onChange={handleChange}
      />

      <Label>Vendor Details</Label>
      <Input
        className="border border-gray-500 bg-gray-100"
        type="text"
        name="special"
        placeholder="Please enter special text"
        onChange={handleChange}
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
          className="w-2/5 mx-auto border border-gray-500 p-1 font-bold text-lg text-blue-900 rounded-md flex gap-2 justify-center cursor-pointer items-center bg-gradient-to-r from-blue-300 to-red-400"
        >
          Download
        </a>
      ) : (
        <a
          href={`/api/insta?title=${state.title}&description=${state.description}&width=${state.width}&height=${state.height}&background=${state.background}&category=${state.category}&special=${state.special}&vendorlogo=${state.vendorLogo}`}
          target="_blank"
          className="w-2/5 mx-auto border border-gray-500 p-1 font-bold text-lg text-blue-900 rounded-md flex gap-2 justify-center cursor-pointer items-center bg-gradient-to-r from-blue-300 to-red-400"
        >
          Download
        </a>
      )}
    </div>
  );
};

export default Form;
