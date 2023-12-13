import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PrimaryLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline-block rounded-full bg-green px-9 py-4 font-semibold transition hover:bg-rose lg:text-lg xl:text-xl',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
