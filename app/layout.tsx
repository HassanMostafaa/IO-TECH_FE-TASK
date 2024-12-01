import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import favIcon from "../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT | ENVIRONMENT | PRACTICE",
  description: "NEXT | ENVIRONMENT | PRACTICE By: Hassan Mohamed",
  // icons: {
  //   icon: "https://irongeek.gallerycdn.vsassets.io/extensions/irongeek/vscode-env/0.1.0/1602639667760/Microsoft.VisualStudio.Services.Icons.Default",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
