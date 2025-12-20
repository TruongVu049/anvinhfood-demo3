import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProduct } from "@/components/featured-product"
import { FlashSale } from "@/components/flash-sale"
import { CategoryShowcase } from "@/components/category-showcase"
import { ProductSection } from "@/components/product-section"
import { BrandPhilosophy } from "@/components/brand-philosophy"
import { Certifications } from "@/components/certifications"
import { PromoBanners } from "@/components/promo-banners"
import { MealSuggestions } from "@/components/meal-suggestions"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

const bestSellerProducts = [
  {
    id: "bs1",
    name: "Cá hồi Na Uy nguyên con đông lạnh 2-3kg",
    description: "Nhập khẩu chính ngạch",
    price: 890000,
    originalPrice: 1100000,
    image: "/placeholder.svg?height=400&width=400",
    unit: "Con",
  },
  {
    id: "bs2",
    name: "Tôm hùm Alaska size L đông lạnh 500g",
    description: "Hàng cao cấp",
    price: 650000,
    originalPrice: 720000,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Hot",
    unit: "Hộp",
  },
  {
    id: "bs3",
    name: "Cua hoàng đế Alaska nguyên con 1.5kg",
    description: "Đặc biệt",
    price: 1850000,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Mua 1 tặng 1",
    unit: "Con",
  },
  {
    id: "bs4",
    name: "Sò điệp Nhật Bản size L đông lạnh 500g",
    description: "Cao cấp",
    price: 380000,
    originalPrice: 450000,
    image: "/placeholder.svg?height=400&width=400",
    unit: "Hộp",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Slider */}
        <HeroSection />

        {/* Featured Product - Cocoon style */}
        <FeaturedProduct
          subtitle="Sản phẩm nổi bật"
          title="Tôm Sú Biển Tự Nhiên"
          description="Tôm sú được đánh bắt tự nhiên từ vùng biển sạch Phú Quốc, cấp đông ngay tại tàu để giữ trọn độ tươi ngon và dinh dưỡng. Thịt tôm chắc, ngọt tự nhiên, không chất bảo quản."
          features={[
            "Đánh bắt tự nhiên 100%",
            "Cấp đông IQF -40°C ngay trên tàu",
            "Không chứa kháng sinh, hóa chất",
            "Đóng gói hút chân không",
            "Hướng dẫn chế biến chi tiết kèm theo",
          ]}
          image="/placeholder.svg?height=600&width=600"
          href="/san-pham/tom-su-tu-nhien"
        />

        {/* Flash Sale */}
        <FlashSale />

        {/* Featured Product 2 - Reversed */}
        <FeaturedProduct
          subtitle="Hải sản cao cấp"
          title="Cá Hồi Na Uy Phi Lê"
          description="Cá hồi Na Uy được nuôi tại các trang trại đạt chuẩn ASC, giàu Omega-3 tốt cho tim mạch và trí não. Phi lê không xương, tiện lợi cho mọi món ăn từ sashimi đến nướng."
          features={[
            "Nguồn gốc Na Uy rõ ràng",
            "Giàu Omega-3 và protein",
            "Phi lê không xương, không da",
            "Bảo quản -18°C đến 12 tháng",
            "Phù hợp ăn sống hoặc chế biến",
          ]}
          image="/placeholder.svg?height=600&width=600"
          href="/san-pham/ca-hoi-na-uy"
          reversed
        />

        {/* Brand Philosophy */}
        <BrandPhilosophy />

        {/* Certifications */}
        <Certifications />

        {/* Best Sellers */}
        <ProductSection
          subtitle="Được yêu thích nhất"
          title="Sản Phẩm Bán Chạy"
          products={bestSellerProducts}
          viewAllHref="/san-pham-ban-chay"
        />

        {/* Category Showcase */}
        <CategoryShowcase />

        {/* Promo Banners */}
        <PromoBanners />

        {/* Meal Suggestions */}
        <MealSuggestions />

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
