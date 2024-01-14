import prisma from "@/libs/prisma"

const CommentBox = async ({ anime_mal_id, children }) => {
   const comments = await prisma.comment.findMany({
      where: {
         anime_mal_id
      }
   });
   // const response = await fetch(`http://localhost:3000/api/v1/comment?id=${anime_mal_id}`, {
   //    cache: "no-store"
   // });
   // const comments = await response.json();
   return (
      <div className="w-full">
         {children}
         <div className="flex flex-col gap-y-3 bg-color-secondary dark:bg-color-darkSecondary rounded-lg px-3 py-2">
            {
               comments.length > 0
                  ?
                  comments.map((comment, index) => {
                     return (
                        <div key={index}>
                           <h3 className=" text-sm md:text-md font-semibold dark:text-color-primary">
                              {comment.user_name}
                           </h3>
                           <p className="text-[11px] md:text-sm font-medium dark:text-color-primary mt-1 capitalize">
                              {comment.text}
                           </p>
                        </div>
                     )
                  })
                  :
                  <h3 className="text-center  text-sm md:text-md dark:text-color-primary font-medium">
                     Belum ada comment..
                  </h3>
            }
         </div>
      </div>
   )
}

export default CommentBox