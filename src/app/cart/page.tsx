"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(value);
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Your Shopping Cart</h1>
        <p className="text-lg text-muted-foreground">Review your items and proceed to checkout.</p>
      </div>

      {cartItems.length === 0 ? (
        <Card className="flex flex-col items-center justify-center py-20 text-center">
            <CardContent className="space-y-4">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto" />
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <p className="text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
                <Button asChild>
                    <Link href="/shop">Start Shopping</Link>
                </Button>
            </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4 flex gap-4 items-center">
                    <div className="relative h-24 w-24 rounded-md overflow-hidden">
                        <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{formatCurrency(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                            className="w-16 text-center h-8"
                        />
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <p className="font-semibold w-24 text-right">{formatCurrency(item.price * item.quantity)}</p>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
