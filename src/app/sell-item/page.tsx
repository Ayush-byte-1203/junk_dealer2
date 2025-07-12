import { AIListingForm } from "@/components/sell-item/ai-listing-form";

export default function SellItemPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="space-y-4 text-center mb-12 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">
                    Sell Your Upcycled Item
                </h1>
                <p className="text-lg text-muted-foreground">
                    Got something creative made from scrap? List it in our marketplace! Use our AI assistant to help you create the perfect listing in seconds.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                 <AIListingForm />
            </div>
        </div>
    )
}
