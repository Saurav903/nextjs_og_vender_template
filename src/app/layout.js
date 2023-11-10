import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"],display: 'swap', });

export const metadata = {
  title: "Irctc Vendor's Form",
  description: "To generate open graph image",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
