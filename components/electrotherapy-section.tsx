"use client"

import { Button } from "@/components/ui/button"
import { Zap, Droplets, Waves, Sparkles, Activity, Heart } from "lucide-react"
import { ServiceCard } from "./service-card"

interface ElectrotherapySectionProps {
  onWhatsAppClick: () => void
}

export function ElectrotherapySection({ onWhatsAppClick }: ElectrotherapySectionProps) {
  const electrotherapyTreatments = [
    {
      icon: Droplets,
      title: "Electroporación",
      price: "$45.000",
      duration: "1h 15min",
      description:
        "Introducción de principios activos sin agujas mediante impulsos eléctricos, maximiza la penetración de tratamientos.",
    },
    {
      icon: Waves,
      title: "Espátula Ultrasónica",
      price: "$40.000",
      duration: "1h 15min",
      description:
        "Limpieza profunda y exfoliación suave mediante vibraciones ultrasónicas que renuevan la superficie de la piel.",
    },
    {
      icon: Sparkles,
      title: "Microdermoabrasión",
      price: "$40.000",
      duration: "1h 15min",
      description:
        "Exfoliación mecánica que renueva las capas superficiales de la piel, mejora la textura y reduce imperfecciones.",
    },
    {
      icon: Activity,
      title: "Electroestimulación",
      price: "$40.000",
      duration: "1h 15min",
      description:
        "Estimulación muscular que tonifica y reafirma los tejidos faciales, mejora la circulación y el tono de la piel.",
    },
    {
      icon: Heart,
      title: "Hyalu Lips",
      price: "$45.000",
      duration: "1h 15min",
      description:
        "Hidratación profunda labial con ácido hialurónico, devuelve volumen natural y suavidad a los labios.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-100 to-rose-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Zap className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Electroterapia
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnología avanzada para el cuidado y rejuvenecimiento de tu piel. Descubre nuestros tratamientos de
            electroterapia con equipos de última generación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {electrotherapyTreatments.map((treatment, index) => (
            <ServiceCard key={index} {...treatment} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Necesitas más información sobre electroterapia? Contactanos para evaluar tu piel y conocer los costos
          </p>
          <Button
            onClick={onWhatsAppClick}
            className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Reservar Cita
          </Button>
        </div>
      </div>
    </section>
  )
}
