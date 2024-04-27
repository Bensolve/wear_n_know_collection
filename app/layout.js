import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: '  Wear_N_Know Collection',
  description: 'Buy Your favorite footwear here.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  );
}
