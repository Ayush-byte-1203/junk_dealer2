import { PriceTable } from "@/components/live-prices/price-table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, MousePointerClick } from "lucide-react";

export default function LivePricesPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
                <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">
                    Live Scrap Prices
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                    Stay updated with the latest market rates for your scrap materials.
                </p>
            </div>

            <Alert className="mb-4 bg-secondary">
                <Info className="h-4 w-4" />
                <AlertTitle>Disclaimer</AlertTitle>
                <AlertDescription>
                    The prices displayed are for mockup purposes only and are not real-time market data. They should be used at your own discretion as they do not reflect actual trade values.
                </AlertDescription>
            </Alert>

            <Alert className="mb-8 border-primary/50 text-primary-foreground bg-primary/10">
                <MousePointerClick className="h-4 w-4 text-primary" />
                <AlertTitle>Pro Tip</AlertTitle>
                <AlertDescription>
                    Click on any row to view the price history for the last 7 days.
                </AlertDescription>
            </Alert>
            
            <PriceTable />
        </div>
    )
}
