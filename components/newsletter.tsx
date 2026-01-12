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
    <section className="py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-xl sm:rounded-3xl">
          {/* Image */}
          <div className="relative aspect-video sm:aspect-4/3 lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/banner3.png"
              alt="Construction materials"
              fill
              className="object-contain object-center bg-cream"
            />
          </div>

          {/* Content */}
          <div className="bg-cream p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-navy mb-2 sm:mb-4 leading-tight">
              Đăng ký để nhận thông tin khuyến mãi sớm nhất
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-8 text-sm sm:text-base">
              Nhận ngay voucher giảm 500.000đ cho đơn hàng đầu tiên và cập nhật
              ưu đãi hấp dẫn mỗi tuần!
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
              <div className="relative grow">
                <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9 sm:pl-12 h-10 sm:h-12 rounded-full border-navy/20 focus:border-navy text-sm sm:text-base"
                  required
                />
              </div>
              <Button
                type="submit"
                size="default"
                className="bg-navy text-primary-foreground hover:bg-navy-light rounded-full px-3 sm:px-6 h-10 sm:h-12"
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </form>

            <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
              Đăng ký để nhận thông tin liên lạc về các sản phẩm, dịch vụ, cửa
              hàng, sự kiện và các vấn đề đáng quan tâm của MeU Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
