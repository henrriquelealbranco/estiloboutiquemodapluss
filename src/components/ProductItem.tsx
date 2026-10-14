import React from 'react';
import { Link } from 'react-router-dom';
import { HiHeart, HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Product } from '../data/products';

export interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isFav = isInWishlist(product.id);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      selectedColor: product.colors[0] || 'Padrão',
      selectedSize: product.sizes[0] || 'U',
      quantity: 1,
      image: product.images[0],
      category: product.category,
    });
    toast.success(`${product.name} adicionado à sacola!`);
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

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Imagem do Produto com Badges e Botão Favorito */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Link to={`/produto/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>

        {/* Badges superiores */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          <span className="bg-[#8B1A4A] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            P ao 56
          </span>
          {product.featured && (
            <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Destaque
            </span>
          )}
        </div>

        {/* Botão de Favoritar */}
        <button
          type="button"
          aria-label={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-[#8B1A4A] shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
        >
          {isFav ? (
            <HiHeart className="text-xl text-rose-600" />
          ) : (
            <HiOutlineHeart className="text-xl hover:text-rose-600" />
          )}
        </button>

        {/* Botão rápido "Adicionar à Sacola" no hover desktop */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 bg-[#8B1A4A] hover:bg-[#A83060] text-white text-xs font-semibold py-2.5 rounded-xl shadow-lg transition-colors"
          >
            <HiOutlineShoppingBag className="text-base" />
            Adicionar à Sacola
          </button>
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 capitalize">
            {product.category}
          </span>
          <Link
            to={`/produto/${product.id}`}
            className="block text-gray-900 hover:text-[#8B1A4A] transition-colors mt-0.5"
          >
            <h3 className="font-heading font-semibold text-base sm:text-lg line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div>
          {/* Tamanhos disponíveis */}
          <div className="flex flex-wrap gap-1 mb-2">
            {product.sizes.slice(0, 5).map((size) => (
              <span
                key={size}
                className="text-[10px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded font-medium"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 5 && (
              <span className="text-[10px] text-gray-400 font-medium">
                +{product.sizes.length - 5}
              </span>
            )}
          </div>

          {/* Preço e Botão mobile */}
          <div className="flex items-center justify-between pt-1 border-t border-gray-100">
            <div>
              <span className="text-[10px] text-gray-400 block uppercase font-medium">
                À vista
              </span>
              <span className="text-lg font-bold text-[#8B1A4A]">
                {formatPrice(product.price)}
              </span>
            </div>

            <Link
              to={`/produto/${product.id}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#8B1A4A] text-[#8B1A4A] hover:bg-[#8B1A4A] hover:text-white transition-colors"
            >
              Ver Detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
