export interface Product {
  id: number;
  name: string;
  category: 'vestidos' | 'blusas' | 'calcas' | 'conjuntos';
  price: number;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  featured: boolean;
  isDemo: true;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;
  image: string;
}

export const categories: Category[] = [
  { 
    id: 'vestidos', 
    name: 'Vestidos', 
    icon: '👗',
    description: 'Modelos fluidos, elegantes e pensados para valorizar suas curvas em todas as ocasiões.',
    image: '/images/sections/cat_vestidos.jpg'
  },
  { 
    id: 'blusas', 
    name: 'Blusas', 
    icon: '👚',
    description: 'Blusas, camisas e croppeds com caimento leve, tecidos nobres e acabamentos delicados.',
    image: '/images/sections/cat_blusas.jpg'
  },
  { 
    id: 'calcas', 
    name: 'Calças', 
    icon: '👖',
    description: 'Calças em alfaiataria, jeans com elastano e pantalonas confortáveis até o tamanho 56.',
    image: '/images/sections/cat_calcas.jpg'
  },
  { 
    id: 'conjuntos', 
    name: 'Conjuntos', 
    icon: '✨',
    description: 'Conjuntos modernos, versáteis e práticos para compor produções sofisticadas.',
    image: '/images/sections/cat_conjuntos.jpg'
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Vestido Midi Curvas Elegance',
    category: 'vestidos',
    price: 189.90,
    colors: ['Rosa Floral', 'Azul Marinho', 'Preto'],
    sizes: ['44', '46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_1_1.jpg',
      '/images/catalog/prod_1_2.jpg'
    ],
    description: 'Vestido midi em tecido premium com caimento suave que abraça e valoriza as curvas. Decote elegante e modelagem fluida pensada para extremo conforto e sofisticação até o tamanho 56.',
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
      '/images/catalog/prod_2_1.jpg',
      '/images/catalog/prod_2_2.jpg'
    ],
    description: 'Chemise clássico com abotoamento frontal e faixa ajustável na cintura. Caimento impecável sem repuxar no busto, unindo versatilidade para o dia a dia e elegância para ocasiões especiais.',
    featured: true,
    isDemo: true
  },
  {
    id: 3,
    name: 'Vestido Longo Gala Estampa Exclusiva',
    category: 'vestidos',
    price: 249.90,
    colors: ['Estampa Dourada', 'Preto & Branco', 'Marsala'],
    sizes: ['44', '46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_3_1.jpg',
      '/images/catalog/prod_3_2.jpg'
    ],
    description: 'Vestido longo de festa com corte que alonga a silhueta e acabamento de alto padrão. Inspirado nos looks de destaque da boutique para celebrações marcantes.',
    featured: false,
    isDemo: true
  },
  {
    id: 4,
    name: 'Blusa Canelada Manga Bufante Delicadeza',
    category: 'blusas',
    price: 119.90,
    colors: ['Off White', 'Bordô', 'Lavanda'],
    sizes: ['G', 'GG', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_4_1.jpg',
      '/images/catalog/prod_4_2.jpg'
    ],
    description: 'Blusa em malha encorpada de toque super macio com mangas levemente bufantes estruturadas. Modelagem pensada para liberdade de movimento e elegância.',
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
      '/images/catalog/prod_5_1.jpg',
      '/images/catalog/prod_5_2.jpg'
    ],
    description: 'Camisa em viscose sarjada premium com caimento encorpado. Modelagem anatômica com fechamento sem abertura indesejada entre os botões.',
    featured: false,
    isDemo: true
  },
  {
    id: 6,
    name: 'Túnica Degradê Elegance Soltinha',
    category: 'blusas',
    price: 139.90,
    colors: ['Azul Degradê', 'Terracota', 'Preto'],
    sizes: ['44', '46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_6_1.jpg',
      '/images/catalog/prod_6_2.jpg'
    ],
    description: 'Túnica fluida com caimento assimétrico leve que valoriza a silhueta com frescor. Um dos looks de maior sucesso na vitrine da Estilo Boutique.',
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
      '/images/catalog/prod_7_1.jpg',
      '/images/catalog/prod_7_2.jpg'
    ],
    description: 'Calça pantalona com elástico anatômico na parte posterior do cós para ajuste perfeito sem apertar. Pregas frontais elegantes e bolsos laterais funcionais.',
    featured: true,
    isDemo: true
  },
  {
    id: 8,
    name: 'Calça Jeans Plus Confort com Elastano',
    category: 'calcas',
    price: 229.90,
    colors: ['Black Jeans', 'Jeans Médio', 'Jeans Escuro'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_8_1.jpg',
      '/images/catalog/prod_8_2.jpg'
    ],
    description: 'Jeans com alta elasticidade e tecnologia levanta-bumbum anatômica. Cós largo estruturado que não desce ao sentar e proporciona conforto absoluto durante todo o dia.',
    featured: false,
    isDemo: true
  },
  {
    id: 9,
    name: 'Calça Alfaiataria Casual Chic com Cordão',
    category: 'calcas',
    price: 179.90,
    colors: ['Verde Militar', 'Preto', 'Caramelo'],
    sizes: ['44', '46', '48', '50', '52', '54'],
    images: [
      '/images/catalog/prod_9_1.jpg',
      '/images/catalog/prod_9_2.jpg'
    ],
    description: 'Calça em tecido maleável estruturado com cós elástico e cordão de ajuste delicado. O equilíbrio perfeito entre casualidade e elegância.',
    featured: false,
    isDemo: true
  },
  {
    id: 10,
    name: 'Conjunto Alfaiataria Colete e Pantalona',
    category: 'conjuntos',
    price: 289.90,
    colors: ['Azul Noite', 'Bordô Estilo', 'Verde Oliva'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_10_1.jpg',
      '/images/catalog/prod_10_2.jpg'
    ],
    description: 'Conjunto completo composto por peça superior estruturada e pantalona de cintura alta. Tecido encorpado que confere presença, autoridade e elegância.',
    featured: true,
    isDemo: true
  },
  {
    id: 11,
    name: 'Conjunto Casual Confort Blusa e Calça',
    category: 'conjuntos',
    price: 239.90,
    colors: ['Cinza Mescla', 'Preto', 'Vinho'],
    sizes: ['44', '46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_11_1.jpg',
      '/images/catalog/prod_11_2.jpg'
    ],
    description: 'Conjunto loungewear chic em malha encorpada e macia. Extremamente confortável para trabalho ou viagens, mantendo o visual impecável.',
    featured: false,
    isDemo: true
  },
  {
    id: 12,
    name: 'Look Elegance Vestido Midi Festa Curvas',
    category: 'conjuntos',
    price: 279.90,
    colors: ['Fúcsia Vibrante', 'Preto Clássico', 'Terracota'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_12_1.jpg',
      '/images/catalog/prod_12_2.jpg'
    ],
    description: 'Composição de look requintado com caimento que valoriza a silhueta plus size com glamour e personalidade para eventos.',
    featured: true,
    isDemo: true
  }
];
