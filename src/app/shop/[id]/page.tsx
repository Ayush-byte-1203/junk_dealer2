import { RECYCLED_PRODUCTS } from "@/lib/data";
import { ProductDetails } from "@/components/shop/product-details";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = RECYCLED_PRODUCTS.find(p => p.id === params.id);

    if (!product) {
        notFound();
    }

    return <ProductDetails product={product} />;
}
