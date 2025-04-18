import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Skip middleware for static files and API routes
  if (
    path.startsWith("/_next") ||
    path.includes(".") ||
    path.startsWith("/api/auth")
  )
    return NextResponse.next();

  // Get session token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isLoggedIn = !!token;

  // Define paths
  const loginPath = "/login";
  const securePaths = path.startsWith("/secure");
  const defaultSecurePath = "/secure/chat";

  // Case 1: User is logged in but trying to access login or public pages
  if (isLoggedIn && (path === loginPath || path === "/")) {
    return NextResponse.redirect(new URL(defaultSecurePath, request.url));
  }

  // Case 2: User is logged in and trying to access secure paths - allow
  if (isLoggedIn && securePaths) {
    return NextResponse.next();
  }

  // Case 3: User is not logged in but trying to access secure paths
  if (!isLoggedIn && securePaths) {
    const loginUrl = new URL(loginPath, request.url);
    loginUrl.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(loginUrl);
  }

  // Allow public access to other pages
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Match all paths except static files and special Next.js paths
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
