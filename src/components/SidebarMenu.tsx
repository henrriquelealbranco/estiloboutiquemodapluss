import React, { useEffect, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface SidebarMenuProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isSidebarOpen]);

  if (!isSidebarOpen && !isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Header do drawer */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-gray-500 hover:text-[#8B1A4A] rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Fechar menu"
            >
              <HiXMark className="text-2xl" />
            </button>
          </div>

          {/* Links principais */}
          <nav className="p-4 flex flex-col gap-1 text-[15px] font-medium text-gray-800">
            <NavLink
              to="/"
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg transition-colors ${
                  isActive ? 'bg-[#F5E6EC] text-[#8B1A4A] font-semibold' : 'hover:bg-gray-50'
                }`
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/catalogo"
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg transition-colors ${
                  isActive ? 'bg-[#F5E6EC] text-[#8B1A4A] font-semibold' : 'hover:bg-gray-50'
                }`
              }
            >
              Catálogo Completo
            </NavLink>
            
            <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Categorias
            </div>
            <Link
              to="/catalogo?categoria=vestidos"
              onClick={() => setIsSidebarOpen(false)}
              className="px-3 py-2 rounded-lg text-gray-600 hover:text-[#8B1A4A] hover:bg-gray-50 flex items-center gap-2"
            >
              <span>👗</span> Vestidos
            </Link>
            <Link
              to="/catalogo?categoria=blusas"
              onClick={() => setIsSidebarOpen(false)}
              className="px-3 py-2 rounded-lg text-gray-600 hover:text-[#8B1A4A] hover:bg-gray-50 flex items-center gap-2"
            >
              <span>👚</span> Blusas & Camisas
            </Link>
            <Link
              to="/catalogo?categoria=calcas"
              onClick={() => setIsSidebarOpen(false)}
              className="px-3 py-2 rounded-lg text-gray-600 hover:text-[#8B1A4A] hover:bg-gray-50 flex items-center gap-2"
            >
              <span>👖</span> Calças
            </Link>
            <Link
              to="/catalogo?categoria=conjuntos"
              onClick={() => setIsSidebarOpen(false)}
              className="px-3 py-2 rounded-lg text-gray-600 hover:text-[#8B1A4A] hover:bg-gray-50 flex items-center gap-2"
            >
              <span>✨</span> Conjuntos
            </Link>

            <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Minhas Escolhas
            </div>
            <Link
              to="/favoritos"
              onClick={() => setIsSidebarOpen(false)}
              className="px-3 py-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-[#8B1A4A] flex items-center justify-between"
            >
              <span>Favoritos</span>
              {wishlistCount > 0 && (
                <span className="bg-[#8B1A4A] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              to="/carrinho"
              onClick={() => setIsSidebarOpen(false)}
              className="px-3 py-2 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-[#8B1A4A] flex items-center justify-between"
            >
              <span>Sacola de Compras</span>
              {cartCount > 0 && (
                <span className="bg-[#8B1A4A] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>

        {/* Rodapé da sidebar com contatos confirmados */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 space-y-2">
          <p className="font-semibold text-gray-900">Estilo Boutique</p>
          <p>Rua Presidente Getúlio Vargas, 1294 Centro, Guarapuava/PR</p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://wa.me/5542999104224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-700 font-medium hover:underline"
            >
              <FaWhatsapp className="text-base text-emerald-600" />
              WhatsApp
            </a>
            <span>•</span>
            <a
              href="https://www.instagram.com/estiloboutiquemodapluss/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#8B1A4A] font-medium hover:underline"
            >
              <FaInstagram className="text-base text-[#E1306C]" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
