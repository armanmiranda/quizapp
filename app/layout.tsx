import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quizapp",
  description: "This is a prototype Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <div className="bg-[aliceblue] h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
