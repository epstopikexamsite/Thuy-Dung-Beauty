
import React from 'react';

interface InfoSectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, subtitle, content, imageUrl, imagePosition }) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section id={id} className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isImageLeft ? 'lg:flex-row-reverse' : ''}`}>
          <div className="lg:w-1/2">
            <h3 className="text-sm font-bold uppercase text-gold tracking-widest">{subtitle}</h3>
            <h2 className="text-3xl font-extrabold text-primary mt-2 mb-4">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{content}</p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={imageUrl} 
              alt={title} 
              className="rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
