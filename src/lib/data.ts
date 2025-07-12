export type JunkCategory = {
  name: string;
  slug: string;
  image: string;
  description: string;
  subCategories?: JunkCategory[];
  aiHint: string;
};

export const JUNK_CATEGORIES: JunkCategory[] = [
  {
    name: 'Metals',
    slug: 'metals',
    image: 'https://placehold.co/400x300.png',
    description: 'Ferrous and non-ferrous metals.',
    aiHint: 'scrap metal',
    subCategories: [
      { name: 'Aluminum', slug: 'aluminum', image: 'https://placehold.co/400x300.png', description: 'Cans, foil, and more.', aiHint: 'aluminum cans' },
      { name: 'Steel', slug: 'steel', image: 'https://placehold.co/400x300.png', description: 'Appliances, car parts.', aiHint: 'steel beams' },
      { name: 'Copper', slug: 'copper', image: 'https://placehold.co/400x300.png', description: 'Pipes and wiring.', aiHint: 'copper wire' },
    ],
  },
  {
    name: 'Paper',
    slug: 'paper',
    image: 'https://placehold.co/400x300.png',
    description: 'All types of paper products.',
    aiHint: 'stacked paper',
    subCategories: [
      { name: 'Cardboard', slug: 'cardboard', image: 'https://placehold.co/400x300.png', description: 'Boxes and packaging.', aiHint: 'cardboard boxes' },
      { name: 'Newspaper', slug: 'newspaper', image: 'https://placehold.co/400x300.png', description: 'Daily and weekly papers.', aiHint: 'newspapers pile' },
    ],
  },
  {
    name: 'Plastics',
    slug: 'plastics',
    image: 'https://placehold.co/400x300.png',
    description: 'Various types of plastic materials.',
    aiHint: 'plastic bottles',
    subCategories: [
        { name: 'PET Bottles', slug: 'pet-bottles', image: 'https://placehold.co/400x300.png', description: 'Soda and water bottles.', aiHint: 'plastic bottles' },
        { name: 'HDPE', slug: 'hdpe', image: 'https://placehold.co/400x300.png', description: 'Milk jugs, detergent bottles.', aiHint: 'plastic jugs' },
    ]
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://placehold.co/400x300.png',
    description: 'E-waste and electronic components.',
    aiHint: 'electronic waste',
  },
    {
    name: 'Glass',
    slug: 'glass',
    image: 'https://placehold.co/400x300.png',
    description: 'Bottles, jars, and other glass items.',
    aiHint: 'glass bottles'
  },
  {
    name: 'Textiles',
    slug: 'textiles',
    image: 'https://placehold.co/400x300.png',
    description: 'Old clothing and fabric scraps.',
    aiHint: 'fabric scraps'
  },
];

export const LIVE_PRICES = [
  { category: 'Aluminum', price: 0.55, unit: 'per lb', change: 0.02 },
  { category: 'Steel', price: 0.10, unit: 'per lb', change: -0.01 },
  { category: 'Copper', price: 3.50, unit: 'per lb', change: 0.15 },
  { category: 'Cardboard', price: 40.00, unit: 'per ton', change: 1.50 },
  { category: 'Newspaper', price: 25.00, unit: 'per ton', change: 0.50 },
  { category: 'PET Bottles', price: 0.20, unit: 'per lb', change: 0.01 },
  { category: 'Glass', price: 10.00, unit: 'per ton', change: 0.00 },
  { category: 'E-Waste', price: 0.30, unit: 'per lb', change: -0.05 },
];

export const DEALERS = [
  {
    name: 'GreenCycle Scrapyard',
    address: '123 Recycle Rd, Greenville, 12345',
    phone: '555-123-4567',
    hours: 'Mon-Fri: 8am - 5pm',
  },
  {
    name: 'EcoMetals Inc.',
    address: '456 Industrial Ave, Metropolis, 67890',
    phone: '555-987-6543',
    hours: 'Mon-Sat: 7am - 6pm',
  },
  {
    name: 'Urban Ore Collectors',
    address: '789 Urban Way, Steeltown, 54321',
    phone: '555-555-5555',
    hours: 'Mon-Fri: 9am - 4pm',
  },
];

export type RecycledProduct = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    aiHint: string;
}

export const RECYCLED_PRODUCTS: RecycledProduct[] = [
  {
    id: '1',
    name: 'Upcycled Denim Tote Bag',
    description: 'A stylish and durable tote bag made from reclaimed denim jeans. Perfect for shopping or everyday use.',
    price: 29.99,
    image: 'https://placehold.co/400x400.png',
    aiHint: 'denim bag'
  },
  {
    id: '2',
    name: 'Reclaimed Wood Coffee Table',
    description: 'A rustic coffee table handcrafted from salvaged barn wood. Each piece has a unique history.',
    price: 149.99,
    image: 'https://placehold.co/400x400.png',
    aiHint: 'wood table'
  },
  {
    id: '3',
    name: 'Glass Bottle Wind Chimes',
    description: 'Beautiful wind chimes made from colorful, cut glass bottles. They create a gentle, soothing sound.',
    price: 19.99,
    image: 'https://placehold.co/400x400.png',
    aiHint: 'wind chimes'
  },
    {
    id: '4',
    name: 'Tire Planter Pot',
    description: 'A rugged and creative planter made from a recycled tire. Ideal for your garden or patio.',
    price: 24.99,
    image: 'https://placehold.co/400x400.png',
    aiHint: 'tire planter'
  },
  {
    id: '5',
    name: 'Circuit Board Coasters',
    description: 'A set of 4 unique coasters made from old computer circuit boards, encased in clear resin.',
    price: 22.50,
    image: 'https://placehold.co/400x400.png',
    aiHint: 'circuit board'
  },
  {
    id: '6',
    name: 'Vinyl Record Clock',
    description: 'A retro wall clock made from a classic vinyl LP. A great conversation piece for music lovers.',
    price: 35.00,
    image: 'https://placehold.co/400x400.png',
    aiHint: 'vinyl record'
  },
];
