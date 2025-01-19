import type { Metadata } from "next";
import { Cairo_Play, Contrail_One, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/includes/Header";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const cairo = Cairo_Play({
  variable: "--font-cairo-one",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "New Look",
  description: "Magasin de mode - Prêt à porter"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${cairo.variable} antialiased`}
      >
        <main className="app container">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
