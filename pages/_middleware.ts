import { NextResponse } from "next/server";

const pagesThatRequireAuth = ["/", "/playlist", "/libary"];

export default function middleware(req) {
  if (pagesThatRequireAuth.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.STEWTUNES_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
