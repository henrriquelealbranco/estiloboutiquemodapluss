import React from 'react';
import { FaLocationDot, FaWhatsapp, FaInstagram } from 'react-icons/fa6';

export const AboutSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-16 sm:mt-24">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Texto */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
              Conheça a Loja
            </span>

            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 leading-tight">
              Estilo Boutique | Moda Feminina & Plus Size
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A <strong>Estilo Boutique</strong> fica em Guarapuava/PR e é dedicada à moda feminina e plus size, com roupas selecionadas para valorizar diferentes corpos e estilos.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Atendemos tanto em nossa loja física quanto online, enviando peças para todo o Brasil. Você pode tirar dúvidas sobre tamanhos, tecidos e disponibilidade diretamente com nosso atendimento no WhatsApp.
            </p>

            {/* Informações confirmadas */}
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <FaLocationDot className="text-[#8B1A4A] mt-0.5 shrink-0 text-base" />
                <span>
                  <strong>Endereço:</strong> Rua Presidente Getúlio Vargas, 1294 — Centro, Guarapuava/PR
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base shrink-0">🚚</span>
                <span>Envio para todo o Brasil</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="https://wa.me/5542999104224"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#72123b] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                <FaWhatsapp className="text-base text-emerald-300" />
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/estiloboutiquemodapluss/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-[#8B1A4A] text-gray-800 hover:text-[#8B1A4A] text-xs sm:text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                <FaInstagram className="text-base text-[#E1306C]" />
                <span>Ver Instagram</span>
              </a>
            </div>
          </div>

          {/* Lado Imagem */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
              <img
                src="/images/sections/about_boutique_model.jpg"
                alt="Estilo Boutique Guarapuava"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
