"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChefHat } from "lucide-react";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const meals = [
  {
    id: "breakfast",
    name: "Bữa sáng nhanh",
    description:
      "Bữa sáng nhanh gọn chỉ 10 phút! Các sản phẩm đông lạnh giúp bạn tiết kiệm thời gian mà vẫn đảm bảo dinh dưỡng.",
    subDescription:
      "Chỉ cần rã đông nhẹ và chế biến, bạn đã có ngay bữa sáng đầy đủ năng lượng cho cả gia đình.",
    products: [
      {
        id: "bf1",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "Tiện lợi",
        price: 145000,
        originalPrice: 175000,
        image: "/king-crab-alaska.jpg",
        unit: "Gói",
      },
      {
        id: "bf2",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "Tiện lợi",
        price: 89000,
        originalPrice: 110000,
        image: "/king-crab-alaska.jpg",
        unit: "Gói",
      },
      {
        id: "bf3",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "Tiện lợi",
        price: 65000,
        originalPrice: 80000,
        image: "/king-crab-alaska.jpg",
        unit: "Gói",
      },
      {
        id: "bf4",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "Cao cấp",
        price: 185000,
        originalPrice: 220000,
        image: "/king-crab-alaska.jpg",
        unit: "Hộp",
      },
    ],
  },
  {
    id: "bbq",
    name: "Tiệc BBQ",
    description:
      "Chuẩn bị tiệc BBQ hoàn hảo với các loại hải sản và thịt cao cấp. Đảm bảo bữa tiệc thành công!",
    subDescription:
      "Tất cả sản phẩm đã được sơ chế sẵn, chỉ cần rã đông và nướng trực tiếp.",
    products: [
      {
        id: "bbq1",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "BBQ",
        price: 450000,
        originalPrice: 520000,
        image: "/king-crab-alaska.jpg",
        unit: "Hộp",
      },
      {
        id: "bbq2",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "BBQ",
        price: 380000,
        originalPrice: 450000,
        image: "/king-crab-alaska.jpg",
        unit: "Khay",
      },
      {
        id: "bbq3",
        name: "Mực ống làm sạch 500g",
        description: "BBQ",
        price: 185000,
        originalPrice: 220000,
        image: "/king-crab-alaska.jpg",
        unit: "Khay",
      },
      {
        id: "bbq4",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "BBQ",
        price: 145000,
        originalPrice: 175000,
        image: "/king-crab-alaska.jpg",
        unit: "Hộp",
      },
    ],
  },
  {
    id: "hotpot",
    name: "Lẩu cuối tuần",
    description:
      "Bữa lẩu sum vầy cuối tuần với gia đình. Đầy đủ các loại hải sản và rau củ tươi ngon.",
    subDescription: "Combo lẩu hải sản đa dạng, phù hợp cho 4-6 người ăn.",
    products: [
      {
        id: "hp1",
        name: "Combo lẩu hải sản 1.5kg",
        description: "Lẩu",
        price: 650000,
        originalPrice: 780000,
        image: "/king-crab-alaska.jpg",
        unit: "Combo",
      },
      {
        id: "hp2",
        name: "Bò Mỹ thái lát 500g",
        description: "Lẩu",
        price: 320000,
        originalPrice: 380000,
        image: "/king-crab-alaska.jpg",
        unit: "Khay",
      },
      {
        id: "hp3",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "Lẩu",
        price: 85000,
        originalPrice: 100000,
        image: "/king-crab-alaska.jpg",
        unit: "Gói",
      },
      {
        id: "hp4",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "Lẩu",
        price: 45000,
        originalPrice: 55000,
        image: "/king-crab-alaska.jpg",
        unit: "Hộp",
      },
    ],
  },
  {
    id: "dinner",
    name: "Bữa tối gia đình",
    description:
      "Bữa tối đầm ấm cùng gia đình với những món ăn bổ dưỡng, dễ chế biến.",
    subDescription:
      "Các sản phẩm chất lượng cao, phù hợp với khẩu vị người Việt.",
    products: [
      {
        id: "dn1",
        name: "Cá hồi phi lê 500g",
        description: "Bữa tối",
        price: 320000,
        originalPrice: 380000,
        image: "/king-crab-alaska.jpg",
        unit: "Khay",
      },
      {
        id: "dn2",
        name: "Tôm hùm baby 300g",
        description: "Bữa tối",
        price: 450000,
        originalPrice: 520000,
        image: "/king-crab-alaska.jpg",
        unit: "Hộp",
      },
      {
        id: "dn3",
        name: "Nghêu sữa 500g",
        description: "Bữa tối",
        price: 95000,
        originalPrice: 115000,
        image: "/king-crab-alaska.jpg",
        unit: "Kg",
      },
      {
        id: "dn4",
        name: "Tôm sú nguyên vỏ 1kg",
        description: "Bữa tối",
        price: 55000,
        originalPrice: 70000,
        image: "/king-crab-alaska.jpg",
        unit: "Gói",
      },
    ],
  },
];

export function MealSuggestions() {
  const [activeMeal, setActiveMeal] = useState(meals[0]);

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-gold-dark tracking-wider uppercase">
            Gợi ý theo bữa ăn
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mt-2">
            Lên Thực Đơn Dễ Dàng
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {meals.map((meal) => (
            <button
              key={meal.id}
              onClick={() => setActiveMeal(meal)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all",
                activeMeal.id === meal.id
                  ? "bg-navy text-primary-foreground shadow-lg"
                  : "bg-cream text-foreground hover:bg-cream-dark"
              )}
            >
              {meal.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Description */}
          <div className="lg:col-span-1 bg-cream rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-serif font-bold text-navy mb-4">
              {activeMeal.name}
            </h3>
            <p className="text-foreground mb-4 leading-relaxed">
              {activeMeal.description}
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              {activeMeal.subDescription}
            </p>
            <Link href={`/cong-thuc/${activeMeal.id}`}>
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-primary-foreground rounded-full group bg-transparent"
              >
                <ChefHat className="mr-2 h-4 w-4" />
                Xem công thức nấu
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeMeal.products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
