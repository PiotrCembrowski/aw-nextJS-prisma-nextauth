import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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

  function makeQueryClient() {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
        },
      },
    });
  }

  let browserQuertClient: QueryClient | undefined = undefined;

  function getQueryClient() {
    if (isServer) {
      return makeQueryClient();
    } else {
      if (!browserQuertClient) browserQuertClient = makeQueryClient();
      return browserQuertClient;
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">{children}</div>
        <LoginModal />
        <SignupModal />
      </body>
    </html>
  );
}
