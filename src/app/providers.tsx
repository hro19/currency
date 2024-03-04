// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import theme from './theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ChakraProvider>
      </CacheProvider>
    </SessionProvider>
  );
}
