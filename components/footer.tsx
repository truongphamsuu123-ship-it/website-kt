"use client"

import Link from "next/link"
import { Facebook, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tiệc Cưới Khánh Trương</h3>
            <p className="text-white/80">
              Cung cấp dịch vụ trang trí tiệc cưới chuyên nghiệp, sang trọng và đầy đủ với đội ngũ tư vấn viên giàu kinh
              nghiệm.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/80 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Thông Tin Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <div>
                  <Link href="tel:0901268169" className="text-white/80 hover:text-white transition-colors">
                    0901 268 169
                  </Link>
                  <br />
                  <Link href="tel:0949569068" className="text-white/80 hover:text-white transition-colors">
                    0949 569 068
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <Link
                  href="mailto:tieccuoikhanhtruong@gmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  tieccuoikhanhtruong@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 flex justify-center gap-6">
          <Link
            href="https://www.facebook.com/tieccuoi.khanhtruong"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            <Facebook size={24} />
          </Link>
          <Link href="tel:0901268169" className="text-white/80 hover:text-white transition-colors">
            <Phone size={24} />
          </Link>
          <Link
            href="mailto:tieccuoikhanhtruong@gmail.com"
            className="text-white/80 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 Tiệc Cưới Khánh Trương. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
