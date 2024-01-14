import prisma from "@/libs/prisma";


export async function POST(request) {
   const { user_email, anime_mal_id, anime_title, anime_image } = await request.json();
   const data = { user_email, anime_mal_id, anime_title, anime_image }

   const collection = await prisma.collection.create({ data });

   if (!collection) return Response.json({ status: 500, isCreated: false });
   else return Response.json({ status: 200, isCreated: true });

}