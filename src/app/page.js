/* eslint-disable @next/next/no-img-element */
"use client";
import { useContext, useEffect, useState } from "react";
import { PopoverDemo } from "../components/ModalFInal";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { AuthContext } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from 'axios';

export default function Home() {
  const { baground, category } = useContext(AuthContext);

  const [socialMedia,setSocialMedia]=useState('Whatsapp');
  
  const [state, setState] = useState({
    title: "",
    description: "",
    baground: "",
    category: category,
    vendorLogo: "",
    special: "",
    width: 1080,
    height: 1920,
    imageId: "",
  });

  // useEffect(() => {
  //   setState({ ...state, baground: baground });
  // }, [baground]);

  const handleChange = async (e) => {
    let name = e.target.name;
    let value;
    if (name == "vendorLogo") {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      const apiKey = "e434cd7b2acad31fec51625d4ac3c53f";

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          formData
        );
        // console.log('response',response.data.data.url)
        value=response.data.data.url;
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    } else {
      value = e.target.value;
    }
    setState({ ...state, [name]: value });
  };

  // console.log("Vendor", state.vendorLogo);

  const BgImages = [
    {
      "baground-image": [
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634854/irctc/post/bg/instagram-story/post-instagram-story-bg-2.jpg",
          alt: "image1",
          id: 1,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634853/irctc/post/bg/instagram-story/post-instagram-story-bg-3.jpg",
          alt: "image2",
          id: 2,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634853/irctc/post/bg/instagram-story/post-instagram-story-bg-1.jpg",
          alt: "image3",
          id: 3,
        },
      ],
    },
    {
      "background-image2": [
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697725263/irctc/post/bg/post-post-bg-3.jpg",
          alt: "image6",
          id: 6,
        }
        ,
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697725263/irctc/post/bg/post-post-bg-1.jpg",
          alt: "image4",
          id: 5,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697725264/irctc/post/bg/post-post-bg-2.jpg",
          alt: "image5",
          id: 4,
        },
      ],
    },
    {
      "category-image": [
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634895/irctc/post/elements/food/post-food-1.png",
          alt: "image4",
          id: 7,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634893/irctc/post/elements/food/post-food-2.png",
          alt: "image2",
          id: 8,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-3.png",
          alt: "image3",
          id: 9,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png",
          alt: "image4",
          id: 10,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-5.png",
          alt: "image5",
          id: 11,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-6.png",
          alt: "image6",
          id: 12,
        },
      ],
    },
  ];

  return (
    <main className="bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300 p-20">
      <div className="w-full flex justify-between gap-10 p-10">
        <div className="w-4/5 h-full py-12 border border-gray-400 flex flex-col px-40 mx-auto gap-5 rounded-lg bg-gradient-to-r from-blue-200 to-red-200">
          <h1 className="font-extrabold mx-auto text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">
            Vendor Form
          </h1>

          <div className="flex gap-5 mx-auto">
            <Button
              className="border border-gray-500 p-2 rounded-md flex gap-2 items-center bg-gray-100"
              onClick={
                () => setState({ ...state, width: 1080, height: 1080 }, setSocialMedia('Instagram'))
              }
            >
              Instagram
              <FaInstagramSquare className="text-red-500 text-[25px]" />
            </Button>
            <Button
              className="border border-gray-500 p-2 rounded-md flex gap-2 items-center bg-gray-100"
              onClick={() => setState({ ...state, width: 1080, height: 1920 }, setSocialMedia('Whatsapp'))}
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

          <Label>Vendor Logo</Label>
          <Input
            className="border border-gray-500 bg-gray-100"
            type="file"
            name="vendorLogo"
            onChange={handleChange}
          />

          <Label>Special Text</Label>
          <Input
            className="border border-gray-500 bg-gray-100"
            type="text"
            name="special"
            placeholder="Please enter special text"
            onChange={handleChange}
          />

          <PopoverDemo
            BgImages={
              state.height === 1920
                ? BgImages[0]["baground-image"]
                : BgImages[1]["background-image2"]
            }
            title={"Baground"}
            setState={setState}
            state={state}
          />

          <PopoverDemo
            BgImages={BgImages[2]["category-image"]}
            title={"Category"}
            setState={setState}
            state={state}
          />

          <br />
          <Button className="w-2/5 mx-auto border border-gray-500 p-1 font-bold text-lg text-blue-900 rounded-md flex gap-2 items-center bg-gradient-to-r from-blue-300 to-red-400">
            Download
          </Button>
          {/* <Image src={baground ?? ''} alt='Image' width={400} height={300}/>
        <Image src={category ?? ''} alt='Image' width={400} height={300}/> */}
        </div>

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
            src={`http://localhost:3000/api/og?title=${state.title}&description=${state.description}&width=${state.width}&height=${state.height}&baground=${state.baground}&category=${state.category}&special=${state.special}&vendorlogo=${state.vendorLogo}&imageid=${state.imageId}&socialMedia=${socialMedia}`}
            alt="pic"
            width={"100%"}
          />
        </div>
      </div>
    </main>
  );
}
// hjbckjskn
