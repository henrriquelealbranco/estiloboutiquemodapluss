import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import ProductGrid from './ProductGrid';
import { products } from '../data/products';

export const HomeCollectionSection: React.FC = () => {
  // Filtra produtos em destaque
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
            Curadoria Especial
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-1">
            Destaques da Coleção
          </h2>
        </div>

        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B1A4A] hover:text-[#A83060] transition-colors"
        >
          <span>Explorar todos os 12 modelos</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </div>

      <ProductGrid products={featuredProducts} />

      <div className="mt-8 text-center sm:hidden">
        <Link
          to="/catalogo"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#8B1A4A] text-white font-semibold text-sm py-3 px-6 rounded-xl shadow"
        >
          <span>Ver Todo o Catálogo</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
};

export default HomeCollectionSection;
