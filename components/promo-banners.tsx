import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    title: "Hải sản tươi sống",
    subtitle: "Giảm đến 30%",
    image: "/banner4.png",
    href: "/",
    size: "large",
  },
  {
    title: "Hải sản tươi sống",
    subtitle: "Mới về",
    image: "/banner5.png",
    href: "/",
    size: "small",
  },
  {
    title: "Hải sản tươi sống",
    subtitle: "Tiện lợi",
    image: "/banner6.png",
    href: "/",
    size: "small",
  },
  {
    title: "Combo tiết kiệm",
    subtitle: "Giảm 25%",
    image: "/banner4.png",
    href: "/",
    size: "small",
  },
  {
    title: "Đồ ăn chế biến",
    subtitle: "Nhanh gọn",
    image: "/banner5.png",
    href: "/",
    size: "small",
  },
];

export function PromoBanners() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-gold-dark tracking-wider uppercase">
            Ưu đãi hấp dẫn
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-2">
            Khuyến Mãi Hot
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Large banner */}
          <Link
            href={banners[0].href}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full">
              <Image
                src={banners[0].image || "/placeholder.svg"}
                alt={banners[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-primary-foreground">
                <span className="text-gold text-sm font-semibold">
                  {banners[0].subtitle}
                </span>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold mt-1">
                  {banners[0].title}
                </h3>
              </div>
            </div>
          </Link>

          {/* Small banners */}
          {banners.slice(1).map((banner, index) => (
            <Link
              key={index}
              href={banner.href}
              className="relative overflow-hidden rounded-2xl group"
            >
              <div className="aspect-[4/3]">
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                  <span className="text-gold text-xs font-semibold">
                    {banner.subtitle}
                  </span>
                  <h3 className="text-sm lg:text-base font-semibold mt-0.5">
                    {banner.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
