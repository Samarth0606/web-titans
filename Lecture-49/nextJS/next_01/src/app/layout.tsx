import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "mai hu meta title",
  description: "Samarth Vohra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h2>Welcome to my navbar</h2>
        {children}
        <h2>Welcome to my footer</h2>
      </body>
    </html>
  );
}
