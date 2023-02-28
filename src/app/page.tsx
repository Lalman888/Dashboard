import Dashboard from '@/app/Dashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'A simple, fast, and powerful web development tool',

};

export default function Home() {
  return (
    <Dashboard />
  );
}
