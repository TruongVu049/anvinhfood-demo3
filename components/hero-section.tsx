"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    badge: "KHUYẾN MÃI ĐẶC BIỆT",
    title: "Hải Sản Cao Cấp\nGiảm Đến 30%",
    description:
      "Tôm hùm Alaska, Cua hoàng đế, Cá hồi Na Uy nhập khẩu chính ngạch. Cam kết tươi ngon, giao hàng lạnh trong 2h.",
    image: "/premium-frozen-lobster-and-king-crab-on-ice.jpg",
    link: "/khuyen-mai/hai-san-cao-cap",
    bgColor: "bg-navy",
  },
  {
    id: 2,
    badge: "MỚI VỀ",
    title: "Cá Hồi Na Uy\nPhile Tươi Đông Lạnh",
    description: "Giàu Omega-3, thịt ngọt tự nhiên. Đóng gói hút chân không, bảo quản chuẩn -18°C.",
    image: "/fresh-norwegian-salmon-fillet-on-wooden-board.jpg",
    link: "/san-pham/ca-hoi-na-uy",
    bgColor: "bg-cream-dark",
  },
  {
    id: 3,
    badge: "COMBO TIẾT KIỆM",
    title: "Bữa Tối Gia Đình\nChỉ Từ 299K",
    description: "Combo đầy đủ dinh dưỡng cho 4 người. Tiết kiệm 25% so với mua lẻ. Miễn phí giao hàng.",
    image: "/family-seafood-dinner-table-with-shrimp-crab-fish.jpg",
    link: "/combo/bua-toi-gia-dinh",
    bgColor: "bg-ice-blue",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div className={cn("min-h-[500px] md:min-h-[600px] lg:min-h-[700px]", slide.bgColor)}>
              <div className="container mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 gap-8 items-center h-full py-12 lg:py-0">
                  {/* Content */}
                  <div
                    className={cn(
                      "order-2 lg:order-1 text-center lg:text-left",
                      index === 0 ? "text-primary-foreground" : "text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full mb-4",
                        index === 0 ? "bg-gold text-navy" : "bg-navy text-primary-foreground",
                      )}
                    >
                      {slide.badge}
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight mb-4 whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p
                      className={cn(
                        "text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed",
                        index === 0 ? "text-primary-foreground/80" : "text-muted-foreground",
                      )}
                    >
                      {slide.description}
                    </p>
                    <Link href={slide.link}>
                      <Button
                        size="lg"
                        className={cn(
                          "group rounded-full px-8",
                          index === 0
                            ? "bg-gold text-navy hover:bg-gold-dark"
                            : "bg-navy text-primary-foreground hover:bg-navy-light",
                        )}
                      >
                        Xem ngay
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="order-1 lg:order-2 relative">
                    <div className="relative aspect-[4/3] lg:aspect-square max-w-lg mx-auto">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        className="object-cover rounded-2xl shadow-2xl"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-lg hover:bg-card transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-lg hover:bg-card transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentSlide === index ? "bg-navy w-8" : "bg-navy/30 hover:bg-navy/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
