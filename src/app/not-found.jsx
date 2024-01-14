"use client"
import { useRouter } from "next/navigation";


const NotFound = () => {
   const router = useRouter();

   const handleBack = (event) => {
      event.preventDefault();
      router.back();
   }

   return (
      <div className="h-screen flex justify-center items-center">
         <div className="text-center flex flex-col">
            <div className="flex items-center gap-y-2">
               <h1 className="text-2xl text-color-accent dark:text-color-primary font-bold">404</h1>
               <div className="border-color-accent  dark:border-color-primary ms-4 ps-4 border-s-2">
                  <h2 className=" text-color-accent dark:text-color-primary text-2xl font-semibold leading-none"> not found</h2>
               </div>
            </div>
            <button
               onClick={handleBack}
               className="text-color-accent dark:text-color-primary text-[13px] underline"
            >
               kembali
            </button>

         </div>
      </div>
   )
}

export default NotFound