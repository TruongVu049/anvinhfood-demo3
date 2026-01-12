"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeaturedProductProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  image: string
  href: string
  reversed?: boolean
}

export function FeaturedProduct({
  title,
  subtitle,
  description,
  features,
  image,
  href,
  reversed = false,
}: FeaturedProductProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
            <div className="relative aspect-square max-w-xs sm:max-w-sm lg:max-w-lg mx-auto">
              <div className="absolute inset-0 bg-cream rounded-2xl sm:rounded-3xl -rotate-3" />
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover rounded-2xl sm:rounded-3xl relative z-10 shadow-xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 z-20 bg-gold text-navy px-3 sm:px-6 py-1.5 sm:py-3 rounded-full font-semibold shadow-lg text-xs sm:text-base">
                MỚI
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${reversed ? "lg:order-1" : ""}`}>
            <span className="text-xs sm:text-sm font-medium text-gold-dark tracking-wider uppercase">{subtitle}</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-navy mt-1 sm:mt-2 mb-3 sm:mb-6">{title}</h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-8">{description}</p>

            {/* Features */}
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3 text-foreground text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={href}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-navy font-medium hover:text-navy-light transition-colors group text-sm sm:text-base"
            >
              Xem thêm
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
