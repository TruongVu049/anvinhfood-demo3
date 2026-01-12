"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "foundation",
    name: "Móng & Nền",
    description:
      "Vật liệu cho phần móng và nền nhà vững chắc. Đảm bảo kết cấu ổn định cho toàn bộ công trình.",
    subDescription:
      "Bao gồm xi măng, cát, đá, thép và các phụ kiện cần thiết cho phần móng.",
    products: [
      {
        id: "fd1",
        name: "Xi măng Hà Tiên PCB40 50kg",
        description: "Móng nhà",
        price: 95000,
        originalPrice: 110000,
        image: "/xi măng.png",
        unit: "Bao",
      },
      {
        id: "fd2",
        name: "Thép Pomina phi 16",
        description: "Móng nhà",
        price: 320000,
        originalPrice: 350000,
        image: "/thép cột.png",
        unit: "Cây",
      },
      {
        id: "fd3",
        name: "Cát xây dựng loại 1",
        description: "Móng nhà",
        price: 350000,
        originalPrice: 400000,
        image: "/cát3.png",
        unit: "m³",
      },
      {
        id: "fd4",
        name: "Đá 1x2 xây dựng",
        description: "Móng nhà",
        price: 280000,
        originalPrice: 320000,
        image: "/cát4.png",
        unit: "m³",
      },
    ],
  },
  {
    id: "wall",
    name: "Tường & Vách",
    description:
      "Vật liệu xây tường, vách ngăn cho không gian sống. Đa dạng lựa chọn từ gạch đến tấm panel.",
    subDescription:
      "Gạch xây, gạch block, tấm thạch cao và các vật liệu vách ngăn hiện đại.",
    products: [
      {
        id: "wl1",
        name: "Gạch ống 4 lỗ",
        description: "Xây tường",
        price: 1200,
        originalPrice: 1400,
        image: "/gạch tường.png",
        unit: "Viên",
      },
      {
        id: "wl2",
        name: "Gạch block 15x20x40",
        description: "Xây tường",
        price: 8500,
        originalPrice: 9500,
        image: "/gạch5.png",
        unit: "Viên",
      },
      {
        id: "wl3",
        name: "Tấm thạch cao Gyproc",
        description: "Vách ngăn",
        price: 85000,
        originalPrice: 95000,
        image: "/gỗ2.png",
        unit: "Tấm",
      },
      {
        id: "wl4",
        name: "Vữa xây Hà Tiên 50kg",
        description: "Xây tường",
        price: 75000,
        originalPrice: 85000,
        image: "/xi măng2.png",
        unit: "Bao",
      },
    ],
  },
  {
    id: "roof",
    name: "Mái & Trần",
    description:
      "Vật liệu lợp mái và trần nhà. Chống nóng, chống thấm hiệu quả cho ngôi nhà của bạn.",
    subDescription: "Tôn lợp, ngói, xà gồ và vật liệu trần thạch cao.",
    products: [
      {
        id: "rf1",
        name: "Tôn Hoa Sen 5 sóng",
        description: "Lợp mái",
        price: 95000,
        originalPrice: 110000,
        image: "/ngói nhà.png",
        unit: "m²",
      },
      {
        id: "rf2",
        name: "Ngói màu SCG",
        description: "Lợp mái",
        price: 12000,
        originalPrice: 14000,
        image: "/ngói nhà2.png",
        unit: "Viên",
      },
      {
        id: "rf3",
        name: "Xà gồ C100",
        description: "Khung mái",
        price: 85000,
        originalPrice: 95000,
        image: "/thép3.png",
        unit: "m",
      },
      {
        id: "rf4",
        name: "Trần thạch cao khung chìm",
        description: "Trần nhà",
        price: 165000,
        originalPrice: 185000,
        image: "/gỗ3.png",
        unit: "m²",
      },
    ],
  },
  {
    id: "finish",
    name: "Hoàn thiện",
    description:
      "Vật liệu hoàn thiện nội ngoại thất. Sơn, gạch men, thiết bị vệ sinh cao cấp.",
    subDescription:
      "Các sản phẩm chất lượng cao cho giai đoạn hoàn thiện công trình.",
    products: [
      {
        id: "fn1",
        name: "Sơn Dulux Inspire 18L",
        description: "Hoàn thiện",
        price: 1450000,
        originalPrice: 1650000,
        image: "/colorpanting5.png",
        unit: "Thùng",
      },
      {
        id: "fn2",
        name: "Gạch men 60x60 Viglacera",
        description: "Hoàn thiện",
        price: 165000,
        originalPrice: 185000,
        image: "/gạch2.png",
        unit: "m²",
      },
      {
        id: "fn3",
        name: "Bồn cầu TOTO 1 khối",
        description: "Hoàn thiện",
        price: 4500000,
        originalPrice: 5200000,
        image: "/bồn cầu.png",
        unit: "Bộ",
      },
      {
        id: "fn4",
        name: "Lavabo Caesar chân đứng",
        description: "Hoàn thiện",
        price: 1850000,
        originalPrice: 2100000,
        image: "/shower.png",
        unit: "Bộ",
      },
    ],
  },
];

export function MealSuggestions() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <span className="text-xs sm:text-sm font-medium text-gold-dark tracking-wider uppercase">
            Gợi ý theo hạng mục
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-1 sm:mt-2">
            Chọn Vật Liệu Theo Công Trình
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={cn(
                "px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all",
                activeProject.id === project.id
                  ? "bg-navy text-primary-foreground shadow-lg"
                  : "bg-cream text-foreground hover:bg-cream-dark"
              )}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Description */}
          <div className="lg:col-span-1 bg-cream rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-navy mb-2 sm:mb-4">
              {activeProject.name}
            </h3>
            <p className="text-foreground mb-2 sm:mb-4 leading-relaxed text-sm sm:text-base">
              {activeProject.description}
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
              {activeProject.subDescription}
            </p>
            <Link href={`/hang-muc/${activeProject.id}`}>
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-primary-foreground rounded-full group bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
              >
                <Wrench className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Xem hướng dẫn thi công</span>
                <span className="sm:hidden">Hướng dẫn</span>
                <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              {activeProject.products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
