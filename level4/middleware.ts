// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req:NextRequest){
//     console.log("middleware working...")
//     const {pathname} = req.nextUrl
//     const publicRoutes = [
//         "/login",
//         "/register",
//         "/api/auth",
//         "favicon.ico"
//     ]
//     if(publicRoutes.some(path=>pathname.startsWith(path))){
//         return NextResponse.next()
//     }
//     else {
//         const token = await getToken({req, secret:process.env.NEXT_AUTH_SECRET})
//         if(!token){
//             const loginUrl = new URL("/login", req.url)
//             console.log(loginUrl)
//             loginUrl.searchParams.set("callbackUrl", req.url)
//             return NextResponse.redirect(loginUrl)
//         }
//         return NextResponse.next()
//     }

//     //  export const config = {
//     //     matcher: "/:path*"
//     // }
// }

export async function middleware(req: NextRequest){
    const {pathname} = req.nextUrl;

    if(
        pathname.startsWith("/login") || 
        pathname.startsWith("/register") ||
        pathname.startsWith("/api/auth") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("favicon.ico")
    ) {
        return NextResponse.next();
    }
    const token = await getToken({req, secret:process.env.NEXT_AUTH_SECRET});
    if(!token){
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher:["/((?!_next/static|_next/image|favicon.ico).*)"],
};