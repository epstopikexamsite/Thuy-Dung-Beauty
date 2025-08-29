
import React from 'react';

interface AwardCardProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ icon, title, subtitle, description }) => (
  <div className="bg-white rounded-lg shadow-xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-gold">
    <div className="text-gold mx-auto mb-4 w-16 h-16 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-primary">{title}</h3>
    <h4 className="text-md font-semibold text-gray-600 mb-2">{subtitle}</h4>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 001.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);


const Awards: React.FC = () => {
  const awardsData = [
    {
      title: 'Top 01 Thương Hiệu Xuất Sắc Châu Á',
      subtitle: 'Asia Excellent Brand 2024',
      description: 'Ghi nhận sự nỗ lực và tăng hạng sức cạnh tranh của Thùy Dung Beauty trên bản đồ thẩm mỹ uy tín thế giới.',
    },
    {
      title: 'Thương Hiệu Làm Đẹp Số 1 Việt Nam',
      subtitle: 'The Face Beauty 2023',
      description: 'Vinh danh tại Top thương hiệu làm đẹp tiêu biểu, khẳng định vị thế và những thành tựu cao quý.',
    },
    {
      title: 'Cúp Vàng Top 5 Thương Hiệu Uy Tín',
      subtitle: 'Chất Lượng Quốc Gia 2023',
      description: 'Khẳng định vị thế, sự uy tín trong sứ mệnh “kiến tạo sắc đẹp” mà Thùy Dung Beauty mang đến.',
    },
    {
      title: 'Cúp Vàng Thương Hiệu Hàng Đầu',
      subtitle: 'Asean 2022',
      description: 'Điểm hội tụ của tinh hoa từ Hàn Quốc cùng công nghệ thẩm mỹ hàng đầu từ nhiều quốc gia.',
    },
    {
      title: 'Top 10 Thương Hiệu Mạnh Quốc Gia',
      subtitle: '2019',
      description: 'Đáp ứng mọi tiêu chí gắt gao về kết quả kinh doanh, độ nhận diện thương hiệu và chất lượng dịch vụ.',
    },
    {
      title: 'Top 10 Sản Phẩm Dịch Vụ Chất Lượng Cao',
      subtitle: 'Được công nhận',
      description: 'Công nhận những nỗ lực không ngừng nâng cao chất lượng sản phẩm và dịch vụ của chúng tôi.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary">Thành Tựu Nổi Bật</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Thùy Dung Beauty tự hào về những vinh dự và danh hiệu đã ghi nhận sự nỗ lực và cống hiến không ngừng của chúng tôi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => (
            <AwardCard key={index} icon={<TrophyIcon />} title={award.title} subtitle={award.subtitle} description={award.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
