'use client';

import React, { useState } from 'react';

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  active?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button3D: React.FC<Button3DProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  size = 'md', 
  active = false, 
  icon = null,
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const baseClasses = `
    relative
    inline-flex
    items-center
    justify-center
    font-medium
    transition-all
    duration-150
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${size === 'sm' ? 'px-3 py-1.5 text-sm' : ''}
    ${size === 'md' ? 'px-4 py-2 text-base' : ''}
    ${size === 'lg' ? 'px-6 py-3 text-lg' : ''}
    ${size === 'icon' ? 'p-2.5 aspect-square' : ''}
    ${variant === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
    ${variant === 'secondary' ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : ''}
    ${variant === 'ghost' ? 'bg-transparent hover:bg-gray-100' : ''}
    ${active ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
    ${isPressed ? 'transform translate-y-0.5' : ''}
    ${className}
    rounded-lg
    items-center
    justify-center
    gap-2
  `.trim();

  return (
    <button 
      type={type}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button3D;