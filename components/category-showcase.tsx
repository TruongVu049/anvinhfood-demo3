import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Xi măng",
    count: 56,
    image: "/xi măng.png",
    href: "/danh-muc/xi-mang",
  },
  {
    name: "Gạch xây dựng",
    count: 45,
    image: "/gạch tường.png",
    href: "/danh-muc/gach",
  },
  {
    name: "Sắt thép",
    count: 28,
    image: "/thép cột.png",
    href: "/danh-muc/sat-thep",
  },
  {
    name: "Sơn & Chống thấm",
    count: 32,
    image: "/colorpanting.png",
    href: "/danh-muc/son",
  },
  {
    name: "Cát & Đá",
    count: 25,
    image: "/cát.png",
    href: "/danh-muc/cat-da",
  },
  {
    name: "Vật liệu hoàn thiện",
    count: 32,
    image: "/gỗ.png",
    href: "/danh-muc/hoan-thien",
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-14">
          <span className="text-xs sm:text-sm font-medium text-gold-dark tracking-wider uppercase">
            Khám phá
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-1 sm:mt-2">
            Danh Mục Nổi Bật
          </h2>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg sm:rounded-2xl aspect-square"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-primary-foreground">
                <h3 className="font-semibold text-[10px] sm:text-sm lg:text-base mb-0.5 sm:mb-1 line-clamp-1">
                  {category.name}
                </h3>
                <p className="text-[8px] sm:text-xs text-primary-foreground/70">
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
