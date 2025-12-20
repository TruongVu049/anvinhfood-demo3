import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Tôm các loại",
    count: 56,
    image: "/fresh-shrimp-prawns.jpg",
    href: "/danh-muc/tom",
  },
  {
    name: "Cá hồi - Cá ngừ",
    count: 45,
    image: "/salmon-and-tuna-steaks.jpg",
    href: "/danh-muc/ca",
  },
  {
    name: "Cua - Ghẹ",
    count: 28,
    image: "/crab-and-blue-crab.jpg",
    href: "/danh-muc/cua",
  },
  {
    name: "Mực - Bạch tuộc",
    count: 32,
    image: "/squid-and-octopus.jpg",
    href: "/danh-muc/muc",
  },
  {
    name: "Nghêu - Sò - Hàu",
    count: 25,
    image: "/clams-oysters-shellfish.jpg",
    href: "/danh-muc/ngheu-so",
  },
  {
    name: "Mực - Bạch tuộc",
    count: 32,
    image: "/squid-and-octopus.jpg",
    href: "/danh-muc/muc",
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-sm font-medium text-gold-dark tracking-wider uppercase">
            Khám phá
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-2">
            Danh Mục Nổi Bật
          </h2>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                <h3 className="font-semibold text-sm lg:text-base mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-primary-foreground/70">
                  {category.count} sản phẩm
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
