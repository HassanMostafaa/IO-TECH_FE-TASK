import Link from 'next/link'
import { NavLinks } from './nav-links'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
        <div className="mr-4 flex items-center w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">IO-Tech</span>
          </Link>
          <NavLinks />
        </div>
      </div>
    </header>
  )
}
