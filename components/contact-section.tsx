"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Instagram } from "lucide-react"

interface ContactSectionProps {
  onWhatsAppClick: () => void
}

export function ContactSection({ onWhatsAppClick }: ContactSectionProps) {
  return (
    <section id="contacto" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Visitanos y Contactanos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
            <CardContent className="p-6">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-3">Dirección</h3>
                <p className="text-gray-600 text-sm">
                  Altos de Hudson II
                  <br />
                  Berazategui, Buenos Aires
                  <br />
                  Argentina
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
            <CardContent className="p-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-3">Horarios de Atención</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>
                    <strong>Mar - Vie:</strong> 9:00 - 18:00
                  </p>
                  <p>
                    <strong>Lun, Sáb, Dom:</strong> <span className="text-red-500">Cerrado</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
            <CardContent className="p-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-4">Contacto</h3>
                <div className="flex gap-3">
                  <Button
                    onClick={onWhatsAppClick}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    WhatsApp
                  </Button>

                  <a
                    href="https://instagram.com/cosmetologist.ok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:shadow-lg transition-all duration-300 flex items-center justify-center py-2 px-4 text-sm font-medium"
                  >
                    <Instagram className="w-4 h-4 mr-1" />
                    Instagram
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
