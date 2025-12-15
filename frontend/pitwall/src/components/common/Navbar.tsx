"use client"

import Link from "next/link"
import { FlagIcon } from "lucide-react" // Assuming lucide-react is installed via shadcn

const navItems = [
  { name: "Live Session", href: "/live" },
  { name: "Predictor", href: "/predictor" },
  { name: "Standings", href: "/standings" },
  { name: "Calendar", href: "/calendar" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-black/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <FlagIcon className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold tracking-tighter uppercase">Pitwall</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* <div className="flex items-center gap-4"> */}
           {/* Mobile menu trigger could go here */}
          {/* <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-semibold hidden md:inline-flex"> */}
            {/* Launch App */}
          {/* </Button> */}
        {/* </div> */}
      </div>
    </header>
  )
}