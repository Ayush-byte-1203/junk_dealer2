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
    image: 'https://placehold.co/400x300/90A4AE/FFFFFF',
    description: 'Ferrous and non-ferrous metals.',
    aiHint: 'scrap metal',
    subCategories: [
      { name: 'Aluminum', slug: 'aluminum', image: 'https://placehold.co/400x300/CFD8DC/FFFFFF', description: 'Cans, foil, and more.', aiHint: 'aluminum cans' },
      { name: 'Steel', slug: 'steel', image: 'https://placehold.co/400x300/607D8B/FFFFFF', description: 'Appliances, car parts.', aiHint: 'steel beams' },
      { name: 'Copper', slug: 'copper', image: 'https://placehold.co/400x300/BCAAA4/FFFFFF', description: 'Pipes and wiring.', aiHint: 'copper wire' },
    ],
  },
  {
    name: 'Paper',
    slug: 'paper',
    image: 'https://placehold.co/400x300/A1887F/FFFFFF',
    description: 'All types of paper products.',
    aiHint: 'stacked paper',
    subCategories: [
      { name: 'Cardboard', slug: 'cardboard', image: 'https://placehold.co/400x300/D7CCC8/FFFFFF', description: 'Boxes and packaging.', aiHint: 'cardboard boxes' },
      { name: 'Newspaper', slug: 'newspaper', image: 'https://placehold.co/400x300/EFEBE9/FFFFFF', description: 'Daily and weekly papers.', aiHint: 'newspapers pile' },
    ],
  },
  {
    name: 'Plastics',
    slug: 'plastics',
    image: 'https://placehold.co/400x300/81D4FA/FFFFFF',
    description: 'Various types of plastic materials.',
    aiHint: 'plastic bottles',
    subCategories: [
        { name: 'PET Bottles', slug: 'pet-bottles', image: 'https://placehold.co/400x300/B3E5FC/FFFFFF', description: 'Soda and water bottles.', aiHint: 'plastic bottles' },
        { name: 'HDPE', slug: 'hdpe', image: 'https://placehold.co/400x300/4FC3F7/FFFFFF', description: 'Milk jugs, detergent bottles.', aiHint: 'plastic jugs' },
    ]
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://placehold.co/400x300/80CBC4/FFFFFF',
    description: 'E-waste and electronic components.',
    aiHint: 'electronic waste',
  },
    {
    name: 'Glass',
    slug: 'glass',
    image: 'https://placehold.co/400x300/A5D6A7/FFFFFF',
    description: 'Bottles, jars, and other glass items.',
    aiHint: 'glass bottles'
  },
  {
    name: 'Textiles',
    slug: 'textiles',
    image: 'https://placehold.co/400x300/FFCC80/FFFFFF',
    description: 'Old clothing and fabric scraps.',
    aiHint: 'fabric scraps'
  },
];

const generateHistory = (currentPrice: number) => {
    const history = [];
    let price = currentPrice;
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        history.push({ date: date.toLocaleDateString('en-US', { weekday: 'short' }), price: Math.round(price) });
        const fluctuation = (Math.random() - 0.5) * (price * 0.1); // Fluctuate by up to 10% for history
        price -= fluctuation;
    }
    return history;
};

export const LIVE_PRICES = [
  { category: 'Aluminum', price: 45.00, unit: 'per kg', change: 1.50, history: generateHistory(45.00) },
  { category: 'Steel', price: 8.00, unit: 'per kg', change: -0.50, history: generateHistory(8.00) },
  { category: 'Copper', price: 280.00, unit: 'per kg', change: 12.00, history: generateHistory(280.00) },
  { category: 'Cardboard', price: 3200.00, unit: 'per ton', change: 120.00, history: generateHistory(3200.00) },
  { category: 'Newspaper', price: 2000.00, unit: 'per ton', change: 40.00, history: generateHistory(2000.00) },
  { category: 'PET Bottles', price: 16.00, unit: 'per kg', change: 0.80, history: generateHistory(16.00) },
  { category: 'Glass', price: 800.00, unit: 'per ton', change: 0.00, history: generateHistory(800.00) },
  { category: 'E-Waste', price: 24.00, unit: 'per kg', change: -4.00, history: generateHistory(24.00) },
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
    price: 2499.00,
    image: 'https://placehold.co/400x400/3E2723/FFFFFF',
    aiHint: 'denim bag'
  },
  {
    id: '2',
    name: 'Reclaimed Wood Coffee Table',
    description: 'A rustic coffee table handcrafted from salvaged barn wood. Each piece has a unique history.',
    price: 12499.00,
    image: 'https://placehold.co/400x400/8D6E63/FFFFFF',
    aiHint: 'wood table'
  },
  {
    id: '3',
    name: 'Glass Bottle Wind Chimes',
    description: 'Beautiful wind chimes made from colorful, cut glass bottles. They create a gentle, soothing sound.',
    price: 1599.00,
    image: 'https://placehold.co/400x400/81C784/FFFFFF',
    aiHint: 'wind chimes'
  },
    {
    id: '4',
    name: 'Tire Planter Pot',
    description: 'A rugged and creative planter made from a recycled tire. Ideal for your garden or patio.',
    price: 1999.00,
    image: 'https://placehold.co/400x400/78909C/FFFFFF',
    aiHint: 'tire planter'
  },
  {
    id: '5',
    name: 'Circuit Board Coasters',
    description: 'A set of 4 unique coasters made from old computer circuit boards, encased in clear resin.',
    price: 1800.00,
    image: 'https://placehold.co/400x400/00695C/FFFFFF',
    aiHint: 'circuit board'
  },
  {
    id: '6',
    name: 'Vinyl Record Clock',
    description: 'A retro wall clock made from a classic vinyl LP. A great conversation piece for music lovers.',
    price: 2800.00,
    image: 'https://placehold.co/400x400/212121/FFFFFF',
    aiHint: 'vinyl record'
  },
];
