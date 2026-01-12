"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "./product-card"

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  unit?: string
}

interface ProductSectionProps {
  title: string
  subtitle?: string
  products: Product[]
  viewAllHref: string
  viewAllText?: string
}

export function ProductSection({
  title,
  subtitle,
  products,
  viewAllHref,
  viewAllText = "Xem tất cả",
}: ProductSectionProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
          <div>
            {subtitle && (
              <span className="text-xs sm:text-sm font-medium text-gold-dark tracking-wider uppercase">{subtitle}</span>
            )}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-0.5 sm:mt-1">{title}</h2>
          </div>
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-navy font-medium hover:text-navy-light transition-colors group text-sm sm:text-base"
          >
            {viewAllText} ({products.length})
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
