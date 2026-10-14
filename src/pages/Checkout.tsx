import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HiShieldExclamation,
  HiCheckCircle,
  HiArrowLeft,
  HiLockClosed,
  HiOutlineCreditCard,
  HiOutlineQrCode,
  HiOutlineDocumentText,
  HiXMark,
} from 'react-icons/hi2';
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
    complement: 'Apto / Sala',
    neighborhood: 'Centro',
    city: 'Guarapuava',
    state: 'PR',
    paymentMethod: 'pix',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const shippingFee = cartTotal >= 299 ? 0 : 19.90;
  const finalTotal = cartTotal + shippingFee;

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      toast.error('Informe seu nome completo para a simulação.');
      return;
    }

    // Gera um código de pedido demonstrativo
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(`EB-${randomNum}`);
    setIsModalOpen(true);
  };

  const handleFinishAndClear = () => {
    clearCart();
    setIsModalOpen(false);
    navigate('/');
    toast.success('Demonstração concluída! Obrigado pela visita.');
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-10">
      {/* Botão de Retorno */}
      <div className="mb-6">
        <Link
          to="/carrinho"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#8B1A4A] font-medium"
        >
          <HiArrowLeft /> Voltar para a Sacola
        </Link>
      </div>

      {/* AVISO EM DESTAQUE PROEMINENTE - Alerta de Demonstração */}
      <div className="bg-amber-50 border-2 border-amber-400 text-amber-950 rounded-2xl p-5 sm:p-6 mb-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-amber-100 rounded-xl text-amber-800 text-2xl shrink-0">
            <HiShieldExclamation />
          </div>
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-amber-900 tracking-wide uppercase">
              ⚠️ AVISO IMPORTANTE: AMBIENTE DE DEMONSTRAÇÃO
            </h2>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-normal">
              Esta tela de checkout é <strong>100% demonstrativa</strong> para validação técnica e visual da loja virtual da <strong>Estilo Boutique</strong>.
              Nenhum dado financeiro será processado, nenhum pagamento será debitado e nenhuma informação confidencial será enviada a servidores externos.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/5542999104224"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-colors shadow-sm"
              >
                <FaWhatsapp className="text-sm" />
                <span>Dúvidas? Fale conosco no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2">
            Sua sacola está vazia
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Adicione produtos do catálogo demonstrativo para testar o fluxo de finalização.
          </p>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#A83060]"
          >
            Ir ao Catálogo
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Formulário Simulado (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            <form onSubmit={handleSimulateOrder} className="space-y-8">
              {/* Etapa 1: Dados Pessoais */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                  <span className="w-6 h-6 rounded-full bg-[#8B1A4A] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-heading font-bold text-lg text-gray-900">
                    Dados do Cliente (Simulação)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ex: Maria Aparecida da Silva"
                      required
                      className="w-full text-sm border-gray-300 rounded-xl focus:ring-[#8B1A4A] focus:border-[#8B1A4A] p-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(42) 99999-9999"
                      required
                      className="w-full text-sm border-gray-300 rounded-xl focus:ring-[#8B1A4A] focus:border-[#8B1A4A] p-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="maria@exemplo.com"
                      className="w-full text-sm border-gray-300 rounded-xl focus:ring-[#8B1A4A] focus:border-[#8B1A4A] p-2.5"
                    />
                  </div>
                </div>
              </div>

              {/* Etapa 2: Endereço de Entrega */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                  <span className="w-6 h-6 rounded-full bg-[#8B1A4A] text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-heading font-bold text-lg text-gray-900">
                    Endereço de Entrega (Rápida para todo Brasil)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      CEP
                    </label>
                    <input
                      type="text"
                      name="cep"
                      value={formData.cep}
                      onChange={handleInputChange}
                      className="w-full text-sm border-gray-300 rounded-xl focus:ring-[#8B1A4A] focus:border-[#8B1A4A] p-2.5"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      Rua / Logradouro
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      className="w-full text-sm border-gray-300 rounded-xl focus:ring-[#8B1A4A] focus:border-[#8B1A4A] p-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      Número
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full text-sm border-gray-300 rounded-xl focus:ring-[#8B1A4A] focus:border-[#8B1A4A] p-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      Bairro
                    </label>
                    <input
                      type="text"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleInputChange}
                      className="w-full text-sm border-gray-300 rounded-xl focus:ring-[#8B1A4A] focus:border-[#8B1A4A] p-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      Cidade / UF
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={`${formData.city} - ${formData.state}`}
                      onChange={handleInputChange}
                      className="w-full text-sm border-gray-300 rounded-xl focus:ring-[#8B1A4A] focus:border-[#8B1A4A] p-2.5"
                    />
                  </div>
                </div>
              </div>

              {/* Etapa 3: Forma de Pagamento Simulada */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                  <span className="w-6 h-6 rounded-full bg-[#8B1A4A] text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-heading font-bold text-lg text-gray-900">
                    Forma de Pagamento (Simulação sem Cobrança)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'pix'
                        ? 'border-[#8B1A4A] bg-[#F5E6EC]/40 text-[#8B1A4A]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      checked={formData.paymentMethod === 'pix'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <HiOutlineQrCode className="text-2xl" />
                    <span className="text-xs font-bold">PIX Demonstrativo</span>
                  </label>

                  <label
                    className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'credit_card'
                        ? 'border-[#8B1A4A] bg-[#F5E6EC]/40 text-[#8B1A4A]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit_card"
                      checked={formData.paymentMethod === 'credit_card'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <HiOutlineCreditCard className="text-2xl" />
                    <span className="text-xs font-bold">Cartão (Até 3x)</span>
                  </label>

                  <label
                    className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'boleto'
                        ? 'border-[#8B1A4A] bg-[#F5E6EC]/40 text-[#8B1A4A]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="boleto"
                      checked={formData.paymentMethod === 'boleto'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <HiOutlineDocumentText className="text-2xl" />
                    <span className="text-xs font-bold">Boleto Bancário</span>
                  </label>
                </div>
              </div>

              {/* Botão de Envio Simulado */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#8B1A4A] hover:bg-[#A83060] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base flex items-center justify-center gap-2"
                >
                  <HiLockClosed className="text-lg" />
                  <span>Simular Finalização de Pedido</span>
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-2">
                  Ao clicar, você aciona apenas a confirmação ilustrativa da demonstração.
                </p>
              </div>
            </form>
          </div>

          {/* Resumo Lateral do Pedido (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 sticky top-24">
            <h3 className="font-heading font-bold text-xl text-gray-900 pb-3 border-b border-gray-100">
              Itens do Pedido ({cart.length})
            </h3>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1 divide-y divide-gray-100">
              {cart.map((item) => (
                <div
                  key={item.cartKey || `${item.id}-${item.selectedSize}`}
                  className="pt-3 first:pt-0 flex items-center gap-3 text-xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-14 object-cover rounded-lg shrink-0 border"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 line-clamp-1">{item.name}</p>
                    <p className="text-gray-500">
                      Tam: {item.selectedSize} • Cor: {item.selectedColor}
                    </p>
                    <p className="text-gray-500">Qtd: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Entrega rápida</span>
                <span className="font-semibold text-gray-900">
                  {shippingFee === 0 ? 'Grátis' : formatPrice(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total Estimado</span>
                <span className="text-[#8B1A4A] text-xl font-extrabold">
                  {formatPrice(finalTotal)}
                </span>
              </div>
            </div>

            {/* Caixa de suporte WhatsApp */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-2">
              <p className="text-xs font-semibold text-emerald-950">
                Precisa de ajuda com suas medidas ou pedidos reais?
              </p>
              <a
                href="https://wa.me/5542999104224"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors w-full shadow-sm"
              >
                <FaWhatsapp className="text-base" />
                <span>Dúvidas? Fale conosco no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmação Simulada */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fade-in text-center space-y-5">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <HiXMark className="text-2xl" />
            </button>

            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              <HiCheckCircle />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8B1A4A]">
                Demonstração Concluída
              </span>
              <h3 className="font-heading text-2xl font-bold text-gray-900">
                Pedido Simulado com Sucesso!
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-1">
                Identificador: <strong>{orderNumber}</strong>
              </p>
            </div>

            <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-gray-200 text-left text-xs space-y-2 text-gray-600">
              <p>
                <strong>Cliente:</strong> {formData.fullName}
              </p>
              <p>
                <strong>Cidade de Entrega:</strong> {formData.city} - {formData.state}
              </p>
              <p>
                <strong>Valor Simulado:</strong> {formatPrice(finalTotal)} ({cart.length} itens)
              </p>
              <p className="text-amber-800 bg-amber-50 p-2 rounded-lg font-medium text-[11px] border border-amber-200">
                ℹ️ Lembramos que este é um pedido simulado. Nenhum valor foi cobrado e nenhuma remessa física será despachada automaticamente.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href="https://wa.me/5542999104224"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors shadow"
              >
                <FaWhatsapp className="text-base" />
                <span>Dúvidas? Fale conosco no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleFinishAndClear}
                className="w-full bg-[#8B1A4A] hover:bg-[#A83060] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors shadow"
              >
                Concluir e Voltar ao Início
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
