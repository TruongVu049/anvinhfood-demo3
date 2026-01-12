import { Shield, Award, Truck, BadgeCheck } from "lucide-react"

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001",
    description: "Chứng nhận hệ thống quản lý chất lượng",
  },
  {
    icon: Award,
    title: "Hàng Chính Hãng",
    description: "100% sản phẩm từ nhà sản xuất uy tín",
  },
  {
    icon: Truck,
    title: "Giao Tận Nơi",
    description: "Vận chuyển đến tận công trình",
  },
  {
    icon: BadgeCheck,
    title: "Bảo Hành Đầy Đủ",
    description: "Chứng từ CO, CQ rõ ràng",
  },
]

export function Certifications() {
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-cream">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-12">
          <span className="text-xs sm:text-sm font-medium text-gold-dark tracking-wider uppercase">Cam kết chất lượng</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-1 sm:mt-2">
            Uy Tín - Chất Lượng - Giá Tốt
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <cert.icon className="h-5 w-5 sm:h-8 sm:w-8 text-navy" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-navy mb-1 sm:mb-2">{cert.title}</h3>
              <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight sm:leading-normal">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
