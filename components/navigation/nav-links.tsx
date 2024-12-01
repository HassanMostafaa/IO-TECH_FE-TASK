'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function NavLinks() {
  const pathname = usePathname()
  
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <Link
        href="/"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Home
      </Link>
      <Link
        href="/register"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/register") ? "text-foreground" : "text-foreground/60"
        )}
      >
        Register
      </Link>
    </nav>
  )
}
