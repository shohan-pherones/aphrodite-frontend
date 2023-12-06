import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aphrodite | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(lora.className, "bg-light text-black antialiased")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
