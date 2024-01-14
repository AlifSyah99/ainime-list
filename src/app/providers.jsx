"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }) {
   return (
      <NextThemesProvider attribute="class" defaultTheme="dark">
         {children}
      </NextThemesProvider>
   )
}
