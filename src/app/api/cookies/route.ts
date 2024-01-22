import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  const token: any = cookieStore.get("token");

  return new Response("cookieにログインデータをセット", {
    status: 200,
    headers: { "Set-Cookie": `token=cccc` },
  });
}
