import React from 'react';
import { FaLocationDot, FaTruckFast, FaRulerCombined, FaWhatsapp, FaInstagram } from 'react-icons/fa6';

export const AboutSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-24">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12 lg:p-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Texto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F5E6EC] text-[#8B1A4A] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Nossa História & Valores
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 leading-tight">
              Estilo Boutique | Moda Feminina & Plus Size em Guarapuava
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              A <strong>Estilo Boutique</strong> nasceu com a missão de vestir mulheres reais com sofisticação, conforto e liberdade. Acreditamos que a moda deve se adaptar às suas curvas — e não o contrário.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Trabalhamos com uma curadoria exclusiva de peças que vestem do <strong>tamanho P ao 56</strong>, com tecidos de alta qualidade, caimento pensado para não repuxar e modelagens que valorizam a autoestima e o bem-estar de cada cliente.
            </p>

            {/* Grid de Informações Confirmadas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <FaLocationDot className="text-[#8B1A4A] text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Loja Física em Guarapuava</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Rua Presidente Getúlio Vargas, 1294<br />Centro - Guarapuava/PR
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <FaTruckFast className="text-[#8B1A4A] text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Entrega para todo o Brasil</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Envio rápido, seguro e cuidadoso para todas as regiões do país.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <FaRulerCombined className="text-[#8B1A4A] text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Grade Completa P ao 56</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Especialistas em moda plus size com caimento anatômico real.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <FaWhatsapp className="text-emerald-600 text-xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Atendimento Humanizado</h4>
                  <a
                    href="https://wa.me/5542999104224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-700 font-medium hover:underline block mt-0.5"
                  >
                    +55 (42) 99910-4224
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://wa.me/5542999104224"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/estiloboutiquemodapluss/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#8B1A4A] text-gray-800 hover:text-[#8B1A4A] text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <FaInstagram className="text-lg text-[#E1306C]" />
                <span>Acompanhar Instagram</span>
              </a>
            </div>
          </div>

          {/* Lado Imagem da Boutique */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] border border-gray-100">
              <img
                src="/images/sections/about_boutique_model.jpg"
                alt="Moda Plus Size Estilo Boutique"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B1A4A]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-heading font-bold text-xl">Estilo Boutique</p>
                  <p className="text-xs text-pink-100">Moda Plus Size até o 56 • Guarapuava/PR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
