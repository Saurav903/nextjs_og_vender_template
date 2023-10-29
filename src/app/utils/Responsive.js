'use client'
import { useEffect, useState } from "react";

export const Responsive=()=>{
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
      
            const handleResize = () => {
              setWindowWidth(window.innerWidth);
            };
      
            window.addEventListener("resize", handleResize);
            return () => {
              window.removeEventListener("resize", handleResize);
            };
        }
    }, []);
    
    const isSmallScreen = windowWidth <= 550;

    const isMediumScreen = windowWidth <= 820
    
    return {isSmallScreen,isMediumScreen}
}