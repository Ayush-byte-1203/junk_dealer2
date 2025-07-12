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
  SidebarGroup,
  SidebarGroupLabel,
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
  Settings,
} from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const mainNav = [
  { href: "/", label: "Dashboard", icon: Home },
]

const marketplaceNav = [
    { href: "/sell-junk", label: "Sell Scrap", icon: Recycle },
    { href: "/shop", label: "Shop Products", icon: ShoppingBag },
    { href: "/live-prices", label: "Live Prices", icon: LineChart },
    { href: "/sell-item", label: "List an Item", icon: PlusSquare },
]

const userNav = [
  { href: "/profile", label: "Profile", icon: User },
  { href: "/address", label: "Addresses", icon: MapPin },
  { href: "/payments", label: "Payment Methods", icon: CreditCard },
]

const helpNav = [
    { href: "/support", label: "Customer Care", icon: LifeBuoy },
    { href: "/settings", label: "Settings", icon: Settings },
]

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Mock auth state

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Recycle className="h-7 w-7 text-primary-foreground" />
            <span className="font-bold font-headline text-lg text-primary-foreground whitespace-nowrap">EcoTrade Hub</span>
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
                      <>
                        <item.icon />
                        <span>{item.label}</span>
                      </>
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
        
        <SidebarGroup>
            <SidebarGroupLabel>Marketplace</SidebarGroupLabel>
            <SidebarMenu>
            {marketplaceNav.map((item) => (
                <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild>
                    <Link href={item.href}>
                        <>
                            <item.icon />
                            <span>{item.label}</span>
                        </>
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarMenu>
          {userNav.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <>
                    <item.icon />
                    <span>{item.label}</span>
                  </>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Help & Settings</SidebarGroupLabel>
          <SidebarMenu>
          {helpNav.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <>
                    <item.icon />
                    <span>{item.label}</span>
                  </>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          </SidebarMenu>
        </SidebarGroup>
        
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2 bg-sidebar-border" />
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
                  <>
                    <LogIn />
                    <span>Login</span>
                  </>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
