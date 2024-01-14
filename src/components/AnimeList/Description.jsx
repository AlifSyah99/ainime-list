import { FaStar } from "react-icons/fa6";

const Description = ({ children }) => {
   return (
      <div className="absolute top-4 right-0 bg-color-accent px-2 py-1 rounded-ss-md rounded-es-md">
         <p className="text-white font-semi-bold text-sm flex gap-1 items-center">
            <FaStar />
            {children}
         </p>
      </div>
   )
}

export default Description