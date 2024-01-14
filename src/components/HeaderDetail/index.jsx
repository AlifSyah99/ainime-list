"use client";

import { useEffect } from "react";

const Banner = ({ children }) => {
   const scrollTop = () => {
      scrollTo({
         behavior: "smooth",
         top: 0
      })
   }
   useEffect(() => {
      scrollTop();
   }, [])
   return (
      <div className="flex justify-between px-2">
         {children}
      </div>
   )
}

export default Banner