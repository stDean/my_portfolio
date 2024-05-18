import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { Footer, NavBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dean | home",
  description: "My portfolio home page."
};

export default function RootLayout({ children }) {
  const now = new Date();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {children}

        <Footer time={now.getTime()} />
      </body>
    </html>
  );
}
