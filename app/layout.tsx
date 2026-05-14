import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "The Butterfly Insights",
  description:
    "Insights about the butterfly effect and its implications in various fields.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-inter bg-background text-foreground max-w-2xl mx-auto">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
