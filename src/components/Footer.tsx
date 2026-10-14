import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaLocationDot, FaTruckFast } from 'react-icons/fa6';
import SocialMediaFooter from './SocialMediaFooter';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <>
      <SocialMediaFooter />
      <footer className="bg-white border-t border-gray-200 mt-16 pt-12 pb-8 px-4 sm:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-100">
          {/* Coluna 1: Sobre a Marca */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Boutique especializada em moda feminina e plus size até o 56. Roupas com modelagem impecável, elegância e o conforto que você merece.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8B1A4A] bg-[#F5E6EC] px-3 py-1.5 rounded-md w-fit">
              <FaTruckFast className="text-sm" />
              <span>Entrega rápida para todo Brasil</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-gray-900 text-base">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-[#8B1A4A] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-[#8B1A4A] transition-colors">
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=vestidos" className="hover:text-[#8B1A4A] transition-colors">
                  Vestidos Plus Size
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=conjuntos" className="hover:text-[#8B1A4A] transition-colors">
                  Conjuntos Elegantes
                </Link>
              </li>
              <li>
                <Link to="/favoritos" className="hover:text-[#8B1A4A] transition-colors">
                  Meus Favoritos
                </Link>
              </li>
              <li>
                <Link to="/carrinho" className="hover:text-[#8B1A4A] transition-colors">
                  Sacola de Compras
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização & Atendimento */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-gray-900 text-base">
              Atendimento & Loja Física
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <FaLocationDot className="text-[#8B1A4A] mt-1 shrink-0" />
                <p>
                  <strong>Endereço:</strong><br />
                  Rua Presidente Getúlio Vargas, 1294<br />
                  Centro, Guarapuava - PR
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <FaWhatsapp className="text-emerald-600 shrink-0 text-base" />
                <a
                  href="https://wa.me/5542999104224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-medium text-gray-800"
                >
                  +55 (42) 99910-4224
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaInstagram className="text-[#E1306C] shrink-0 text-base" />
                <a
                  href="https://www.instagram.com/estiloboutiquemodapluss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-medium text-gray-800"
                >
                  @estiloboutiquemodapluss
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 4: Aviso Demonstrativo */}
          <div className="space-y-3 bg-[#FAFAFA] p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <h4 className="font-heading font-bold text-gray-900 text-sm">
                Projeto Demonstrativo
              </h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Esta é uma versão demonstrativa para validação da experiência do e-commerce da Estilo Boutique. Os pedidos e pagamentos são simulados.
            </p>
            <a
              href="https://wa.me/5542999104224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md font-medium hover:bg-emerald-100 transition-colors"
            >
              <FaWhatsapp className="text-sm" /> Dúvidas? Fale conosco no WhatsApp
            </a>
          </div>
        </div>

        {/* Linha final de Copyright e Créditos */}
        <div className="max-w-screen-2xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Estilo Boutique Moda Feminina & Plus Size. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right">
            Demonstração técnica em React. Base original por{' '}
            <a
              href="https://github.com/Kuzma02/Fashion-eCommerce-Shop-in-React"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B1A4A] hover:underline font-medium"
            >
              Kuzma02
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
