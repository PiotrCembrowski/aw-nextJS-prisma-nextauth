import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Around the World",
  description: "Traveling around the world",
};

export default function RootLayout({
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
        <div className="pt-32">{children}</div>
        <Modal label="Modal" content={content} isOpen={false} />
      </body>
    </html>
  );
}
