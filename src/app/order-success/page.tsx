import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center py-12 px-4 md:px-6">
      <Card className="w-full max-w-lg text-center shadow-2xl shadow-primary/10">
        <CardHeader>
            <div className="mx-auto bg-green-100 rounded-full p-4 w-fit">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
          <CardTitle className="text-3xl font-headline mt-6">Order Placed Successfully!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Thank you for your purchase. Your order is being processed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">You will receive an email confirmation shortly with your order details. </p>
          <Button asChild className="mt-8">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
