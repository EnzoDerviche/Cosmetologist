"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Sparkles, Heart } from "lucide-react"

interface HeroSectionProps {
  onWhatsAppClick: () => void
}

export function HeroSection({ onWhatsAppClick }: HeroSectionProps) {
  return (
    <section id="inicio" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Bienvenida a{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Cosmetologist
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Tu consultorio de cosmetología de confianza, donde podes encontrar el cuidado experto para cada piel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Atención Profesional</h3>
              <p className="text-gray-600 text-sm">
                Cada tratamiento es personalizado según tu tipo de piel y necesidades específicas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Tecnología Avanzada</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos equipos de última generación para brindarte los mejores resultados.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Cuidado Integral</h3>
              <p className="text-gray-600 text-sm">
                Nos enfocamos en la salud y belleza de tu piel con un enfoque holístico y profesional.
              </p>
            </CardContent>
          </Card>
        </div>

        <Button
          onClick={onWhatsAppClick}
          className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Consultar Costos y Reservar Cita
        </Button>
      </div>
    </section>
  )
}
