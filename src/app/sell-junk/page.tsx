import { DealerList } from "@/components/sell-junk/dealer-list";
import { PickupForm } from "@/components/sell-junk/pickup-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SellJunkPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
                <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">
                    Sell Your Scrap with Ease
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                    Choose the most convenient option for you to recycle your junk and get paid.
                </p>
            </div>
            
            <Tabs defaultValue="pickup" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="pickup">Schedule a Pickup</TabsTrigger>
                    <TabsTrigger value="dropoff">Find a Drop-off Center</TabsTrigger>
                </TabsList>
                <TabsContent value="pickup">
                    <PickupForm />
                </TabsContent>
                <TabsContent value="dropoff">
                    <DealerList />
                </TabsContent>
            </Tabs>
        </div>
    )
}
