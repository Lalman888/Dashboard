import "./globals.css";
import { MenuIcon } from "lucide-react"
import { Montserrat } from "next/font/google"
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
        <aside className=' px-7'>
          <button>
            <MenuIcon className="my-5" />
          </button>
        </aside>
        {children}
      </body>
    </html>
  );
}
