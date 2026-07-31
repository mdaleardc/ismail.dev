"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="black"
      value={{
        black: "black",   // maps your custom theme name → class
        light: "light",
        dark: "dark",
      }}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}