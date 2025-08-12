"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
  title: string
}

interface ImageCarouselProps {
  images?: GalleryImage[]
  currentIndex?: number
  setCurrentIndex?: (index: number) => void
}

export function ImageCarousel({ images, currentIndex, setCurrentIndex }: ImageCarouselProps) {
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0)
  const [internalImages] = useState<GalleryImage[]>([
    {
      src: "/img/img1.jpeg",
      alt: "Interior del salón Milenas Nails",
      title: "",
    },
    {
      src: "/img/img2.jpeg",
      alt: "Diseño de uñas elegante",
      title: "",
    },
    {
      src: "/img/img3.jpeg",
      alt: "Manicura profesional",
      title: "",
    },
    {
      src: "/img/img4.jpeg",
      alt: "Nail art decorativo",
      title: "",
    },
    {
      src: "/img/img5.jpeg",
      alt: "Ambiente relajante",
      title: "",
    },
    {
      src: "/img/img6.jpeg",
      alt: "Ambiente relajante",
      title: "",
    },
    {
      src: "/img/img7.jpeg",
      alt: "Ambiente relajante",
      title: "",
    },
    {
      src: "/img/img8.jpeg",
      alt: "Ambiente relajante",
      title: "",
    },
    {
      src: "/img/img9.jpeg",
      alt: "Ambiente relajante",
      title: "",
    },
    {
      src: "/img/img10.jpeg",
      alt: "Ambiente relajante",
      title: "",
    },
  ])

  const galleryImages = images || internalImages
  const currentImageIndex = currentIndex !== undefined ? currentIndex : internalCurrentIndex
  const setCurrentImageIndex = setCurrentIndex || setInternalCurrentIndex

  useEffect(() => {
    const timer = setInterval(() => {
      if (setCurrentIndex) {
        setCurrentIndex(currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1)
      } else {
        setInternalCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [galleryImages.length, currentImageIndex, setCurrentIndex])

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1)
  }

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1)
  }

  return (
   <section id="galeria" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestro Trabajo y Salón</h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="relative h-96 md:h-[500px] flex items-center justify-center">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].alt}
                width={600}
                height={400}
                className="max-w-full max-h-full object-cover rounded-xl shadow-lg transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold drop-shadow-lg">{galleryImages[currentImageIndex].title}</h3>
              </div>
            </div>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-pink-400 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
