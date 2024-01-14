import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";


const Page = async ({ params }) => {

   const keyword = params.keyword;
   const decodedKeyword = decodeURI(keyword);
   const anime = await getAnimeResponse(`anime`, `q=${decodedKeyword}`);

   return (
      <>
         <AnimeList api={anime} />
      </>
   )
}

export default Page