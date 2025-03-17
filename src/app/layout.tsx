import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AbleTo",
  description: "Developing products that help people with disabilities.",
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
