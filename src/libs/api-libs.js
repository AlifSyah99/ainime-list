import { notFound } from "next/navigation";

export const getAnimeResponse = async (resource, query) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
   const anime = await response.json();
   if (anime.status == 404) return notFound();
   else return anime;
}

export const getAnimeNested = async (resource, ObjectProperty) => {
   const response = await getAnimeResponse(resource);
   return response.data.flatMap(item => item[ObjectProperty]);
}

export const randomAnime = (data, gap) => {
   const first = ~~(Math.random() * (data.length - gap) + 1);
   const last = first + gap;
   const response = {
      data: data.slice(first, last)
   }

   return response;
}