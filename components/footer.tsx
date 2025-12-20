import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  "Đặt hàng & Hỗ trợ": [
    { name: "Hỏi đáp", href: "/hoi-dap" },
    { name: "Hướng dẫn mua hàng", href: "/huong-dan-mua-hang" },
    { name: "Chính sách bán hàng", href: "/chinh-sach-ban-hang" },
    { name: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
    { name: "Điều kiện chung", href: "/dieu-kien-chung" },
    { name: "Liên hệ chúng tôi", href: "/lien-he" },
  ],
  "Danh mục": [
    { name: "Hải sản tươi sống", href: "/danh-muc/hai-san" },
    { name: "Thịt đông lạnh", href: "/danh-muc/thit" },
    { name: "Rau củ đông lạnh", href: "/danh-muc/rau-cu" },
    { name: "Đồ ăn chế biến", href: "/danh-muc/che-bien" },
    { name: "Combo tiết kiệm", href: "/combo" },
  ],
  "Về An Vinh Food": [
    { name: "Câu chuyện thương hiệu", href: "/ve-chung-toi" },
    { name: "Giá trị cốt lõi", href: "/gia-tri-cot-loi" },
    { name: "Trách nhiệm cộng đồng", href: "/trach-nhiem-cong-dong" },
    { name: "Quy trình sản xuất", href: "/quy-trinh-san-xuat" },
    { name: "Đối tác cung ứng", href: "/doi-tac" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-gold tracking-tight">AN VINH</span>
                <span className="text-xs tracking-[0.2em] text-primary-foreground/70 uppercase">Frozen Food</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
              Chuyên cung cấp thực phẩm đông lạnh và hải sản cao cấp. Cam kết tươi ngon, an toàn, giao hàng nhanh.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-gold" />
                <span>0813.662.778</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@anvinhfood.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-gold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-primary-foreground/50">
              <p className="font-semibold text-primary-foreground/70 mb-1">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ AN VINH</p>
              <p>GPKD số: 0123456789 - Cấp ngày: 01/01/2020 tại Sở KH&ĐT TP.HCM</p>
              <p>Địa chỉ: 123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh</p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
            © 2025 An Vinh Food. Tất cả quyền được bảo lưu.
          </div>
        </div>
      </div>
    </footer>
  )
}
