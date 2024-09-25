import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import AddReportModal from "./components/modals/AddReportModal";
import QueryClientContextProvider from "@/utils/QueryClientContextProvider";
import SearchModal from "./components/modals/SearchModal";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Around the World",
  description: "Traveling around the world",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit tempore
      mollitia facere est ea velit ex necessitatibus similique, dolore labore.
    </p>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">
          <QueryClientContextProvider>{children}</QueryClientContextProvider>
        </div>
        <SessionProvider>
          <LoginModal />
          <SignupModal />
          <AddReportModal />
          <SearchModal />
        </SessionProvider>
      </body>
    </html>
  );
}
