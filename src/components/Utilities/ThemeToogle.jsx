"use client"
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeToogle = () => {
   const [darkMode, setDarkMode] = useState(null);

   useEffect(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") setDarkMode(true);
   }, [])

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [darkMode])

   const handleToogle = (event) => {
      event.preventDefault();
      setDarkMode((prev) => !prev);
   }


   return (
      <button className="fixed bottom-2 right-2 w-[32px] md:w-[65px] h-[32px] rounded-full bg-color-accent dark:bg-color-darkSecondary flex justify-between items-center overflow-hidden p-2 z-20"
         onClick={handleToogle}
      >
         <div className="w-[22px] h-[22px] hidden md:block absolute left-2 rounded-full transition-translate bg-white duration-100"
            style={darkMode ? { translate: "30px" } : { translate: 0 }}
         >

         </div>
         <div className="grid grid-cols-2 justify-center w-full md:justify-between">
            <MdOutlineLightMode className="col-start-1 row-end-1 md:col-start-auto md:row-start-auto md:text-[32px] md:w-[22px] text-white transition-opacity duration-300"
               style={darkMode ? { opacity: 1 } : { opacity: 0 }}
            />
            <MdDarkMode className="col-start-1 row-end-1 md:col-start-auto md:row-start-auto md:text-[32px] md:w-[22px] text-white transition-opacity duration-300 md:ms-auto"
               style={darkMode ? { opacity: 0 } : { opacity: 1 }}
            />
         </div>

      </button >
   )
}

export default ThemeToogle