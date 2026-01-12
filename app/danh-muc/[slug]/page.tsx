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
  "xi-mang": {
    name: "Xi Măng & Vữa",
    description:
      "Xi măng và vữa xây dựng chất lượng cao từ các thương hiệu uy tín. Đảm bảo độ bền và chất lượng công trình.",
    subcategories: [
      { name: "Xi măng PCB40", slug: "xi-mang-pcb40", count: 25 },
      { name: "Xi măng trắng", slug: "xi-mang-trang", count: 15 },
      { name: "Vữa xây dựng", slug: "vua-xay-dung", count: 20 },
      { name: "Vữa chống thấm", slug: "vua-chong-tham", count: 18 },
      { name: "Keo dán gạch", slug: "keo-dan-gach", count: 22 },
    ],
  },
  "gach-da": {
    name: "Gạch & Đá",
    description:
      "Gạch xây dựng và đá ốp lát đa dạng mẫu mã, chất lượng cao. Phù hợp cho mọi công trình.",
    subcategories: [
      { name: "Gạch ống", slug: "gach-ong", count: 35 },
      { name: "Gạch block", slug: "gach-block", count: 28 },
      { name: "Gạch men", slug: "gach-men", count: 45 },
      { name: "Đá granite", slug: "da-granite", count: 22 },
      { name: "Đá marble", slug: "da-marble", count: 18 },
    ],
  },
  "sat-thep": {
    name: "Sắt Thép",
    description:
      "Sắt thép xây dựng chính hãng từ Pomina, Hòa Phát, Việt Nhật. Đạt tiêu chuẩn TCVN.",
    subcategories: [
      { name: "Thép cuộn", slug: "thep-cuon", count: 25 },
      { name: "Thép hình", slug: "thep-hinh", count: 30 },
      { name: "Thép ống", slug: "thep-ong", count: 20 },
      { name: "Lưới thép", slug: "luoi-thep", count: 15 },
      { name: "Đinh vít", slug: "dinh-vit", count: 35 },
    ],
  },
  "hoan-thien": {
    name: "Vật Liệu Hoàn Thiện",
    description:
      "Vật liệu hoàn thiện nội ngoại thất: sơn, tấm thạch cao, ván ép, kính xây dựng.",
    subcategories: [
      { name: "Sơn nước", slug: "son-nuoc", count: 40 },
      { name: "Sơn dầu", slug: "son-dau", count: 25 },
      { name: "Tấm thạch cao", slug: "tam-thach-cao", count: 18 },
      { name: "Ván ép", slug: "van-ep", count: 22 },
      { name: "Kính xây dựng", slug: "kinh-xay-dung", count: 20 },
    ],
  },
};

// Mock products
const products = [
  {
    id: "1",
    name: "Xi măng Hà Tiên PCB40 - Bao 50kg",
    description: "Chính hãng, chất lượng cao",
    price: 95000,
    originalPrice: 115000,
    image: "/xi măng.png",
    unit: "Bao",
  },
  {
    id: "2",
    name: "Thép Pomina phi 12 - Cây 12m",
    description: "Thép xây dựng chính hãng",
    price: 250000,
    originalPrice: 280000,
    image: "/thép cột.png",
    unit: "Cây",
  },
  {
    id: "3",
    name: "Gạch men 60x60 Viglacera",
    description: "Gạch men cao cấp",
    price: 165000,
    image: "/gạch2.png",
    badge: "Hot",
    unit: "m²",
  },
  {
    id: "4",
    name: "Sơn Dulux Inspire 18L",
    description: "Sơn nội thất cao cấp",
    price: 1450000,
    originalPrice: 1650000,
    image: "/colorpanting.png",
    unit: "Thùng",
  },
  {
    id: "5",
    name: "Cát xây dựng loại 1",
    description: "Cát vàng sạch",
    price: 350000,
    originalPrice: 400000,
    image: "/cát.png",
    unit: "m³",
  },
  {
    id: "6",
    name: "Đá 1x2 xây dựng",
    description: "Đá nghiền sạch",
    price: 280000,
    originalPrice: 320000,
    image: "/cát2.png",
    unit: "m³",
  },
  {
    id: "7",
    name: "Tôn Hoa Sen 5 sóng",
    description: "Tôn lợp mái chính hãng",
    price: 95000,
    originalPrice: 110000,
    image: "/ngói nhà.png",
    badge: "Mới",
    unit: "m²",
  },
  {
    id: "8",
    name: "Gạch block 15x20x40",
    description: "Gạch xây tường",
    price: 8500,
    originalPrice: 9500,
    image: "/gạch tường.png",
    unit: "Viên",
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
    description: "Khám phá các sản phẩm vật liệu xây dựng chất lượng cao của MeU Solutions",
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
