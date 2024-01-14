"use client"

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoSend } from "react-icons/io5"

const InputComment = ({ user_email, user_name, anime_mal_id, anime_title }) => {
   const input = useRef(null);
   const router = useRouter();

   const handeSubmit = async (event) => {
      event.preventDefault();
      if (!user_email && !user_name) return alert('Login dulu')

      const text = input.current.value;
      if (!text || text.trim() == "" || text.trim().length < 3) return

      const data = { user_email, user_name, anime_mal_id, anime_title, text }

      const response = await fetch('/api/v1/comment', {
         method: "POST",
         body: JSON.stringify(data)
      })
      const comment = await response.json();
      if (comment.status == 200) {
         input.current.value = "";
      }

      return router.refresh();
   }

   return (
      <form onSubmit={handeSubmit}>
         <div className="py-2 flex items-center gap-x-2" >
            <input
               ref={input}
               type="text"
               placeholder="Add Comment ..."
               className="flex-1 text-sm  md:text-md dark:text-color-primary outline-none bg-transparent border-b border-b-black p-1 dark:border-b-color-darkSecondary"
            />
            <button
               type="submit"
               onClick={handeSubmit}
               className="bg-color-accent p-2 dark:bg-color-darkSecondary hover:bg-indigo-800 rounded-full"
            >
               <IoSend className="text-white text-[14px]" />
            </button>
         </div>
      </form>
   )
}

export default InputComment