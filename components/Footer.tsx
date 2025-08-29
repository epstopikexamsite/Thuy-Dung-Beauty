import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
      {children}
    </a>
  </li>
);

const Footer: React.FC = () => {
  const skinCareServices = [
    'Reborn Cell Extra+ Công Nghệ Trẻ Hóa Mới Nhất 2025',
    'AH Lifting Codes nâng cơ xóa nhăn',
    'Triple L Căng bóng da nâng cơ trẻ hóa',
    'Xóa Nám Chuẩn Y Khoa EXO PCELL+',
    'Meso SPI Không Kim',
  ];
  const cosmeticServices = [
    'Tạo hình mắt 2 mí – Phẫu thuật cắt da mỡ thừa mi trên – dưới',
    'Cấy Mỡ Mí Mắt Thùy Dung Beauty',
    'Mở Rộng Góc Mắt',
    'Lấy Mỡ Bọng Mắt',
    'Nâng Cung Mày Giấu Chỉ',
    'Nâng Mũi',
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">THÔNG TIN LIÊN HỆ</h3>
            <p className="text-gray-400 text-sm mb-2">394-396 Cao Thắng, Phường Hòa Hưng, Thành phố Hồ Chí Minh</p>
            <p className="text-gray-400 text-sm mb-2">Hotline: <a href="tel:0911833555" className="hover:text-gold">0911 833 555</a></p>
            <p className="text-gray-400 text-sm">info.thuydungbeauty@gmail.com</p>
            <p className="text-xs text-gray-500 mt-4">* Kết quả tùy thuộc vào tình trạng cơ địa mỗi người</p>
          </div>

          {/* Skin Care */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">LÀM ĐẸP DA</h3>
            <ul className="space-y-2">
              {skinCareServices.map(service => <FooterLink key={service} href="#">{service}</FooterLink>)}
            </ul>
          </div>

          {/* Cosmetics */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">THẨM MỸ</h3>
            <ul className="space-y-2">
              {cosmeticServices.map(service => <FooterLink key={service} href="#">{service}</FooterLink>)}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">PHÁP LÝ</h3>
            <div className="text-sm text-gray-400">
              <p className="font-semibold">GIẤY CHỨNG NHẬN ĐĂNG KÝ DOANH NGHIỆP</p>
              <p className="text-xs font-semibold text-gray-300">CÔNG TY TNHH Thùy Dung Beauty</p>
              <p className="text-xs mt-1">Mã số: 0314529669. Do Sở Kế Hoạch và Đầu tư cấp.</p>
              <hr className="my-3 border-gray-700"/>
              <p className="font-semibold">GIẤY PHÉP HOẠT ĐỘNG KHÁM BỆNH, CHỮA BỆNH</p>
              <p className="text-xs mt-1">Số: 06303/HCM-GPHĐ. Do Sở Y Tế cấp.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>Copyright 2021 © Thùy Dung Beauty. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;