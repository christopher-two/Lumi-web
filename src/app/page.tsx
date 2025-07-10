import Image from 'next/image'
import {
  Camera,
  BrainCircuit,
  Smartphone,
  QrCode,
  Twitter,
  Linkedin,
  Mail,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AndroidIcon } from '@/components/icons/android-icon'
import { GeminiIcon } from '@/components/icons/gemini-icon'
import { QrGenerator } from '@/components/qr-generator'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos//logo_christopher_two.svg" alt="Lumi Logo" width={32} height={32} className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold font-headline">Lumi</span>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <AndroidIcon className="mr-2 h-5 w-5" />
            Descargar APK
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 text-center md:py-32" id="hero">
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
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <AndroidIcon className="mr-2 h-5 w-5" />
                Descargar Lumi (APK)
              </Button>
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
        <section id="features" className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Camera className="h-8 w-8 text-accent" />}
                title="Escáner de Alta Precisión"
                description="Experimenta un escaneo ultrarrápido y fiable. Gracias a la integración con ML Kit de Google, Lumi decodifica códigos QR al instante."
                imageSrc="https://placehold.co/600x400.png"
                imageHint="app scanner"
              />
              <FeatureCard
                icon={<BrainCircuit className="h-8 w-8 text-accent" />}
                title="Generador Impulsado por IA"
                description="Simplemente describe el código QR que deseas (contenido, colores, estilo) y nuestra integración con la API de Gemini lo hará realidad."
                imageSrc="https://placehold.co/600x400.png"
                imageHint="app generator"
              />
              <FeatureCard
                icon={<GeminiIcon className="h-8 w-8 text-accent" />}
                title="Integración con API de Gemini"
                description="El corazón inteligente de Lumi. La API de Gemini interpreta tus indicaciones de lenguaje natural, ofreciendo resultados sorprendentes."
                imageSrc="https://placehold.co/600x400.png"
                imageHint="flowchart diagram"
              />
              <FeatureCard
                icon={<Smartphone className="h-8 w-8 text-accent" />}
                title="UI Intuitiva y Responsiva"
                description="Diseñada con Jetpack Compose, Lumi ofrece una experiencia de usuario fluida y visualmente atractiva en cualquier dispositivo Android."
                imageSrc="https://placehold.co/600x400.png"
                imageHint="app interface"
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

        {/* QR Generator Section */}
        <section id="generator" className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Prueba el Generador IA
            </h2>
            <p className="mb-8 text-center text-lg text-muted-foreground">
              Describe el código QR que quieres crear y mira la magia suceder.
            </p>
            <QrGenerator />
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
                  Lumi está diseñado para ser compatible con una amplia gama de dispositivos Android. Recomendamos Android 8.0 (Oreo) o superior para una experiencia óptima.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Necesito una clave de API de Gemini para usar la aplicación?</AccordionTrigger>
                <AccordionContent>
                  No, no necesitas tu propia clave de API. Lumi gestiona la integración con la API de Gemini de forma transparente para ofrecerte la mejor experiencia sin configuraciones complejas.
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
        <section id="contact" className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto -mb-24 max-w-3xl px-4 text-center">
            <div className="rounded-t-lg bg-gray-900 py-8 px-4 text-white">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <span className="text-lg">creado por</span>
                <div className="flex items-center gap-6">
                  <Image src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos//logo_christopher_two.svg" alt="Lumi Logo" width={60} height={60} className="h-14 w-14 filter invert" />
                  <Image src="https://override.com.mx/SRC/IMG/logo/Overridelogo.svg" alt="Override Logo" width={140} height={56} className="h-14 filter invert" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
            <div className="text-center sm:text-left">
                <p className="text-sm font-semibold">&copy; {new Date().getFullYear()} Lumi. Todos los derechos reservados.</p>
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

function FeatureCard({ icon, title, description, imageSrc, imageHint }: { icon: React.ReactNode, title: string, description: string, imageSrc: string, imageHint: string }) {
  return (
    <Card className="flex flex-col text-center transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="items-center">
        {icon}
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 aspect-video w-full overflow-hidden rounded-md">
            <Image src={imageSrc} width={600} height={400} alt={title} data-ai-hint={imageHint} className="h-full w-full object-cover" />
        </div>
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

    