"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { ProductCard } from "./product-card"

const flashSaleProducts = [
  {
    id: "fs1",
    name: "Cá hồi Na Uy nguyên con đông lạnh 2-3kg",
    description: "Giảm giá sốc",
    price: 245000,
    originalPrice: 315000,
    image: "/whole-norwegian-salmon-fish.jpg",
    badge: "Flash Sale",
    unit: "Khay",
  },
  {
    id: "fs2",
    name: "Cá hồi Na Uy phi lê đông lạnh 500g",
    description: "Giảm giá sốc",
    price: 289000,
    originalPrice: 370000,
    image: "/salmon-fillet-portion.jpg",
    badge: "Flash Sale",
    unit: "Khay",
  },
  {
    id: "fs3",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    description: "Giảm giá sốc",
    price: 385000,
    originalPrice: 495000,
    image: "/tiger-shrimp-prawns.jpg",
    badge: "Flash Sale",
    unit: "Hộp",
  },
  {
    id: "fs4",
    name: "Cua hoàng đế Alaska nguyên con 1.5kg",
    description: "Giảm giá sốc",
    price: 165000,
    originalPrice: 212000,
    image: "/king-crab-alaska.jpg",
    badge: "Flash Sale",
    unit: "Khay",
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
    <section className="py-12 lg:py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 lg:mb-12">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-destructive text-primary-foreground px-4 py-2 rounded-full">
              <Zap className="h-5 w-5" />
              <span className="font-bold">Flash Sale</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">Giá Sốc Mỗi Ngày</h2>
              <p className="text-muted-foreground">Đông lạnh tươi ngon</p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Kết thúc sau:</span>
            <div className="flex items-center gap-2">
              <div className="bg-navy text-primary-foreground px-3 py-2 rounded-lg min-w-[48px] text-center">
                <span className="text-xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
              </div>
              <span className="text-navy font-bold">:</span>
              <div className="bg-navy text-primary-foreground px-3 py-2 rounded-lg min-w-[48px] text-center">
                <span className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
              </div>
              <span className="text-navy font-bold">:</span>
              <div className="bg-navy text-primary-foreground px-3 py-2 rounded-lg min-w-[48px] text-center">
                <span className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          <Link
            href="/flash-sale"
            className="inline-flex items-center gap-2 text-navy font-medium hover:text-navy-light transition-colors group"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
