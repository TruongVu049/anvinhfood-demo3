"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  unit?: string
  size?: "default" | "large"
}

export function ProductCard({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  badge,
  unit = "Khay",
  size = "default",
}: ProductCardProps) {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0

  return (
    <div
      className={cn(
        "group bg-card rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl",
        size === "large" ? "flex flex-col" : "",
      )}
    >
      {/* Image */}
      <Link href={`/san-pham/${id}`} className="block relative">
        <div className={cn("relative overflow-hidden bg-cream", size === "large" ? "aspect-4/5" : "aspect-square")}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-2">
            {badge && <span className="bg-gold text-navy text-[10px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full">{badge}</span>}
            {discount > 0 && (
              <span className="bg-destructive text-primary-foreground text-[10px] sm:text-xs font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 p-1 sm:p-2 rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
            aria-label="Add to wishlist"
          >
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-foreground" />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-2 sm:p-4 flex flex-col grow">
        <Link href={`/san-pham/${id}`}>
          <h3 className="font-medium text-foreground line-clamp-2 mb-0.5 sm:mb-1 hover:text-navy-light transition-colors text-xs sm:text-base leading-tight sm:leading-normal">
            {name}
          </h3>
        </Link>
        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide mb-1.5 sm:mb-3 hidden sm:block">{description}</p>

        <div className="mt-auto flex items-center justify-between gap-1">
          <div className="min-w-0">
            <div className="flex items-baseline gap-0.5 flex-wrap">
              <span className="text-sm sm:text-lg font-bold text-navy">{price.toLocaleString("vi-VN")}đ</span>
              <span className="text-[10px] sm:text-sm text-muted-foreground">/{unit}</span>
            </div>
            {originalPrice && (
              <div className="text-[10px] sm:text-sm text-muted-foreground line-through">{originalPrice.toLocaleString("vi-VN")}đ</div>
            )}
          </div>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full border-navy text-navy hover:bg-navy hover:text-primary-foreground bg-transparent h-7 w-7 sm:h-9 sm:w-9 shrink-0"
          >
            <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
