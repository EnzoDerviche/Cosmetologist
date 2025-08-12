"use client"

import { ShoppingBag, Sparkles, Heart, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProductsSectionProps {
  onWhatsAppClick: () => void
}

export function ProductsSection({ onWhatsAppClick }: ProductsSectionProps) {
  return (
    <section id="productos" className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos profesionales para el cuidado de la piel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
              <Image
                src="/img/higiene.jpeg?height=200&width=200"
                alt="Productos de skincare"
                width={200}
                height={200}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
                Cuidado Facial
              </h3>
              <p className="text-gray-600">Productos especializados para rutinas de skincare profesional</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
              <Image
                src="/img/serum.jpeg?height=200&width=200"
                alt="Serums y tratamientos"
                width={200}
                height={200}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <Heart className="w-5 h-5 text-pink-500 mr-2" />
                Serums y Tratamientos
              </h3>
              <p className="text-gray-600">Fórmulas avanzadas para tratamientos específicos de la piel</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
              <Image
                src="/img/controlBrossage.jpeg?height=200&width=200"
                alt="Espumas de limpieza"
                width={200}
                height={200}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                <Droplets className="w-5 h-5 text-pink-500 mr-2" />
                Espumas de Limpieza
              </h3>
              <p className="text-gray-600">Limpiadores suaves y efectivos para todo tipo de piel</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Interesada en nuestros productos?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contamos con una amplia gama de productos profesionales para complementar tus tratamientos. Consultanos por
            precios, disponibilidad y recomendaciones personalizadas según tu tipo de piel.
          </p>
          <Button
            onClick={onWhatsAppClick}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Consultar Productos
          </Button>
        </div>
      </div>
    </section>
  )
}
