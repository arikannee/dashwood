import { NextResponse } from "next/server";

export function middleware(request) {
  // Check the x-forwarded-proto header to detect the protocol.
  // Note: In some environments (like local development), this header might not be present.
  const forwardedProto = request.headers.get("x-forwarded-proto");

  // If the request is not HTTPS, redirect to the same URL with HTTPS.
  if (forwardedProto && forwardedProto !== "https") {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
