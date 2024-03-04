import { extendTheme } from '@chakra-ui/react'
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["latin"],
   });

const theme = extendTheme({
  fonts: {
    heading: `${noto.style.fontFamily}, sans-serif`,
    body: `${noto.style.fontFamily}, sans-serif`,
  },
})

export default theme