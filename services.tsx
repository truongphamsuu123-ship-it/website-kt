"use client"

import { Flower, Sparkles, Users, Music, Camera, Utensils } from "lucide-react"

const services = [
  {
    icon: Flower,
    title: "Trang Trí Hoa",
    description: "Trang trí hoa tươi, backdrop, cổng cưới sang trọng với thiết kế độc đáo",
  },
  {
    icon: Sparkles,
    title: "Trang Trí Sân Khấu",
    description: "Thiết kế sân khấu lễ cưới với ánh sáng, màn hình LED chuyên nghiệp",
  },
  {
    icon: Users,
    title: "Bàn Tiệc",
    description: "Trang trí bàn tiệc, ghế, khăn trải bàn với phong cách hiện đại",
  },
  {
    icon: Music,
    title: "Âm Thanh & Ánh Sáng",
    description: "Hệ thống âm thanh, ánh sáng chuyên nghiệp cho sự kiện",
  },
  {
    icon: Camera,
    title: "Tư Vấn Thiết Kế",
    description: "Tư vấn thiết kế toàn bộ không gian tiệc cưới theo ý tưởng của bạn",
  },
  {
    icon: Utensils,
    title: "Dịch Vụ Toàn Gói",
    description: "Gói dịch vụ toàn bộ từ trang trí đến hậu cần sự kiện",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Dịch Vụ Của Chúng Tôi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cung cấp các dịch vụ trang trí tiệc cưới chuyên nghiệp, sang trọng và đầy đủ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-lg border border-muted hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
