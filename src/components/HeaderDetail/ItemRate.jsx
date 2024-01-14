

const Item = ({ children, title }) => {
   return (
      <div className="flex flex-col">
         <h2 className="font-medium text-sm md:text-md dark:text-color-primary text-center">{title}</h2>
         <div className="flex items-center gap-x-1 flex-1">
            {children}
         </div>
      </div>
   )
}

export default Item