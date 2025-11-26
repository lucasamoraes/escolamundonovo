import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-baloo font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-orange text-white hover:bg-orange/90 hover:shadow-lg",
    secondary: "bg-turquoise text-white hover:bg-turquoise/90 hover:shadow-lg",
    outline: "border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;