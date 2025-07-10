'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating QR codes from text descriptions.
 *
 * The flow uses the Gemini API to interpret the text description and generate a QR code.
 * It exports the GenerateQrCodeInput and GenerateQrCodeOutput types, as well as the generateQrCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQrCodeInputSchema = z.object({
  textDescription: z
    .string()
    .describe('A text description of the desired QR code.'),
});
export type GenerateQrCodeInput = z.infer<typeof GenerateQrCodeInputSchema>;

const GenerateQrCodeOutputSchema = z.object({
  qrCodeDataUri: z
    .string()
    .describe(
      'The generated QR code as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type GenerateQrCodeOutput = z.infer<typeof GenerateQrCodeOutputSchema>;

export async function generateQrCode(input: GenerateQrCodeInput): Promise<GenerateQrCodeOutput> {
  return generateQrCodeFlow(input);
}

const generateQrCodePrompt = ai.definePrompt({
  name: 'generateQrCodePrompt',
  input: {schema: GenerateQrCodeInputSchema},
  output: {schema: GenerateQrCodeOutputSchema},
  prompt: `You are an expert QR code generator. The user will provide a text description of the QR code they want to generate, and you will generate a QR code that matches the description. Return the QR code as a data URI.

Text Description: {{{textDescription}}}`,
});

const generateQrCodeFlow = ai.defineFlow(
  {
    name: 'generateQrCodeFlow',
    inputSchema: GenerateQrCodeInputSchema,
    outputSchema: GenerateQrCodeOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
        // IMPORTANT: ONLY the googleai/gemini-2.0-flash-preview-image-generation model is able to generate images.
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: input.textDescription,
        config: {
            responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
            safetySettings: [
              {
                category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                threshold: 'BLOCK_NONE',
              },
              {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_NONE',
              },
               {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_NONE',
              },
               {
                category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                threshold: 'BLOCK_NONE',
              }
            ]
        },
    });

    if (!media?.url) {
      throw new Error('No QR code was generated.');
    }

    return {qrCodeDataUri: media.url!};
  }
);
