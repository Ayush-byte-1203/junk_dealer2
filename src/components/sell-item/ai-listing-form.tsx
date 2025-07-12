"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Sparkles, Loader2, UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "../ui/textarea";
import { generateListingDetails } from "@/ai/flows/generate-listing-details";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  itemPhoto: z.any().refine(file => file instanceof File, "A photo is required."),
  itemDescription: z.string().min(10, "Please provide a more detailed description (at least 10 characters).").max(500, "Description cannot exceed 500 characters."),
  title: z.string().optional(),
  description: z.string().optional(),
  suggestedPrice: z.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function AIListingForm() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isGenerated, setIsGenerated] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemDescription: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("itemPhoto", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    const { itemDescription, itemPhoto } = form.getValues();
    if (!itemDescription || !itemPhoto) {
        toast({
            variant: "destructive",
            title: "Missing Information",
            description: "Please provide a description and upload a photo before generating.",
        });
        return;
    }
    
    setIsGenerating(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(itemPhoto);
      reader.onload = async () => {
        const base64Photo = reader.result as string;
        const result = await generateListingDetails({ itemDescription, itemPhotoDataUri: base64Photo });
        form.setValue("title", result.title);
        form.setValue("description", result.description);
        form.setValue("suggestedPrice", result.suggestedPrice);
        setIsGenerated(true);
        toast({
            title: "Listing Details Generated!",
            description: "Feel free to edit the generated details below.",
        });
      };
    } catch (error) {
      console.error("Error generating details:", error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was an error generating the listing details. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Listing Submitted!",
      description: "Your item has been submitted for review.",
    });
    form.reset();
    setImagePreview(null);
    setIsGenerated(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Create Your Listing</CardTitle>
        <CardDescription>Start by describing your item and uploading a photo. Then let our AI do the heavy lifting!</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                 <FormField
                    control={form.control}
                    name="itemDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>1. Describe Your Item</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., A colorful wind chime made from old glass bottles and driftwood..." {...field} rows={6} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="itemPhoto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>2. Upload a Photo</FormLabel>
                        <FormControl>
                          <div className="relative border-2 border-dashed border-muted-foreground/50 rounded-lg p-4 text-center hover:border-primary transition-colors">
                              <Input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleFileChange}
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                              <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                  <UploadCloud className="h-8 w-8" />
                                  <span>{imagePreview ? 'Change photo' : 'Click or drag to upload'}</span>
                              </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>

              <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                {imagePreview ? (
                  <Image src={imagePreview} alt="Item preview" width={400} height={400} className="object-cover w-full h-full" />
                ) : (
                  <div className="text-muted-foreground">Image Preview</div>
                )}
              </div>
            </div>

            <div className="flex justify-center">
                <Button type="button" size="lg" onClick={handleGenerate} disabled={isGenerating}>
                    {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    3. Generate Listing with AI
                </Button>
            </div>
            
            {isGenerated && (
                <div className="space-y-8 border-t pt-8">
                     <Separator />
                     <h3 className="text-xl font-headline text-center">AI-Generated Listing Details</h3>
                     <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea rows={8} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="suggestedPrice"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Suggested Price (USD)</FormLabel>
                             <FormControl>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        className="pl-7"
                                        {...field}
                                        onChange={e => field.onChange(parseFloat(e.target.value))}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Post Your Listing</Button>
                </div>
            )}
            
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
