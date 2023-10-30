"use client";
import { useState } from "react";
import Form from "@/components/Form";
import RightComponentWhatsapp from "@/components/RightComponentWhatsapp";
import RightComponentInstagram from "@/components/RightComponentInstagram";

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

  return (

    <main className="bg-gradient-to-r from-blue-300 to-red-200 h-auto min-h-[100vh]">
      <div className="grid  base:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10 justify-center items-center p-5">
        <Form setState={setState} state={state} />


        {state.height === 1920 ? (
          <div 
          // className="border border-red-400 bg-gradient-to-r from-red-200 to-red-100"
          >
            <RightComponentWhatsapp state={state} />
          </div>
        ) : (
          <div 
          // className="border border-red-400 bg-gradient-to-r from-red-200 to-red-100"
          >
            <RightComponentInstagram state={state} />
          </div>
        )}
      </div>
    </main>
  );
}
