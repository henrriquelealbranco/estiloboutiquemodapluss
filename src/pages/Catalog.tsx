import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HiAdjustmentsHorizontal, HiXMark, HiMagnifyingGlass } from 'react-icons/hi2';
import { products, categories, Product } from '../data/products';
import ProductGrid from '../components/ProductGrid';

const ALL_SIZES = ['46', '48', '50', '52', '54', '56'];

export const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('categoria') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('default');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sincroniza query param de categoria com estado interno
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId) {
      setSearchParams({ categoria: catId });
    } else {
      setSearchParams({});
    }
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory('');
    setSelectedSizes([]);
    setSearchQuery('');
    setSortOption('default');
    setSearchParams({});
  };

  // Filtragem dos produtos
  const filteredProducts = useMemo(() => {
    let result: Product[] = [...products];

    // Categoria
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Busca textual
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.colors.some((c) => c.toLowerCase().includes(q))
      );
    }

    // Tamanhos
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        selectedSizes.some((s) => p.sizes.includes(s))
      );
    }

    // Ordenação
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, selectedSizes, sortOption]);

  const activeFiltersCount =
    (selectedCategory ? 1 : 0) +
    selectedSizes.length +
    (searchQuery.trim() ? 1 : 0) +
    (sortOption !== 'default' ? 1 : 0);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-8">
      {/* Banner de Aviso Demonstrativo Discreto */}
      <div className="bg-[#FAF7F5] border border-gray-200 text-gray-800 rounded-xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="text-xl mt-0.5">ℹ️</span>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm text-gray-900">
              Catálogo Demonstrativo • Moda Feminina & Plus Size
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
              Peças e valores demonstrativos para simulação de navegação e compra. Dúvidas sobre o estoque real da loja podem ser consultadas no WhatsApp.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/5542999104224"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors text-center"
        >
          WhatsApp da Loja
        </a>
      </div>

      {/* Cabeçalho da Página */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8B1A4A]">
            Moda Feminina & Plus Size
          </span>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mt-0.5">
            Catálogo Geral
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Mostrando {filteredProducts.length} de {products.length} peças
          </p>
        </div>

        {/* Busca rápida e ordenação */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome ou cor..."
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#8B1A4A] focus:border-[#8B1A4A]"
            />
            <HiMagnifyingGlass className="absolute left-3 top-2.5 text-gray-400 text-base" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <HiXMark className="text-sm" />
              </button>
            )}
          </div>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="py-2 px-3 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#8B1A4A]"
          >
            <option value="default">Ordenar: Padrão</option>
            <option value="featured">Destaques</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
          </select>

          {/* Botão de filtros mobile */}
          <button
            type="button"
            onClick={() => setIsMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-xs font-medium transition-colors"
          >
            <HiAdjustmentsHorizontal className="text-base" />
            <span>Filtros</span>
            {activeFiltersCount > 0 && (
              <span className="bg-[#8B1A4A] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Layout com Sidebar e Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Sidebar Desktop */}
        <aside className="hidden lg:block bg-white p-5 rounded-xl border border-gray-200 space-y-5 sticky top-24">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="font-heading font-bold text-gray-900 text-base flex items-center gap-1.5">
              <HiAdjustmentsHorizontal className="text-[#8B1A4A]" />
              Filtros
            </h3>
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs text-[#8B1A4A] hover:underline font-medium"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {/* Filtro por Categoria */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2.5">
              Categorias
            </h4>
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => handleCategoryChange('')}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-between ${
                  selectedCategory === ''
                    ? 'bg-[#FAF7F5] text-[#8B1A4A] font-semibold border-l-2 border-[#8B1A4A]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>Todas</span>
                <span className="text-xs text-gray-400">{products.length}</span>
              </button>
              {categories.map((cat) => {
                const count = products.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-[#FAF7F5] text-[#8B1A4A] font-semibold border-l-2 border-[#8B1A4A]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-gray-400">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtro por Tamanho */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2.5">
              Tamanhos Cadastrados
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {ALL_SIZES.map((size) => {
                const isSelected = selectedSizes.includes(size);
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeToggle(size)}
                    className={`min-w-9 px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-[#8B1A4A] text-white border-[#8B1A4A]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Modal de Filtros Mobile */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
            <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="font-heading font-bold text-gray-900 text-base">
                    Filtrar Catálogo
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <HiXMark className="text-2xl" />
                  </button>
                </div>

                {/* Categorias Mobile */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Categorias
                  </h4>
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => handleCategoryChange('')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs ${
                        selectedCategory === ''
                          ? 'bg-[#FAF7F5] text-[#8B1A4A] font-bold'
                          : 'text-gray-700'
                      }`}
                    >
                      Todas as Peças
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between ${
                          selectedCategory === cat.id
                            ? 'bg-[#FAF7F5] text-[#8B1A4A] font-bold'
                            : 'text-gray-700'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-[11px] text-gray-400">
                          {products.filter((p) => p.category === cat.id).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tamanhos Mobile */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Tamanhos
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {ALL_SIZES.map((size) => {
                      const isSelected = selectedSizes.includes(size);
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleSizeToggle(size)}
                          className={`min-w-9 px-2.5 py-1 text-xs font-semibold rounded-lg border ${
                            isSelected
                              ? 'bg-[#8B1A4A] text-white border-[#8B1A4A]'
                              : 'bg-white text-gray-700 border-gray-300'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex gap-2">
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="flex-1 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg text-xs"
                >
                  Limpar
                </button>
                <button
                  type="button"
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="flex-1 py-2 bg-[#8B1A4A] text-white font-medium rounded-lg text-xs"
                >
                  Ver Peças
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Grid Principal dos Produtos */}
        <div className="lg:col-span-3">
          {/* Tags de filtros ativos */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              <span className="text-xs text-gray-500">Filtros:</span>
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 bg-[#FAF7F5] text-[#8B1A4A] text-xs font-medium px-2 py-0.5 rounded border border-gray-200">
                  {categories.find((c) => c.id === selectedCategory)?.name || selectedCategory}
                  <button type="button" onClick={() => handleCategoryChange('')}>
                    <HiXMark className="text-sm" />
                  </button>
                </span>
              )}
              {selectedSizes.map((size) => (
                <span
                  key={size}
                  className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded"
                >
                  Tam: {size}
                  <button type="button" onClick={() => handleSizeToggle(size)}>
                    <HiXMark className="text-sm" />
                  </button>
                </span>
              ))}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">
                  &ldquo;{searchQuery}&rdquo;
                  <button type="button" onClick={() => setSearchQuery('')}>
                    <HiXMark className="text-sm" />
                  </button>
                </span>
              )}
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs text-[#8B1A4A] hover:underline font-medium ml-1"
              >
                Limpar todos
              </button>
            </div>
          )}

          {/* Renderização do Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
