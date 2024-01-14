"use client"

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6"


const Header = ({ title }) => {
   const router = useRouter();

   const handleBack = (event) => {
      event.preventDefault();
      router.back();
   }

   return (
      <div className="flex justify-between items-center" >
         <button className="p-1 border border-color-accent dark:border-transparent dark:bg-color-darkSecondary  text-color-accent dark:text-color-primary hover:bg-color-accent dark:hover:bg-color-darkSecondary/70 hover:text-color-primary cursor-pointer rounded transition-all"
            onClick={handleBack}
         >
            <FaArrowLeft />
         </button>
         <h1 className="text-2xl dark:text-color-primary">{title}</h1>

      </div>
   )
}

export default Header