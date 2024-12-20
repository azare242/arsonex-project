import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme";
import { ModeToggle } from "@/components/Theme/Toggle";
import { Bitcoin, HomeIcon } from "lucide-react";
import Link from "next/link";
// import styles from '@/styles/styles.module.scss'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arsonex",
  description: "Crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="gap-4  items-center justify-center rounded-xl flex flex-row p-3 m-1 mt-2 backdrop-blur-sm bg-gray-700/30  border ">
            <Bitcoin size={40} className=" transition-colors hover:text-slate-500  p-1 rounded-full border  bg-black text-white" />
            <Link href="/" className={`flex flex-row cursor-pointer transition-colors  hover:text-slate-500 `}><HomeIcon/></Link>
            <div className="ml-auto">
              <ModeToggle/>

            </div>

          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
