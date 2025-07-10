'use server'

import { generateQrCode } from '@/ai/flows/generate-qr-code'
import { z } from 'zod'

const schema = z.object({
  textDescription: z.string().min(10, { message: 'La descripción debe tener al menos 10 caracteres.' }),
})

export type QrCodeActionState = {
    error?: {
        textDescription?: string[];
        _form?: string[];
    } | null;
    qrCode?: string | null;
}

export async function createQrCodeAction(prevState: QrCodeActionState, formData: FormData): Promise<QrCodeActionState> {
  const validatedFields = schema.safeParse({
    textDescription: formData.get('textDescription'),
  })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      qrCode: null,
    }
  }

  try {
    const { qrCodeDataUri } = await generateQrCode({
      textDescription: validatedFields.data.textDescription,
    })
    return { error: null, qrCode: qrCodeDataUri }
  } catch (e) {
    console.error(e)
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: { _form: ['Ocurrió un error al generar el código QR. Por favor, inténtalo de nuevo.', `Detalle: ${errorMessage}`] }, qrCode: null }
  }
}
