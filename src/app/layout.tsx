import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppBar } from "./components/AppBar";
import Logo from "./components/Logo";
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
      <AppBar.Root>
        <Logo />
        <AppBar.Actions>
          <AppBar.Action text="Início" href="#"/>
          <AppBar.Action text="Sobre nós" href="#about-us"/>
          <AppBar.Action text="Contate-nos" href="#contact-us"/>
          <AppBar.Action text="Por que nós?" href="#why-us"/>
        </AppBar.Actions>
      </AppBar.Root>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
