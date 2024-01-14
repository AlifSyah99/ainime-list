import Header from "@/components/Dashboard/Header";
import { getUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";



const Page = async () => {
   const user = await getUserSession();
   if (!user) return redirect("/");

   const collection = await prisma.collection.findMany({
      where: { user_email: user.email }
   })


   return (
      <section className="max-w-6xl mx-auto p-5 lg:p-4 ">
         <Header title={"My Collection"} />

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
            {
               collection.map((collect, index) => {
                  return (
                     <Link href={`/anime/${collect.anime_mal_id}`}
                        className="relative h-[250px] rounded-lg overflow-hidden group"
                        key={index}
                     >
                        <Image
                           src={collect.anime_image}
                           fill={true}
                           sizes="(min-width: 200px) 50vw, 100vw"
                           alt="gambar anime"
                           priority
                           className="h-auto w-auto object-cover"
                        />
                        <div className="absolute bottom-0 w-full h-16 flex justify-center items-center bg-black/70 transition-all group-hover:h-[100%]">
                           <h2 className="text-color-primary text-center text-md">{collect.anime_title}</h2>
                        </div>
                     </Link>
                  )
               })
            }

         </div>
      </section>
   )
}

export default Page