import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ToastContainer } from "react-toastify";

import StoreProvider from "./StoreProvider";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To do List App",
  description:
    " A simple and minimalist task manager to keep you organized and productive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-gray-900 to-slate-900`}
        >
          {children}
          <ToastContainer />
        </body>
      </html>
    </StoreProvider>
  );
}
