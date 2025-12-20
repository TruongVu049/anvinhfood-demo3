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
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-cream rounded-3xl -rotate-3" />
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover rounded-3xl relative z-10 shadow-xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-gold text-navy px-6 py-3 rounded-full font-semibold shadow-lg">
                MỚI
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${reversed ? "lg:order-1" : ""}`}>
            <span className="text-sm font-medium text-gold-dark tracking-wider uppercase">{subtitle}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mt-2 mb-6">{title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{description}</p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={href}
              className="inline-flex items-center gap-2 text-navy font-medium hover:text-navy-light transition-colors group"
            >
              Xem thêm
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
