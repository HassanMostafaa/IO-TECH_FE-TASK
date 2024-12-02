import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Management | IO TECH",
  description: "Manage and view all members in the system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="relative min-h-screen flex flex-col">
          {/* <Navbar /> */}
          <main className="flex-1">{children}</main>
          {/* <Toaster /> */}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
