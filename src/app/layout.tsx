import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "next-themes";
import "./globals.css";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Y18i Blog",
  description: "A front-end programmer's personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-black dark:text-white px-3 pb-3 lg:px-0 lg:pb-0">
        <ThemeProvider attribute="class">
          <Navigation />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
