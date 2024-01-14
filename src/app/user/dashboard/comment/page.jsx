import Header from "@/components/Dashboard/Header";
import HoverOverlay from "@/components/Utilities/HoverOverlay";
import { getUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
// import Image from "next/image";
// import Link from "next/link";
import { redirect } from "next/navigation";


const Page = async () => {
   const user = await getUserSession();
   if (!user) return redirect("/");

   const comment = await prisma.comment.findMany({
      where: { user_email: user.email }
   });

   if (comment.length == 0) return <NotFound />


   return (
      <Layout>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-4">
            {
               comment.map((com, index) => {
                  return (
                     <Link key={index}
                        href={`/anime/${com.anime_mal_id}`}
                        className="dark:bg-color-darkSecondary rounded-lg relative group h-auto border border-color-borderColor overflow-hidden px-3 py-2"
                     >
                        <h3 className="dark:text-color-primary font-semibold"> {com.anime_title} </h3>
                        <p className="dark:text-color-primary text-sm mt-1"> {com.text} </p>
                        <HoverOverlay bgColor={"bg-gray-200/10"} />
                     </Link>
                  )
               })
            }

         </div>
      </Layout>

   )
}
const NotFound = () => {
   return (
      <Layout >
         <div className="text-center mt-4">
            <h3 className="text-white text-lg"> Belom ada comment </h3>
            <Link href={"/"} className="text-sm text-white underline"> comment sesuatu sekarang.. </Link>
         </div>
      </Layout>
   )
}
const Layout = ({ children }) => {
   return (
      <section className="max-w-6xl mx-auto p-5 lg:p-4">
         <Header title={"My Comment"} />
         {children}
      </section>
   )
}

export default Page