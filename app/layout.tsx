import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/Layouts/Navbar";
import Footer from "@/src/Layouts/Footer";
import 'animate.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhawani Hair Saloon | Best Hair Salon in Ratlam",
  description:
    "Bhawani Hair Saloon Ratlam ki sabse behtareen hair salon shop hai. Yahan professional hair cutting, beard styling, hair spa, grooming aur beauty services uplabdh hain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>

          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
