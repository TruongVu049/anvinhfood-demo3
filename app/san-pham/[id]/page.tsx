import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductDetail } from "@/components/product-detail";
import { ProductSection } from "@/components/product-section";

// Mock products database
const productsDatabase: Record<string, any> = {
  "bs1": {
    id: "bs1",
    name: "Xi măng Hà Tiên PCB40 - Bao 50kg",
    description: "Xi măng PCB40 chất lượng cao từ Hà Tiên, độ bền vượt trội, phù hợp cho mọi công trình.",
    longDescription: `Xi măng Hà Tiên PCB40 là sản phẩm xi măng Portland hỗn hợp cao cấp, được sản xuất trên dây chuyền công nghệ hiện đại.

**Đặc tính kỹ thuật:**
- Cường độ nén 28 ngày: ≥ 40 N/mm²
- Thời gian bắt đầu đông kết: ≥ 45 phút
- Độ mịn Blaine: ≥ 2800 cm²/g`,
    price: 95000,
    originalPrice: 110000,
    images: ["/xi măng.png", "/xi măng2.png", "/xi măng3.png"],
    unit: "Bao",
    weight: "50kg",
    origin: "Việt Nam",
    expiry: "60 ngày",
    storage: "Nơi khô ráo, thoáng mát",
    features: ["Cường độ nén cao PCB40", "Thời gian đông kết ổn định", "Chống thấm hiệu quả", "Bao bì chống ẩm", "Đạt TCVN 6260:2009"],
    ingredients: [
      { name: "Clinker", description: "Thành phần chính tạo độ cứng" },
      { name: "Thạch cao", description: "Điều chỉnh thời gian đông kết" },
    ],
    usage: { thawing: "Trộn với cát, đá theo tỷ lệ phù hợp", cooking: "Tỷ lệ: 1 xi măng : 2 cát : 3 đá", note: "Sử dụng trong 60 ngày" },
    certifications: ["TCVN", "ISO 9001"],
    reviews: { average: 4.8, total: 156, breakdown: [{ stars: 5, count: 120 }, { stars: 4, count: 28 }, { stars: 3, count: 5 }, { stars: 2, count: 2 }, { stars: 1, count: 1 }] },
  },
  "bs2": {
    id: "bs2",
    name: "Thép Pomina phi 12 - Cây 12m",
    description: "Thép xây dựng Pomina đạt tiêu chuẩn quốc tế, độ bền kéo cao, chống gỉ sét.",
    longDescription: `Thép Pomina là thương hiệu thép xây dựng hàng đầu Việt Nam, đạt tiêu chuẩn TCVN và JIS.

**Thông số kỹ thuật:**
- Đường kính: 12mm
- Chiều dài: 12m
- Giới hạn chảy: ≥ 390 N/mm²
- Độ bền kéo: ≥ 570 N/mm²`,
    price: 250000,
    originalPrice: 280000,
    images: ["/thép cột.png", "/thép2.png", "/thép3.png"],
    unit: "Cây",
    weight: "10.7kg/cây",
    origin: "Việt Nam",
    expiry: "Không giới hạn",
    storage: "Nơi khô ráo, tránh ẩm ướt",
    features: ["Đạt tiêu chuẩn TCVN và JIS", "Độ bền kéo cao", "Bề mặt gân xoắn bám dính tốt", "Chống gỉ sét", "CO, CQ đầy đủ"],
    ingredients: [
      { name: "Thép carbon", description: "Thành phần chính" },
      { name: "Mangan", description: "Tăng độ cứng" },
    ],
    usage: { thawing: "Cắt theo kích thước cần thiết", cooking: "Buộc thép bằng dây kẽm 1mm", note: "Bảo quản tránh tiếp xúc nước" },
    certifications: ["TCVN", "JIS", "ISO 9001"],
    reviews: { average: 4.9, total: 203, breakdown: [{ stars: 5, count: 180 }, { stars: 4, count: 18 }, { stars: 3, count: 3 }, { stars: 2, count: 1 }, { stars: 1, count: 1 }] },
  },
  "bs3": {
    id: "bs3",
    name: "Gạch men 80x80 Viglacera",
    description: "Gạch men cao cấp Viglacera, bề mặt bóng, chống trơn trượt, đa dạng màu sắc.",
    longDescription: `Gạch men Viglacera 80x80 là sản phẩm gạch lát nền cao cấp, sản xuất trên dây chuyền công nghệ Italy.

**Thông số kỹ thuật:**
- Kích thước: 800x800mm
- Độ dày: 10mm
- Độ hút nước: < 0.5%
- Độ cứng bề mặt: 7 Mohs`,
    price: 285000,
    originalPrice: 320000,
    images: ["/gạch2.png", "/gạch3.png", "/gạch4.png"],
    unit: "m²",
    weight: "22kg/m²",
    origin: "Việt Nam",
    expiry: "Không giới hạn",
    storage: "Nơi khô ráo, xếp đứng",
    features: ["Bề mặt bóng cao cấp", "Chống trơn trượt", "Độ cứng cao 7 Mohs", "Dễ vệ sinh", "Đa dạng màu sắc"],
    ingredients: [
      { name: "Đite feldspar", description: "Tạo độ bóng" },
      { name: "Cao lanh", description: "Tạo độ trắng" },
    ],
    usage: { thawing: "Ngâm gạch trong nước 30 phút trước khi lát", cooking: "Sử dụng keo dán gạch chuyên dụng", note: "Để khe hở 2-3mm giữa các viên" },
    certifications: ["ISO 9001", "ISO 14001"],
    reviews: { average: 4.7, total: 89, breakdown: [{ stars: 5, count: 65 }, { stars: 4, count: 18 }, { stars: 3, count: 4 }, { stars: 2, count: 1 }, { stars: 1, count: 1 }] },
  },
  "bs4": {
    id: "bs4",
    name: "Sơn Jotun Essence 18L",
    description: "Sơn nội thất cao cấp Jotun, độ phủ tốt, chống nấm mốc, màu sắc bền đẹp.",
    longDescription: `Sơn Jotun Essence là dòng sơn nội thất cao cấp từ Na Uy, được ưa chuộng tại Việt Nam.

**Đặc tính:**
- Độ phủ: 12-14m²/lít/lớp
- Thời gian khô: 30 phút
- Số lớp sơn: 2 lớp
- Độ bóng: Mờ`,
    price: 1650000,
    originalPrice: 1850000,
    images: ["/colorpanting.png", "/colorpanting2.png", "/colorpanting3.png"],
    unit: "Thùng",
    weight: "18L",
    origin: "Việt Nam",
    expiry: "36 tháng",
    storage: "Nơi khô ráo, thoáng mát",
    features: ["Độ phủ cao 12-14m²/lít", "Chống nấm mốc", "Màu sắc bền đẹp", "Không mùi khó chịu", "Dễ lau chùi"],
    ingredients: [
      { name: "Nhựa Acrylic", description: "Tạo độ bám dính" },
      { name: "Titanium dioxide", description: "Tạo độ trắng" },
    ],
    usage: { thawing: "Khuấy đều trước khi sử dụng", cooking: "Pha loãng 5-10% nước sạch", note: "Sơn 2 lớp, cách nhau 2 giờ" },
    certifications: ["ISO 9001", "Green Label"],
    reviews: { average: 4.8, total: 124, breakdown: [{ stars: 5, count: 98 }, { stars: 4, count: 20 }, { stars: 3, count: 4 }, { stars: 2, count: 1 }, { stars: 1, count: 1 }] },
  },
  "fs1": {
    id: "fs1",
    name: "Xi măng Hà Tiên PCB40 - Bao 50kg",
    description: "Xi măng PCB40 chất lượng cao, giá ưu đãi Flash Sale.",
    longDescription: `Xi măng Hà Tiên PCB40 - Sản phẩm Flash Sale với giá ưu đãi đặc biệt.`,
    price: 95000,
    originalPrice: 115000,
    images: ["/xi măng2.png", "/xi măng3.png", "/xi măng4.png"],
    unit: "Bao",
    weight: "50kg",
    origin: "Việt Nam",
    expiry: "60 ngày",
    storage: "Nơi khô ráo",
    features: ["Cường độ nén cao", "Chống thấm tốt", "Giá ưu đãi"],
    ingredients: [{ name: "Clinker", description: "Thành phần chính" }],
    usage: { thawing: "Trộn theo tỷ lệ", cooking: "1:2:3", note: "Dùng trong 60 ngày" },
    certifications: ["TCVN"],
    reviews: { average: 4.8, total: 156, breakdown: [{ stars: 5, count: 120 }, { stars: 4, count: 28 }, { stars: 3, count: 5 }, { stars: 2, count: 2 }, { stars: 1, count: 1 }] },
  },
  "fs2": {
    id: "fs2",
    name: "Thép Pomina phi 10 - Cây 12m",
    description: "Thép xây dựng Pomina phi 10, giá Flash Sale.",
    longDescription: `Thép Pomina phi 10 - Sản phẩm Flash Sale.`,
    price: 189000,
    originalPrice: 220000,
    images: ["/thép2.png", "/thép3.png", "/thép4.png"],
    unit: "Cây",
    weight: "7.4kg/cây",
    origin: "Việt Nam",
    expiry: "Không giới hạn",
    storage: "Nơi khô ráo",
    features: ["Đạt TCVN", "Độ bền cao", "Giá tốt"],
    ingredients: [{ name: "Thép carbon", description: "Chính" }],
    usage: { thawing: "Cắt theo size", cooking: "Buộc dây kẽm", note: "Tránh ẩm" },
    certifications: ["TCVN", "JIS"],
    reviews: { average: 4.9, total: 89, breakdown: [{ stars: 5, count: 75 }, { stars: 4, count: 10 }, { stars: 3, count: 3 }, { stars: 2, count: 1 }, { stars: 1, count: 0 }] },
  },
  "fs3": {
    id: "fs3",
    name: "Sơn Dulux nội thất cao cấp 18L",
    description: "Sơn Dulux cao cấp, độ phủ tốt, chống nấm mốc.",
    longDescription: `Sơn Dulux nội thất - Thương hiệu sơn hàng đầu thế giới.`,
    price: 1850000,
    originalPrice: 2200000,
    images: ["/colorpanting2.png", "/colorpanting3.png", "/colorpanting4.png"],
    unit: "Thùng",
    weight: "18L",
    origin: "Việt Nam",
    expiry: "36 tháng",
    storage: "Nơi thoáng mát",
    features: ["Độ phủ cao", "Chống nấm mốc", "Màu bền đẹp"],
    ingredients: [{ name: "Acrylic", description: "Nhựa nền" }],
    usage: { thawing: "Khuấy đều", cooking: "Pha 5-10% nước", note: "Sơn 2 lớp" },
    certifications: ["ISO 9001"],
    reviews: { average: 4.7, total: 67, breakdown: [{ stars: 5, count: 50 }, { stars: 4, count: 12 }, { stars: 3, count: 3 }, { stars: 2, count: 1 }, { stars: 1, count: 1 }] },
  },
  "fs4": {
    id: "fs4",
    name: "Gạch men 60x60 Viglacera",
    description: "Gạch men Viglacera 60x60, bề mặt bóng, chống trơn.",
    longDescription: `Gạch men Viglacera 60x60 - Sản phẩm Flash Sale.`,
    price: 165000,
    originalPrice: 212000,
    images: ["/gạch2.png", "/gạch3.png", "/gạch4.png"],
    unit: "m²",
    weight: "18kg/m²",
    origin: "Việt Nam",
    expiry: "Không giới hạn",
    storage: "Xếp đứng",
    features: ["Bề mặt bóng", "Chống trơn", "Dễ vệ sinh"],
    ingredients: [{ name: "Feldspar", description: "Tạo bóng" }],
    usage: { thawing: "Ngâm nước 30p", cooking: "Dùng keo dán gạch", note: "Để khe 2-3mm" },
    certifications: ["ISO 9001"],
    reviews: { average: 4.6, total: 45, breakdown: [{ stars: 5, count: 32 }, { stars: 4, count: 10 }, { stars: 3, count: 2 }, { stars: 2, count: 1 }, { stars: 1, count: 0 }] },
  },
};

// Default product for unknown IDs
const defaultProduct = {
  id: "default",
  name: "Sản phẩm vật liệu xây dựng",
  description: "Vật liệu xây dựng chất lượng cao từ MeU Solutions.",
  longDescription: "Sản phẩm chất lượng cao, đảm bảo tiêu chuẩn.",
  price: 100000,
  images: ["/xi măng.png"],
  unit: "Cái",
  weight: "N/A",
  origin: "Việt Nam",
  expiry: "N/A",
  storage: "Nơi khô ráo",
  features: ["Chất lượng cao", "Giá tốt"],
  ingredients: [{ name: "N/A", description: "N/A" }],
  usage: { thawing: "N/A", cooking: "N/A", note: "N/A" },
  certifications: ["ISO 9001"],
  reviews: { average: 4.5, total: 10, breakdown: [{ stars: 5, count: 7 }, { stars: 4, count: 2 }, { stars: 3, count: 1 }, { stars: 2, count: 0 }, { stars: 1, count: 0 }] },
};

const relatedProducts = [
  { id: "bs1", name: "Xi măng Hà Tiên PCB40 - Bao 50kg", description: "Chính hãng", price: 95000, originalPrice: 110000, image: "/xi măng4.png", unit: "Bao" },
  { id: "bs2", name: "Thép Pomina phi 12 - Cây 12m", description: "Cao cấp", price: 250000, originalPrice: 280000, image: "/thép4.png", unit: "Cây" },
  { id: "bs3", name: "Gạch men 80x80 Viglacera", description: "Đặc biệt", price: 285000, image: "/gạch4.png", unit: "m²" },
  { id: "bs4", name: "Sơn Jotun Essence 18L", description: "Cao cấp", price: 1650000, originalPrice: 1850000, image: "/colorpanting4.png", unit: "Thùng" },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productsDatabase[id] || { ...defaultProduct, id, name: `Sản phẩm #${id}` };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductDetail product={product} />
        <div className="bg-cream">
          <ProductSection
            subtitle="Có thể bạn sẽ thích"
            title="Sản Phẩm Liên Quan"
            products={relatedProducts.filter(p => p.id !== id)}
            viewAllHref="/danh-muc/xi-mang"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
