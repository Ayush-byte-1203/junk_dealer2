"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useToast } from "@/hooks/use-toast"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  address: z.string().min(10, "Please enter a valid address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  pickupDate: z.date({
    required_error: "A pickup date is required.",
  }),
  pickupTime: z.string({
    required_error: "Please select a time slot.",
  }),
  junkDetails: z.string().min(10, "Please describe the junk you want to sell."),
})

export function PickupForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      junkDetails: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Pickup Scheduled!",
      description: "Your scrap pickup has been successfully booked. We will contact you shortly.",
    })
    form.reset()
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Book Your Pickup</CardTitle>
            <CardDescription>Fill out the form below and we'll come to you. It's that simple.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Pickup Address</FormLabel>
                        <FormControl>
                            <Input placeholder="123 Green St, Eco City" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="junkDetails"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Details of Junk</FormLabel>
                        <FormControl>
                            <Textarea placeholder="e.g., about 20 lbs of aluminum cans, one old refrigerator" {...field} />
                        </FormControl>
                         <FormDescription>
                            Provide a brief description of the items and estimated quantity.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                    control={form.control}
                    name="pickupDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Pickup Date</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={form.control}
                        name="pickupTime"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Pickup Time Slot</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a time slot" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="9am-12pm">Morning (9am - 12pm)</SelectItem>
                                <SelectItem value="12pm-3pm">Afternoon (12pm - 3pm)</SelectItem>
                                <SelectItem value="3pm-6pm">Evening (3pm - 6pm)</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Schedule Pickup</Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  )
}
