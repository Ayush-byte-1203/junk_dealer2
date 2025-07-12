// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview AI-powered listing details generator for product listings.
 *
 * - generateListingDetails - A function that generates a title, description, and suggested price for a product listing.
 * - GenerateListingDetailsInput - The input type for the generateListingDetails function.
 * - GenerateListingDetailsOutput - The return type for the generateListingDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateListingDetailsInputSchema = z.object({
  itemDescription: z.string().describe('A brief description of the item to be listed.'),
  itemPhotoDataUri: z
    .string()
    .describe(
      "A photo of the item, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateListingDetailsInput = z.infer<typeof GenerateListingDetailsInputSchema>;

const GenerateListingDetailsOutputSchema = z.object({
  title: z.string().describe('A suggested title for the product listing.'),
  description: z.string().describe('A detailed and attractive description of the product.'),
  suggestedPrice: z.number().describe('A suggested price for the product in INR.'),
});
export type GenerateListingDetailsOutput = z.infer<typeof GenerateListingDetailsOutputSchema>;

export async function generateListingDetails(
  input: GenerateListingDetailsInput
): Promise<GenerateListingDetailsOutput> {
  return generateListingDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateListingDetailsPrompt',
  input: {schema: GenerateListingDetailsInputSchema},
  output: {schema: GenerateListingDetailsOutputSchema},
  prompt: `You are an expert in creating compelling product listings.

  Based on the following item description and photo, generate a title, description, and a suggested price for the product.
  The suggested price should be a number in INR.

  Description: {{{itemDescription}}}
  Photo: {{media url=itemPhotoDataUri}}
  `,
});

const generateListingDetailsFlow = ai.defineFlow(
  {
    name: 'generateListingDetailsFlow',
    inputSchema: GenerateListingDetailsInputSchema,
    outputSchema: GenerateListingDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
