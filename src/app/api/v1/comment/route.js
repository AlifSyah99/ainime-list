import prisma from "@/libs/prisma";


export async function POST(request) {
   const { user_email, anime_mal_id, user_name, text, anime_title } = await request.json();
   const data = { user_email, anime_mal_id, user_name, text, anime_title }

   const comment = await prisma.comment.create({ data });

   if (!comment) return Response.json({ status: 500, isCreated: false });
   else return Response.json({ status: 200, isCreated: true });

}

export async function GET(request) {
   const { searchParams } = new URL(request.url);
   const anime_mal_id = searchParams.get('id');

   const comments = await prisma.comment.findMany({
      where: {
         anime_mal_id
      }
   });
   if (!comments) return Response.json({ status: 404, data: "Id Not found" })
   return Response.json({ status: 200, data: comments })

}