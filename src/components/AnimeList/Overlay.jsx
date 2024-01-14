
const Overlay = ({ children }) => {
   return (
      <div className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-[opacity] duration-300">
         <div className="flex justify-center items-center h-full">
            <p className="text-white text-center text-md font-semibold"> {children}</p>
         </div>
      </div>
   )
}

export default Overlay