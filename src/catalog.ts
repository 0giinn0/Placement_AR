import type { FurnitureItem } from './types';

export const furnitureCatalog: FurnitureItem[] = [
  // Seating
  {
    id: 'sofa',
    name: 'Sofa',
    category: 'seating',
    modelPath: '/models/seating/sofa.glb',
    thumbnail: '🛋️',
    defaultScale: [1, 1, 1],
    colors: [
      { name: 'Gray', modelPath: '/models/seating/sofa.glb', hex: '#808080' },
      { name: 'Red', modelPath: '/models/seating/sofa-red.glb', hex: '#c0392b' },
      { name: 'Blue', modelPath: '/models/seating/sofa-blue.glb', hex: '#2980b9' },
    ],
  },
  {
    id: 'armchair',
    name: 'Armchair',
    category: 'seating',
    modelPath: '/models/seating/armchair.glb',
    thumbnail: '🪑',
    defaultScale: [0.8, 0.8, 0.8],
    colors: [
      { name: 'Brown', modelPath: '/models/seating/armchair.glb', hex: '#8B4513' },
      { name: 'Beige', modelPath: '/models/seating/armchair-beige.glb', hex: '#D2B48C' },
    ],
  },
  {
    id: 'dining-chair',
    name: 'Dining Chair',
    category: 'seating',
    modelPath: '/models/seating/dining-chair.glb',
    thumbnail: '🪑',
    defaultScale: [0.5, 0.5, 0.5],
    colors: [
      { name: 'Wood', modelPath: '/models/seating/dining-chair.glb', hex: '#A0522D' },
    ],
  },
  // Tables
  {
    id: 'coffee-table',
    name: 'Coffee Table',
    category: 'tables',
    modelPath: '/models/tables/coffee-table.glb',
    thumbnail: '🪵',
    defaultScale: [0.9, 0.9, 0.9],
    colors: [
      { name: 'Oak', modelPath: '/models/tables/coffee-table.glb', hex: '#D2691E' },
      { name: 'White', modelPath: '/models/tables/coffee-table-white.glb', hex: '#F5F5F5' },
    ],
  },
  {
    id: 'dining-table',
    name: 'Dining Table',
    category: 'tables',
    modelPath: '/models/tables/dining-table.glb',
    thumbnail: '🪑',
    defaultScale: [1, 1, 1],
    colors: [
      { name: 'Walnut', modelPath: '/models/tables/dining-table.glb', hex: '#5C4033' },
    ],
  },
  {
    id: 'side-table',
    name: 'Side Table',
    category: 'tables',
    modelPath: '/models/tables/side-table.glb',
    thumbnail: '☕',
    defaultScale: [0.5, 0.5, 0.5],
    colors: [
      { name: 'Black', modelPath: '/models/tables/side-table.glb', hex: '#2C3E50' },
    ],
  },
  // Storage
  {
    id: 'bookshelf',
    name: 'Bookshelf',
    category: 'storage',
    modelPath: '/models/storage/bookshelf.glb',
    thumbnail: '📚',
    defaultScale: [1, 1, 1],
    colors: [
      { name: 'Pine', modelPath: '/models/storage/bookshelf.glb', hex: '#DEB887' },
    ],
  },
  {
    id: 'tv-stand',
    name: 'TV Stand',
    category: 'storage',
    modelPath: '/models/storage/tv-stand.glb',
    thumbnail: '📺',
    defaultScale: [1.2, 1, 1],
    colors: [
      { name: 'White', modelPath: '/models/storage/tv-stand.glb', hex: '#ECF0F1' },
    ],
  },
  // Lighting
  {
    id: 'floor-lamp',
    name: 'Floor Lamp',
    category: 'lighting',
    modelPath: '/models/lighting/floor-lamp.glb',
    thumbnail: '💡',
    defaultScale: [0.6, 0.6, 0.6],
    colors: [
      { name: 'Gold', modelPath: '/models/lighting/floor-lamp.glb', hex: '#FFD700' },
    ],
  },
  {
    id: 'table-lamp',
    name: 'Table Lamp',
    category: 'lighting',
    modelPath: '/models/lighting/table-lamp.glb',
    thumbnail: '🏮',
    defaultScale: [0.4, 0.4, 0.4],
    colors: [
      { name: 'White', modelPath: '/models/lighting/table-lamp.glb', hex: '#FDFEFE' },
    ],
  },
  // Decor
  {
    id: 'plant',
    name: 'Plant Pot',
    category: 'decor',
    modelPath: '/models/decor/plant.glb',
    thumbnail: '🪴',
    defaultScale: [0.5, 0.5, 0.5],
    colors: [
      { name: 'Green', modelPath: '/models/decor/plant.glb', hex: '#27AE60' },
    ],
  },
  {
    id: 'vase',
    name: 'Vase',
    category: 'decor',
    modelPath: '/models/decor/vase.glb',
    thumbnail: '🏺',
    defaultScale: [0.3, 0.3, 0.3],
    colors: [
      { name: 'Ceramic', modelPath: '/models/decor/vase.glb', hex: '#E8DCC8' },
    ],
  },
];

export function getCatalogByCategory(category: FurnitureCategory) {
  return furnitureCatalog.filter((item) => item.category === category);
}

export function getCatalogItem(id: string) {
  return furnitureCatalog.find((item) => item.id === id);
}

import type { FurnitureCategory } from './types';
