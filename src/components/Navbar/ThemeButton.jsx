"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeButton = ({ isMobile = false }) => {
   const { resolvedTheme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   // fix render ui missmatch di client component
   useEffect(() => {
      setMounted(true);
   }, [])

   if (!mounted) return null

   const handleTheme = (event) => {
      event.preventDefault();
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
   }
   const style = isMobile ? "block sm:hidden" : "hidden sm:block";
   return (
      <div className={style}>
         <button
            onClick={handleTheme}
            className="h-[35px] w-[35px] sm:h-[42px] sm:w-[42px] rounded-lg bg-color-accent dark:bg-color-darkSecondary flex justify-between items-center overflow-hidden"
         >
            {resolvedTheme === "dark"
               ?
               <MdOutlineLightMode className="w-full text-color-primary" />
               :
               <MdDarkMode className="w-full text-color-primary" />
            }
         </button>
      </div>
   )
}

export default ThemeButton