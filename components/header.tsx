"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, User, ShoppingBag, Menu, X, Phone, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  {
    name: "Hải sản tươi sống",
    href: "/danh-muc/hai-san",
    items: ["Tôm các loại", "Cá hồi - Cá ngừ", "Cua - Ghẹ", "Mực - Bạch tuộc", "Nghêu - Sò - Hàu"],
  },
  { name: "Thịt đông lạnh", href: "/danh-muc/thit", items: ["Thịt bò nhập khẩu", "Thịt heo", "Thịt gà", "Thịt cừu"] },
  {
    name: "Rau củ đông lạnh",
    href: "/danh-muc/rau-cu",
    items: ["Rau lá xanh", "Đậu các loại", "Khoai - Củ", "Mix rau củ"],
  },
  {
    name: "Đồ ăn chế biến",
    href: "/danh-muc/che-bien",
    items: ["Há cảo - Sủi cảo", "Chả giò - Nem", "Dimsum", "Bánh các loại"],
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Hotline: 0813.662.778</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7:30 - 17:30 | Thứ 2 - Thứ 7</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-gold">Miễn phí giao hàng đơn từ 500.000đ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button className="lg:hidden p-2 -ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-serif font-bold text-navy tracking-tight">AN VINH</span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Frozen Food
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    href={category.href}
                    className="flex items-center gap-1 py-6 text-sm font-medium text-foreground hover:text-navy-light transition-colors"
                  >
                    {category.name}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                    )}
                  >
                    <div className="bg-card rounded-lg shadow-xl border border-border py-3 min-w-[200px]">
                      {category.items.map((item) => (
                        <Link
                          key={item}
                          href={`${category.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-cream hover:text-navy-light transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <Link
                href="/khuyen-mai"
                className="py-6 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
              >
                Khuyến mãi
              </Link>
              <Link
                href="/ve-chung-toi"
                className="py-6 text-sm font-medium text-foreground hover:text-navy-light transition-colors"
              >
                Về chúng tôi
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-[10px] font-bold flex items-center justify-center text-navy">
                  3
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[104px] bg-card z-40 transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="container mx-auto px-4 py-6">
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name} className="border-b border-border pb-4">
                <Link
                  href={category.href}
                  className="block text-lg font-medium text-foreground mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((item) => (
                    <Link
                      key={item}
                      href={`${category.href}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-navy-light"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/khuyen-mai"
              className="block text-lg font-medium text-gold-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Khuyến mãi
            </Link>
            <Link
              href="/ve-chung-toi"
              className="block text-lg font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
