import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // const reqUrl = new URL(req.url);
  // console.log(reqUrl);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
