import { RecycledProduct } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
    product: RecycledProduct;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full group">
            <CardHeader className="p-0">
                <Link href={`/shop/${product.id}`} className="block overflow-hidden">
                    <Image 
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        data-ai-hint={product.aiHint}
                        className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
                <h3 className="font-semibold text-lg font-headline leading-tight">
                    <Link href={`/shop/${product.id}`}>{product.name}</Link>
                </h3>
            </CardContent>
            <CardFooter className="p-4 flex justify-between items-center">
                <p className="text-xl font-bold">
                    ₹{product.price.toFixed(2)}
                </p>
                <Button asChild size="sm" variant="outline">
                    <Link href={`/shop/${product.id}`}>
                        <>
                            View
                            <ArrowRight className="h-4 w-4 ml-2"/>
                        </>
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
