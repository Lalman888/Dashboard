import type { Metadata } from 'next';
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",

})
export const metadata: Metadata = {
  title: 'tailwind turbopack',
  description: 'A simple, fast, and powerful web development tool',

};

export default function Home() {
  return (
    <div className={`${montserrat.variable} grid bg-black w-full h-screen place-items-center`}>
      <h1 className="font-montserrat text-3xl text-red-500">Dashboard</h1>
    </div>
  );
}
