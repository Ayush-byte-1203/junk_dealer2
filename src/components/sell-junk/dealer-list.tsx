import { DEALERS } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Phone, Clock, MapPin } from "lucide-react"
import { Button } from "../ui/button"

export function DealerList() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Nearby Drop-off Centers</CardTitle>
                <CardDescription>Find a certified scrap dealer near you to drop off your materials.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {DEALERS.map((dealer) => (
                    <div key={dealer.name} className="p-4 border rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg">{dealer.name}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{dealer.address}</span>
                            </div>
                             <div className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>{dealer.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{dealer.hours}</span>
                            </div>
                        </div>
                        <Button variant="outline">Get Directions</Button>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
