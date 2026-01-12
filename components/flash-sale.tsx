"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { ProductCard } from "./product-card"

const flashSaleProducts = [
  {
    id: "fs1",
    name: "Xi măng Hà Tiên PCB40 - Bao 50kg",
    description: "Giảm giá sốc",
    price: 95000,
    originalPrice: 115000,
    image: "/xi măng2.png",
    badge: "Flash Sale",
    unit: "Bao",
  },
  {
    id: "fs2",
    name: "Thép Pomina phi 10 - Cây 12m",
    description: "Giảm giá sốc",
    price: 189000,
    originalPrice: 220000,
    image: "/thép2.png",
    badge: "Flash Sale",
    unit: "Cây",
  },
  {
    id: "fs3",
    name: "Sơn Dulux nội thất cao cấp 18L",
    description: "Giảm giá sốc",
    price: 1850000,
    originalPrice: 2200000,
    image: "/colorpanting2.png",
    badge: "Flash Sale",
    unit: "Thùng",
  },
  {
    id: "fs4",
    name: "Gạch men 60x60 Viglacera",
    description: "Giảm giá sốc",
    price: 165000,
    originalPrice: 212000,
    image: "/gạch2.png",
    badge: "Flash Sale",
    unit: "m²",
  },
]

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 51,
    seconds: 2,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          minutes = 59
          seconds = 59
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-cream">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 bg-destructive text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-bold text-sm sm:text-base">Flash Sale</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-navy">Giá Sốc Mỗi Ngày</h2>
              <p className="text-muted-foreground text-sm">Vật liệu chính hãng</p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm text-muted-foreground hidden sm:inline">Kết thúc sau:</span>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="bg-navy text-primary-foreground px-2 sm:px-3 py-1 sm:py-2 rounded-lg min-w-[36px] sm:min-w-[48px] text-center">
                <span className="text-base sm:text-xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
              </div>
              <span className="text-navy font-bold">:</span>
              <div className="bg-navy text-primary-foreground px-2 sm:px-3 py-1 sm:py-2 rounded-lg min-w-[36px] sm:min-w-[48px] text-center">
                <span className="text-base sm:text-xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
              </div>
              <span className="text-navy font-bold">:</span>
              <div className="bg-navy text-primary-foreground px-2 sm:px-3 py-1 sm:py-2 rounded-lg min-w-[36px] sm:min-w-[48px] text-center">
                <span className="text-base sm:text-xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          <Link
            href="/flash-sale"
            className="inline-flex items-center gap-2 text-navy font-medium hover:text-navy-light transition-colors group text-sm sm:text-base"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
