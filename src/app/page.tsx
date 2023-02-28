import Dashboard from 'components/Dashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'A simple, fast, and powerful web development tool',

};

export default function Home() {
  return (
    <main className='divider h-screen w-full'>
      <aside className='bg-red-500 px-7'>
        <h1 className='h-96 bg-pink-500'>hiii</h1>
      </aside>
    <Dashboard/>
    </main>
  );
}
