import React from 'react';
import ProductItem from './ProductItem';
import { Product } from '../data/products';

interface ProductGridProps {
  products?: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products = [] }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-8 my-6">
        <p className="text-4xl mb-3">👗</p>
        <h3 className="font-heading text-xl font-semibold text-gray-800">
          Nenhum produto encontrado
        </h3>
        <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
          Tente ajustar os filtros selecionados ou buscar por outro termo.
        </p>
      </div>
    );
  }

  return (
    <div
      id="gridTop"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default React.memo(ProductGrid);
