import { getAnimeResponse } from "@/libs/api-libs"
import { getUserSession } from "@/libs/auth-libs"
import HeaderDetail from "@/components/HeaderDetail"
import Detail from "@/components/HeaderDetail/Detail.jsx"
import Rates from "@/components/HeaderDetail/Rates.jsx"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import ButtonAddCollection from "@/components/AnimeList/ButtonAddCollection"
import prisma from "@/libs/prisma"
import CommentBox from "@/components/CommentBox"
import InputComment from "@/components/CommentBox/InputComment"


const Page = async ({ params: { id } }) => {
   const anime = await getAnimeResponse(`anime/${id}`);

   const user = await getUserSession();
   const collection = await prisma.collection.findFirst({
      where: { user_email: user?.email, anime_mal_id: id }
   });


   return (
      <>
         <div className="pt-4">
            <HeaderDetail>
               <Detail anime={anime} />
               <Rates anime={anime} isMobile={false} />
            </HeaderDetail>
            <div className="flex flex-col items-center sm:justify-normal sm:flex-row gap-x-1 py-2 px-2">
               <div className="relative w-[250px] h-[300px] sm:w-[250px] sm:h-[350px] rounded">
                  <Image
                     src={anime.data?.images.webp.image_url}
                     alt="gambar anime"
                     fill={true}
                     sizes="(min-width: 250px) 100vw, 100vw"
                     priority={true}
                     className="rounded"
                  />
                  <div className="absolute top-4 md:top-2 right-0 rounded-ss-md rounded-es-md overflow-hidden">
                     {!user && null}
                     {
                        !collection && user &&
                        <ButtonAddCollection
                           anime_mal_id={id}
                           user_email={user?.email}
                           anime_image={anime.data?.images.webp.image_url}
                           anime_title={anime.data?.title}
                        />
                     }
                     {collection && user &&
                        <div className="p-1 sm:px-2 sm:py-1 bg-color-accent">
                           <p className="text-white text-[11px] sm:text-sm ">Collected</p>
                        </div>
                     }
                  </div>
               </div>
               <div className="flex-1 hidden sm:block">
                  <VideoPlayer youtubeId={anime.data?.trailer.youtube_id} images={anime.data?.images.jpg.large_image_url} />
               </div>
            </div>
            <div>
               <Rates anime={anime} isMobile={true} />
            </div>
            <div className="p-2">
               <div className="flex flex-col gap-y-3 bg-color-secondary  dark:bg-color-darkSecondary shadow-lg rounded-lg p-3 md:px-3 md:py-2">
                  <div className="flex gap-x-2 md:pt-2">
                     {anime.data?.genres.map((genre, i) => {
                        return (
                           <div key={i} className="bg-color-accent dark:bg-gray-500 rounded-full px-2 py-1">
                              <p className="text-color-primary dark:text-slate-200 font-semibold text-[11px] md:text-sm">
                                 {genre.name}
                              </p>
                           </div>
                        )
                     })}
                  </div>
                  <div className="synopsis">
                     <p className="text-black dark:text-color-primary  text-[12px] md:text-lg">{anime.data?.synopsis}</p>
                  </div>

               </div>
            </div>
            <div className="p-2">
               <CommentBox anime_mal_id={id}>
                  <InputComment user_name={user?.name}
                     user_email={user?.email}
                     anime_mal_id={id}
                     anime_title={anime.data.title}
                  />
               </CommentBox>
            </div>
         </div>
      </>
   )
}

export default Page