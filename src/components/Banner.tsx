import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaTruckFast, FaRulerCombined } from 'react-icons/fa6';

export const Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#6b0f36] via-[#8B1A4A] to-[#4a0a26] text-white py-20 lg:py-28 px-4 sm:px-8">
      {/* Elementos visuais decorativos de fundo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-pink-300 blur-3xl"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Coluna de Texto Principal */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase border border-white/20">
            <span className="w-2 h-2 rounded-full bg-pink-300"></span>
            Moda Feminina & Plus Size até o 56
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-sm">
            Elegância, caimento e confiança em cada detalhe.
          </h1>

          <p className="text-pink-100 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Bem-vinda à <strong>Estilo Boutique</strong>. Peças pensadas especialmente para valorizar o corpo feminino com conforto supremo, tecidos nobres e modelagens que abraçam suas curvas do tamanho P ao 56.
          </p>

          {/* Destaques rápidos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-4 text-xs sm:text-sm font-medium text-pink-100">
            <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
              <FaRulerCombined className="text-pink-300 text-base shrink-0" />
              <span>Tamanhos P ao 56</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
              <FaTruckFast className="text-pink-300 text-base shrink-0" />
              <span>Envio para todo Brasil</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center lg:justify-start gap-2 bg-white/10 p-2.5 rounded-lg border border-white/10">
              <span>📍 Guarapuava/PR</span>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/catalogo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#8B1A4A] hover:bg-[#F5E6EC] font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Ver Catálogo Completo</span>
              <FaArrowRight className="text-sm" />
            </Link>

            <a
              href="https://wa.me/5542999104224"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-md transition-all duration-300"
            >
              <FaWhatsapp className="text-lg" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Imagem em Destaque no Hero */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src="/images/sections/hero_banner_model.jpg"
              alt="Estilo Boutique Moda Plus Size"
              className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="bg-white/95 backdrop-blur-md text-[#8B1A4A] p-4 rounded-2xl w-full text-center shadow-lg border border-white/40">
                <p className="font-heading font-bold text-lg">Nova Coleção Plus Size</p>
                <p className="text-xs text-gray-700">Vestidos, Calças, Blusas e Conjuntos até o 56</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
