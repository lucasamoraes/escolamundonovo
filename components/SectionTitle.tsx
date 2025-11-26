import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  color?: 'turquoise' | 'orange' | 'brown';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  color = 'brown'
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  const colorClasses = {
    turquoise: 'text-turquoise',
    orange: 'text-orange',
    brown: 'text-brown',
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <h2 className={`font-baloo text-3xl md:text-4xl font-bold mb-3 ${colorClasses[color]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="font-nunito text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1.5 w-24 bg-yellow rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;