import React from 'react';
import { Link } from 'react-router-dom';
import { HiTrash, HiArrowLeft, HiShoppingBag } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal } = useCart();

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleRemove = (cartKey: string, name: string) => {
    removeFromCart(cartKey);
    toast.success(`${name} removido da sacola.`);
  };

  const handleClear = () => {
    if (window.confirm('Deseja esvaziar sua sacola demonstrativa?')) {
      clearCart();
      toast('Sacola esvaziada', { icon: '🗑️' });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-screen-md mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 bg-[#FAF7F5] text-[#8B1A4A] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl border border-gray-200">
          <HiShoppingBag />
        </div>
        <h2 className="font-heading text-2xl font-bold text-gray-800 mb-2">
          Sua sacola está vazia
        </h2>
        <p className="text-gray-500 mb-6 max-w-sm mx-auto text-xs sm:text-sm leading-relaxed">
          Navegue pelo nosso catálogo de moda feminina e plus size e escolha suas peças favoritas.
        </p>
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#72123b] text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors"
        >
          <HiArrowLeft /> Explorar o Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
            Sacola de Compras
          </span>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mt-0.5">
            Itens Selecionados ({cartCount})
          </h1>
        </div>

        <button
          type="button"
          onClick={handleClear}
          className="text-xs text-rose-600 hover:text-rose-700 font-medium inline-flex items-center gap-1 self-start sm:self-auto"
        >
          <HiTrash /> Esvaziar Sacola
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Lista de Peças (8 cols) */}
        <div className="lg:col-span-8 space-y-3">
          {cart.map((item) => {
            const itemKey = item.cartKey || `${item.id}-${item.selectedSize}-${item.selectedColor}`;
            return (
              <div
                key={itemKey}
                className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center gap-4 justify-between"
              >
                {/* Imagem + Infos */}
                <div className="flex items-center gap-3.5 w-full sm:w-auto">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <Link
                      to={`/produto/${item.id}`}
                      className="font-heading font-bold text-sm sm:text-base text-gray-900 hover:text-[#8B1A4A] transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Cor: <strong className="text-gray-700">{item.selectedColor}</strong></span>
                      <span>•</span>
                      <span>Tamanho: <strong className="text-gray-700">{item.selectedSize}</strong></span>
                    </div>
                    <div className="text-sm font-semibold text-[#8B1A4A] pt-0.5">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                </div>

                {/* Quantidade + Subtotal + Excluir */}
                <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                  <div className="inline-flex items-center border border-gray-300 rounded-lg bg-gray-50 p-0.5">
                    <button
                      type="button"
                      onClick={() => updateQuantity(itemKey, item.quantity - 1)}
                      className="w-6 h-6 rounded bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(itemKey, item.quantity + 1)}
                      className="w-6 h-6 rounded bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-xs"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right min-w-20">
                    <span className="text-sm sm:text-base font-bold text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemove(itemKey, item.name)}
                    className="p-1.5 text-gray-400 hover:text-rose-600 rounded hover:bg-rose-50 transition-colors"
                    title="Remover"
                  >
                    <HiTrash className="text-base" />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="pt-2">
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B1A4A] hover:underline"
            >
              <HiArrowLeft /> Continuar Navegando
            </Link>
          </div>
        </div>

        {/* Resumo da Compra (4 cols) */}
        <div className="lg:col-span-4 bg-[#FAF7F5] p-5 sm:p-6 rounded-xl border border-gray-200 space-y-5 sticky top-24">
          <h3 className="font-heading font-bold text-lg text-gray-900 pb-2 border-b border-gray-200">
            Resumo Demonstrativo
          </h3>

          <div className="space-y-2.5 text-xs sm:text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'itens'})</span>
              <span className="font-bold text-gray-900">{formatPrice(cartTotal)}</span>
            </div>

            <div className="pt-2 border-t border-gray-200 flex justify-between items-baseline">
              <span className="text-sm sm:text-base font-bold text-gray-900">Total Simulado</span>
              <span className="text-xl sm:text-2xl font-bold text-[#8B1A4A]">
                {formatPrice(cartTotal)}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed pt-1">
              * Demonstração. Nenhum valor será cobrado e nenhuma entrega física é agendada por este botão.
            </p>
          </div>

          <Link
            to="/checkout"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#8B1A4A] hover:bg-[#72123b] text-white font-medium py-3 px-5 rounded-lg transition-colors text-center text-sm"
          >
            <span>Simular Finalização</span>
            <span>→</span>
          </Link>

          <a
            href="https://wa.me/5542999104224"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium py-2.5 px-4 rounded-lg transition-colors text-xs text-center"
          >
            <FaWhatsapp className="text-emerald-600 text-sm" />
            <span>Falar com a loja no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
