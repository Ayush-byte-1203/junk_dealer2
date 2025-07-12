import { RECYCLED_PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = RECYCLED_PRODUCTS.find(p => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="grid gap-4">
                    <div className="overflow-hidden rounded-lg border">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={600}
                            height={600}
                            data-ai-hint={product.aiHint}
                            className="aspect-square object-cover w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold font-headline">{product.name}</h1>
                        <p className="text-2xl font-bold mt-2">₹{product.price.toFixed(2)}</p>
                    </div>
                    <div className="space-y-4 text-muted-foreground">
                        <p className="text-lg">{product.description}</p>
                    </div>
                    <div className="w-full pt-4">
                        <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
