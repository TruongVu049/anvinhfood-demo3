"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/banner3.png"
              alt="Happy family cooking"
              fill
              className="object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 text-6xl">❤️</div>
            <div className="absolute bottom-12 right-12 text-4xl">🦐</div>
          </div>

          {/* Content */}
          <div className="bg-cream p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mb-4 leading-tight">
              Đăng ký để nhận thông tin khuyến mãi sớm nhất
            </h2>
            <p className="text-muted-foreground mb-8">
              Nhận ngay voucher giảm 50.000đ cho đơn hàng đầu tiên và cập nhật
              ưu đãi hấp dẫn mỗi tuần!
            </p>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 rounded-full border-navy/20 focus:border-navy"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-navy text-primary-foreground hover:bg-navy-light rounded-full px-6"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              Đăng ký để nhận thông tin liên lạc về các sản phẩm, dịch vụ, cửa
              hàng, sự kiện và các vấn đề đáng quan tâm của An Vinh Food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
