import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  console.log(request?.cookies, "this is path");
  const isPublicPath = path === "/";

  let token = request.cookies.get("accessToken")?.value;
  console.log(token, "token");
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/cart", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //console.log("run before render");

  //let token = null; //request.localStorage.getItem("token") || null;
  //console.log(token);
  //   if (token !== null) {
  //     return NextResponse.redirect(new URL("/dashboard", request.url));
  //   } else {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    // "/dashboard",
    // "/orders",
    // "/write-blog",
    // "/blogs",
    // "/users",
    // "/add-product",
    // "/products-list",
  ],
};
