import React from 'react';
import CategoryItem from './CategoryItem';
import { categories } from '../data/products';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl px-4 sm:px-8 mx-auto mt-14 sm:mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
            Categorias
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mt-1">
            Navegue por Categoria
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">
          Vestidos, blusas, calças e conjuntos selecionados
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat) => (
          <CategoryItem
            key={cat.id}
            id={cat.id}
            name={cat.name}
            icon={cat.icon}
            description={cat.description}
            image={cat.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
