/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

import Form from "@/components/Form";
import RightComponentWhatsapp from "@/components/RightComponentWhatsapp";
import RightComponentInstagram from "@/components/RightComponentInstagram";
import { Responsive } from "./utils/Responsive";

export default function Home() {
  const [state, setState] = useState({
    title: "Navratri Vrat Special",
    description: "Sabudana Khichdi, Upwas thali and More",
    background: "",
    category: "",
    vendorLogo: "",
    special: "Order Navratri specials from our restaurants now!",
    width: 1080,
    height: 1920,
    bp: ["center", "500px 760px", "no-repeat"],
  });
   
  const {isMediumScreen}= Responsive()
  console.log(isMediumScreen,'medium screen')
  return (
    <main className="h-auto min-h-[100vh] w-full bg-gradient-to-r from-red-300 via-yellow-300 to-blue-300 ">
      <div className={`flex ${isMediumScreen? 'flex-col' : 'flex-row'} m-auto items-center justify-between w-full gap-10 p-4 sm:p-10 md:p-10`}>
        <Form setState={setState} state={state} />

        {state.height === 1920 ? (
          <div style={{ width: "100%" }}>
            <RightComponentWhatsapp state={state} />
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <RightComponentInstagram state={state} />
          </div>
        )}
      </div>
    </main>
  );
}
