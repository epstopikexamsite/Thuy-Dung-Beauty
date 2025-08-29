
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Awards from './components/Awards';
import InfoSection from './components/InfoSection';
import VisionMission from './components/VisionMission';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Awards />
        <InfoSection
          id="about"
          title="ĐIỂM 10 CỦA CHẤT LƯỢNG"
          subtitle="VIỆN THẨM MỸ QUỐC TẾ Thùy Dung Beauty"
          content="Với gần 10 năm sứ mệnh phục vụ và phát triển không ngừng, Thùy Dung Beauty đã tạo dấu ấn mạnh mẽ trong lĩnh vực làm đẹp. Hàng triệu khách hàng đã trải qua trải nghiệm không chỉ về làm đẹp mà còn về sự tin tưởng tuyệt đối. Chúng tôi đã đầu tư mạnh vào việc phát triển thương hiệu và không ngừng hoàn thiện để đáp ứng những kỳ vọng ngày càng cao của khách hàng. Hệ thống cơ sở vật chất của Thùy Dung Beauty luôn tuân thủ tiêu chuẩn 5 sao, với sự trang bị máy móc hiện đại và công nghệ làm đẹp được cập nhật liên tục. Chúng tôi tự hào về đội ngũ chuyên gia và bác sĩ chuyên môn cao, luôn tận tâm và chuyên nghiệp trong mọi dịch vụ."
          imageUrl="https://placehold.co/800x600?text=Diem+10+Chat+Luong"
          imagePosition="right"
        />
        <InfoSection
          id="facilities"
          title="CƠ SỞ VẬT CHẤT ĐẠT CHUẨN 5 SAO"
          subtitle="Không gian sang trọng, đẳng cấp"
          content="Khi bạn bước vào không gian của Thùy Dung Beauty, bạn sẽ ngay lập tức bị cuốn vào một thế giới sang trọng và đẳng cấp. Với thiết kế tối giản lịch lãm, chúng tôi đảm bảo rằng mọi khách hàng sẽ cảm nhận sự ấm áp và thoải mái. Hệ thống phòng spa, phòng chăm sóc da, phòng phẫu thuật và sảnh tiếp đón tại Thành Phố Hồ Chí Minh đạt tiêu chuẩn 5 sao. Với kiến trúc hiện đại và không gian sang trọng, Thùy Dung Beauty sẽ mang đến cho bạn cảm giác yên bình và thư giãn."
          imageUrl="https://placehold.co/800x600?text=Co+So+Vat+Chat+5+Sao"
          imagePosition="left"
        />
        <InfoSection
          id="technology"
          title="MÁY MÓC HIỆN ĐẠI, CÔNG NGHỆ LÀM ĐẸP TIÊN TIẾN"
          subtitle="An toàn, hiệu quả tối ưu"
          content="Thùy Dung Beauty cam kết đưa công nghệ vào trái tim mọi dịch vụ làm đẹp, sử dụng 100% công nghệ hiện đại để đảm bảo quy trình làm đẹp của khách hàng tối ưu và an toàn. Chúng tôi trang bị máy móc tiên tiến nhất, hỗ trợ tốt nhất cho quy trình làm đẹp, và đảm bảo toàn bộ trang thiết bị đáp ứng các tiêu chuẩn chất lượng quốc tế CO/CQ. Chúng tôi đặc biệt chú trọng vào việc thay đổi và cập nhật trang thiết bị máy móc thường xuyên để đáp ứng các xu hướng làm đẹp mới nhất."
          imageUrl="https://placehold.co/800x600?text=Cong+Nghe+Tien+Tien"
          imagePosition="right"
        />
        <InfoSection
          id="team"
          title="ĐỘI NGŨ CHUYÊN GIA, BÁC SĨ CHUYÊN MÔN CAO"
          subtitle="Tận tâm, chuyên nghiệp"
          content="Một trong những yếu tố quan trọng tạo nên đẳng cấp và uy tín của Thùy Dung Beauty chính là đội ngũ chuyên gia và bác sĩ có chuyên môn cao. Chúng tôi tự hào sở hữu những chuyên gia hàng đầu trong ngành, là những bác sĩ với kinh nghiệm dày dặn cả trong và ngoài nước. Các bác sĩ và chuyên gia tại Thùy Dung Beauty đều được đào tạo chính quy tại các trường Đại học Y danh tiếng và thường xuyên tu nghiệp tại Hàn Quốc."
          imageUrl="https://placehold.co/800x600?text=Doi+Ngu+Chuyen+Gia"
          imagePosition="left"
        />
        <InfoSection
          id="services"
          title="Reborn Cell Extra +"
          subtitle="Công Nghệ Trẻ Hóa Độc Quyền"
          content="Trải nghiệm công nghệ trẻ hóa da tiên tiến nhất, giúp tái tạo làn da từ sâu bên trong, mang lại vẻ đẹp tươi trẻ, rạng rỡ. Reborn Cell Extra+ là giải pháp tối ưu cho làn da lão hóa, giúp xóa mờ nếp nhăn, tăng độ đàn hồi và cải thiện sắc tố da một cách an toàn và hiệu quả."
          imageUrl="https://placehold.co/800x600?text=Reborn+Cell+Extra+"
          imagePosition="right"
        />
        <InfoSection
          id="surgery"
          title="Phẫu Thuật Thẩm Mỹ An Toàn"
          subtitle="Kiến Tạo Vẻ Đẹp Hoàn Hảo"
          content="Với đội ngũ bác sĩ chuyên môn cao và công nghệ hiện đại, chúng tôi cung cấp các dịch vụ phẫu thuật thẩm mỹ đa dạng như nâng mũi, cắt mí, tạo hình gương mặt V-line. Mọi quy trình đều được thực hiện theo tiêu chuẩn y khoa nghiêm ngặt, đảm bảo an toàn tuyệt đối và mang lại kết quả thẩm mỹ tự nhiên, hài hòa."
          imageUrl="https://placehold.co/800x600?text=Phau+Thuat+Tham+My"
          imagePosition="left"
        />
        <InfoSection
          id="other-services"
          title="Các Dịch Vụ Chăm Sóc Khác"
          subtitle="Vẻ Đẹp Toàn Diện"
          content="Ngoài các dịch vụ chính, Thùy Dung Beauty còn cung cấp nhiều liệu trình chăm sóc sắc đẹp toàn diện khác như triệt lông vĩnh viễn, phun xăm thẩm mỹ, điều trị da chuyên sâu... để đáp ứng mọi nhu cầu làm đẹp của khách hàng, giúp bạn tự tin tỏa sáng từ mọi góc nhìn."
          imageUrl="https://placehold.co/800x600?text=Dich+Vu+Khac"
          imagePosition="right"
        />
        <VisionMission />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default App;