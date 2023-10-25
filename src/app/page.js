/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import WhatCall from "@/components/whatCall";
import InstaCall from "@/components/instaCall";
import Form from "@/components/Form";

export default function Home() {
  const [state, setState] = useState({
    title: "",
    description: "",
    background: "",
    category: "",
    vendorLogo: "",
    special: "",
    width: 1080,
    height: 1920,
  });

  return (
    <main className="bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300 p-20">
      <div className="w-full flex justify-between gap-10 p-10">
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
