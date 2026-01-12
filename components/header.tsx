"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  Phone,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = [
  {
    name: "Xi măng & Vữa",
    href: "/danh-muc/xi-mang",
    items: [
      "Xi măng PCB40",
      "Xi măng trắng",
      "Vữa xây dựng",
      "Vữa chống thấm",
      "Keo dán gạch",
    ],
  },
  {
    name: "Gạch & Đá",
    href: "/danh-muc/gach-da",
    items: ["Gạch ống", "Gạch block", "Gạch men", "Đá granite", "Đá marble"],
  },
  {
    name: "Sắt thép",
    href: "/danh-muc/sat-thep",
    items: ["Thép cuộn", "Thép hình", "Thép ống", "Lưới thép", "Đinh vít"],
  },
  {
    name: "Vật liệu hoàn thiện",
    href: "/danh-muc/hoan-thien",
    items: ["Sơn nước", "Sơn dầu", "Tấm thạch cao", "Ván ép", "Kính xây dựng"],
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/95 backdrop-blur-sm z-50 sticky top-0">
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-1.5 sm:py-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Hotline:</span>
                <span>(+84) 2841099879</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7:30 - 17:30 | Thứ 2 - Thứ 7</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-gold text-xs sm:text-sm">
                Miễn phí vận chuyển đơn từ 5.000.000đ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="relative">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-1.5 sm:p-2 -ml-1 sm:-ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>

            {/* Logo */}
            <div className="relative py-2 sm:py-3 pr-4 sm:pr-10">
              <div
                className="absolute inset-0 bg-navy h-full w-full bg-linear-to-br from-navy to-navy-light skew-x-[-20deg] origin-top pointer-events-none"
              />
              <Link href="/" className="h-full flex items-center gap-2">
                <div className="relative z-10 flex items-center gap-2 -ml-4 sm:-ml-6">
                  <Image
                    src="/logo.png"
                    alt="MeU Solutions Logo"
                    width={48}
                    height={48}
                    className="w-28 sm:w-36 md:w-44 h-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
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
                      "absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    )}
                  >
                    <div className="bg-card rounded-lg shadow-xl border border-border py-3 min-w-[200px]">
                      {category.items.map((item) => (
                        <Link
                          key={item}
                          href={`${category.href}`}
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
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9">
                <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gold text-[8px] sm:text-[10px] font-bold flex items-center justify-center text-navy">
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
          "lg:hidden fixed inset-0 top-[88px] sm:top-[104px] z-50 transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 bg-white h-full overflow-y-auto">
          <div className="space-y-3 sm:space-y-4">
            {categories.map((category) => (
              <div key={category.name} className="border-b border-border pb-3 sm:pb-4">
                <Link
                  href={category.href}
                  className="block text-base sm:text-lg font-medium text-foreground mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {category.items.map((item) => (
                    <Link
                      key={item}
                      href={category.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-navy-light py-1"
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
              className="block text-base sm:text-lg font-medium text-gold-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Khuyến mãi
            </Link>
            <Link
              href="/ve-chung-toi"
              className="block text-base sm:text-lg font-medium text-foreground py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
