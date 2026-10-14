export const categories = [
  { 
    id: 'vestidos', 
    name: 'Vestidos', 
    icon: '👗',
    description: 'Modelos fluidos, elegantes e pensados para valorizar suas curvas em todas as ocasiões.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
  },
  { 
    id: 'blusas', 
    name: 'Blusas', 
    icon: '👚',
    description: 'Blusas, camisas e croppeds com caimento leve, tecidos nobres e acabamentos delicados.',
    image: 'https://images.unsplash.com/photo-1566479153369-5c7ce9ca7f3b?w=800&q=80'
  },
  { 
    id: 'calcas', 
    name: 'Calças', 
    icon: '👖',
    description: 'Calças em alfaiataria, jeans com elastano e pantalonas confortáveis até o tamanho 56.',
    image: 'https://images.unsplash.com/photo-1611558709798-a48e0ece5a7b?w=800&q=80'
  },
  { 
    id: 'conjuntos', 
    name: 'Conjuntos', 
    icon: '✨',
    description: 'Conjuntos modernos, versáteis e práticos para compor produções sofisticadas.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80'
  },
];

export const products = [
  {
    id: 1,
    name: 'Vestido Floral Midi Curvas Elegance',
    category: 'vestidos',
    price: 189.90,
    colors: ['Rosa Floral', 'Azul Marinho', 'Preto'],
    sizes: ['44', '46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80'
    ],
    description: 'Vestido midi floral com caimento suave que valoriza as curvas. Tecido leve e confortável, decote em V sutil e manga delicada. Perfeito para o dia a dia ou ocasiões especiais em Guarapuava.',
    featured: true,
    isDemo: true
  },
  {
    id: 2,
    name: 'Vestido Chemise Casual Conforto',
    category: 'vestidos',
    price: 219.90,
    colors: ['Verde Oliva', 'Terracota', 'Preto'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
    ],
    description: 'Chemise clássico com abotoamento frontal e faixa na cintura para ajuste personalizado. Caimento impecável que une sofisticação e conforto.',
    featured: true,
    isDemo: true
  },
  {
    id: 3,
    name: 'Vestido Longo Estampa Tropical Vibrante',
    category: 'vestidos',
    price: 249.90,
    colors: ['Estampa Tropical', 'Fundo Marsala'],
    sizes: ['44', '46', '48', '50', '52', '54'],
    images: [
      'https://images.unsplash.com/photo-1502716119720-816cb7be39c9?w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
    ],
    description: 'Vestido longo em viscose premium com fendas laterais discretas. Estampa exclusiva, caimento soltinho e frescor para dias ensolarados.',
    featured: false,
    isDemo: true
  },
  {
    id: 4,
    name: 'Blusa Canelada Manga Bufante Delicadeza',
    category: 'blusas',
    price: 119.90,
    colors: ['Off White', 'Bordô', 'Lavanda'],
    sizes: ['P', 'M', 'G', 'GG', 'G1', 'G2', 'G3'],
    images: [
      'https://images.unsplash.com/photo-1566479153369-5c7ce9ca7f3b?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80'
    ],
    description: 'Blusa em malha canelada de toque macio com mangas levemente bufantes em tecido estruturado. Conforto e elegância para composições versáteis.',
    featured: true,
    isDemo: true
  },
  {
    id: 5,
    name: 'Camisa Alfaiataria Viscose Plus',
    category: 'blusas',
    price: 159.90,
    colors: ['Branco Neve', 'Vinho Estilo', 'Nude'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1566479153369-5c7ce9ca7f3b?w=800&q=80'
    ],
    description: 'Camisa em viscose sarjada com caimento encorpado e modelagem pensada para o biotipo plus size, sem repuxar no busto.',
    featured: false,
    isDemo: true
  },
  {
    id: 6,
    name: 'Blusa Túnica Gola Padre Soltinha',
    category: 'blusas',
    price: 139.90,
    colors: ['Azul Celeste', 'Bordô', 'Preto'],
    sizes: ['44', '46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1525450824786-227cbef70703?w=800&q=80',
      'https://images.unsplash.com/photo-1566479153369-5c7ce9ca7f3b?w=800&q=80'
    ],
    description: 'Túnica com fendas laterais e decote padre em V. Comprimento ideal que alonga a silhueta com extrema leveza e conforto.',
    featured: false,
    isDemo: true
  },
  {
    id: 7,
    name: 'Calça Pantalona Cintura Alta Alfaiataria',
    category: 'calcas',
    price: 199.90,
    colors: ['Preto Clássico', 'Areia', 'Bordô'],
    sizes: ['44', '46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1611558709798-a48e0ece5a7b?w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027bc851?w=800&q=80'
    ],
    description: 'Calça pantalona com elástico anatômico traseiro no cós para ajuste perfeito sem apertar. Pregas frontais elegantes e bolsos laterais funcionais.',
    featured: true,
    isDemo: true
  },
  {
    id: 8,
    name: 'Calça Jeans Plus Confort com Elastano',
    category: 'calcas',
    price: 229.90,
    colors: ['Jeans Médio', 'Jeans Escuro', 'Black Jeans'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027bc851?w=800&q=80',
      'https://images.unsplash.com/photo-1611558709798-a48e0ece5a7b?w=800&q=80'
    ],
    description: 'Jeans com alto teor de elastano e modelagem levanta-bumbum com cós anatômico largo. Conforto total para o dia todo com caimento impecável.',
    featured: false,
    isDemo: true
  },
  {
    id: 9,
    name: 'Calça Jogger Crepe Chic com Cordão',
    category: 'calcas',
    price: 179.90,
    colors: ['Verde Militar', 'Preto', 'Caramelo'],
    sizes: ['44', '46', '48', '50', '52', '54'],
    images: [
      'https://images.unsplash.com/photo-1485518882989-dc1bc5d8f7c0?w=800&q=80',
      'https://images.unsplash.com/photo-1611558709798-a48e0ece5a7b?w=800&q=80'
    ],
    description: 'Calça jogger em crepe estruturado com punho suave no tornozelo e amarração na cintura. O match perfeito entre estilo casual e sofisticado.',
    featured: false,
    isDemo: true
  },
  {
    id: 10,
    name: 'Conjunto Alfaiataria Cropped e Pantalona',
    category: 'conjuntos',
    price: 289.90,
    colors: ['Rosa Quartz', 'Bordô Estilo', 'Verde Oliva'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
      'https://images.unsplash.com/photo-1550639524-a0a96c6a0d82?w=800&q=80'
    ],
    description: 'Conjunto completo composto por blazerzinho cropped e pantalona de cintura alta. Tecido alfaiataria premium com toque aveludado e visual poderoso.',
    featured: true,
    isDemo: true
  },
  {
    id: 11,
    name: 'Conjunto Casual Canelado Blusa e Calça',
    category: 'conjuntos',
    price: 239.90,
    colors: ['Cinza Mescla', 'Preto', 'Vinho'],
    sizes: ['44', '46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1550639524-a0a96c6a0d82?w=800&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80'
    ],
    description: 'Conjunto loungewear chic em malha canelada encorpada. Super quentinho e aconchegante, ideal para passeios e trabalho em dias amenos.',
    featured: false,
    isDemo: true
  },
  {
    id: 12,
    name: 'Look Elegance Blusa Seda e Saia Midi',
    category: 'conjuntos',
    price: 279.90,
    colors: ['Terracota & Areia', 'Preto & Fúcsia'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027bc851?w=800&q=80'
    ],
    description: 'Composição de look completo com blusa fluida acetinada e saia midi evasê com cós elástico anatômico. Sofisticação imediata para eventos e celebrações.',
    featured: true,
    isDemo: true
  }
];
