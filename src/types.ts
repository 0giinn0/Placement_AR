import type { Vector3 } from 'three';

export type PlatformMode = 'full-ar' | 'screen-ar' | 'desktop-3d';

export type AppMode = 'place' | 'measure' | 'scan';

export interface FurnitureItem {
  id: string;
  name: string;
  category: FurnitureCategory;
  modelPath: string;
  thumbnail: string;
  defaultScale: [number, number, number];
  colors: ColorVariant[];
}

export interface ColorVariant {
  name: string;
  modelPath: string;
  hex: string;
}

export type FurnitureCategory = 'seating' | 'tables' | 'storage' | 'lighting' | 'decor';

export interface PlacedObject {
  id: string;
  modelPath: string;
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  colorVariant?: string;
}

export interface MeasurementPoint {
  id: string;
  position: Vector3;
}

export interface MeasurementLine {
  id: string;
  start: Vector3;
  end: Vector3;
  distance: number;
}

export interface SavedLayout {
  id: string;
  name: string;
  date: string;
  objects: PlacedObject[];
  roomDimensions?: { width: number; length: number };
}

export type UnitSystem = 'metric' | 'imperial';
