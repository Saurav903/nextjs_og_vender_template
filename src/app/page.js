"use client";
import { useContext, useState } from "react";
import { PopoverDemo } from "./components/ModalFInal";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { AuthContext } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Home() {
  const { baground, category } = useContext(AuthContext);

  const [state, setState] = useState({
    title: "",
    description: "",
    baground: baground,
    category: category,
    vendorLogo: null,
    special: "",
    width: 1080,
    height: 1320,
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value;
    if (name == "vendorLogo") {
      value = URL.createObjectURL(e.target.files[0]);
    } else {
      value = e.target.value;
    }
    setState({ ...state, [name]: value });
  };

  console.log(state);

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
      "category-image": [
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634895/irctc/post/elements/food/post-food-1.png",
          alt: "image4",
          id: 4,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634893/irctc/post/elements/food/post-food-2.png",
          alt: "image2",
          id: 5,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-3.png",
          alt: "image3",
          id: 6,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634894/irctc/post/elements/food/post-food-4.png",
          alt: "image4",
          id: 7,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-5.png",
          alt: "image5",
          id: 8,
        },
        {
          src: "https://neon.ipsator.com/c/image/upload/v1697634892/irctc/post/elements/food/post-food-6.png",
          alt: "image6",
          id: 9,
        },
      ],
    },
  ];

  return (
    <main className="bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300 p-20">
      <div className="w-full flex justify-between gap-10 p-10">
        <div className="w-1/2 h-full py-12 border border-gray-400 flex flex-col px-56 mx-auto gap-5 rounded-lg bg-gradient-to-r from-blue-200 to-red-200">
          <h1 className="font-extrabold mx-auto text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">
            Vendor Form
          </h1>
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
            BgImages={BgImages[0]["baground-image"]}
            title={"Baground"}
          />

          <PopoverDemo
            BgImages={BgImages[1]["category-image"]}
            title={"Category"}
          />
          <div className="flex gap-5 mx-auto">
            <Button
              className="border border-gray-500 p-2 rounded-md flex gap-2 items-center bg-gray-100"
              onClick={() => setState({ ...state, width: 1080, height: 1350 })}
            >
              Instagram
              <FaInstagramSquare className="text-red-500 text-[25px]" />
            </Button>
            <Button
              className="border border-gray-500 p-2 rounded-md flex gap-2 items-center bg-gray-100"
              onClick={() => setState({ ...state, width: 1080, height: 1920 })}
            >
              Whatsapp
              <FaWhatsappSquare className="text-green-500 text-[25px]" />
            </Button>
          </div>
          <br />
          <Button className="w-2/5 mx-auto border border-gray-500 p-1 font-bold text-lg text-blue-900 rounded-md flex gap-2 items-center bg-gradient-to-r from-blue-300 to-red-400">
            Submit
          </Button>
          {/* <Image src={baground ?? ''} alt='Image' width={400} height={300}/>
        <Image src={category ?? ''} alt='Image' width={400} height={300}/> */}
        </div>

        <div style={{ flex: "5" }}>
          <iframe
            style={{
              minWidth: "100%",
              minHeight: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "0px",
              borderRadius: "10px",
            }}
            src={`http://localhost:3000/api/og?title=${state.title}&description=${state.description}&width=${state.width}&height=${state.height}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* <Link href={`/api/og?title=have`}>button</Link> */}
    </main>
  );
}
