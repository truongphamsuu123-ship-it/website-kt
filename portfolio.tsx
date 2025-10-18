"use client"

import Image from "next/image"
import { useState } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "Tiệc Cưới Sang Trọng",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000036776.JPG-DASSgildMW0DlkoDjejcQvB8eUETCw.jpeg",
    category: "Trang Trí Bàn Tiệc",
  },
  {
    id: 2,
    title: "Backdrop Lễ Cưới",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000036777.JPG-CgC8Nuj6DnNmDIevOdJ1sE2IUmf0Yb.jpeg",
    category: "Sân Khấu",
  },
  {
    id: 3,
    title: "Lễ Vu Quy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000036782.JPG-vsVzu9YHQSgsANX91XPpt7neNRBbj7.jpeg",
    category: "Backdrop",
  },
  {
    id: 4,
    title: "Cổng Cưới Hoa Tươi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000037494.JPG-q6ox3DXRBaTz1FyOL9Jjjd4geGtJrf.jpeg",
    category: "Cổng Cưới",
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Trang Trí Bàn Tiệc", "Sân Khấu", "Backdrop", "Cổng Cưới"]

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những công trình trang trí tiệc cưới đã thực hiện
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-foreground border border-muted hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-square">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
