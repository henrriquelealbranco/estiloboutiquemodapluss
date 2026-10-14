import React from 'react';
import { FaInstagram } from 'react-icons/fa6';

export const InstagramSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-16 sm:mt-24">
      <div className="bg-[#FAF7F5] rounded-2xl border border-gray-200 p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
          <FaInstagram className="text-2xl" />
        </div>

        <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A] block mb-1">
          Acompanhe Nossas Novidades
        </span>

        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-3">
          Siga @estiloboutiquemodapluss
        </h2>

        <p className="text-gray-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Confira provadores, lançamentos da coleção e novidades da loja direto no nosso Instagram oficial.
        </p>

        <a
          href="https://www.instagram.com/estiloboutiquemodapluss/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#72123b] text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors shadow-sm"
        >
          <FaInstagram className="text-base" />
          <span>Visitar Perfil no Instagram</span>
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
