
import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Utilities/Pagination";

export default async function Page({ params }) {
   const { page } = params;
   const topAnime = await getAnimeResponse(`top/anime`, `page=${page}`);

   return (
      <>
         <Pagination page={page}
            lastPage={topAnime.pagination?.last_visible_page}
         />
         <AnimeList api={topAnime} />
      </>
   )
}
