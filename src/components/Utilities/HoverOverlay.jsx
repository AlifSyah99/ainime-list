

const HoverOverlay = ({ bgColor, children }) => {
   return (
      <div className={`${bgColor} absolute top-0 left-0 z-50 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity`}>
         <div className="flex justify-center items-center h-full">
            <p className="text-white text-center text-md font-semibold">
               {children}
            </p>
         </div>
      </div>
   )
}

export default HoverOverlay