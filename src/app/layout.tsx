import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Section/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hermes Bank",
  description: "Um banco inovador",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
