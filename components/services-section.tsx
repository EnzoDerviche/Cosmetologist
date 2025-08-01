"use client"

import { Button } from "@/components/ui/button"
import { Palette, Sparkles, Droplets, Crown, Sun, Heart, Scissors } from "lucide-react"
import { ServiceCard } from "./service-card"

interface ServicesSectionProps {
  onWhatsAppClick: () => void
}

export function ServicesSection({ onWhatsAppClick }: ServicesSectionProps) {
  const services = [
    {
      icon: Sparkles,
      title: "Higiene Facial",
      price: "",
      duration: "1h 15min",
      description:
        "Limpieza profunda de la piel con extracción de comedones, vapor ozono y mascarilla purificante. Ideal para mantener la piel saludable y radiante.",
    },
    {
      icon: Droplets,
      title: "Peeling",
      price: "",
      duration: "1h 15min",
      description:
        "Exfoliación controlada que renueva las capas superficiales de la piel, mejora manchas, textura y luminosidad facial.",
      isPopular: true,
    },
    {
      icon: Palette,
      title: "Microneedling",
      price: "",
      duration: "1h 15min",
      description:
        "Estimulación de la regeneración celular mediante microperforaciones que mejoran la absorción de activos y renuevan la piel.",
    },
    {
      icon: Crown,
      title: "Hilos Tensores",
      price: "",
      duration: "1h 15min",
      description:
        "Lifting no quirúrgico que redefine el contorno facial, eleva tejidos caídos y estimula la producción natural de colágeno.",
    },
    {
      icon: Sun,
      title: "Despigmentantes",
      price: "",
      duration: "1h 15min",
      description:
        "Tratamientos especializados para reducir manchas, melasma y hiperpigmentación, unificando el tono de la piel.",
    },
    {
      icon: Heart,
      title: "Hyalu Lips",
      price: "",
      duration: "1h 15min",
      description:
        "Hidratación y voluminización labial con ácido hialurónico, logra labios más definidos, hidratados y con volumen natural.",
    },
    {
      icon: Scissors,
      title: "Dermaplaning",
      price: "",
      duration: "1h 15min",
      description:
        "Exfoliación física que elimina células muertas y vello facial, dejando la piel suave, luminosa y lista para absorber productos.",
    },
  ]

  return (
    <section id="tratamientos" className="py-16 px-4 bg-white/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Palette className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Tratamientos
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de tratamientos faciales diseñados para realzar tu belleza natural y cuidar la
            salud de tu piel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
