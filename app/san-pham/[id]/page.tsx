import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductDetail } from "@/components/product-detail";
import { ProductSection } from "@/components/product-section";

// Mock product data
const productData = {
  id: "1",
  name: "Cá hồi Na Uy phi lê đông lạnh 500g",
  description:
    "Cá hồi Na Uy được nuôi tại các trang trại đạt chuẩn ASC, giàu Omega-3 tốt cho tim mạch và trí não. Phi lê không xương, tiện lợi cho mọi món ăn từ sashimi đến nướng.",
  longDescription: `Cá hồi Na Uy (Norwegian Salmon) là một trong những loại cá có giá trị dinh dưỡng cao nhất trên thế giới. Được nuôi trong môi trường nước sạch của vùng biển Bắc Âu, cá hồi Na Uy có thịt béo ngậy, màu cam đặc trưng và hương vị đậm đà.

Sản phẩm cá hồi phi lê của An Vinh Food được nhập khẩu trực tiếp từ Na Uy, đảm bảo nguồn gốc rõ ràng và chất lượng cao nhất. Mỗi miếng phi lê được cắt tỉa cẩn thận, loại bỏ hoàn toàn xương và da, giúp việc chế biến trở nên đơn giản và tiện lợi.

**Quy trình cấp đông:**
- Cấp đông nhanh IQF ngay sau khi sơ chế
- Bảo quản ở nhiệt độ -18°C
- Đóng gói hút chân không để giữ trọn hương vị`,
  price: 289000,
  originalPrice: 370000,
  images: [
    "/salmon-fillet-portion.jpg",
    "/whole-norwegian-salmon-fish.jpg",
    "/salmon-and-tuna-steaks.jpg",
  ],
  unit: "Khay",
  weight: "500g",
  origin: "Na Uy",
  expiry: "12 tháng kể từ ngày sản xuất",
  storage: "Bảo quản ở nhiệt độ -18°C",
  features: [
    "Phi lê không xương, không da",
    "Cấp đông IQF giữ trọn dinh dưỡng",
    "Đóng gói hút chân không",
    "Nguồn gốc Na Uy rõ ràng",
    "Chứng nhận ASC",
  ],
  ingredients: [
    { name: "Omega-3", description: "Tốt cho tim mạch và trí não" },
    { name: "Protein", description: "20g/100g, xây dựng cơ bắp" },
    { name: "Vitamin D", description: "Hỗ trợ hấp thu canxi" },
    { name: "Vitamin B12", description: "Tốt cho hệ thần kinh" },
  ],
  usage: {
    thawing:
      "Rã đông trong ngăn mát tủ lạnh 4-6 tiếng hoặc ngâm nước lạnh 30 phút",
    cooking:
      "Có thể áp chảo, nướng, hấp hoặc ăn sashimi (với sản phẩm đạt chuẩn sashimi)",
    note: "Sau khi rã đông nên sử dụng ngay, không cấp đông lại",
  },
  certifications: ["HACCP", "ISO 22000", "ASC"],
  reviews: {
    average: 4.8,
    total: 156,
    breakdown: [
      { stars: 5, count: 120 },
      { stars: 4, count: 28 },
      { stars: 3, count: 5 },
      { stars: 2, count: 2 },
      { stars: 1, count: 1 },
    ],
  },
};

const relatedProducts = [
  {
    id: "r1",
    name: "Cá hồi Na Uy nguyên con 2-3kg",
    description: "Nhập khẩu chính ngạch",
    price: 890000,
    originalPrice: 1100000,
    image: "/whole-norwegian-salmon-fish.jpg",
    unit: "Con",
  },
  {
    id: "r2",
    name: "Trứng cá hồi Nhật Bản 100g",
    description: "Cao cấp",
    price: 450000,
    originalPrice: 520000,
    image: "/whole-norwegian-salmon-fish.jpg",
    unit: "Hộp",
  },
  {
    id: "r3",
    name: "Cá ngừ đại dương phi lê 500g",
    description: "Đánh bắt tự nhiên",
    price: 320000,
    originalPrice: 380000,
    image: "/salmon-and-tuna-steaks.jpg",
    unit: "Khay",
  },
  {
    id: "r4",
    name: "Cá thu phi lê đông lạnh 500g",
    description: "Việt Nam",
    price: 185000,
    originalPrice: 220000,
    image: "/whole-norwegian-salmon-fish.jpg",
    unit: "Khay",
  },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductDetail product={productData} />

        {/* Related Products */}
        <div className="bg-cream">
          <ProductSection
            subtitle="Có thể bạn sẽ thích"
            title="Sản Phẩm Liên Quan"
            products={relatedProducts}
            viewAllHref="/danh-muc/hai-san/ca"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
