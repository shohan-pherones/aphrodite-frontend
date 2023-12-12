import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-yellow py-20">
      <div className="container flex items-center justify-between gap-5">
        <p>
          &copy; {new Date().getFullYear()}, Aphrodite Beauty Salon & Spa Ltd.
          All Rights Reserved.
        </p>
        <div className="flex gap-2.5 items-center">
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-magenta hover:text-white transition"
          >
            <Facebook size={18} />
          </Link>
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-magenta hover:text-white transition"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-magenta hover:text-white transition"
          >
            <Twitter size={18} />
          </Link>
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-magenta hover:text-white transition"
          >
            <Youtube size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
