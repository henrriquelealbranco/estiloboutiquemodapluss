import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HiHeart, HiOutlineHeart, HiOutlineShoppingBag, HiArrowLeft, HiXMark } from 'react-icons/hi2';
import { FaWhatsapp, FaRulerCombined } from 'react-icons/fa6';
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
      setSelectedSize(''); // Requer que o usuário selecione explicitamente o tamanho
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product, id]);

  if (!product) {
    return (
      <div className="max-w-screen-md mx-auto px-4 py-20 text-center">
        <h2 className="font-heading text-2xl font-bold text-gray-800 mb-3">
          Produto não encontrado
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          O produto que você procura não está disponível no catálogo demonstrativo.
        </p>
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 bg-[#8B1A4A] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#72123b] transition-colors"
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
      toast.error('Por favor, selecione um tamanho antes de adicionar à sacola.');
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

    toast.success(`${quantity}x ${product.name} (Tam: ${selectedSize}) adicionado à sacola!`);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    if (!isFav) {
      toast.success('Adicionado aos favoritos!');
    } else {
      toast('Removido dos favoritos', { icon: '🤍' });
    }
  };

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white p-5 sm:p-8 rounded-2xl border border-gray-200">
        {/* Galeria de Imagens (6 cols) */}
        <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4">
          {/* Miniaturas */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-24 sm:w-20 sm:h-28 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  (selectedImage || product.images[0]) === img
                    ? 'border-[#8B1A4A]'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} foto ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>

          {/* Imagem Principal 3:4 */}
          <div className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
            <img
              src={selectedImage || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Informações e Detalhes da Compra (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A] bg-[#FAF7F5] px-2.5 py-1 rounded">
                {product.category}
              </span>
              <span className="text-xs text-gray-400 font-medium">Ref: EB-{product.id}</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Preço demonstrativo sem parcelamento fictício */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-[#8B1A4A]">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-gray-400 font-normal">
                (Preço demonstrativo para simulação)
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
              {product.description}
            </p>

            {/* Seleção de Cor */}
            <div className="pt-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">
                Cor: <span className="font-normal text-gray-500">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                      selectedColor === color
                        ? 'bg-[#8B1A4A] text-white border-[#8B1A4A]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
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
                <label className="text-xs uppercase tracking-wider font-semibold text-gray-700">
                  Tamanho: <span className="font-normal text-gray-500">{selectedSize || 'Selecione uma opção'}</span>
                </label>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1 text-xs text-[#8B1A4A] font-medium hover:underline"
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
                    className={`min-w-10 h-10 px-3 text-xs font-semibold rounded-lg border transition-all flex items-center justify-center ${
                      selectedSize === size
                        ? 'bg-[#8B1A4A] text-white border-[#8B1A4A]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-[11px] text-amber-700 mt-1.5">
                  * Escolha o tamanho desejado para adicionar à sacola.
                </p>
              )}
            </div>

            {/* Quantidade */}
            <div className="pt-2">
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">
                Quantidade
              </label>
              <div className="inline-flex items-center border border-gray-300 rounded-lg bg-gray-50 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center text-xs font-bold text-gray-800">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 rounded bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-[#8B1A4A] hover:bg-[#72123b] text-white font-medium py-3.5 px-6 rounded-lg transition-colors text-sm"
              >
                <HiOutlineShoppingBag className="text-lg" />
                <span>Adicionar à Sacola</span>
              </button>

              <button
                type="button"
                onClick={handleToggleWishlist}
                aria-label="Favoritar peça"
                className={`p-3.5 rounded-lg border transition-all flex items-center justify-center ${
                  isFav
                    ? 'bg-rose-50 border-rose-200 text-[#8B1A4A]'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-[#8B1A4A]'
                }`}
                title="Favoritar"
              >
                {isFav ? <HiHeart className="text-xl text-[#8B1A4A]" /> : <HiOutlineHeart className="text-xl" />}
              </button>
            </div>

            <a
              href="https://wa.me/5542999104224"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#FAF7F5] border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition-colors text-xs"
            >
              <FaWhatsapp className="text-emerald-600 text-base" />
              <span>Dúvidas sobre o produto? Fale com a boutique no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal Guia de Medidas (Exemplo) */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsSizeGuideOpen(false)}
              className="p-1 text-gray-400 hover:text-gray-600 absolute top-4 right-4"
            >
              <HiXMark className="text-2xl" />
            </button>

            <div className="flex items-center gap-2 text-[#8B1A4A] mb-2">
              <FaRulerCombined className="text-lg" />
              <h3 className="font-heading font-bold text-lg text-gray-900">
                Guia de Medidas (Exemplo Ilustrativo)
              </h3>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              Medidas referenciais em centímetros para fins demonstrativos. Para medidas exatas da peça física, consulte a boutique via WhatsApp.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF7F5] text-gray-900 font-semibold border-b border-gray-200">
                    <th className="p-2">Tamanho</th>
                    <th className="p-2">Busto (cm)</th>
                    <th className="p-2">Cintura (cm)</th>
                    <th className="p-2">Quadril (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr><td className="p-2 font-semibold">46</td><td className="p-2">106 - 112</td><td className="p-2">88 - 94</td><td className="p-2">114 - 120</td></tr>
                  <tr><td className="p-2 font-semibold">48</td><td className="p-2">114 - 120</td><td className="p-2">96 - 102</td><td className="p-2">122 - 128</td></tr>
                  <tr><td className="p-2 font-semibold">50</td><td className="p-2">122 - 128</td><td className="p-2">104 - 110</td><td className="p-2">130 - 136</td></tr>
                  <tr><td className="p-2 font-semibold">52</td><td className="p-2">130 - 136</td><td className="p-2">112 - 118</td><td className="p-2">138 - 144</td></tr>
                  <tr><td className="p-2 font-semibold">54</td><td className="p-2">138 - 144</td><td className="p-2">120 - 126</td><td className="p-2">146 - 152</td></tr>
                  <tr><td className="p-2 font-semibold">56</td><td className="p-2">146 - 152</td><td className="p-2">128 - 134</td><td className="p-2">154 - 160</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(false)}
                className="bg-[#8B1A4A] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#72123b]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seção de Peças Relacionadas */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
              Veja Também
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mt-1">
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
