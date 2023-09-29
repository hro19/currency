import './globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import GlobalMenu from '@/components/common/GlobalMenu';


const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Providers>
          <GlobalMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
