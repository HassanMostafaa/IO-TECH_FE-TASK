import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./nav-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
        <div className="mr-4 flex items-center w-full">
          <Link href="/" className="mr-6 flex items-center">
            <Image
              src="https://www.i-o-tech.net/wp-content/uploads/2020/05/iotech_logo.png"
              alt="IO-Tech Logo"
              width={80}
              height={20}
              priority
            />
          </Link>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
