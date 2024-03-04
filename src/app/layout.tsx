import './globals.css';
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Providers } from "./providers";
import GlobalMenu from '@/components/common/GlobalMenu';
import { HeadUser } from "@/components/HeadUser";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
 });

export const metadata: Metadata = {
  title: '通貨両替',
  description: '多種類の通貨を日本円に計算',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Providers>
          <HeadUser />
          <GlobalMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}