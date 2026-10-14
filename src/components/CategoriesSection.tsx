import React from 'react';
import CategoryItem from './CategoryItem';
import { categories } from '../data/products';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl px-4 sm:px-8 mx-auto mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
            Coleções pensadas para você
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-1">
            Categorias em Destaque
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-md">
          Peças confortáveis do tamanho P ao 56 com cortes modernos e tecidos de toque macio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
