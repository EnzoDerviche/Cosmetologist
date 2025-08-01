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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Dirección</h3>
                    <p className="text-gray-600">
                      Altos de Hudson II
                      <br />
                      Berazategui, Buenos Aires
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Horarios de Atención</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>
                        <strong>Martes a Viernes:</strong> 9:00 - 18:00
                      </p>
                      <p>
                        <strong>Sábados:</strong> 9:00 - 15:00
                      </p>
                      <p>
                        <strong>Domingos:</strong> Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Contacto</h3>
                    <div className="space-y-3">
                      <Button onClick={onWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp: 11 4917-1027
                      </Button>

                      <div className="flex justify-center space-x-4 pt-2">
                        <a
                          href="https://instagram.com/cosmetologist.ok"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-96 lg:h-full min-h-[400px]">
            <Card className="h-full bg-white/70 backdrop-blur-sm border-pink-200">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8!2d-58.1714388!3d-34.8063028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a327c60d4b5019%3A0x9716e7a5738cfb6d!2sAltos%20de%20Hudson%20II%2C%20Berazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1640995200000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.75rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Cosmetologist - Altos de Hudson II"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
