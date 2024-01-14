"use client"
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Pagination = ({ page, lastPage }) => {
   const pages = parseInt(page);
   const router = useRouter();

   const handlePrev = () => {
      router.push(`/popular/${pages - 1}`)
   }
   const handleNext = () => {
      router.push(`/popular/${pages + 1}`)
   }

   return (
      <div className="w-full my-2 flex justify-between items-center">
         <div>
            <h3 className="text-sm md:text-md font-semibold">Halaman {page} of {lastPage}</h3>
         </div>
         <div className="flex justify-center gap-x-2 items-center">
            {page >= 2 ?
               <Icon handleClick={handlePrev} >
                  <FaArrowLeft />
               </Icon>
               :
               <Icon handleClick={handlePrev} disabled={true}>
                  <FaArrowLeft />
               </Icon>
            }
            {
               page < lastPage ?
                  <Icon handleClick={handleNext} >
                     <FaArrowRight />
                  </Icon>
                  :
                  <Icon handleClick={handleNext} disabled={true}>
                     <FaArrowRight />
                  </Icon>
            }

         </div>
      </div>
   )
}

const Icon = ({ children, handleClick, disabled }) => {
   const style = {
      default: "relative p-2 bg-gray-300 dark:bg-color-darkSecondary hover:bg-gray-300/70 dark:hover:bg-color-darkSecondary/70 rounded overflow-hidden transition-all",
      disabled: "relative p-2 bg-gray-300 dark:bg-color-darkSecondary  rounded overflow-hidden transition-all"
   }
   return (

      <button onClick={handleClick}
         className={!disabled ? style.default : style.disabled}
         disabled={disabled}
      >
         {children}

         {disabled ?
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300/70 "></div>
            :
            null
         }
      </button>
   )
}

export default Pagination