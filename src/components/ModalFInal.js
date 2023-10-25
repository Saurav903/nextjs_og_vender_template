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
      setState({ ...state, background: id });
    } else if (title === "Category") {
      setState({ ...state, category: id });
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
