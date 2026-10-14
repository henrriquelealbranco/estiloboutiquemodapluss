import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export const WhatsAppFloating: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5542999104224';

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale com a boutique no WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        title="WhatsApp (42) 99910-4224"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </a>
    </aside>
  );
};

export default WhatsAppFloating;
