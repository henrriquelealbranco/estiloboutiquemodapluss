import React from 'react';
import { Link } from 'react-router-dom';
import { HiTrash, HiArrowLeft, HiShoppingBag, HiShieldCheck } from 'react-icons/hi2';
import { FaWhatsapp, FaTruckFast } from 'react-icons/fa6';
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
    if (window.confirm('Tem certeza de que deseja esvaziar sua sacola de compras?')) {
      clearCart();
      toast('Sacola esvaziada', { icon: '🗑️' });
    }
  };

  // Frete demonstrativo gratuito acima de R$ 299 ou fixo
  const shippingFee = cartTotal >= 299 ? 0 : 19.90;
  const finalTotal = cartTotal + shippingFee;

  if (cart.length === 0) {
    return (
      <div className="max-w-screen-md mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-[#F5E6EC] text-[#8B1A4A] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm">
          <HiShoppingBag />
        </div>
        <h2 className="font-heading text-3xl font-bold text-gray-800 mb-3">
          Sua sacola está vazia
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          Que tal conhecer nossas peças de moda feminina e plus size até o 56? Temos vestidos, conjuntos, calças e blusas imperdíveis.
        </p>
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#A83060] text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <HiArrowLeft /> Explorar o Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
            Seus Itens Selecionados
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-1">
            Sacola de Compras ({cartCount} {cartCount === 1 ? 'item' : 'itens'})
          </h1>
        </div>

        <button
          type="button"
          onClick={handleClear}
          className="text-xs text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center gap-1.5 self-start sm:self-auto"
        >
          <HiTrash /> Esvaziar Sacola
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Lista de Produtos (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => {
            const itemKey = item.cartKey || `${item.id}-${item.selectedSize}-${item.selectedColor}`;
            return (
              <div
                key={itemKey}
                className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-5 justify-between"
              >
                {/* Imagem + Infos */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <Link
                      to={`/produto/${item.id}`}
                      className="font-heading font-bold text-base sm:text-lg text-gray-900 hover:text-[#8B1A4A] transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      <span>Cor: <strong className="text-gray-800">{item.selectedColor}</strong></span>
                      <span>•</span>
                      <span>Tamanho: <strong className="text-gray-800">{item.selectedSize}</strong></span>
                    </div>
                    <div className="text-sm font-semibold text-[#8B1A4A] pt-1">
                      {formatPrice(item.price)} <span className="text-xs font-normal text-gray-400">/ unidade</span>
                    </div>
                  </div>
                </div>

                {/* Quantidade + Subtotal + Excluir */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                  {/* Seletor Quantidade */}
                  <div className="inline-flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(itemKey, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-xs font-bold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(itemKey, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-sm"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal do item */}
                  <div className="text-right min-w-24">
                    <span className="text-xs text-gray-400 block sm:hidden">Total:</span>
                    <span className="text-base font-bold text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>

                  {/* Botão de Excluir */}
                  <button
                    type="button"
                    onClick={() => handleRemove(itemKey, item.name)}
                    className="p-2 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                    title="Remover da sacola"
                  >
                    <HiTrash className="text-lg" />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="pt-2">
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B1A4A] hover:underline"
            >
              <HiArrowLeft /> Continuar Comprando
            </Link>
          </div>
        </div>

        {/* Resumo da Compra (4 cols) */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 sticky top-24">
          <h3 className="font-heading font-bold text-xl text-gray-900 pb-3 border-b border-gray-100">
            Resumo do Pedido
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal dos produtos</span>
              <span className="font-semibold text-gray-900">{formatPrice(cartTotal)}</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span>Entrega rápida</span>
                <span className="block text-[11px] text-gray-400">Todo o Brasil</span>
              </div>
              <span className="font-semibold text-gray-900">
                {shippingFee === 0 ? (
                  <span className="text-emerald-600 font-bold">Grátis</span>
                ) : (
                  formatPrice(shippingFee)
                )}
              </span>
            </div>

            {cartTotal < 299 && (
              <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg">
                Falta {formatPrice(299 - cartTotal)} para frete grátis!
              </p>
            )}

            <div className="pt-3 border-t border-gray-100 flex justify-between items-baseline">
              <span className="text-base font-bold text-gray-900">Total</span>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-[#8B1A4A]">
                  {formatPrice(finalTotal)}
                </span>
                <span className="block text-[10px] text-gray-400">
                  ou até 3x de {formatPrice(finalTotal / 3)} sem juros
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/checkout"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#8B1A4A] hover:bg-[#A83060] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center text-sm sm:text-base"
          >
            <span>Prosseguir para Checkout</span>
            <span>→</span>
          </Link>

          {/* Dúvidas no WhatsApp */}
          <a
            href="https://wa.me/5542999104224"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 font-semibold py-2.5 px-4 rounded-xl transition-colors text-xs text-center"
          >
            <FaWhatsapp className="text-emerald-600 text-sm" />
            <span>Dúvidas? Fale conosco no WhatsApp</span>
          </a>

          {/* Garantias */}
          <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <HiShieldCheck className="text-emerald-600 text-base shrink-0" />
              <span>Ambiente 100% seguro para demonstração</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruckFast className="text-[#8B1A4A] text-base shrink-0" />
              <span>Envio de Guarapuava para todo Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
