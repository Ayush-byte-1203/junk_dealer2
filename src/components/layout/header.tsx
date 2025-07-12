"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Recycle, X, ShoppingCart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Badge } from "../ui/badge"

const navItems = [
    { href: "/", label: "Home" },
    { href: "/sell-junk", label: "Sell Scrap" },
    { href: "/shop", label: "Shop" },
    { href: "/live-prices", label: "Live Prices" },
    { href: "/sell-item", label: "Sell Your Item" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { cartItems } = useCart();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
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
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild variant="ghost" size="icon">
                <Link href="/cart">
                    <div className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        {isMounted && totalItems > 0 && (
                            <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs rounded-full">
                                {totalItems}
                            </Badge>
                        )}
                    </div>
                    <span className="sr-only">View Cart</span>
                </Link>
            </Button>
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 pt-4 border-t">
                <Button asChild variant="ghost" className="w-full">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="w-full">
                    <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
