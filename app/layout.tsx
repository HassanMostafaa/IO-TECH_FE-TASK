import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IO-Tech | Frontend",
  description: "Frontend task for IO-Tech interviews by: Hassan Mohamed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
