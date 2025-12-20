"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Grid3X3,
  LayoutList,
  SlidersHorizontal,
} from "lucide-react";
import { ProductCard } from "./product-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  unit?: string;
}

interface CategoryPageProps {
  category: {
    name: string;
    description: string;
    subcategories: { name: string; slug: string; count: number }[];
  };
  products: Product[];
  slug: string;
}

export function CategoryPage({ category, products, slug }: CategoryPageProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-cream py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <span className="text-xs font-semibold text-navy tracking-[0.2em] uppercase">
            {category.name}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mt-2 mb-4">
            {category.name}
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Subcategories */}
              <div className="mb-8">
                <h3 className="font-semibold text-navy mb-4">Danh mục con</h3>
                <ul className="space-y-2">
                  {category.subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        href={`#`}
                        className="flex items-center justify-between py-2 text-foreground hover:text-navy-light transition-colors"
                      >
                        <span>{sub.name}</span>
                        <span className="text-sm text-muted-foreground">
                          ({sub.count})
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-navy mb-4">Khoảng giá</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="text-foreground hover:text-navy-light transition-colors">
                      {"Dưới 200.000đ"}
                    </button>
                  </li>
                  <li>
                    <button className="text-foreground hover:text-navy-light transition-colors">
                      200.000đ - 500.000đ
                    </button>
                  </li>
                  <li>
                    <button className="text-foreground hover:text-navy-light transition-colors">
                      500.000đ - 1.000.000đ
                    </button>
                  </li>
                  <li>
                    <button className="text-foreground hover:text-navy-light transition-colors">
                      {"Trên 1.000.000đ"}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Promo Banner */}
              <div className="bg-navy rounded-xl p-6 text-primary-foreground">
                <span className="text-gold text-xs font-semibold">
                  Ưu đãi đặc biệt
                </span>
                <h4 className="text-lg font-serif font-bold mt-1 mb-2">
                  Giảm 20% cho đơn hàng đầu tiên
                </h4>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Sử dụng mã WELCOME20 khi thanh toán
                </p>
                <Button
                  size="sm"
                  className="bg-gold text-navy hover:bg-gold-dark w-full"
                >
                  Áp dụng ngay
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-border">
              <p className="text-muted-foreground">
                Hiển thị{" "}
                <span className="text-foreground font-medium">
                  {products.length}
                </span>{" "}
                sản phẩm
              </p>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sắp xếp theo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Nổi bật</SelectItem>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                    <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                    <SelectItem value="bestseller">Bán chạy nhất</SelectItem>
                  </SelectContent>
                </Select>

                {/* View mode */}
                <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 transition-colors",
                      viewMode === "grid"
                        ? "bg-navy text-primary-foreground"
                        : "hover:bg-muted"
                    )}
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-2 transition-colors",
                      viewMode === "list"
                        ? "bg-navy text-primary-foreground"
                        : "hover:bg-muted"
                    )}
                    aria-label="List view"
                  >
                    <LayoutList className="h-4 w-4" />
                  </button>
                </div>

                {/* Mobile filter button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="sm:hidden bg-transparent"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={cn(
                "grid gap-4 lg:gap-6",
                viewMode === "grid"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1"
              )}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  size={viewMode === "list" ? "large" : "default"}
                />
              ))}
            </div>

            {/* Load more */}
            <div className="mt-10 text-center">
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-primary-foreground bg-transparent px-8"
              >
                Xem thêm sản phẩm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
