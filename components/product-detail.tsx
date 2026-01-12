"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Share2,
  Truck,
  Shield,
  Snowflake,
  Star,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    price: number;
    originalPrice?: number;
    images: string[];
    unit: string;
    weight: string;
    origin: string;
    expiry: string;
    storage: string;
    features: string[];
    ingredients: { name: string; description: string }[];
    usage: {
      thawing: string;
      cooking: string;
      note: string;
    };
    certifications: string[];
    reviews: {
      average: number;
      total: number;
      breakdown: { stars: number; count: number }[];
    };
  };
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link
              href="/danh-muc/vat-lieu"
              className="text-muted-foreground hover:text-foreground"
            >
              Vật liệu
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium line-clamp-1">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Info */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {discount > 0 && (
                  <span className="absolute top-4 left-4 bg-destructive text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                    -{discount}%
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                      selectedImage === index
                        ? "border-navy"
                        : "border-transparent hover:border-navy/50"
                    )}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Title & Price */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mb-4">
                  {product.name}
                </h1>

                {/* Reviews summary */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < Math.floor(product.reviews.average)
                            ? "fill-gold text-gold"
                            : "text-muted"
                        )}
                      />
                    ))}
                    <span className="ml-1 text-sm font-medium">
                      {product.reviews.average}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews.total} đánh giá)
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-navy">
                    {product.price.toLocaleString("vi-VN")}đ
                  </span>
                  <span className="text-muted-foreground">/{product.unit}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice.toLocaleString("vi-VN")}đ
                    </span>
                  )}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-cream rounded-xl">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Khối lượng
                  </span>
                  <p className="font-medium text-foreground">
                    {product.weight}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Xuất xứ
                  </span>
                  <p className="font-medium text-foreground">
                    {product.origin}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Hạn sử dụng
                  </span>
                  <p className="font-medium text-foreground">
                    {product.expiry}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Bảo quản
                  </span>
                  <p className="font-medium text-foreground">
                    {product.storage}
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex items-center gap-3 mb-6">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-navy/10 text-navy text-xs font-semibold rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center justify-between sm:px-0 px-8 border border-border rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors rounded-l-full"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors rounded-r-full"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button
                  size="lg"
                  className="flex-grow bg-navy text-primary-foreground hover:bg-navy-light rounded-full"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Thêm vào giỏ -{" "}
                  {(product.price * quantity).toLocaleString("vi-VN")}đ
                </Button>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-border bg-transparent"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-border bg-transparent"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-cream rounded-xl">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-navy mb-2" />
                  <p className="text-xs font-medium">Giao tận nơi</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-navy mb-2" />
                  <p className="text-xs font-medium">Đổi trả dễ dàng</p>
                </div>
                <div className="text-center">
                  <Snowflake className="h-6 w-6 mx-auto text-navy mb-2" />
                  <p className="text-xs font-medium">Chính hãng 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-8 lg:py-12 bg-cream">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-border mb-8 overflow-x-auto">
            {[
              { id: "description", label: "Mô tả sản phẩm" },
              { id: "ingredients", label: "Thành phần" },
              { id: "usage", label: "Hướng dẫn sử dụng" },
              { id: "reviews", label: `Đánh giá (${product.reviews.total})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-4 px-2 font-medium whitespace-nowrap border-b-2 transition-colors",
                  activeTab === tab.id
                    ? "border-navy text-navy"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {activeTab === "description" && (
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground mb-6">
                  {product.description}
                </p>
                <div className="whitespace-pre-line text-muted-foreground">
                  {product.longDescription}
                </div>

                <h3 className="text-xl font-serif font-bold text-navy mt-8 mb-4">
                  Đặc điểm nổi bật
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <Check className="h-5 w-5 text-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="bg-card p-6 rounded-xl border border-border"
                    >
                      <h4 className="font-semibold text-navy text-lg mb-2">
                        {ingredient.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {ingredient.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-navy text-lg mb-2">
                    Cách rã đông
                  </h4>
                  <p className="text-foreground">{product.usage.thawing}</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold text-navy text-lg mb-2">
                    Cách chế biến
                  </h4>
                  <p className="text-foreground">{product.usage.cooking}</p>
                </div>
                <div className="bg-gold/10 p-6 rounded-xl border border-gold/30">
                  <h4 className="font-semibold text-gold-dark text-lg mb-2">
                    Lưu ý quan trọng
                  </h4>
                  <p className="text-foreground">{product.usage.note}</p>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                {/* Reviews Summary */}
                <div className="bg-card p-6 rounded-xl border border-border mb-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-navy">
                        {product.reviews.average}
                      </div>
                      <div className="flex items-center justify-center gap-1 my-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5",
                              i < Math.floor(product.reviews.average)
                                ? "fill-gold text-gold"
                                : "text-muted"
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">
                        {product.reviews.total} đánh giá
                      </p>
                    </div>

                    <div className="flex-grow space-y-2">
                      {product.reviews.breakdown.map((item) => (
                        <div
                          key={item.stars}
                          className="flex items-center gap-2"
                        >
                          <span className="text-sm w-12">{item.stars} sao</span>
                          <div className="flex-grow h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gold rounded-full"
                              style={{
                                width: `${
                                  (item.count / product.reviews.total) * 100
                                }%`,
                              }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Write Review CTA */}
                <div className="bg-cream p-6 rounded-xl text-center">
                  <p className="text-muted-foreground mb-4">
                    Bạn đã mua sản phẩm này? Hãy chia sẻ đánh giá của bạn!
                  </p>
                  <Button className="bg-navy text-primary-foreground hover:bg-navy-light">
                    Viết đánh giá
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
