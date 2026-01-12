import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProduct } from "@/components/featured-product";
import { FlashSale } from "@/components/flash-sale";
import { CategoryShowcase } from "@/components/category-showcase";
import { ProductSection } from "@/components/product-section";
import { BrandPhilosophy } from "@/components/brand-philosophy";
import { Certifications } from "@/components/certifications";
import { PromoBanners } from "@/components/promo-banners";
import { MealSuggestions } from "@/components/meal-suggestions";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

const bestSellerProducts = [
  {
    id: "bs1",
    name: "Xi măng Hà Tiên PCB40 - Bao 50kg",
    description: "Chính hãng",
    price: 95000,
    originalPrice: 110000,
    image: "/xi măng4.png",
    unit: "Bao",
  },
  {
    id: "bs2",
    name: "Thép Pomina phi 12 - Cây 12m",
    description: "Hàng cao cấp",
    price: 250000,
    originalPrice: 280000,
    image: "/thép4.png",
    badge: "Hot",
    unit: "Cây",
  },
  {
    id: "bs3",
    name: "Gạch men 80x80 Viglacera",
    description: "Đặc biệt",
    price: 285000,
    image: "/gạch4.png",
    badge: "Mua 10 tặng 1",
    unit: "m²",
  },
  {
    id: "bs4",
    name: "Sơn Jotun Essence 18L",
    description: "Cao cấp",
    price: 1650000,
    originalPrice: 1850000,
    image: "/colorpanting4.png",
    unit: "Thùng",
  },
];

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
          title="Xi Măng Hà Tiên"
          description="Xi măng PCB40 chất lượng cao, độ bền vượt trội, phù hợp cho mọi công trình từ dân dụng đến công nghiệp. Sản xuất theo tiêu chuẩn TCVN, đảm bảo chất lượng."
          features={[
            "Cường độ nén cao, đạt chuẩn PCB40",
            "Thời gian đông kết ổn định",
            "Chống thấm, chống nứt hiệu quả",
            "Bao bì chống ẩm, bảo quản tốt",
            "Giao hàng tận công trình",
          ]}
          image="/xi măng5.png"
          href="/san-pham/xi-mang-ha-tien"
        />

        {/* Flash Sale */}
        <FlashSale />

        {/* Featured Product 2 - Reversed */}
        <FeaturedProduct
          subtitle="Vật liệu cao cấp"
          title="Thép Pomina"
          description="Thép xây dựng Pomina đạt tiêu chuẩn quốc tế, độ bền kéo cao, chống gỉ sét. Phù hợp cho kết cấu bê tông cốt thép, móng, cột, dầm."
          features={[
            "Đạt tiêu chuẩn TCVN và JIS",
            "Độ bền kéo cao, dẻo dai",
            "Bề mặt gân xoắn bám dính tốt",
            "Đa dạng kích thước phi 6-32",
            "Chứng nhận CO, CQ đầy đủ",
          ]}
          image="/thép5.png"
          href="/san-pham/thep-pomina"
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
  );
}
