
import React from 'react';

const NavItem: React.FC<{ vi: string; kr: string; href: string }> = ({ vi, kr, href }) => (
  <a href={href} className="text-center group">
    <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors duration-300">{vi}</span>
    <span className="block text-xs text-gray-300 group-hover:text-gold transition-colors duration-300">{kr}</span>
  </a>
);

const Header: React.FC = () => {
  const navItems = [
    { vi: 'VỀ Thùy Dung Beauty', kr: '한국 경남에 대해', href: '#about' },
    { vi: 'Reborn Cell Extra +', kr: '리본셀 엑스트라+', href: '#services' },
    { vi: 'Phẫu thuật thẩm mỹ', kr: '성형 수술', href: '#surgery' },
    { vi: 'Dịch vụ khác', kr: '기타 서비스', href: '#other-services' },
    { vi: 'KHÁCH HÀNG', kr: '고객', href: '#testimonials' },
    { vi: 'Tin Tức', kr: '소식', href: '#news' },
    { vi: 'Liên hệ', kr: '연락하다', href: '#contact' },
  ];

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="text-white text-2xl font-bold">
            Thùy Dung <span className="text-gold">Beauty</span>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
             <div className="relative">
              <input type="text" placeholder="Tìm kiếm..." className="bg-primary-dark text-white placeholder-gray-400 rounded-full py-1 px-4 w-48 focus:outline-none focus:ring-2 focus:ring-gold"/>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <a href="tel:0911833555" className="text-white font-bold text-lg hover:text-gold transition-colors">0911 833 555</a>
            <button className="text-white border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-primary transition-colors">English</button>
          </div>
        </div>
      </div>
       <nav className="bg-primary-dark hidden lg:flex justify-center items-center py-3">
        <ul className="flex items-center space-x-8">
          {navItems.map(item => <li key={item.vi}><NavItem {...item} /></li>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
