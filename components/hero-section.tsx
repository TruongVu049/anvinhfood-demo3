"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    badge: "KHUYẾN MÃI ĐẶC BIỆT",
    title: "Vật Liệu Xây Dựng\nGiảm Đến 30%",
    description:
      "Xi măng, sắt thép, gạch men chính hãng từ các thương hiệu uy tín. Cam kết chất lượng, giao hàng tận công trình.",
    image: "/banner1.png",
    link: "/khuyen-mai/vat-lieu-xay-dung",
    bgColor: "bg-navy",
  },
  {
    id: 2,
    badge: "MỚI VỀ",
    title: "Sơn Dulux\nCao Cấp Chính Hãng",
    description:
      "Sơn nội thất, ngoại thất đa dạng màu sắc. Độ bền cao, chống thấm, chống nấm mốc hiệu quả.",
    image: "/colorpanting.png",
    link: "/san-pham/son-dulux",
    bgColor: "bg-cream-dark",
  },
  {
    id: 3,
    badge: "COMBO TIẾT KIỆM",
    title: "Combo Xây Thô\nTiết Kiệm 25%",
    description:
      "Combo đầy đủ xi măng, gạch, cát, đá cho công trình. Tiết kiệm chi phí, miễn phí vận chuyển.",
    image: "/banner2.png",
    link: "/combo/xay-tho",
    bgColor: "bg-ice-blue",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full shrink-0">
            <div className={cn("lg:py-16 ", slide.bgColor)}>
              <div className="container mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center h-full py-6 sm:py-8 lg:py-0">
                  {/* Content */}
                  <div
                    className={cn(
                      "order-2 lg:order-1 text-center lg:text-left",
                      index === 0
                        ? "text-primary-foreground"
                        : "text-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold tracking-wider rounded-full mb-2 sm:mb-4",
                        index === 0
                          ? "bg-gold text-navy"
                          : "bg-navy text-primary-foreground"
                      )}
                    >
                      {slide.badge}
                    </span>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold leading-tight mb-2 sm:mb-4 whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p
                      className={cn(
                        "text-sm sm:text-base md:text-lg mb-4 sm:mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed line-clamp-3 sm:line-clamp-none",
                        index === 0
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      )}
                    >
                      {slide.description}
                    </p>
                    <Link href={slide.link}>
                      <Button
                        size="default"
                        className={cn(
                          "group rounded-full px-4 sm:px-6 lg:px-8 text-sm sm:text-base",
                          index === 0
                            ? "bg-gold text-navy hover:bg-gold-dark"
                            : "bg-navy text-primary-foreground hover:bg-navy-light"
                        )}
                      >
                        Xem ngay
                        <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="order-1 lg:order-2 relative">
                    <div className="relative aspect-square sm:aspect-4/3 lg:aspect-square max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-lg mx-auto">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        className="object-contain object-center rounded-xl sm:rounded-2xl"
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
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-lg hover:bg-card transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-lg hover:bg-card transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all",
              currentSlide === index
                ? "bg-navy w-5 sm:w-8"
                : "bg-navy/30 hover:bg-navy/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
