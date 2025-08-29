
import React, { useState, useEffect } from 'react';

const SocialProof: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showTimer = setTimeout(() => setIsVisible(true), 5000);
        const hideTimer = setTimeout(() => setIsVisible(false), 12000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-5 left-5 bg-white rounded-lg shadow-2xl p-4 flex items-center space-x-4 z-50 animate-fade-in-up">
            <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/100x100?text=Khach+Hang')"}}></div>
            <div>
                <p className="font-bold text-primary">Gia Hân</p>
                <p className="text-sm text-gray-600">Đã đăng ký dịch vụ thành công</p>
                <p className="text-xs text-gray-400">33 phút trước</p>
            </div>
        </div>
    );
};

const ActionButton: React.FC<{icon: JSX.Element, label: string}> = ({icon, label}) => (
    <a href="#" className="flex flex-col items-center justify-center text-primary hover:text-gold transition-colors">
        <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
        <span className="text-xs font-medium">{label}</span>
    </a>
)

const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> );
const CalendarIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> );
const SparklesIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 17l-4 4 4-4 2.293-2.293a1 1 0 011.414 0L17 14m-5-9l2 2" /></svg> );
const ChatIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> );

const FloatingActionBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex justify-around py-1 lg:hidden z-40">
            <ActionButton icon={<PhoneIcon />} label="Liên hệ" />
            <ActionButton icon={<CalendarIcon />} label="Đặt lịch" />
            <ActionButton icon={<SparklesIcon />} label="Ưu đãi" />
            <ActionButton icon={<ChatIcon />} label="Tư vấn" />
        </div>
    )
}

const ChatBubble: React.FC = () => {
    return (
        <div className="fixed bottom-20 right-5 lg:bottom-5 lg:right-5 z-50">
            <a href="#" className="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg flex items-center justify-center flex-col w-20 h-20 text-center">
                <ChatIcon/>
                <span className="text-xs mt-1">Chat ngay</span>
            </a>
        </div>
    )
}


const FloatingWidgets: React.FC = () => {
  return (
    <>
      <SocialProof />
      <FloatingActionBar />
      <ChatBubble />
    </>
  );
};

export default FloatingWidgets;
