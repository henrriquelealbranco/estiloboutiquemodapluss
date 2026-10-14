import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiBars3, HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Logo from './Logo';
import SidebarMenu from './SidebarMenu';

export const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <>
      {/* Barra superior de informações e aviso demonstrativo */}
      <div className="bg-[#8B1A4A] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between gap-2 px-2">
          <span className="hidden sm:inline">📍 Rua Presidente Getúlio Vargas, 1294 Centro - Guarapuava/PR</span>
          <span className="mx-auto sm:mx-0 font-semibold">✨ Moda Feminina & Plus Size até o 56 | Entrega para todo o Brasil 🚚</span>
          <span className="hidden md:inline bg-[#A83060] px-2 py-0.5 rounded text-[11px] uppercase tracking-wider font-bold">Demo Interativa</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-screen-2xl flex items-center justify-between py-3.5 px-4 sm:px-8 mx-auto">
          {/* Mobile hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#8B1A4A] transition-colors focus:outline-none"
            >
              <HiBars3 className="text-2xl" />
            </button>
            <Logo size="md" />
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-[#8B1A4A] pb-1 border-b-2 ${
                  isActive ? 'border-[#8B1A4A] text-[#8B1A4A] font-semibold' : 'border-transparent'
                }`
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/catalogo"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-[#8B1A4A] pb-1 border-b-2 ${
                  isActive ? 'border-[#8B1A4A] text-[#8B1A4A] font-semibold' : 'border-transparent'
                }`
              }
            >
              Catálogo Completo
            </NavLink>
            <NavLink
              to="/catalogo?categoria=vestidos"
              className="hover:text-[#8B1A4A] transition-colors duration-200"
            >
              Vestidos
            </NavLink>
            <NavLink
              to="/catalogo?categoria=conjuntos"
              className="hover:text-[#8B1A4A] transition-colors duration-200"
            >
              Conjuntos
            </NavLink>
            <NavLink
              to="/catalogo?categoria=calcas"
              className="hover:text-[#8B1A4A] transition-colors duration-200"
            >
              Calças
            </NavLink>
            <NavLink
              to="/catalogo?categoria=blusas"
              className="hover:text-[#8B1A4A] transition-colors duration-200"
            >
              Blusas
            </NavLink>
          </nav>

          {/* Ações: Favoritos e Carrinho */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/favoritos"
              aria-label="Ver produtos favoritos"
              className="relative p-2 text-gray-700 hover:text-[#8B1A4A] transition-colors rounded-full hover:bg-pink-50"
              title="Favoritos"
            >
              <HiOutlineHeart className="text-2xl" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8B1A4A] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-fade-in shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              to="/carrinho"
              aria-label="Ver carrinho de compras"
              className="relative p-2 text-gray-700 hover:text-[#8B1A4A] transition-colors rounded-full hover:bg-pink-50"
              title="Sacola de Compras"
            >
              <HiOutlineShoppingBag className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8B1A4A] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-fade-in shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/checkout"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#8B1A4A] hover:bg-[#A83060] rounded-md transition-all shadow-sm"
            >
              Finalizar Demonstração
            </Link>
          </div>
        </div>
      </header>

      <SidebarMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default Header;
