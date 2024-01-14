import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeNested, getAnimeResponse, randomAnime } from "@/libs/api-libs";

export default async function Home() {
   const topAnime = await getAnimeResponse("top/anime", "limit=10");
   let recomendationAnime = await getAnimeNested("recommendations/anime", "entry");
   recomendationAnime = randomAnime(recomendationAnime, 5)

   return (
      <main className="py-4">
         <section className="max-w-6xl mx-auto p-5 lg:p-4 ">
            <Header text={"Popular Anime"} linkTitle={'Lihat Semua'} linkHref={"/popular/1"} />
            <AnimeList api={topAnime} />
         </section>
         <section className="max-w-6xl mx-auto p-5 lg:p-4 ">
            <Header text={"Recommendation Anime"} />
            <AnimeList api={recomendationAnime} />
         </section>
      </main>
   )
}
