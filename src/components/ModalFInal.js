"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { useContext } from "react";

export function PopoverDemo({ BgImages, title, setState, state }) {
  const { setBaground, setCategory } = useContext(AuthContext);

  const handleImages = (item, id) => {
    if (title === "Baground") {
      setBaground(item);
      setState({ ...state, baground: item, imageId: id });
    } else if (title === "Category") {
      setCategory(item);
      setState({ ...state, category: item });
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger className="border border-gray-500 bg-gray-100" asChild>
          <Button variant="outline">Choose {title} Image</Button>
        </PopoverTrigger>
        <PopoverContent className="w-100 flex gap-3 border border-gray-400 bg-white">
          {BgImages.map((image) => (
            <Image
              onClick={() => handleImages(image.src, image.id)}
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
