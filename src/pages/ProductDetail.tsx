import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HiHeart, HiOutlineHeart, HiOutlineShoppingBag, HiArrowLeft, HiXMark } from 'react-icons/hi2';
import { FaWhatsapp, FaTruckFast, FaRulerCombined, FaShieldHeart } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductGrid from '../components/ProductGrid';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = products.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setSelectedColor(product.colors[0] || '');
      setSelectedSize(product.sizes[0] || '');
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product, id]);

  if (!product) {
    return (
      <div className="max-w-screen-md mx-auto px-4 py-20 text-center">
        <h2 className="font-heading text-3xl font-bold text-gray-800 mb-4">
          Produto não encontrado
        </h2>
        <p className="text-gray-500 mb-6">
          O produto que você procura não está disponível ou o link é inválido.
        </p>
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#A83060] transition-colors"
        >
          <HiArrowLeft /> Voltar ao Catálogo
        </Link>
      </div>
    );
  }

  const isFav = isInWishlist(product.id);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Por favor, selecione um tamanho.');
      return;
    }
    if (!selectedColor) {
      toast.error('Por favor, selecione uma cor.');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      selectedColor,
      selectedSize,
      quantity,
      image: selectedImage || product.images[0],
      category: product.category,
    });

    toast.success(`${quantity}x ${product.name} adicionado à sacola!`);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    if (!isFav) {
      toast.success('Adicionado aos favoritos!');
    } else {
      toast('Removido dos favoritos', { icon: '🤍' });
    }
  };

  // Produtos relacionados (mesma categoria, exceto o atual)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-8">
      {/* Botão Voltar */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#8B1A4A] transition-colors font-medium"
        >
          <HiArrowLeft /> Voltar
        </button>
      </div>

      {/* Grid Principal do Produto */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
        {/* Galeria de Imagens (5 cols) */}
        <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4">
          {/* Miniaturas */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-24 sm:w-24 sm:h-32 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  selectedImage === img
                    ? 'border-[#8B1A4A] ring-2 ring-[#8B1A4A]/20 scale-95'
                    : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Imagem Principal */}
          <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
            <img
              src={selectedImage || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-[#8B1A4A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Plus Size até o 56
            </div>
          </div>
        </div>

        {/* Informações e Detalhes da Compra (7 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A] bg-[#F5E6EC] px-3 py-1 rounded-md">
                Categoria: {product.category}
              </span>
              <span className="text-xs text-gray-400 font-medium">Ref: EB-00{product.id}</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-[#8B1A4A]">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                em até 3x sem juros de {formatPrice(product.price / 3)}
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
              {product.description}
            </p>

            {/* Seleção de Cor */}
            <div className="pt-2">
              <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                Cor: <span className="text-gray-900 font-semibold">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                      selectedColor === color
                        ? 'bg-[#8B1A4A] text-white border-[#8B1A4A] shadow-sm'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#8B1A4A]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Seleção de Tamanho + Modal Guia de Medidas */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500">
                  Tamanho: <span className="text-gray-900 font-semibold">{selectedSize}</span>
                </label>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1 text-xs text-[#8B1A4A] font-semibold hover:underline"
                >
                  <FaRulerCombined className="text-xs" />
                  Guia de Medidas (Exemplo)
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-12 h-11 px-3 text-xs font-bold rounded-xl border transition-all flex items-center justify-center ${
                      selectedSize === size
                        ? 'bg-[#8B1A4A] text-white border-[#8B1A4A] shadow-md scale-105'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#8B1A4A]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantidade */}
            <div className="pt-2">
              <label className="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-2">
                Quantidade
              </label>
              <div className="inline-flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="w-12 text-center text-sm font-bold text-gray-800">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-[#8B1A4A] hover:bg-[#A83060] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                <HiOutlineShoppingBag className="text-xl" />
                <span>Adicionar à Sacola</span>
              </button>

              <button
                type="button"
                onClick={handleToggleWishlist}
                aria-label="Favoritar"
                className={`p-4 rounded-2xl border transition-all flex items-center justify-center shadow-sm ${
                  isFav
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-[#8B1A4A] hover:text-[#8B1A4A]'
                }`}
                title="Favoritar"
              >
                {isFav ? <HiHeart className="text-2xl text-rose-600" /> : <HiOutlineHeart className="text-2xl" />}
              </button>
            </div>

            {/* Dúvidas no WhatsApp */}
            <a
              href="https://wa.me/5542999104224"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-800 font-semibold py-3 px-4 rounded-2xl transition-colors text-xs sm:text-sm"
            >
              <FaWhatsapp className="text-emerald-600 text-base" />
              <span>Dúvidas sobre a peça? Fale no WhatsApp (42) 99910-4224</span>
            </a>

            {/* Selos de Benefícios Confirmados */}
            <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-gray-600">
              <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-xl">
                <FaTruckFast className="text-[#8B1A4A] text-base shrink-0" />
                <span>Entrega rápida para todo Brasil</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-xl">
                <FaShieldHeart className="text-[#8B1A4A] text-base shrink-0" />
                <span>Modelagem pensada até o 56</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Guia de Medidas (Exemplo) */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <HiXMark className="text-2xl" />
            </button>

            <div className="flex items-center gap-2 text-[#8B1A4A] mb-2">
              <FaRulerCombined className="text-xl" />
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                Tabela de Medidas (Exemplo Demonstrativo)
              </h3>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              Tabela de referência para a linha feminina e plus size. Para medidas exatas desta peça específica, consulte nossa equipe de consultoria via WhatsApp.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5E6EC] text-[#8B1A4A] font-bold">
                    <th className="p-2.5 border-b">Tamanho</th>
                    <th className="p-2.5 border-b">Busto (cm)</th>
                    <th className="p-2.5 border-b">Cintura (cm)</th>
                    <th className="p-2.5 border-b">Quadril (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr><td className="p-2.5 font-bold">P (38)</td><td className="p-2.5">86 - 90</td><td className="p-2.5">68 - 72</td><td className="p-2.5">94 - 98</td></tr>
                  <tr><td className="p-2.5 font-bold">M (40-42)</td><td className="p-2.5">92 - 96</td><td className="p-2.5">74 - 78</td><td className="p-2.5">100 - 104</td></tr>
                  <tr><td className="p-2.5 font-bold">G (44)</td><td className="p-2.5">98 - 104</td><td className="p-2.5">80 - 86</td><td className="p-2.5">106 - 112</td></tr>
                  <tr><td className="p-2.5 font-bold">GG (46)</td><td className="p-2.5">106 - 112</td><td className="p-2.5">88 - 94</td><td className="p-2.5">114 - 120</td></tr>
                  <tr className="bg-pink-50/50"><td className="p-2.5 font-bold text-[#8B1A4A]">48 (G1)</td><td className="p-2.5">114 - 120</td><td className="p-2.5">96 - 102</td><td className="p-2.5">122 - 128</td></tr>
                  <tr className="bg-pink-50/50"><td className="p-2.5 font-bold text-[#8B1A4A]">50 (G2)</td><td className="p-2.5">122 - 128</td><td className="p-2.5">104 - 110</td><td className="p-2.5">130 - 136</td></tr>
                  <tr className="bg-pink-50/50"><td className="p-2.5 font-bold text-[#8B1A4A]">52 (G3)</td><td className="p-2.5">130 - 136</td><td className="p-2.5">112 - 118</td><td className="p-2.5">138 - 144</td></tr>
                  <tr className="bg-pink-50/50"><td className="p-2.5 font-bold text-[#8B1A4A]">54 (G4)</td><td className="p-2.5">138 - 144</td><td className="p-2.5">120 - 126</td><td className="p-2.5">146 - 152</td></tr>
                  <tr className="bg-pink-50/50"><td className="p-2.5 font-bold text-[#8B1A4A]">56 (G5)</td><td className="p-2.5">146 - 152</td><td className="p-2.5">128 - 134</td><td className="p-2.5">154 - 160</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(false)}
                className="bg-[#8B1A4A] text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#A83060]"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seção de Peças Relacionadas */}
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
              Você também pode gostar
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mt-1">
              Peças Relacionadas
            </h2>
          </div>
          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
