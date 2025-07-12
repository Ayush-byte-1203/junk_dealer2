"use client"

import { useState, useEffect, Fragment } from "react";
import { ArrowDown, ArrowUp, Minus, ChevronDown, LineChart } from "lucide-react";
import { LIVE_PRICES } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from "recharts";

type Price = {
    category: string;
    price: number;
    unit: string;
    change: number;
    history: { date: string; price: number }[];
};

export function PriceTable() {
    const [prices, setPrices] = useState<Price[]>(LIVE_PRICES);
    const [expandedRow, setExpandedRow] = useState<string | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrices(prevPrices => 
                prevPrices.map(p => {
                    const fluctuation = (Math.random() - 0.5) * (p.price * 0.05); // Fluctuate by up to 5%
                    const newPrice = Math.max(0.01, p.price + fluctuation);
                    const change = newPrice - p.price;
                    const newHistory = [...p.history];
                    const latestHistory = newHistory[newHistory.length - 1];
                    latestHistory.price = Math.round(newPrice);
                    return { ...p, price: newPrice, change, history: newHistory };
                })
            );
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    }

    const toggleRow = (category: string) => {
        setExpandedRow(expandedRow === category ? null : category);
    };

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
                            <TableHead className="w-12"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {prices.map(item => (
                            <Fragment key={item.category}>
                                <TableRow onClick={() => toggleRow(item.category)} className="cursor-pointer">
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
                                    <TableCell className="text-center">
                                        <ChevronDown className={cn("h-4 w-4 transition-transform", expandedRow === item.category && "rotate-180")} />
                                    </TableCell>
                                </TableRow>
                                {expandedRow === item.category && (
                                    <TableRow key={`${item.category}-chart`}>
                                        <TableCell colSpan={4} className="p-0">
                                            <div className="p-4 bg-muted/50">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <LineChart className="h-4 w-4 text-primary" />
                                                    <h4 className="font-semibold">{item.category} - Last 7 Days</h4>
                                                </div>
                                                <ChartContainer config={{}} className="h-48 w-full">
                                                    <ResponsiveContainer>
                                                        <RechartsPrimitive.LineChart data={item.history}>
                                                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                                            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                                                            <YAxis width={80} tickFormatter={(value) => `₹${value}`} />
                                                            <Tooltip
                                                                cursor={{ fill: 'hsl(var(--muted))' }}
                                                                content={
                                                                    <ChartTooltipContent
                                                                        formatter={(value) => `₹${(value as number).toFixed(2)}`}
                                                                    />
                                                                }
                                                            />
                                                            <Line type="monotone" dataKey="price" stroke="hsl(var(--primary))" strokeWidth={2} dot={true} />
                                                        </RechartsPrimitive.LineChart>
                                                    </ResponsiveContainer>
                                                </ChartContainer>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </Fragment>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

const RechartsPrimitive = { LineChart: require("recharts").LineChart };
