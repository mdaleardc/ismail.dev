import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata = {
  title: "Mohammed Ismail | Teacher & Full-Stack Developer",
  description: "Portfolio of Mohammed Ismail, a primary school teacher and self-taught web developer building free tools for the Rohingya community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
