"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(10, "Address is required"),
  city: z.string().min(2, "City is required"),
  pincode: z.string().length(6, "Pincode must be 6 digits"),
  card_number: z.string().length(16, "Card number must be 16 digits"),
  card_expiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)"),
  card_cvc: z.string().length(3, "CVC must be 3 digits"),
});

export default function CheckoutPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      pincode: "",
      card_number: "",
      card_expiry: "",
      card_cvc: "",
    },
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(value);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
        toast({
            title: "Payment Successful!",
            description: "Your order has been placed.",
        });
        clearCart();
        router.push("/order-success");
        setIsProcessing(false);
    }, 2000);
  }

  if (cartItems.length === 0 && !isProcessing) {
     return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <Card className="text-center py-20">
                <CardContent>
                    <h1 className="text-2xl font-semibold">Your Cart is Empty</h1>
                    <p className="text-muted-foreground mt-2">Add items to your cart to proceed to checkout.</p>
                    <Button asChild className="mt-6">
                        <Link href="/shop">Return to Shop</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
     )
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl mb-12 text-center">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Shipping Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="address" render={({ field }) => (
                            <FormItem><FormLabel>Address</FormLabel><FormControl><Input placeholder="123 Green St" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                         <div className="grid grid-cols-2 gap-4">
                            <FormField control={form.control} name="city" render={({ field }) => (
                                <FormItem><FormLabel>City</FormLabel><FormControl><Input placeholder="Eco City" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="pincode" render={({ field }) => (
                                <FormItem><FormLabel>Pincode</FormLabel><FormControl><Input placeholder="123456" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Details</CardTitle>
                        <CardDescription>All transactions are secure and encrypted.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <FormField control={form.control} name="card_number" render={({ field }) => (
                            <FormItem><FormLabel>Card Number</FormLabel><FormControl><Input placeholder="•••• •••• •••• ••••" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <div className="grid grid-cols-2 gap-4">
                            <FormField control={form.control} name="card_expiry" render={({ field }) => (
                                <FormItem><FormLabel>Expiry Date</FormLabel><FormControl><Input placeholder="MM/YY" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="card_cvc" render={({ field }) => (
                                <FormItem><FormLabel>CVC</FormLabel><FormControl><Input placeholder="123" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                        </div>
                    </CardContent>
                </Card>
                <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
                    {isProcessing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</> : `Pay ${formatCurrency(getCartTotal())}`}
                </Button>
            </form>
            </Form>
        </div>
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-10 rounded-md overflow-hidden">
                        <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
                    </div>
                    <span>{item.name} x {item.quantity}</span>
                  </div>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatCurrency(getCartTotal())}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
