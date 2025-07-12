"use client"

import * as React from "react"
import Link from "next/link"
import { Recycle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "../ui/sidebar"


const navItems = [
    { href: "/", label: "Home" },
    { href: "/sell-junk", label: "Sell Scrap" },
    { href: "/shop", label: "Shop" },
    { href: "/live-prices", label: "Live Prices" },
    { href: "/sell-item", label: "Sell Your Item" },
];

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-30 w-full border-b">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <SidebarTrigger />
        </div>
        <div className="hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">EcoTrade Hub</span>
            </Link>
        </div>
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
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
