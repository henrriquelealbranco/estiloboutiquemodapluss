import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import ProductGrid from './ProductGrid';
import { products } from '../data/products';

export const HomeCollectionSection: React.FC = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-14 sm:mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
            Seleção Especial
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mt-1">
            Peças em Destaque
          </h2>
        </div>

        <Link
          to="/catalogo"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B1A4A] hover:underline"
        >
          <span>Ver catálogo completo ({products.length} peças)</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </div>

      <ProductGrid products={featuredProducts} />

      <div className="mt-6 text-center sm:hidden">
        <Link
          to="/catalogo"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#8B1A4A] text-white font-medium text-sm py-3 px-6 rounded-lg shadow-sm"
        >
          <span>Ver Todas as Peças</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
};

export default HomeCollectionSection;
