import { getUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
// import { useRouter } from "next/router";


const Page = async () => {
   const user = await getUserSession();
   if (!user) return redirect("/")


   return (
      <section className="max-w-6xl mx-auto p-5 lg:p-4 min-h-screen">
         <div className="flex flex-col gap-y-2 justify-center items-center">
            <h1 className="text-xl font-bold dark:text-color-primary "> Welcome {user?.name} </h1>
            <Image className="w-auto h-auto rounded"
               src={user?.image}
               width={250}
               height={250}
               priority
               alt="image user"
            />
            <div className="flex justify-center items-center gap-x-1">
               <Link className="py-2 px-3 bg-color-accent dark:bg-color-darkSecondary hover:bg-color-accent/80 dark:hover:bg-gray-500 text-white inline-block font-semibold rounded-lg transition-all"
                  href="/user/dashboard/collection">
                  My Collection
               </Link>

               <Link className="py-2 px-3 bg-color-accent dark:bg-color-darkSecondary hover:bg-color-accent/80 dark:hover:bg-gray-500 text-white inline-block font-semibold rounded-lg transition-all"
                  href="/user/dashboard/comment">
                  My Comment
               </Link>
            </div>
         </div>
      </section>
   )

}

export default Page