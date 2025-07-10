'use client'

import { useActionState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { createQrCodeAction, type QrCodeActionState } from '@/app/actions'
import { Textarea } from '@/components/ui/textarea'
import { SubmitButton } from './submit-button'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const initialState: QrCodeActionState = {
  error: null,
  qrCode: null,
}

export function QrGenerator() {
  const [state, formAction, isPending] = useActionState(createQrCodeAction, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if(!isPending && state.qrCode) {
        formRef.current?.reset()
    }
  }, [isPending, state.qrCode])

  return (
    <Card>
      <CardContent className="p-6">
        <form ref={formRef} action={formAction} className="space-y-4">
          <Textarea
            name="textDescription"
            placeholder="Ej: 'Un código QR para mi portfolio en GitHub (https://github.com/mi-usuario), con un estilo futurista y colores oscuros.'"
            rows={4}
            required
            aria-describedby="textDescription-error"
            className="text-base"
          />
          {state.error?.textDescription && (
            <p id="textDescription-error" className="text-sm text-destructive">
              {state.error.textDescription.join(', ')}
            </p>
          )}

          <SubmitButton isPending={isPending} />
        </form>

        {isPending && (
             <div className="mt-6 flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8 text-center">
                <div className="animate-pulse text-muted-foreground">Generando tu código QR...</div>
                <div className="h-48 w-48 animate-pulse rounded-lg bg-muted"></div>
             </div>
        )}

        {state.error?._form && (
            <Alert variant="destructive" className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {state.error._form.join(', ')}
                </AlertDescription>
            </Alert>
        )}

        {state.qrCode && (
          <div className="mt-6">
            <Alert variant="default" className="mb-4 bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">¡Éxito!</AlertTitle>
                <AlertDescription className="text-green-700">
                    Tu código QR se ha generado correctamente.
                </AlertDescription>
            </Alert>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8 text-center">
                <h3 className="font-semibold">Tu Código QR Personalizado:</h3>
                <Image
                    src={state.qrCode}
                    alt="Generated QR Code"
                    width={200}
                    height={200}
                    className="rounded-lg"
                />
                <p className="text-sm text-muted-foreground">Haz clic derecho o mantén presionado para guardar.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
