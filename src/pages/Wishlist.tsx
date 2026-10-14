import React from 'react';
import { Link } from 'react-router-dom';
import { HiHeart, HiTrash, HiArrowLeft } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { useWishlist } from '../context/WishlistContext';
import ProductGrid from '../components/ProductGrid';

export const Wishlist: React.FC = () => {
  const { wishlist, clearWishlist, wishlistCount } = useWishlist();

  const handleClear = () => {
    if (window.confirm('Deseja realmente limpar todos os itens favoritados?')) {
      clearWishlist();
      toast('Lista de favoritos limpa', { icon: '🤍' });
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="max-w-screen-md mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-[#F5E6EC] text-[#8B1A4A] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm">
          <HiHeart />
        </div>
        <h2 className="font-heading text-3xl font-bold text-gray-800 mb-3">
          Sua lista de favoritos está vazia
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          Salve suas peças preferidas clicando no coração dos produtos para revê-las facilmente quando desejar.
        </p>
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#A83060] text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <HiArrowLeft /> Descobrir Coleção
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
            Meus Desejos Salvos
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-1">
            Peças Favoritas ({wishlistCount})
          </h1>
        </div>

        <button
          type="button"
          onClick={handleClear}
          className="text-xs text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center gap-1.5 self-start sm:self-auto"
        >
          <HiTrash /> Limpar Favoritos
        </button>
      </div>

      <ProductGrid products={wishlist} />
    </div>
  );
};

export default Wishlist;
