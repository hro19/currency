import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {

  //req情報からURLを取得する
  const reqUrl = new URL(req.url);
  // console.log(reqUrl);
  // console.log(reqUrl.origin);

  const slug = params.slug;
  const res = await fetch(`https://www.floatrates.com/daily/${slug}.json`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
