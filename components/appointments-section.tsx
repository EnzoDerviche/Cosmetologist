"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, AlertCircle, CheckCircle, XCircle, Phone } from "lucide-react"

interface AppointmentsSectionProps {
  onWhatsAppClick: () => void
}

export function AppointmentsSection({ onWhatsAppClick }: AppointmentsSectionProps) {
  const policies = [
    {
      icon: Calendar,
      title: "Reserva de Consultas",
      items: [
        "Se debe abonar una seña de $10.000 al momento de la reserva",
        "Especificar el servicio deseado al momento de la reserva",
        "Proporcionar nombre completo y numero de contacto",
        "Enviar comprobante de la seña por Whatsapp",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: Clock,
      title: "Puntualidad",
      items: [
        "Tolerancia máxima de 15 minutos de retraso",
        "Pasados los 15 minutos, el turno queda cancelado, sin reembolso de la seña",
      ],
      color: "text-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
    },
    {
      icon: XCircle,
      title: "Cancelaciones",
      items: [
        "En caso de no asistir sin previo aviso, el servicio deberá ser abonado igual",
        "La seña es contemplada solo en caso de cancelaciones con 24hs de antelación",
        "La seña solo reserva el turno deseado, no congela el valor del servicio",
      ],
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
    },
    {
      icon: AlertCircle,
      title: "Políticas Generales",
      items: [
        "No asistir en caso de heridas abiertas o infecciones activas",
        "Informar sobre alergias o medicamentos",
        "El pago se realiza al finalizar la consulta",
      ],
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ]

  return (
    <section id="turnos" className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Reserva tu{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">Consulta</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce nuestras políticas para una mejor experiencia en tu consulta
          </p>
        </div>

        {/* Tarjetas de políticas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {policies.map((policy, index) => (
            <Card
              key={index}
              className={`${policy.bgColor} ${policy.borderColor} border-2 hover:shadow-lg transition-all duration-300 group`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${policy.bgColor} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <policy.icon className={`w-6 h-6 ${policy.color}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${policy.color}`}>{policy.title}</h3>
                </div>

                <ul className="space-y-3">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className={`w-4 h-4 ${policy.color} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Información de contacto destacada */}
        <Card className="bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200 border-2">
          <CardContent className="p-8 text-center">
            <Phone className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Lista para tu consulta?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Reserva tu consulta ahora y disfruta de nuestros tratamientos profesionales. Nuestro equipo está listo
              para brindarte la mejor atención personalizada. <strong>Consulta costos y disponibilidad.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={onWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Reservar Cita
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">O llamanos directamente:</p>
                <a
                  href="tel:+541149171027"
                  className="text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-300"
                >
                  11 4917-1027
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
