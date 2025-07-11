import Image from 'next/image'
import {
  Camera,
  BrainCircuit,
  Smartphone,
  X,
  Github,
  Chrome,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AndroidIcon } from '@/components/icons/android-icon'
import { GeminiIcon } from '@/components/icons/gemini-icon'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos//logo_christopher_two.svg" alt="Lumi Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold font-headline">Lumi</span>
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="/lumi.apk" download>
              <AndroidIcon className="mr-2 h-5 w-5" />
              Descargar APK
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center py-20 text-center md:py-32" id="hero">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"
            aria-hidden="true"
          ></div>
          <div className="container relative mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Lumi: Reimaginando la Interacción con Códigos QR a través de la IA.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Escanea, Genera y Personaliza Códigos QR de Forma Inteligente y Sin Esfuerzo.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="/lumi.apk" download>
                  <AndroidIcon className="mr-2 h-5 w-5" />
                  Descargar Lumi (APK)
                </a>
              </Button>
            </div>
            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-6 text-muted-foreground">
                <a href="https://github.com/christopher-two/lumi" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="GitHub">
                    <Github className="h-6 w-6" />
                </a>
                <a href="https://christopher.com.mx/" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="Christopher Two">
                   <img src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos//logo_christopher_two.svg" alt="Override Logo" width={32} height={32} className="h-6 w-6" />
                </a>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="value-prop" className="py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">La Inteligencia Artificial al Servicio de tus Códigos QR.</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                Lumi no es solo una aplicación de códigos QR; es una herramienta inteligente que democratiza la creación y el escaneo. Aprovechamos la potencia de la API de Gemini para transformar tus ideas en códigos QR visualmente impactantes y funcionalmente robustos, todo desde la palma de tu mano.
                </p>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className=" py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Camera className="h-8 w-8 text-accent" />}
                title="Escáner de Alta Precisión"
                description="Experimenta un escaneo ultrarrápido y fiable. Gracias a la integración con ML Kit de Google, Lumi decodifica códigos QR al instante."
              />
              <FeatureCard
                icon={<BrainCircuit className="h-8 w-8 text-accent" />}
                title="Generador Impulsado por IA"
                description="Simplemente describe el código QR que deseas (contenido, colores, estilo) y nuestra integración con la API de Gemini lo hará realidad."
              />
              <FeatureCard
                icon={<GeminiIcon className="h-8 w-8 text-accent" />}
                title="Integración con API de Gemini"
                description="El corazón inteligente de Lumi. La API de Gemini interpreta tus indicaciones de lenguaje natural, ofreciendo resultados sorprendentes."
              />
              <FeatureCard
                icon={<Smartphone className="h-8 w-8 text-accent" />}
                title="UI Intuitiva y Responsiva"
                description="Diseñada con Jetpack Compose, Lumi ofrece una experiencia de usuario fluida y visualmente atractiva en cualquier dispositivo Android."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Tu Flujo de Trabajo con Lumi: Simple y Eficaz.</h2>
                <div className="grid gap-12 md:grid-cols-2">
                    <HowItWorksFlow title="Generación" steps={[
                        { name: "Define", description: "Introduce tu indicación de texto (ej. 'un QR para mi sitio web, con puntos azules')." },
                        { name: "Procesa", description: "Lumi, potenciado por Gemini, interpreta tu solicitud." },
                        { name: "Crea", description: "Obtén un código QR único y personalizado al instante." }
                    ]}/>
                    <HowItWorksFlow title="Escaneo" steps={[
                        { name: "Abre", description: "Inicia el escáner de Lumi." },
                        { name: "Captura", description: "Apunta tu cámara al código QR." },
                        { name: "Decodifica", description: "Visualiza el contenido del código QR de forma inmediata." }
                    ]}/>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Es Lumi compatible con todos los dispositivos Android?</AccordionTrigger>
                <AccordionContent>
                  Lumi está diseñado para ser compatible con Android 12 en adelante.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Necesito una clave de API de Gemini para usar la aplicación?</AccordionTrigger>
                <AccordionContent>
                  Sí, Lumi al inicio te pide una clave API para su correcto funcionamiento. La ventaja es que obtener una es completamente gratis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Qué tipos de datos puedo codificar en los códigos QR?</AccordionTrigger>
                <AccordionContent>
                  Puedes codificar una gran variedad de datos, incluyendo URLs de sitios web, texto, información de contacto (vCard), credenciales de Wi-Fi, y mucho más. Simplemente descríbelo y Lumi se encargará.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Lumi es una aplicación gratuita?</AccordionTrigger>
                <AccordionContent>
                  La versión actual de Lumi, incluyendo el escáner y el generador de QR básico, es gratuita. Las funciones avanzadas de personalización con IA pueden requerir una suscripción en futuras versiones.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>¿Cómo se garantiza la privacidad de mis datos?</AccordionTrigger>
                <AccordionContent>
                  Nos tomamos la privacidad muy en serio. Las indicaciones para generar códigos QR se procesan de forma anónima y no almacenamos información personal. Consulta nuestra Política de Privacidad para más detalles.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full bg-background pt-16 md:pt-24">
            <div className="w-full rounded-t-lg bg-gray-900 py-8 text-center text-white">
              <div className="container mx-auto flex items-center justify-center gap-4 sm:gap-8">
                <span className="text-lg">creado por</span>
                <Image src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos//logo_christopher_two.svg" alt="Lumi Logo" width={50} height={50} className="h-12 w-auto filter invert" />
                <X className="h-8 w-8 text-white" />
                <Image src="https://override.com.mx/SRC/IMG/logo/Overridelogo.svg" alt="Override Logo" width={150} height={48} className="h-12 w-auto" />
              </div>
            </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
            <div className="text-center sm:text-left">
                <p className="text-sm font-semibold">&copy; {new Date().getFullYear()} Todos los derechos reservados a Override y Christopher Two.</p>
                <p className="text-sm text-gray-400">Distribuido bajo la Licencia MIT.</p>
            </div>
            <div className="flex gap-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a>
                <a href="#" className="text-gray-400 hover:text-white">Términos de Servicio</a>
            </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="flex flex-col text-center transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="items-center">
        {icon}
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function HowItWorksFlow({ title, steps }: { title: string, steps: { name: string, description: string }[] }) {
    return (
        <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-6 text-2xl font-bold text-center">{title}</h3>
            <div className="relative flex flex-col gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                            {index + 1}
                        </div>
                        <div>
                            <h4 className="font-bold">{step.name}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
