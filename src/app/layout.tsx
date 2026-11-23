import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadiia Manakova — Portfolio",
  description: "UI/UX Designer & UI/UX Engineer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
