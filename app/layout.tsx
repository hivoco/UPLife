import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400"], // whatever weights you need
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // optional if you want CSS variable
});

export const metadata: Metadata = {
  title: "Uplife",
  description: "Uplife healthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins} antialiased`}>{children}</body>
    </html>
  );
}
