import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"

// Mock data for categories
const categoryData: Record<
  string,
  {
    name: string
    description: string
    subcategories: { name: string; slug: string; count: number }[]
  }
> = {
  "hai-san": {
    name: "Hải Sản Tươi Sống",
    description:
      "Hải sản đông lạnh cao cấp, nhập khẩu từ các vùng biển sạch trên thế giới. Cam kết tươi ngon, an toàn thực phẩm.",
    subcategories: [
      { name: "Tôm các loại", slug: "tom", count: 56 },
      { name: "Cá hồi - Cá ngừ", slug: "ca", count: 45 },
      { name: "Cua - Ghẹ", slug: "cua", count: 28 },
      { name: "Mực - Bạch tuộc", slug: "muc", count: 32 },
      { name: "Nghêu - Sò - Hàu", slug: "ngheu-so", count: 25 },
    ],
  },
  thit: {
    name: "Thịt Đông Lạnh",
    description: "Thịt nhập khẩu từ Mỹ, Úc, Nhật Bản. Chất lượng cao, đạt tiêu chuẩn quốc tế.",
    subcategories: [
      { name: "Thịt bò nhập khẩu", slug: "bo", count: 38 },
      { name: "Thịt heo", slug: "heo", count: 25 },
      { name: "Thịt gà", slug: "ga", count: 30 },
      { name: "Thịt cừu", slug: "cuu", count: 15 },
    ],
  },
  "rau-cu": {
    name: "Rau Củ Đông Lạnh",
    description: "Rau củ đông lạnh giữ nguyên dinh dưỡng, tiện lợi cho mọi bữa ăn.",
    subcategories: [
      { name: "Rau lá xanh", slug: "rau-la", count: 20 },
      { name: "Đậu các loại", slug: "dau", count: 18 },
      { name: "Khoai - Củ", slug: "khoai-cu", count: 15 },
      { name: "Mix rau củ", slug: "mix", count: 15 },
    ],
  },
  "che-bien": {
    name: "Đồ Ăn Chế Biến",
    description: "Sản phẩm chế biến sẵn, tiện lợi, chỉ cần hâm nóng là dùng được ngay.",
    subcategories: [
      { name: "Há cảo - Sủi cảo", slug: "ha-cao", count: 22 },
      { name: "Chả giò - Nem", slug: "cha-gio", count: 18 },
      { name: "Dimsum", slug: "dimsum", count: 25 },
      { name: "Bánh các loại", slug: "banh", count: 20 },
    ],
  },
}

// Mock products
const products = [
  {
    id: "1",
    name: "Cá hồi Na Uy phi lê đông lạnh 500g",
    description: "Giảm gãy rụng và làm mềm tóc",
    price: 289000,
    originalPrice: 370000,
    image: "/salmon-fillet-portion.jpg",
    unit: "Khay",
  },
  {
    id: "2",
    name: "Tôm sú size 20 đông lạnh tự nhiên 1kg",
    description: "Tôm sú tự nhiên",
    price: 385000,
    originalPrice: 495000,
    image: "/tiger-shrimp-prawns.jpg",
    unit: "Hộp",
  },
  {
    id: "3",
    name: "Cua hoàng đế Alaska nguyên con 1.5kg",
    description: "Hải sản cao cấp",
    price: 1850000,
    image: "/king-crab-alaska.jpg",
    badge: "Hot",
    unit: "Con",
  },
  {
    id: "4",
    name: "Mực ống làm sạch đông lạnh 500g",
    description: "Đã sơ chế",
    price: 185000,
    originalPrice: 220000,
    image: "/squid-and-octopus.jpg",
    unit: "Khay",
  },
  {
    id: "5",
    name: "Sò điệp Nhật Bản size L 500g",
    description: "Nhập khẩu Nhật Bản",
    price: 380000,
    originalPrice: 450000,
    image: "/clams-oysters-shellfish.jpg",
    unit: "Hộp",
  },
  {
    id: "6",
    name: "Cá hồi Na Uy nguyên con 2-3kg",
    description: "Nhập khẩu chính ngạch",
    price: 890000,
    originalPrice: 1100000,
    image: "/whole-norwegian-salmon-fish.jpg",
    unit: "Con",
  },
  {
    id: "7",
    name: "Tôm hùm Alaska size L 500g",
    description: "Hàng cao cấp",
    price: 650000,
    originalPrice: 720000,
    image: "/fresh-shrimp-prawns.jpg",
    badge: "Mới",
    unit: "Hộp",
  },
  {
    id: "8",
    name: "Ghẹ xanh nguyên con 500g",
    description: "Tươi ngon",
    price: 245000,
    originalPrice: 290000,
    image: "/crab-and-blue-crab.jpg",
    unit: "Kg",
  },
]

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categoryData[slug] || {
    name: "Danh mục sản phẩm",
    description: "Khám phá các sản phẩm chất lượng cao của An Vinh Food",
    subcategories: [],
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CategoryPage category={category} products={products} slug={slug} />
      </main>
      <Footer />
    </div>
  )
}
