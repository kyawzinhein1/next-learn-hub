import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./providers";
import { metadata } from "./metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-5 py-4 text-primary">
        <NextUIProvider>
          <Providers>{children}</Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
