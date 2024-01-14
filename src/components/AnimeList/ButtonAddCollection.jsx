"use client"

import { useState } from "react"

const ButtonAddCollection = ({ user_email, anime_mal_id, anime_title, anime_image }) => {
   const [isCreated, setIsCreated] = useState(false);
   const data = { user_email, anime_mal_id, anime_title, anime_image };

   const handleAddCollection = async (event) => {
      event.preventDefault();
      const response = await fetch('/api/v1/collection', {
         method: "POST",
         body: JSON.stringify(data)
      })
      const collection = await response.json();
      if (collection.status == 200) {
         setIsCreated(collection.isCreated);
      }
      return
   }

   return (
      <>
         {
            isCreated
               ?
               <div className="px-2 py-1 bg-color-accent">
                  <p className="text-white text-sm">Collected</p>
               </div>
               :
               <button
                  className="px-2 py-1 bg-color-accent hover:bg-indigo-950 text-white text-sm 
                    transition-all duration-300"
                  onClick={handleAddCollection}
               >
                  Add To Collection
               </button>

         }

      </>
   )
}

export default ButtonAddCollection