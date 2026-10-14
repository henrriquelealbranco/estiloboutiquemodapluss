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
  icon,
  description,
  image,
}) => {
  return (
    <Link
      to={`/catalogo?categoria=${id}`}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100 flex flex-col h-72 sm:h-80"
    >
      {/* Imagem de Fundo */}
      <div className="relative w-full h-full overflow-hidden bg-gray-100">
        <img
          src={image || 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent group-hover:from-black/85 transition-colors duration-300" />
      </div>

      {/* Conteúdo sobreposto */}
      <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{icon}</span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-pink-200 transition-colors">
            {name}
          </h3>
        </div>
        {description && (
          <p className="text-xs text-gray-200 line-clamp-2 font-light">
            {description}
          </p>
        )}
        <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-pink-300 group-hover:text-white transition-colors">
          <span>Ver peças</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
