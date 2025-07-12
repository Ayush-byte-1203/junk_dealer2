import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Recycle, DollarSign, ShoppingCart, ListPlus, Truck, PackageCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Turn Your Trash into Treasure with EcoTrade Hub
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  The one-stop platform to sell your scrap, buy unique recycled products, and stay updated with live junk prices.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/sell-junk">
                    <>
                      Sell Your Scrap
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/shop">
                    Shop Recycled
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="recycling environment"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Everything You Need for Smart Recycling</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From scheduling pickups to finding unique upcycled items, we've got you covered.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Recycle className="h-8 w-8 text-primary" />
                  Sell Your Junk
                </CardTitle>
                <CardDescription>Easily schedule a pickup or find nearby drop-off locations for your scrap materials. We make recycling convenient and rewarding.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 h-auto">
                   <Link href="/sell-junk">
                    <>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                   </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                  Shop Recycled Products
                </CardTitle>
                <CardDescription>Discover a unique marketplace of items crafted from recycled materials. Find everything from furniture to art.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 h-auto">
                   <Link href="/shop">
                    <>
                      Explore the Shop <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                   </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <DollarSign className="h-8 w-8 text-primary" />
                  Live Price Updates
                </CardTitle>
                <CardDescription>Stay informed with real-time price updates for different categories of junk, helping you get the best value.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 h-auto">
                   <Link href="/live-prices">
                    <>
                      Check Prices <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                   </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Three Simple Steps to Get Started</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Selling your scrap or buying recycled goods has never been easier.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-10 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/20 text-primary p-4 rounded-full">
                  <ListPlus className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold font-headline">1. Create Your Account</h3>
                <p className="text-muted-foreground">Sign up for a free account to list your items or start shopping.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/20 text-primary p-4 rounded-full">
                  <Truck className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold font-headline">2. List or Shop</h3>
                <p className="text-muted-foreground">For sellers, easily list your scrap. For buyers, browse our unique collection.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                 <div className="bg-primary/20 text-primary p-4 rounded-full">
                  <PackageCheck className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold font-headline">3. Complete the Transaction</h3>
                <p className="text-muted-foreground">Arrange for pickup/delivery and get paid or receive your new item.</p>
              </div>
          </div>
        </div>
      </section>

       <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight">
              Ready to Join the Circular Economy?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Create an account today and start making a difference—and a profit.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-x-2">
             <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/signup">
                  <>
                    Sign Up Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                </Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
