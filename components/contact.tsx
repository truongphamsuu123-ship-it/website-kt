"use client"

import { Phone, Mail, Facebook } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hãy liên hệ để tư vấn và đặt dịch vụ trang trí tiệc cưới
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Điện Thoại</h3>
                <div className="space-y-1">
                  <Link href="tel:0901268169" className="text-primary hover:underline block">
                    0901 268 169
                  </Link>
                  <Link href="tel:0949569068" className="text-primary hover:underline block">
                    0949 569 068
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <Link href="mailto:tieccuoikhanhtruong@gmail.com" className="text-primary hover:underline">
                  tieccuoikhanhtruong@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Facebook className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Facebook</h3>
                <Link
                  href="https://www.facebook.com/tieccuoi.khanhtruong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Tiệc Cưới Khánh Trương
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Họ và Tên</label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Số Điện Thoại</label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại"
                className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                placeholder="Nhập email"
                className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tin Nhắn</label>
              <textarea
                placeholder="Nhập tin nhắn"
                rows={4}
                className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
