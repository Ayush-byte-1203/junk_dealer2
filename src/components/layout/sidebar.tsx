// src/components/layout/sidebar.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Home,
  Recycle,
  ShoppingBag,
  LineChart,
  PlusSquare,
  User,
  MapPin,
  CreditCard,
  LifeBuoy,
  LogIn,
  LogOut,
  X,
} from "lucide-react"
import { Button } from "../ui/button"

const mainNav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/sell-junk", label: "Sell Scrap", icon: Recycle },
  { href: "/shop", label: "Shop", icon: ShoppingBag },
  { href: "/live-prices", label: "Live Prices", icon: LineChart },
  { href: "/sell-item", label: "Sell Your Item", icon: PlusSquare },
]

const userNav = [
  { href: "/profile", label: "Customer Profile", icon: User },
  { href: "/address", label: "Customer Address", icon: MapPin },
  { href: "/payments", label: "Payment Methods", icon: CreditCard },
  { href: "/support", label: "Customer Care", icon: LifeBuoy },
]

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Mock auth state

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">EcoTrade Hub</span>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpenMobile(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close Menu</span>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainNav.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <hr className="my-4 border-muted-foreground/20" />
        <SidebarMenu>
          <h2 className="px-2 py-1 text-xs font-semibold text-muted-foreground">Account</h2>
          {userNav.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {isAuthenticated ? (
              <SidebarMenuButton onClick={() => setIsAuthenticated(false)}>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            ) : (
              <SidebarMenuButton asChild>
                <Link href="/login">
                  <LogIn />
                  <span>Login</span>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
