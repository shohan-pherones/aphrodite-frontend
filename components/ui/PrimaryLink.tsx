import { cn } from "@/lib/utils";
import Link from "next/link";

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
        "lg:text-lg xl:text-xl inline-block bg-green py-4 px-9 rounded-full font-semibold hover:bg-rose transition",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
