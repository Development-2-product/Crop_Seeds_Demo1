export interface Category {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  cropCount: number;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'cereals',
    name: 'Cereals & Grains',
    slug: 'cereals',
    shortName: 'Cereals',
    description: 'Staple grain crops that form the foundation of global food systems.',
    longDescription:
      'Cereal crops are grasses cultivated for their edible grains — the primary source of caloric energy for much of the world. Our cereal seed portfolio covers the most widely cultivated grains across diverse climates and soil types.',
    image: 'https://images.pexels.com/photos/7891849/pexels-photo-7891849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Wheat',
    cropCount: 5,
    color: 'amber',
  },
  {
    id: 'millets',
    name: 'Millets',
    slug: 'millets',
    shortName: 'Millets',
    description: 'Hardy, climate-resilient small grains for sustainable cultivation.',
    longDescription:
      'Millets are a group of small-seeded grasses grown in semi-arid regions with limited rainfall. They are nutritionally dense, drought-tolerant, and increasingly relevant for climate-resilient agriculture.',
    image: 'https://images.pexels.com/photos/16977456/pexels-photo-16977456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Sprout',
    cropCount: 4,
    color: 'lime',
  },
  {
    id: 'pulses',
    name: 'Pulses',
    slug: 'pulses',
    shortName: 'Pulses',
    description: 'Leguminous crops that enrich soil and provide essential protein.',
    longDescription:
      'Pulses are leguminous crops harvested for their dry seeds. They fix atmospheric nitrogen, improving soil fertility naturally, and serve as a primary plant-based protein source across global diets.',
    image: 'https://images.pexels.com/photos/36683864/pexels-photo-36683864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Leaf',
    cropCount: 4,
    color: 'green',
  },
  {
    id: 'oilseeds',
    name: 'Oilseeds',
    slug: 'oilseeds',
    shortName: 'Oilseeds',
    description: 'Crops cultivated for oil-rich seeds used in food and industry.',
    longDescription:
      'Oilseed crops are grown primarily for their oil-bearing seeds. The extracted oil is used in cooking, food processing, and industrial applications, while the residual meal serves as high-protein animal feed.',
    image: 'https://images.pexels.com/photos/29278365/pexels-photo-29278365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Sun',
    cropCount: 5,
    color: 'yellow',
  },
  {
    id: 'fiber',
    name: 'Fiber Crops',
    slug: 'fiber',
    shortName: 'Fiber',
    description: 'Crops grown for natural fibers used in textiles and industry.',
    longDescription:
      'Fiber crops are cultivated for their fibrous content, which is extracted and processed into textiles, cordage, and industrial materials. These crops have been central to human material culture for millennia.',
    image: 'https://images.pexels.com/photos/13924870/pexels-photo-13924870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Layers',
    cropCount: 2,
    color: 'slate',
  },
  {
    id: 'forage',
    name: 'Forage Crops',
    slug: 'forage',
    shortName: 'Forage',
    description: 'Cultivated for livestock feed and sustainable pasture management.',
    longDescription:
      'Forage crops are grown primarily for livestock consumption, either through grazing or as harvested fodder. They support dairy and meat production while contributing to soil cover and erosion control.',
    image: 'https://images.pexels.com/photos/33117776/pexels-photo-33117776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Grass',
    cropCount: 3,
    color: 'emerald',
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const getCategoryById = (id: string): Category | undefined =>
  categories.find((c) => c.id === id);
