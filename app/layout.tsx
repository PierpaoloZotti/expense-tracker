import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import AuthProvider from "@/app/context/AuthProvider";
import Navbar from "@/components/Navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          <Navbar />
          <main className="flex justify-center items-center">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
