import Link from "next/link";
import { GoDotFill } from "react-icons/go";


const Header = ({ text, linkHref, linkTitle, detail }) => {
   const styleHeader = {
      default: "bg-color-accent py-1 px-2 rounded-lg",
      mb: "mb-2"
   }
   return (
      <>
         <div className={detail ? styleHeader.default : `${styleHeader.default} ${styleHeader.mb} `}>
            <div className="flex items-center justify-between gap-1">
               <h1 className=" text-color-primary font-semibold flex items-center gap-1 capitalize">
                  <GoDotFill /> {text}
               </h1>
               {linkHref ?
                  (<Link href={linkHref}
                     className="text-color-primary text-sm underline font-semibold"
                  >
                     {linkTitle}
                  </Link>)
                  : null}
            </div>
         </div>

      </>
   )
}

export default Header