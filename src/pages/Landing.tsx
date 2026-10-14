import React from 'react';
import Banner from '../components/Banner';
import CategoriesSection from '../components/CategoriesSection';
import HomeCollectionSection from '../components/HomeCollectionSection';
import AboutSection from '../components/AboutSection';
import InstagramSection from '../components/InstagramSection';

export const Landing: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* 1. Hero: fundo vinho, texto branco, botão para /catalogo */}
      <Banner />

      {/* 2. Categorias: 4 cards com ícone e nome */}
      <CategoriesSection />

      {/* 3. Produtos em destaque (featured: true) */}
      <HomeCollectionSection />

      {/* 4. Sobre a boutique com info confirmada */}
      <AboutSection />

      {/* 5. Link Instagram */}
      <InstagramSection />
    </div>
  );
};

export default Landing;
