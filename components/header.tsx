import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-pink-100 to-rose-200 p-4 rounded-2xl shadow-lg">
            <Image
              src="/logo-cosmetologist.png"
              alt="Cosmetologist Logo"
              width={240}
              height={120}
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}
