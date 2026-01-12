import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BrandPhilosophy() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/kiểm tra và phân loại.png" alt="MeU Solutions Construction" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-gold text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-4">
            Triết lý thương hiệu
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-primary-foreground mb-3 sm:mb-6 leading-tight">
            Chất Lượng Từ Nền Móng,
            <br />
            Vững Chắc Đến Hoàn Thiện
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 mb-4 sm:mb-8 leading-relaxed px-2">
            Với hệ thống kho bãi hiện đại và đội ngũ tư vấn chuyên nghiệp, MeU Solutions cam kết mang đến vật liệu xây dựng chính hãng, giá cả cạnh tranh và dịch vụ giao hàng tận công trình nhanh chóng.
          </p>
          <Link href="/ve-chung-toi">
            <Button size="default" className="bg-gold text-navy hover:bg-gold-dark rounded-full px-4 sm:px-8 group text-sm sm:text-base">
              Tìm hiểu thêm
              <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
