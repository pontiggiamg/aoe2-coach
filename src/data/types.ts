export type CivArchetype =
  | 'archer'
  | 'knight'
  | 'infantry'
  | 'camel'
  | 'gunpowder'
  | 'water'
  | 'hybrid'
  | 'cavalry_archer'
  | 'siege'
  | 'elephant';

export type MapTag = 'open' | 'closed' | 'hybrid' | 'water' | 'nomad';

export interface Civilization {
  id: string;
  name: string;
  nameEs: string;
  archetype: CivArchetype;
  keywords: string[];
  notes?: string;
}

export interface RankedMap {
  id: string;
  name: string;
  nameEs: string;
  tag: MapTag;
  keywords: string[];
  inReferencePool?: boolean;
}

export interface StrategyContent {
  apertura: string[];
  planMapa: string[];
  vsRival: string[];
  adaptaciones: {
    archers: string[];
    scouts: string[];
    maa: string[];
    fc: string[];
    towers: string[];
    water: string[];
  };
  tipsPartida: {
    feudal: string[];
    castle: string[];
  };
  erroresComunes: string[];
}
