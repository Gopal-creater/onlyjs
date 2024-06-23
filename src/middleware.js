import { NextResponse } from "next/server";
import { getToken } from "./lib/services/auth.services";
import { ROUTE_RULES } from "./constants/constants";

export default async function middleware(req) {
  // Get token from your authentication service
  const token = await getToken();
  const { pathname } = req.nextUrl;

  // ******** Delete Cookie if the path is unauthorized*******
  if (pathname === "/unauthorized" && token) {
    const response = NextResponse.next();

    response.cookies.set("onlyjs_cookie", "", {
      path: "/",
      expires: new Date(0),
    });

    return response;
  }
  // ********-------------------------------------------*******

  // Find the most specific matching route rule using regex
  const routeRule = ROUTE_RULES.find((rule) => {
    const regex = new RegExp(`^${rule.path}(\\/|$)`);
    return regex.test(pathname);
  });

  // If no matching route rule is found, continue processing the request
  if (!routeRule) {
    return NextResponse.next();
  }

  // Handle redirection based on route rules and token status
  if (routeRule.access === "public" && token) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (routeRule.access === "protected" && !token) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  // If the route rule matches but no redirection is needed, continue processing the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
