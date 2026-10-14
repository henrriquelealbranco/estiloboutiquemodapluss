import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export const WhatsAppFloating: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5542999104224';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Balão explicativo */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-full shadow-lg border border-gray-100 hover:text-[#8B1A4A] transition-all duration-300"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        Dúvidas? Fale conosco no WhatsApp
      </a>

      {/* Botão flutuante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl transform transition-transform duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppFloating;
