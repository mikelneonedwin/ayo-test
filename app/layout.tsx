import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thrivr - The Business Tools Platform for Creators",
  description: "Thrivr helps creators grow their businesses by providing a suite of tools designed to streamline workflows, boost marketing efforts, and track business performance. Join our waitlist to get early access.",
  keywords: "creators, business tools, dynamic pricing, content creation, e-commerce, storefront, Thrivr",
  applicationName: "Thrivr",
  icons: "/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
