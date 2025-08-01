import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-rose-300 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <h3 className="text-2xl font-bold text-center md:text-left">Cosmetologist</h3>

          <a
            href="https://instagram.com/cosmetologist.ok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-100 transition-colors duration-300 order-last md:order-none"
          >
            <Instagram className="w-8 h-8" />
          </a>

          <h4 className="font-bold text-center md:text-right text-sm md:text-base max-w-xs md:max-w-none">
            Tu belleza y la salud de tu piel, nuestra prioridad.
          </h4>
        </div>
      </div>
    </footer>
  )
}
