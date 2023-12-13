import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-yellow py-20'>
      <div className='container flex flex-col justify-between gap-5 sm:flex-row sm:items-center'>
        <p>
          &copy; {new Date().getFullYear()}, Aphrodite Beauty Salon & Spa Ltd.
          All Rights Reserved.
        </p>
        <div className='flex items-center gap-2.5'>
          <Link
            href='/'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-magenta hover:text-white'
          >
            <Facebook size={18} />
          </Link>
          <Link
            href='/'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-magenta hover:text-white'
          >
            <Instagram size={18} />
          </Link>
          <Link
            href='/'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-magenta hover:text-white'
          >
            <Twitter size={18} />
          </Link>
          <Link
            href='/'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-magenta hover:text-white'
          >
            <Youtube size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
