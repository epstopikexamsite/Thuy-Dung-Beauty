
import React from 'react';

const VisionCard: React.FC<{ icon: JSX.Element; title: string; content: string; }> = ({ icon, title, content }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    );
};

const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const CoreValueIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a2 2 0 01-2-2V7m2 5v.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a2 2 0 002-2V7m-2 5v.01" />
    </svg>
);


const VisionMission: React.FC = () => {
  return (
    <section className="bg-primary-dark text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-2">NÂNG TẦM NHAN SẮC VIỆT</h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-12">
            Viện Thẩm Mỹ Quốc Tế Thùy Dung Beauty, với hơn một thập kỷ kinh nghiệm, tự hào là địa chỉ uy tín, tiên phong trong việc áp dụng các xu hướng làm đẹp hiện đại.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <VisionCard 
                icon={<VisionIcon />}
                title="TẦM NHÌN"
                content="Trở thành đối tác đồng hành trong hành trình làm đẹp của bạn, xây dựng một cộng đồng nơi mọi người tìm thấy sự tự tin và tạo nên sự thay đổi tích cực."
            />
            <VisionCard 
                icon={<MissionIcon />}
                title="SỨ MỆNH"
                content="Làm cho mọi người trở nên đẹp hơn, tự tin hơn và hạnh phúc hơn. Chúng tôi hướng đến những giải pháp thẩm mỹ an toàn, hiệu quả và dịch vụ tận tâm."
            />
            <VisionCard 
                icon={<CoreValueIcon />}
                title="GIÁ TRỊ CỐT LÕI"
                content="Chất lượng - Tận tâm - Sáng tạo - Đáng tin cậy. Đây là những giá trị kim chỉ nam cho mọi hoạt động của chúng tôi."
            />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
