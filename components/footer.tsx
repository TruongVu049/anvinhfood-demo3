import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Trụ sở chính */}
          <div>
            <h3 className="font-bold text-base sm:text-lg text-primary-foreground mb-4 sm:mb-6">TRỤ SỞ CHÍNH</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">Văn phòng đại diện:</p>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    L17-11, Tầng 17 Vincom Center, 72 đường Lê Thánh Tôn, Phường Sài Gòn, Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">Văn phòng phát triển:</p>
                  <p className="text-primary-foreground/70">
                    03 Sông Thao, Phường Tân Sơn Hoà, Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
                <span className="text-primary-foreground/70">Hotline: (+84) 2841099879</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold" />
                <span className="text-primary-foreground/70 break-all">contact@meu-solutions.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-primary-foreground/70">www.meu-solutions.com</span>
              </div>
            </div>
          </div>

          {/* Về chúng tôi */}
          <div>
            <h3 className="font-bold text-base sm:text-lg text-primary-foreground mb-4 sm:mb-6">VỀ CHÚNG TÔI</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed mb-6 sm:mb-8">
              MeU Solutions là đơn vị hàng đầu trong việc kiểm thử và phát triển phần mềm máy tính, mang đến sự đổi mới để cung cấp các giải pháp phù hợp cho khách hàng với kết quả vượt trội.
            </p>

            <h3 className="font-bold text-base sm:text-lg text-primary-foreground mb-3 sm:mb-4">HÌNH ẢNH</h3>
            <div className="flex gap-2">
              <div className="w-16 h-12 sm:w-24 sm:h-16 rounded overflow-hidden relative">
                <Image src="/về chúng tôi 1.png" alt="Về chúng tôi" fill className="object-cover" />
              </div>
              <div className="w-16 h-12 sm:w-24 sm:h-16 rounded overflow-hidden relative">
                <Image src="/về chúng tôi 2.png" alt="Về chúng tôi" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="text-center text-[10px] sm:text-xs text-primary-foreground/50">
            © 2026 MeU Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
