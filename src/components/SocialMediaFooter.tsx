import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

export const SocialMediaFooter: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
      <div className="bg-gradient-to-r from-[#8B1A4A] to-[#A83060] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 my-12 shadow-md">
        <div className="text-center md:text-left space-y-1">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold">
            Conecte-se com a Estilo Boutique
          </h3>
          <p className="text-[#F5E6EC] text-sm sm:text-base max-w-xl">
            Acompanhe nossas novidades semanais em moda plus size do P ao 56 e receba atendimento personalizado em Guarapuava e para todo o Brasil.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/estiloboutiquemodapluss/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white text-[#8B1A4A] hover:bg-[#F5E6EC] font-semibold px-5 py-3 rounded-full transition-all duration-300 shadow-sm text-sm"
          >
            <FaInstagram className="text-xl text-[#E1306C]" />
            <span>@estiloboutiquemodapluss</span>
          </a>

          <a
            href="https://wa.me/5542999104224"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-emerald-600 text-white hover:bg-emerald-700 font-semibold px-5 py-3 rounded-full transition-all duration-300 shadow-sm text-sm"
          >
            <FaWhatsapp className="text-xl" />
            <span>(42) 99910-4224</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFooter;