import "./globals.css";
import { MenuIcon } from "lucide-react"
import { Montserrat } from "next/font/google"
import Navbar from "./Navbar";
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",

})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat divider h-screen w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
