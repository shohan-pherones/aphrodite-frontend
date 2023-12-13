'use client';

import { navLinks } from '@/data/navLinks';
import { cn } from '@/lib/utils';
import { Menu, ShoppingBag, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [shouldMobileNavOpen, setShouldMobileNavOpen] =
    useState<boolean>(false);

  const pathname = usePathname();

  return (
    <>
      <header className='sticky top-0 z-[100] flex h-24 items-center bg-white/80 backdrop-blur-lg'>
        <nav className='container flex items-center justify-between gap-5'>
          {/* LOGO */}
          <Link
            onClick={() => setShouldMobileNavOpen(false)}
            href='/'
            className='group text-2xl font-semibold lowercase transition hover:text-magenta'
          >
            Aphrodite
            <span className='text-green transition group-hover:text-blue'>
              .
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className='hidden items-center gap-5 md:flex'>
            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <Link
                  href={navLink.href}
                  className={cn('transition hover:text-magenta', {
                    'text-green': pathname === navLink.href,
                  })}
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* COMMON NAV */}
          <div className='flex items-center gap-5'>
            <Link
              onClick={() => setShouldMobileNavOpen(false)}
              href='/sign-in'
              className='text-green transition hover:text-magenta'
            >
              Sign in
            </Link>
            <span className='h-4 w-px bg-gray' />
            <button
              className='group relative'
              onClick={() => setShouldMobileNavOpen(false)}
            >
              <span>
                <ShoppingBag size={20} />
              </span>
              <span className='absolute -bottom-2 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green text-xs font-semibold text-white transition group-hover:bg-magenta'>
                0
              </span>
            </button>

            {/* TOGGLE MOBILE NAV */}
            <button
              className='inline-block transition hover:text-magenta md:hidden'
              onClick={() => setShouldMobileNavOpen(!shouldMobileNavOpen)}
            >
              {shouldMobileNavOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE NAV */}
      {shouldMobileNavOpen && (
        <ul
          onClick={() => setShouldMobileNavOpen(false)}
          className='fixed bottom-0 left-0 right-0 top-[6rem] z-[99] flex h-[100%-6rem] w-full flex-col items-center justify-center gap-5 bg-black text-2xl text-white md:hidden'
        >
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <Link
                href={navLink.href}
                className={cn('transition hover:text-rose', {
                  'text-green': pathname === navLink.href,
                })}
              >
                {navLink.label}
              </Link>
            </li>
          ))}

          {/* LOWER BORDER */}
          <span className='absolute bottom-0 left-0 right-0 h-2 w-full bg-gradient-to-r from-pink to-rose' />
        </ul>
      )}
    </>
  );
};

export default Navbar;
