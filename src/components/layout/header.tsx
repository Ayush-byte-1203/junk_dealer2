"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Recycle, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
    { href: "/", label: "Home" },
    { href: "/sell-junk", label: "Sell Scrap" },
    { href: "/shop", label: "Shop" },
    { href: "/live-prices", label: "Live Prices" },
    { href: "/sell-item", label: "Sell Your Item" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Recycle className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">EcoTrade Hub</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                        <Recycle className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline text-lg">EcoTrade Hub</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close Menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
