"use client"
import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";

const Detail = ({ anime }) => {
   const [isLong, setIslong] = useState(false);
   const checkLength = (title) => {

      if (title?.length > 40) {
         setIslong(true)
      } else {
         setIslong(false);
      }

   }
   useEffect(() => {
      checkLength(anime.data?.title);
   }, [anime])

   const styleTitle = {
      default: "text-2xl md:text-3xl lg:text-4xl dark:text-color-primary font-bold",
      sm: "text-xl lg:text-2xl dark:text-color-primary font-bold"
   }
   return (
      <div className="flex flex-col">
         <h1 className={isLong ? styleTitle.sm : styleTitle.default}>
            {anime.data?.title}
         </h1>
         <div className="flex items-center gap-x-1">
            {anime.data?.year ?
               <>
                  <p className="text-[12px] md:text-sm dark:text-color-secondary"> {anime.data.year} </p>
                  <BsDot className="dark:text-color-primary" />
               </>
               :
               null
            }
            {anime.data?.season ?
               <>
                  <p className="text-[12px] md:text-sm dark:text-color-secondary"> Seasons {anime.data.season} </p>
                  <BsDot className="dark:text-color-primary" />
               </>
               :
               null
            }


            <p className="text-[12px] md:text-sm dark:text-color-secondary">{anime.data?.duration} </p>
         </div>
      </div>
   )
}

export default Detail