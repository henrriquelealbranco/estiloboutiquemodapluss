import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md' }) => {
  const isLight = variant === 'light';

  return (
    <Link to="/" className="flex items-center gap-3 group text-left">
      {/* Círculo do Logo com EB oficial */}
      <div
        className={`rounded-full overflow-hidden flex items-center justify-center font-heading font-bold transition-transform duration-300 group-hover:scale-105 shadow-sm shrink-0 ${
          isLight
            ? 'bg-white text-[#8B1A4A] border-2 border-white'
            : 'bg-white text-[#8B1A4A] border-2 border-[#8B1A4A]'
        } ${
          size === 'sm'
            ? 'w-10 h-10 text-base'
            : size === 'lg'
            ? 'w-14 h-14 text-2xl'
            : 'w-12 h-12 text-lg'
        }`}
      >
        <img
          src="/images/boutique/logo_eb.png"
          alt="Estilo Boutique Logo"
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            // Fallback to text initials if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-heading font-bold tracking-wider leading-tight uppercase ${
            isLight ? 'text-white' : 'text-[#8B1A4A]'
          } ${
            size === 'sm'
              ? 'text-base'
              : size === 'lg'
              ? 'text-2xl'
              : 'text-xl'
          }`}
        >
          Estilo Boutique
        </span>
        <span
          className={`text-[9px] sm:text-[10px] tracking-[0.2em] font-medium uppercase ${
            isLight ? 'text-[#F5E6EC]' : 'text-gray-500'
          }`}
        >
          Moda Feminina & Plus Size até o 56
        </span>
      </div>
    </Link>
  );
};

export default Logo;
