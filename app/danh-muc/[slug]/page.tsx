import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryPage } from "@/components/category-page";

// Mock data for categories
const categoryData: Record<
  string,
  {
    name: string;
    description: string;
    subcategories: { name: string; slug: string; count: number }[];
  }
> = {
  "hai-san": {
    name: "Hải Sản Tươi Sống",
    description:
      "Hải sản đông lạnh cao cấp, nhập khẩu từ các vùng biển sạch trên thế giới. Cam kết tươi ngon, an toàn thực phẩm.",
    subcategories: [
      { name: "Tôm các loại", slug: "tom-cac-loai", count: 56 },
      { name: "Cá hồi - Cá ngừ", slug: "ca-hoi-ca-ngu", count: 45 },
      { name: "Cua - Ghẹ", slug: "cua-ghe", count: 28 },
      { name: "Mực - Bạch tuộc", slug: "muc-bach-tuoc", count: 32 },
      { name: "Nghêu - Sò - Hàu", slug: "ngheu-so-hau", count: 25 },
    ],
  },
  "tom-dong-lanh": {
    name: "Tôm Đông Lạnh",
    description:
      "Tôm đông lạnh cao cấp, tươi ngon từ các nguồn cung ứng uy tín. Đảm bảo chất lượng và an toàn thực phẩm.",
    subcategories: [
      { name: "Tôm sú", slug: "tom-su", count: 35 },
      { name: "Tôm thẻ", slug: "tom-the", count: 28 },
      { name: "Tôm hùm", slug: "tom-hum", count: 20 },
      { name: "Tôm càng xanh", slug: "tom-cang-xanh", count: 22 },
      { name: "Tôm hắp", slug: "tom-hap", count: 18 },
    ],
  },
  "ca-hoi": {
    name: "Cá Hồi",
    description:
      "Cá hồi Na Uy, Canada cao cấp. Thịt cá tươi ngon, giàu Omega-3, tốt cho sức khỏe.",
    subcategories: [
      { name: "Vay cá hồi", slug: "vay-ca-hoi", count: 25 },
      { name: "Lườn cá hồi", slug: "luon-ca-hoi", count: 30 },
    ],
  },
  "thuc-pham-dong-lanh": {
    name: "Thực Phẩm Đông Lạnh",
    description:
      "Các sản phẩm thực phẩm đông lạnh chế biến sẵn, tiện lợi và nhanh chóng.",
    subcategories: [
      { name: "Chả cá", slug: "cha-ca", count: 22 },
      { name: "Hải sản chế biến sẵn", slug: "hai-san-che-bien-san", count: 28 },
      { name: "Combo tiện lợi", slug: "combo-tien-loi", count: 18 },
      { name: "Đồ ăn nhanh", slug: "do-an-nhanh", count: 20 },
    ],
  },
};

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
];

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryData[slug] || {
    name: "Danh mục sản phẩm",
    description: "Khám phá các sản phẩm chất lượng cao của An Vinh Food",
    subcategories: [],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CategoryPage category={category} products={products} slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
