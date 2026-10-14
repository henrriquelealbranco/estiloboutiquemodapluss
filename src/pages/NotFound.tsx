import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiShoppingBag } from 'react-icons/hi2';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-24 text-center">
      <span className="text-6xl font-heading font-extrabold text-[#8B1A4A] block mb-2">
        404
      </span>
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Página não encontrada
      </h1>
      <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base mb-8 leading-relaxed">
        Desculpe, o endereço que você tentou acessar não existe ou foi alterado. Conheça as peças da nova coleção plus size da Estilo Boutique!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#A83060] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow transition-colors"
        >
          <HiHome className="text-lg" />
          <span>Voltar ao Início</span>
        </Link>
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-[#8B1A4A] text-gray-700 hover:text-[#8B1A4A] font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-colors"
        >
          <HiShoppingBag className="text-lg" />
          <span>Explorar Catálogo</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
