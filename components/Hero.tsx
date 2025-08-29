
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 md:py-48" 
      style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Thanh+Qua+Lam+Nen+Ten+Tuoi')" }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          THÀNH QUẢ LÀM NÊN TÊN TUỔI
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gold mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          VIỆN THẨM MỸ QUỐC TẾ Thùy Dung Beauty
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg">
          Với sự cống hiến và không ngừng phấn đấu, Viện thẩm mỹ Quốc tế Thùy Dung Beauty đã vinh dự đạt được những thành quả ấn tượng, xây dựng uy tín là một trong những địa chỉ thẩm mỹ hàng đầu tại Việt Nam.
        </p>
      </div>
    </section>
  );
};

export default Hero;