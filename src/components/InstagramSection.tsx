import React from 'react';
import { FaInstagram } from 'react-icons/fa6';

const instagramPosts = [
  {
    id: 1,
    image: '/images/sections/ig_post_1.jpg',
    caption: 'Vestidos de festa e gala exclusivos para momentos inesquecíveis ✨',
  },
  {
    id: 2,
    image: '/images/sections/ig_post_2.jpg',
    caption: 'Camisa branca clássica e caimento impecável na nossa loja em Guarapuava 💖',
  },
  {
    id: 3,
    image: '/images/sections/ig_post_3.jpg',
    caption: 'Túnicas e vestidos fluidos para valorizar suas curvas com liberdade 🌸',
  },
  {
    id: 4,
    image: '/images/sections/ig_post_4.jpg',
    caption: 'Moda feminina e plus size feita com amor para vestir do P ao 56 👗',
  },
];

export const InstagramSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mt-24">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#8B1A4A]">
          Siga nosso dia a dia
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900">
          No Instagram @estiloboutiquemodapluss
        </h2>
        <p className="text-sm text-gray-500">
          Inspirações de looks, novidades e provadores reais toda semana diretamente de Guarapuava.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href="https://www.instagram.com/estiloboutiquemodapluss/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 block"
          >
            <img
              src={post.image}
              alt="Post Instagram Estilo Boutique"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#8B1A4A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
              <FaInstagram className="text-3xl mb-2" />
              <p className="text-xs line-clamp-3 font-medium">{post.caption}</p>
              <span className="mt-3 text-[11px] underline tracking-wider uppercase font-semibold">
                Ver no perfil
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.instagram.com/estiloboutiquemodapluss/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E1306C] to-[#8B1A4A] hover:from-[#c1275d] hover:to-[#74153e] text-white font-semibold text-sm px-7 py-3 rounded-full shadow-md transition-all duration-300"
        >
          <FaInstagram className="text-lg" />
          <span>Seguir @estiloboutiquemodapluss</span>
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
