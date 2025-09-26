"use client"

import { Button } from "@/components/ui/button"
import { Palette, Sparkles, Droplets, Crown, Sun, Heart, Scissors, Zap, Radio, FileText, Video } from "lucide-react"
import { ServiceCard } from "./service-card"

interface ServicesSectionProps {
  onWhatsAppClick: () => void
}

export function ServicesSection({ onWhatsAppClick }: ServicesSectionProps) {
  const services = [
    {
      icon: Sparkles,
      title: "Higiene Facial",
      price: "$45.000",
      duration: "1h 15min",
      description:
        "Limpieza profunda de la piel con extracción de comedones, vapor ozono y mascarilla purificante. Ideal para mantener la piel saludable y radiante.",
    },
    {
      icon: Crown,
      title: "Higiene Facial Premium",
      price: "$50.000",
      duration: "1h 15min",
      description:
        "Versión premium de nuestra higiene facial con tratamientos adicionales y productos de alta gama para resultados superiores.",
      isPopular: true,
    },
    {
      icon: Zap,
      title: "Dermapen",
      price: "$55.000",
      duration: "1h 15min",
      description:
        "Microagujas que estimulan la producción de colágeno, mejoran la textura de la piel y reducen cicatrices, líneas de expresión y poros dilatados.",
    },
    {
      icon: Sun,
      title: "Dermapen con Exosomas",
      price: "$60.000",
      duration: "1h 15min",
      description:
        "Dermapen potenciado con exosomas para una regeneración celular avanzada y resultados superiores en rejuvenecimiento.",
    },
    {
      icon: Scissors,
      title: "Dermaplaning",
      price: "$55.000",
      duration: "1h 15min",
      description:
        "Exfoliación física que elimina células muertas y vello facial, dejando la piel suave, luminosa y lista para absorber productos.",
    },
    {
      icon: Droplets,
      title: "Peelings",
      price: "$50.000",
      duration: "1h 15min",
      description:
        "Exfoliación controlada que renueva las capas superficiales de la piel, mejora manchas, textura y luminosidad facial.",
    },
    {
      icon: Heart,
      title: "Cosmiatra Capilar",
      price: "$45.000",
      duration: "1h 15min",
      description:
        "Tratamiento especializado para el cuero cabelludo y cabello, mejorando la salud capilar y estimulando el crecimiento.",
    },
    {
      icon: Radio,
      title: "Altafrecuencia",
      price: "$45.000",
      duration: "1h 15min",
      description:
        "Tratamiento germicida y cicatrizante ideal para pieles con acné, reduce la inflamación y acelera la curación.",
    },
    {
      icon: Radio,
      title: "Radiofrecuencia",
      price: "$55.000",
      duration: "1h 15min",
      description:
        "Tratamiento que estimula la producción de colágeno mediante calor controlado, reafirma la piel y reduce la flacidez facial.",
    },
    {
      icon: Video,
      title: "Consulta Online",
      price: "$20.000",
      duration: "30min",
      description:
        "Consulta virtual personalizada para evaluar tu piel y recibir recomendaciones profesionales desde la comodidad de tu hogar.",
    },
    {
      icon: FileText,
      title: "Consulta + Rutina Skincare",
      price: "$25.000",
      duration: "45min",
      description:
        "Consulta presencial completa con armado de rutina y protocolo de skincare personalizado según tu tipo de piel.",
    },
    {
      icon: Droplets,
      title: "Higiene de espalda",
      price: "$50.000",
      duration: "45min",
      description:
        "Limpieza profunda de la piel de la espalda, ideal para eliminar impurezas y prevenir brotes de acné en esta zona.",
    }
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Descubre nuestra amplia gama de tratamientos faciales diseñados para realzar tu belleza natural y cuidar la
            salud de tu piel
          </p>
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-pink-700 font-semibold text-sm">✨ TODOS LOS TRATAMIENTOS INCLUYEN HIGIENE FACIAL</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Necesitas más información sobre nuestros tratamientos? Contactanos para resolver tus dudas
          </p>
          <Button
            onClick={onWhatsAppClick}
            className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Reservar Tratamiento
          </Button>
        </div>
      </div>
    </section>
  )
}
