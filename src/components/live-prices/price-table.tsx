"use client"

import { useState, useEffect } from "react";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { LIVE_PRICES } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Price = {
    category: string;
    price: number;
    unit: string;
    change: number;
};

export function PriceTable() {
    const [prices, setPrices] = useState<Price[]>(LIVE_PRICES);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrices(prevPrices => 
                prevPrices.map(p => {
                    const fluctuation = (Math.random() - 0.5) * (p.price * 0.05); // Fluctuate by up to 5%
                    const newPrice = Math.max(0.01, p.price + fluctuation);
                    const change = newPrice - p.price;
                    return { ...p, price: newPrice, change };
                })
            );
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Current Market Rates</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Change</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {prices.map(item => (
                            <TableRow key={item.category}>
                                <TableCell className="font-medium">{item.category}</TableCell>
                                <TableCell className="text-right font-mono">{formatCurrency(item.price)} <span className="text-muted-foreground text-sm">{item.unit}</span></TableCell>
                                <TableCell className="text-right">
                                    <Badge variant={item.change === 0 ? "secondary" : item.change > 0 ? "default" : "destructive"} className={cn(
                                        "flex items-center justify-end gap-1 w-24 ml-auto",
                                        item.change > 0 && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                                        item.change < 0 && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                                    )}>
                                        {item.change > 0 && <ArrowUp className="h-3 w-3" />}
                                        {item.change < 0 && <ArrowDown className="h-3 w-3" />}
                                        {item.change === 0 && <Minus className="h-3 w-3" />}
                                        {formatCurrency(Math.abs(item.change))}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
