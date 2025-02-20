import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if the request is coming from localhost or a non-production environment
  const isLocal = request.headers.get("host").includes("localhost");

  // If it's not localhost and the protocol is not HTTPS, redirect to HTTPS
  if (!isLocal) {
    const forwardedProto = request.headers.get("x-forwarded-proto");

    // If it's an HTTP request, redirect to the same URL with HTTPS
    if (forwardedProto && forwardedProto !== "https") {
      const url = request.nextUrl.clone();
      url.protocol = "https";
      return NextResponse.redirect(url);
    }
  }

  // If no redirection happens, continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
