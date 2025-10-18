"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000036776.JPG-DASSgildMW0DlkoDjejcQvB8eUETCw.jpeg"
          alt="Tiệc cưới sang trọng"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Tiệc Cưới Khánh Trương</h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-95">
          Trang trí tiệc cưới sang trọng, chuyên nghiệp và đầy đủ dịch vụ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Liên Hệ Ngay
          </Link>
          <Link
            href="#portfolio"
            className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/50"
          >
            Xem Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
