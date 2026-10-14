import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiShieldExclamation, HiCheckCircle, HiArrowLeft, HiXMark } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cep: '85010-000',
    street: 'Rua Presidente Getúlio Vargas',
    number: '1294',
    complement: '',
    neighborhood: 'Centro',
    city: 'Guarapuava',
    state: 'PR',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimulateOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error('Adicione ao menos uma peça na sacola para simular a compra.');
      return;
    }

    if (!formData.fullName.trim()) {
      toast.error('Informe um nome para a simulação.');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(`EB-${randomNum}`);
    setIsModalOpen(true);
  };

  const handleFinishAndClear = () => {
    clearCart();
    setIsModalOpen(false);
    navigate('/');
    toast.success('Simulação concluída! Sacola liberada.');
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-8">
      {/* Botão de Retorno */}
      <div className="mb-6">
        <Link
          to="/carrinho"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#8B1A4A] font-medium"
        >
          <HiArrowLeft /> Voltar para a Sacola
        </Link>
      </div>

      {/* AVISO: Esta é uma demonstração. Nenhum pedido ou pagamento será realizado. */}
      <div className="bg-[#FAF7F5] border border-amber-300 text-amber-950 rounded-xl p-4 sm:p-5 mb-8">
        <div className="flex items-start gap-3">
          <HiShieldExclamation className="text-amber-700 text-2xl shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h2 className="text-sm sm:text-base font-bold text-amber-900">
              Esta é uma demonstração. Nenhum pedido ou pagamento será realizado.
            </h2>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              Os campos abaixo servem exclusivamente para simular o fluxo visual e a experiência do cliente. Nenhum dado é transmitido, gravado ou cobrado.
            </p>
          </div>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-xl p-8 sm:p-12 text-center border border-gray-200 max-w-md mx-auto">
          <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">
            Sua sacola está vazia
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            Adicione ao menos um item do catálogo demonstrativo para testar o checkout.
          </p>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm hover:bg-[#72123b]"
          >
            Ir ao Catálogo
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formulário Simulado (7 cols) */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-xl border border-gray-200 space-y-6">
            <form onSubmit={handleSimulateOrder} className="space-y-6">
              {/* Identificação */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900 border-b border-gray-100 pb-2">
                  1. Identificação do Cliente
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ex: Maria Silva"
                      required
                      className="w-full text-xs sm:text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#8B1A4A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(42) 99999-9999"
                      className="w-full text-xs sm:text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#8B1A4A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="cliente@email.com"
                      className="w-full text-xs sm:text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#8B1A4A]"
                    />
                  </div>
                </div>
              </div>

              {/* Endereço de Entrega */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900 border-b border-gray-100 pb-2">
                  2. Endereço de Simulação
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      CEP
                    </label>
                    <input
                      type="text"
                      name="cep"
                      value={formData.cep}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Rua / Avenida
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Número
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Bairro
                    </label>
                    <input
                      type="text"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Cidade / UF
                    </label>
                    <input
                      type="text"
                      value={`${formData.city} / ${formData.state}`}
                      readOnly
                      className="w-full text-xs sm:text-sm p-2.5 bg-gray-100 border border-gray-300 rounded-lg text-gray-600"
                    />
                  </div>
                </div>
              </div>

              {/* Botão de Finalizar Simulação */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#8B1A4A] hover:bg-[#72123b] text-white font-medium py-3.5 px-6 rounded-lg transition-colors text-sm text-center"
                >
                  Confirmar Simulação do Pedido
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  Nenhum pagamento real será efetuado. Demonstração técnica navegável.
                </p>
              </div>
            </form>
          </div>

          {/* Resumo Lateral (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF7F5] p-5 sm:p-6 rounded-xl border border-gray-200 space-y-4 sticky top-24">
            <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900 pb-2 border-b border-gray-200">
              Resumo da Simulação
            </h3>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.cartKey} className="flex items-center gap-3 text-xs">
                  <div className="w-12 h-14 rounded overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 line-clamp-1">{item.name}</p>
                    <p className="text-gray-500 text-[11px]">
                      Tam: {item.selectedSize} • Cor: {item.selectedColor} • Qtd: {item.quantity}
                    </p>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-200 flex justify-between items-baseline text-sm">
              <span className="font-bold text-gray-900">Total Demonstrativo</span>
              <span className="text-xl font-bold text-[#8B1A4A]">
                {formatPrice(cartTotal)}
              </span>
            </div>

            <a
              href="https://wa.me/5542999104224"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition-colors text-xs text-center"
            >
              <FaWhatsapp className="text-emerald-600 text-sm" />
              <span>Dúvidas? Fale com a boutique no WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Modal de Confirmação da Simulação */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <HiXMark className="text-2xl" />
            </button>

            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 text-3xl">
              <HiCheckCircle />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
              Simulação Concluída com Sucesso
            </span>

            <h3 className="font-heading font-bold text-xl text-gray-900 mt-2 mb-1">
              Pedido Simulado {orderNumber}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed my-3">
              Obrigado por testar o fluxo de compra da <strong>Estilo Boutique</strong>. Esta simulação demonstra como o cliente visualiza o resumo e avança até a conclusão do pedido.
            </p>

            <div className="bg-[#FAF7F5] border border-gray-200 rounded-lg p-3 text-xs text-left mb-4 space-y-1">
              <p><strong>Cliente:</strong> {formData.fullName}</p>
              <p><strong>Total dos Itens:</strong> {formatPrice(cartTotal)}</p>
              <p className="text-gray-500 text-[11px]">* Nenhum valor foi debitado ou transmitido.</p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={handleFinishAndClear}
                className="w-full bg-[#8B1A4A] hover:bg-[#72123b] text-white font-medium py-2.5 rounded-lg text-xs sm:text-sm transition-colors"
              >
                Concluir Demonstração e Voltar ao Início
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
