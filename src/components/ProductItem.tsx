import React from 'react';
import { Link } from 'react-router-dom';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { useWishlist } from '../context/WishlistContext';
import { Product } from '../data/products';

export interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFav = isInWishlist(product.id);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    if (!isFav) {
      toast.success('Adicionado aos favoritos!');
    } else {
      toast('Removido dos favoritos', { icon: '🤍' });
    }
  };

  // Grade de tamanhos reais cadastrados
  const sizeRange =
    product.sizes.length > 1
      ? `${product.sizes[0]} ao ${product.sizes[product.sizes.length - 1]}`
      : product.sizes[0] || 'Único';

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#8B1A4A] transition-all duration-300 flex flex-col justify-between">
      {/* Imagem do Produto em 3:4 */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Link to={`/produto/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Badge do tamanho real cadastrado */}
        <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
          <span className="bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded tracking-wide">
            {sizeRange}
          </span>
        </div>

        {/* Botão de Favoritar */}
        <button
          type="button"
          aria-label={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          onClick={handleToggleWishlist}
          className="absolute top-2.5 right-2.5 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:text-[#8B1A4A] shadow-sm hover:scale-110 active:scale-95 transition-all"
        >
          {isFav ? (
            <HiHeart className="text-lg text-[#8B1A4A]" />
          ) : (
            <HiOutlineHeart className="text-lg hover:text-[#8B1A4A]" />
          )}
        </button>
      </div>

      {/* Informações Resumidas do Card */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between gap-2.5">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium capitalize">
            {product.category}
          </span>
          <Link
            to={`/produto/${product.id}`}
            className="block text-gray-900 hover:text-[#8B1A4A] transition-colors mt-0.5"
          >
            <h3 className="font-heading font-semibold text-sm sm:text-base line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-base sm:text-lg font-bold text-[#8B1A4A] block">
              {formatPrice(product.price)}
            </span>
            <span className="text-[10px] text-gray-400 block -mt-0.5">
              Demonstrativo
            </span>
          </div>

          <Link
            to={`/produto/${product.id}`}
            className="text-xs font-medium px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md bg-[#8B1A4A] hover:bg-[#72123b] text-white transition-colors text-center shrink-0"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
