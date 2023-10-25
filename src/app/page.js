/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import WhatCall from "@/components/whatCall";
import InstaCall from "@/components/instaCall";
import Form from "@/components/Form";

export default function Home() {
  const [state, setState] = useState({
    title: "Navratri Vrat Special",
    description: "Sabudana Khichdi, Upwas thali & More",
    background: "",
    category: "",
    vendorLogo: "",
    special: "Order Navratri specials from our restaurants now!",
    width: 1080,
    height: 1920,
  });
  
  return (
    <main className="p-20 bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300">
      <div className="flex justify-between w-full gap-10 p-10">
        <Form setState={setState} state={state} />
        {state.height === 1920 ? (
          <WhatCall state={state} />
        ) : (
          <InstaCall state={state} />
        )}
      </div>
    </main>
  );
}
