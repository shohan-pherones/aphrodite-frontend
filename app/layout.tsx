import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aphrodite | Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(lora.className, 'bg-light text-black antialiased')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
