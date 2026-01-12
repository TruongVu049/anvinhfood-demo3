import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    title: "Xi măng & Vữa",
    subtitle: "Giảm đến 30%",
    image: "/xi măng3.png",
    href: "/",
    size: "large",
  },
  {
    title: "Sắt thép xây dựng",
    subtitle: "Mới về",
    image: "/thép3.png",
    href: "/",
    size: "small",
  },
  {
    title: "Gạch men cao cấp",
    subtitle: "Đa dạng mẫu",
    image: "/gạch3.png",
    href: "/",
    size: "small",
  },
  {
    title: "Combo xây thô",
    subtitle: "Giảm 25%",
    image: "/cát2.png",
    href: "/",
    size: "small",
  },
  {
    title: "Sơn & Chống thấm",
    subtitle: "Chính hãng",
    image: "/colorpanting3.png",
    href: "/",
    size: "small",
  },
];

export function PromoBanners() {
  return (
    <section className="py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-10">
          <span className="text-xs sm:text-sm font-medium text-gold-dark tracking-wider uppercase">
            Ưu đãi hấp dẫn
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-1 sm:mt-2">
            Khuyến Mãi Hot
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {/* Large banner */}
          <Link
            href={banners[0].href}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-lg sm:rounded-2xl group"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full">
              <Image
                src={banners[0].image || "/placeholder.svg"}
                alt={banners[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 lg:p-8 text-primary-foreground">
                <span className="text-gold text-xs sm:text-sm font-semibold">
                  {banners[0].subtitle}
                </span>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold mt-0.5 sm:mt-1">
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
              className="relative overflow-hidden rounded-lg sm:rounded-2xl group"
            >
              <div className="aspect-4/3">
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-primary-foreground">
                  <span className="text-gold text-[10px] sm:text-xs font-semibold">
                    {banner.subtitle}
                  </span>
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold mt-0.5 line-clamp-1">
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
