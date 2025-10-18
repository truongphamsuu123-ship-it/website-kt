"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">KT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Khánh Trương</h1>
              <p className="text-xs text-muted-foreground">Tiệc Cưới</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Dịch Vụ
            </Link>
            <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Liên Hệ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link
              href="#services"
              className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dịch Vụ
            </Link>
            <Link
              href="#portfolio"
              className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Liên Hệ
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
