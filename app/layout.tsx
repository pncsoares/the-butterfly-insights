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
      <body className="min-h-full flex flex-col font-inter bg-background text-foreground max-w-2xl mx-auto px-5">
        <Providers>
          {/* {children} */}

          {/* REMOVE THIS SECTION 👇 */}
          <div className="flex flex-1  flex-col gap-10 w-full py-5 sm:py-10 text-center items-center justify-center align-center font-[playfair] select-none">
            <h1 className="text-5xl md:text-6xl">Coming Soon</h1>
            <h2 className="text-5xl md:text-6xl">𐦍</h2>
          </div>
          {/* REMOVE THIS SECTION 👆 */}
        </Providers>
      </body>
    </html>
  );
}
