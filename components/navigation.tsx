"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      document.documentElement.style.scrollBehavior = "auto"

      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      smoothScrollTo(offsetPosition, 1200)

      setTimeout(() => {
        document.documentElement.style.scrollBehavior = ""
      }, 1300)
    }
    setIsMenuOpen(false)
  }

  const smoothScrollTo = (targetPosition: number, duration: number) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
  }

  const menuItems = [
    { label: "Inicio", sectionId: "inicio" },
    { label: "Tratamientos", sectionId: "tratamientos" },
    { label: "Productos", sectionId: "productos" },
    { label: "Turnos", sectionId: "turnos" },
    { label: "Galería", sectionId: "galeria" },
    { label: "Contacto", sectionId: "contacto" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent hover:from-pink-600 hover:to-rose-500 transition-all duration-300"
            >
              Cosmetologist
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-gray-700 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-pink-50 rounded-lg relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-500 p-2 rounded-lg transition-all duration-300 hover:bg-pink-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-2"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg border border-pink-100">
            {menuItems.map((item, index) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-gray-700 hover:text-pink-500 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:bg-pink-50 rounded-lg transform hover:translate-x-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 50}ms both` : "none",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}
