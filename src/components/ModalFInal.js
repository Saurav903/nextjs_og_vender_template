"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";

export function PopoverDemo({ BgImages, title, setState, state }) {
  const handleImages = (id) => {
    if (title === "Background") {
      setState({
        ...state,
        background: id,
        bp: ["center", "500px 760px", "no-repeat"],
      });
    } else if (title === "Category") {
      setState({ ...state, category: id });
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger className="border items-center border-gray-500 bg-gray-100 mb-4" asChild>
          <Button variant="outline">Choose {title} Image</Button>
        </PopoverTrigger>
        <PopoverContent className={`justify-center ${title === "Category" ? "w-[50%] m-auto md:w-full md:flex flex flex-wrap" : "flex w-full"} gap-3 border border-gray-400 bg-white`}>
          {BgImages.map((image) => (
            <Image
              onClick={() => handleImages(image.id)}
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={80}
              height={100}
              className=" border border-gray-400 cursor-pointer rounded-md"
            />
          ))}
        </PopoverContent>
      </Popover>
    </>
  );
}
