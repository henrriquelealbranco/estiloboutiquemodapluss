import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa6';

export const Banner: React.FC = () => {
  return (
    <section className="bg-[#FAF7F5] border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
              Boutique Feminina & Plus Size
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Seu estilo, seu tamanho.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Conheça a seleção de moda feminina e plus size da Estilo Boutique. Peças elegantes pensadas para o seu dia a dia e momentos marcantes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B1A4A] hover:bg-[#72123b] text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-lg transition-colors shadow-sm"
              >
                <span>Explorar coleção</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <a
                href="https://wa.me/5542999104224"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium text-sm sm:text-base px-6 py-3.5 rounded-lg transition-colors"
              >
                <FaWhatsapp className="text-emerald-600 text-lg" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-gray-400 pt-2">
              Guarapuava/PR • Envio para todo o Brasil
            </p>
          </div>

          {/* Fotografia da Modelo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100">
              <img
                src="/images/sections/hero_banner_model.jpg"
                alt="Moda Feminina e Plus Size - Estilo Boutique"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
