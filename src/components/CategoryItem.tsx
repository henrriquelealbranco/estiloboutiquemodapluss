import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  id: string;
  name: string;
  icon: string;
  description?: string;
  image?: string;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  id,
  name,
  image,
}) => {
  return (
    <Link
      to={`/catalogo?categoria=${id}`}
      className="group block overflow-hidden rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:border-[#8B1A4A]"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={image || '/images/sections/cat_vestidos.jpg'}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="font-heading text-lg sm:text-xl font-bold tracking-wide">
            {name}
          </h3>
          <span className="text-xs text-pink-200 group-hover:text-white transition-colors flex items-center gap-1 mt-0.5">
            Ver peças →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
