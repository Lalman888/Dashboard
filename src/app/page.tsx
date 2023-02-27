import type { Metadata } from 'next';
export const metadata:Metadata = {
  title: 'tailwind turbopack',
  description: 'A simple, fast, and powerful web development tool',
  
};

export default async function Home() {
  let data=await fetch("/api/hello")
  data=await data.json();
  console.log(data);
  return (
    <div className={`grid bg-black w-full h-screen place-items-center`}>
      <h1 className="font-montserrat text-3xl text-red-500">hiii</h1>
    </div>
  );
}
