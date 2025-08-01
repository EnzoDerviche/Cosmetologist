import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  price: string
  originalPrice?: string
  description: string
  duration?: string
  isPopular?: boolean
}

export function ServiceCard({
  icon: Icon,
  title,
  price,
  originalPrice,
  description,
  duration,
  isPopular,
}: ServiceCardProps) {
  return (
    <Card
      className={`${
        isPopular
          ? "bg-gradient-to-br from-pink-100 to-rose-100 border-pink-300"
          : "bg-white/80 backdrop-blur-sm border-pink-200"
      } hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
          MÁS POPULAR
        </div>
      )}
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div
            className={`w-16 h-16 ${
              isPopular ? "bg-gradient-to-r from-pink-200 to-rose-200" : "bg-gradient-to-r from-pink-100 to-rose-100"
            } rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className={`w-8 h-8 ${isPopular ? "text-pink-600" : "text-pink-500"}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          {price && (
            <div className={`text-3xl font-bold ${isPopular ? "text-pink-600" : "text-pink-500"} mb-1`}>{price}</div>
          )}
          {originalPrice && <div className="text-sm text-gray-500 line-through mb-3">{originalPrice}</div>}

          {duration && (
            <div className="flex items-center justify-center gap-1 mb-3">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 font-medium">{duration}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed text-center">{description}</p>
      </CardContent>
    </Card>
  )
}
