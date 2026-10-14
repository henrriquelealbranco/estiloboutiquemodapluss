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
    description: 'Vestidos midi e longos com caimento pensado para moda feminina e plus size.',
    image: '/images/sections/cat_vestidos.jpg'
  },
  { 
    id: 'blusas', 
    name: 'Blusas', 
    icon: '👚',
    description: 'Blusas, camisas e túnicas versáteis para o dia a dia e momentos especiais.',
    image: '/images/sections/cat_blusas.jpg'
  },
  { 
    id: 'calcas', 
    name: 'Calças', 
    icon: '👖',
    description: 'Modelagens em alfaiataria, jeans com elastano e cortes retos confortáveis.',
    image: '/images/sections/cat_calcas.jpg'
  },
  { 
    id: 'conjuntos', 
    name: 'Conjuntos', 
    icon: '✨',
    description: 'Peças coordenadas práticas e elegantes para compor looks completos.',
    image: '/images/sections/cat_conjuntos.jpg'
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Vestido Midi Floral',
    category: 'vestidos',
    price: 189.90,
    colors: ['Azul Floral', 'Rosa Floral', 'Preto'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_1_1.jpg',
      '/images/catalog/prod_1_2.jpg'
    ],
    description: 'Vestido midi com estampa floral delicada, decote transpassado em V e faixa para amarração na cintura. Modelagem fluida e confortável.',
    featured: true,
    isDemo: true
  },
  {
    id: 2,
    name: 'Vestido Chemise Manga 3/4',
    category: 'vestidos',
    price: 219.90,
    colors: ['Verde Oliva', 'Terracota', 'Preto'],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/catalog/prod_2_1.jpg',
      '/images/catalog/prod_2_2.jpg'
    ],
    description: 'Chemise clássico com abotoamento frontal funcional, gola colarinho e cinto de mesmo tecido para ajuste suave na cintura.',
    featured: true,
    isDemo: true
  },
  {
    id: 3,
    name: 'Vestido Longo Gala Marsala',
    category: 'vestidos',
    price: 249.90,
    colors: ['Marsala', 'Azul Marinho', 'Preto'],
    sizes: ['48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_3_1.jpg',
      '/images/catalog/prod_3_2.jpg'
    ],
    description: 'Vestido longo em tom marsala para ocasiões especiais e festas, com caimento elegante que alonga a silhueta.',
    featured: false,
    isDemo: true
  },
  {
    id: 4,
    name: 'Blusa Canelada Manga Bufante',
    category: 'blusas',
    price: 119.90,
    colors: ['Off White', 'Bordô', 'Preto'],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/catalog/prod_4_1.jpg',
      '/images/catalog/prod_4_2.jpg'
    ],
    description: 'Blusa canelada com decote quadrado clássico e mangas curtas sutilmente bufantes. Combina facilmente com alfaiataria ou jeans.',
    featured: true,
    isDemo: true
  },
  {
    id: 5,
    name: 'Camisa Alfaiataria Viscose',
    category: 'blusas',
    price: 159.90,
    colors: ['Branco', 'Vinho', 'Nude'],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/catalog/prod_5_1.jpg',
      '/images/catalog/prod_5_2.jpg'
    ],
    description: 'Camisa em viscose de caimento alinhado, colarinho estruturado e punhos com abotoamento. Modelo versátil para trabalho ou passeio.',
    featured: false,
    isDemo: true
  },
  {
    id: 6,
    name: 'Túnica Fluida Estampada',
    category: 'blusas',
    price: 139.90,
    colors: ['Azul Estampado', 'Terracota', 'Verde'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_6_1.jpg',
      '/images/catalog/prod_6_2.jpg'
    ],
    description: 'Túnica ampla com estampa geométrica contemporânea, mangas 3/4 e caimento solto que traz liberdade e praticidade aos looks.',
    featured: false,
    isDemo: true
  },
  {
    id: 7,
    name: 'Calça Pantalona Alfaiataria',
    category: 'calcas',
    price: 199.90,
    colors: ['Caramelo', 'Preto', 'Azul Marinho'],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/catalog/prod_7_1.jpg',
      '/images/catalog/prod_7_2.jpg'
    ],
    description: 'Calça pantalona de cintura alta com corte reto e bolsos embutidos. Caimento fluido ideal para compor produções elegantes.',
    featured: true,
    isDemo: true
  },
  {
    id: 8,
    name: 'Calça Jeans Plus Confort',
    category: 'calcas',
    price: 229.90,
    colors: ['Jeans Médio', 'Black Jeans'],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      '/images/catalog/prod_8_1.jpg',
      '/images/catalog/prod_8_2.jpg'
    ],
    description: 'Calça jeans com percentual de elastano, modelagem que abraça o quadril e cós estruturado que se ajusta confortavelmente ao corpo.',
    featured: false,
    isDemo: true
  },
  {
    id: 9,
    name: 'Calça Jogger Crepe',
    category: 'calcas',
    price: 179.90,
    colors: ['Verde Militar', 'Preto', 'Areia'],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/catalog/prod_9_1.jpg',
      '/images/catalog/prod_9_2.jpg'
    ],
    description: 'Calça modelo jogger em crepe leve com elástico e amarração na cintura, punhos na barra e bolsos laterais funcionais.',
    featured: false,
    isDemo: true
  },
  {
    id: 10,
    name: 'Conjunto Colete e Calça Alfaiataria',
    category: 'conjuntos',
    price: 289.90,
    colors: ['Terracota', 'Preto', 'Vinho'],
    sizes: ['48', '50', '52', '54'],
    images: [
      '/images/catalog/prod_10_1.jpg',
      '/images/catalog/prod_10_2.jpg'
    ],
    description: 'Conjunto de alfaiataria contemporânea composto por colete alongado de corte reto e calça social coordenada com pregas.',
    featured: true,
    isDemo: true
  },
  {
    id: 11,
    name: 'Conjunto Casual Moletinho Chic',
    category: 'conjuntos',
    price: 239.90,
    colors: ['Verde Sálvia', 'Mescla', 'Preto'],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/catalog/prod_11_1.jpg',
      '/images/catalog/prod_11_2.jpg'
    ],
    description: 'Conjunto casual em malha estruturada e macia, com blusa de manga curta e calça reta com elástico e amarração no cós.',
    featured: false,
    isDemo: true
  },
  {
    id: 12,
    name: 'Conjunto Saia Plissada e Blusa',
    category: 'conjuntos',
    price: 279.90,
    colors: ['Vinho', 'Preto'],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/catalog/prod_12_1.jpg',
      '/images/catalog/prod_12_2.jpg'
    ],
    description: 'Conjunto de festa composto por blusa de manga longa com decote canoa e saia midi plissada em tom vinho sofisticado.',
    featured: true,
    isDemo: true
  }
];
