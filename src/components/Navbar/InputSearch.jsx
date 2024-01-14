"use client"
import { useRouter } from "next/navigation";
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

const InputSearch = () => {
   const input = useRef(null);
   const router = useRouter();

   const handleSearch = (e) => {
      if (e.key === "Enter" || e.type == "click") {
         e.preventDefault();
         const keyword = input.current.value;

         if (!keyword || keyword.trim() == "") return;
         router.push(`/search/${keyword}`);
      }
   }

   return (
      <div className="sm:ms-3 bg-color-secondary dark:bg-color-darkSecondary py-1 px-2  rounded-lg flex items-center sm:justify-center gap-1">
         <input type="text"
            ref={input}
            placeholder="search..."
            onKeyDown={handleSearch}
            className="px-2 py-1 flex-1 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:text-color-primary text-[12px] font-semibold  outline-none bg-transparent"
         />
         <div className="dark:bg-color-dark p-2 rounded-lg">
            <BsSearch onClick={handleSearch}
               className="cursor-pointer lg:text-lg dark:text-color-primary "
            />
         </div>
      </div>
   )
}

export default InputSearch