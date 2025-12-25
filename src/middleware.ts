import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  // Route redirect map for old website
  const redirectMap: Record<string, string> = {
    "/codewars": "/events",
    "/gallery": "/events",
    "/team": "/about#team",
    "/teams": "/about#team",
  };

  if (redirectMap[pathname]) {
    return NextResponse.redirect(new URL(redirectMap[pathname], request.url));
  }

  return NextResponse.next();
};

export default middleware;
