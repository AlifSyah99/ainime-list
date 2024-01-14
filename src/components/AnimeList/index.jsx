import Image from "next/image";
import Overlay from "./Overlay";
import Description from "./Description";
import Link from "next/link";

const AnimeList = ({ api }) => {
   const animes = api.data;

   return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ">
         {
            animes?.map((anime, i) => {
               return (
                  <Link key={i} href={`/anime/${anime.mal_id}`}
                     className="relative shadow-lg h-[250px] rounded-xl overflow-hidden cursor-pointer group dark:border-2 dark:border-color-borderColor"
                  >
                     <Image
                        src={anime.images.jpg.image_url}
                        alt="gambar anime"
                        fill={true}
                        sizes="(min-width: 200px) 50vw, 100vw"
                        className="object-cover"
                     />
                     <Description>
                        {anime.score ? anime.score : "N/a"}
                     </Description>
                     <Overlay>
                        {anime.title}
                     </Overlay>
                  </Link>
               )
            })
         }
      </div>
   )
}

export default AnimeList