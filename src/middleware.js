import { NextResponse } from 'next/server'
// import { getUserSession } from './libs/auth-libs'


export function middleware(request) {
   if (request.nextUrl.pathname === "/popular") {
      return NextResponse.redirect(new URL('/popular/1', request.url))
   }
   if (request.nextUrl.pathname === "/seasons") {
      return NextResponse.redirect(new URL('/seasons/1', request.url))
   }
   // if (request.nextUrl.pathname.startWith("/user")) {
   //    const user = await getUserSession();
   //    if (!user) return NextResponse.redirect(new URL('/', request.url))
   // }
}


// export const config = {
//    matcher: '/popular',
// }