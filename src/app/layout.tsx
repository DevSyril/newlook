import type { Metadata } from "next";
import { Cairo_Play, Contrail_One, Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/includes/Header";
import { Footer } from "@/components/includes/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import ContextProvider from "./providers/ContextProvider";

const nunito = Nunito({
  variable: "--font-nunito",
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
    <ClerkProvider>

      <html lang="en">
        <body
          className={`${nunito.variable} ${cairo.variable} antialiased`}
        >
          <main className="app container flex flex-col gap-6">
            <ContextProvider>
              <Header />
              {children}
              <Footer />
            </ContextProvider>
          </main>
        </body>
      </html>

    </ClerkProvider>
  );
}
