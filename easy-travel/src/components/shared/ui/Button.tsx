import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  isFill: boolean;
}

const Button: React.FC<ButtonProps> = ({ isFill, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`rounded-lg border-2 px-5 py-2 text-lg font-medium transition ${isFill ? 'bg-primary-600 border-primary-600 hover:text-primary-600 text-white hover:bg-white' : 'border-primary-600 text-primary-600 bg-white hover:bg-gray-100'}`}
    >
      {children}
    </button>
  );
};

export default Button;
