import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./nav-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col md:flex-row h-auto md:h-14 max-w-screen-2xl items-center px-4 md:px-8 mx-auto py-2 md:py-0">
        <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-0">
          <div className="mb-2 md:mb-0 md:mr-6">
            <Link href="/" className="flex items-center">
              <Image
                src="https://www.i-o-tech.net/wp-content/uploads/2020/05/iotech_logo.png"
                alt="IO-Tech Logo"
                width={80}
                height={20}
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </Link>
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
