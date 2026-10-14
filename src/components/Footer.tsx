import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaLocationDot } from 'react-icons/fa6';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 pt-10 pb-8 px-4 sm:px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-100">
        {/* Coluna 1: Sobre a Marca */}
        <div className="space-y-3">
          <Logo size="md" />
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Moda feminina e plus size em Guarapuava/PR. Peças selecionadas para valorizar diferentes corpos e estilos.
          </p>
          <p className="text-xs text-gray-400">
            Envio para todo o Brasil
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="space-y-2.5">
          <h4 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider">
            Navegação
          </h4>
          <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-[#8B1A4A] transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/catalogo" className="hover:text-[#8B1A4A] transition-colors">
                Catálogo Geral
              </Link>
            </li>
            <li>
              <Link to="/catalogo?categoria=vestidos" className="hover:text-[#8B1A4A] transition-colors">
                Vestidos
              </Link>
            </li>
            <li>
              <Link to="/catalogo?categoria=blusas" className="hover:text-[#8B1A4A] transition-colors">
                Blusas
              </Link>
            </li>
            <li>
              <Link to="/catalogo?categoria=calcas" className="hover:text-[#8B1A4A] transition-colors">
                Calças
              </Link>
            </li>
            <li>
              <Link to="/catalogo?categoria=conjuntos" className="hover:text-[#8B1A4A] transition-colors">
                Conjuntos
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Atendimento & Loja Física */}
        <div className="space-y-2.5">
          <h4 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider">
            Atendimento
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <FaLocationDot className="text-[#8B1A4A] mt-0.5 shrink-0" />
              <span>
                Rua Presidente Getúlio Vargas, 1294<br />
                Centro, Guarapuava - PR
              </span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <FaWhatsapp className="text-emerald-600 shrink-0 text-base" />
              <a
                href="https://wa.me/5542999104224"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium text-gray-800"
              >
                (42) 99910-4224
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
        <div className="space-y-2.5 bg-[#FAF7F5] p-4 rounded-xl border border-gray-200">
          <h4 className="font-heading font-bold text-gray-900 text-xs uppercase tracking-wider">
            Demonstração da Loja
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Este site é uma demonstração navegável desenvolvida para apresentação. Os produtos e preços são ilustrativos. Nenhum pedido ou pagamento real é realizado.
          </p>
        </div>
      </div>

      {/* Linha final */}
      <div className="max-w-screen-2xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
        <p>
          © {new Date().getFullYear()} Estilo Boutique Moda Feminina & Plus Size.
        </p>
        <p>
          Base técnica original por{' '}
          <a
            href="https://github.com/Kuzma02/Fashion-eCommerce-Shop-in-React"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:underline"
          >
            Kuzma02
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
