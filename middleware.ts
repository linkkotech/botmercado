import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("sb-access-token")?.value;
  const { pathname } = req.nextUrl;

  // Se usuário estiver autenticado e for rota pública → redirecionar para admin
  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // Se não autenticado e rota for /admin → redirecionar login
  if (!token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match admin routes
    "/admin/:path*",
    // Match auth routes
    "/auth/:path*",
  ],
};
