'use client'

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

export function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" disabled={isPending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generando...
        </>
      ) : (
        'Crear Código QR'
      )}
    </Button>
  )
}
