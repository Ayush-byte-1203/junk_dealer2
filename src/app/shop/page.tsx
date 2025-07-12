import { ProductCard } from "@/components/shop/product-card";
import { RECYCLED_PRODUCTS } from "@/lib/data";

export default function ShopPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
                <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">
                    Recycled & Upcycled Marketplace
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                    Discover unique, sustainable products crafted from recycled materials.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {RECYCLED_PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
