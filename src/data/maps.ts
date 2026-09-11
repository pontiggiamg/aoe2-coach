import type { RankedMap } from './types';

/**
 * Mapas frecuentes en rotación ranked 1v1.
 * Referencia pool Jun (histórico RMR): Acropolis, Arabia, Arena, Four Lakes, Gold Rush, Hideout, Islands.
 * El pool rota ~cada 2 semanas — editá este archivo para actualizar.
 */
export const MAPS: RankedMap[] = [
  // Referencia Jun RMR
  { id: 'acropolis', name: 'Acropolis', nameEs: 'Acrópolis', tag: 'open', keywords: ['acropolis', 'acropolis'], inReferencePool: true },
  { id: 'arabia', name: 'Arabia', nameEs: 'Arabia', tag: 'open', keywords: ['arabia', 'arab'], inReferencePool: true },
  { id: 'arena', name: 'Arena', nameEs: 'Arena', tag: 'closed', keywords: ['arena'], inReferencePool: true },
  { id: 'four_lakes', name: 'Four Lakes', nameEs: 'Cuatro Lagos', tag: 'hybrid', keywords: ['four lakes', 'cuatro lagos', '4 lakes'], inReferencePool: true },
  { id: 'gold_rush', name: 'Gold Rush', nameEs: 'Fiebre del Oro', tag: 'open', keywords: ['gold rush', 'fiebre'], inReferencePool: true },
  { id: 'hideout', name: 'Hideout', nameEs: 'Escondite', tag: 'closed', keywords: ['hideout', 'escondite'], inReferencePool: true },
  { id: 'islands', name: 'Islands', nameEs: 'Islas', tag: 'water', keywords: ['islands', 'islas'], inReferencePool: true },
  // Rotación frecuente
  { id: 'african_clearing', name: 'African Clearing', nameEs: 'Claro Africano', tag: 'open', keywords: ['african', 'claro africano'] },
  { id: 'nomad', name: 'Nomad', nameEs: 'Nómada', tag: 'nomad', keywords: ['nomad', 'nomada'] },
  { id: 'migration', name: 'Migration', nameEs: 'Migración', tag: 'water', keywords: ['migration', 'migracion'] },
  { id: 'megarandom', name: 'MegaRandom', nameEs: 'MegaAleatorio', tag: 'hybrid', keywords: ['megarandom', 'mega', 'aleatorio'] },
  { id: 'highland', name: 'Highland', nameEs: 'Tierras Altas', tag: 'hybrid', keywords: ['highland', 'tierras altas'] },
  { id: 'lowlands', name: 'Lowlands', nameEs: 'Tierras Bajas', tag: 'open', keywords: ['lowland', 'lowlands', 'tierras bajas'] },
  { id: 'black_forest', name: 'Black Forest', nameEs: 'Bosque Negro', tag: 'closed', keywords: ['black forest', 'bosque negro', 'bf'] },
  { id: 'fortress', name: 'Fortress', nameEs: 'Fortaleza', tag: 'closed', keywords: ['fortress', 'fortaleza'] },
  { id: 'golden_pit', name: 'Golden Pit', nameEs: 'Foso Dorado', tag: 'open', keywords: ['golden pit', 'foso'] },
  { id: 'ghost_lake', name: 'Ghost Lake', nameEs: 'Lago Fantasma', tag: 'open', keywords: ['ghost lake', 'lago fantasma'] },
  { id: 'valley', name: 'Valley', nameEs: 'Valle', tag: 'open', keywords: ['valley', 'valle'] },
  { id: 'scandinavia', name: 'Scandinavia', nameEs: 'Escandinavia', tag: 'hybrid', keywords: ['scandinavia', 'escandinavia'] },
  { id: 'socotra', name: 'Socotra', nameEs: 'Socotra', tag: 'open', keywords: ['socotra'] },
  { id: 'haboob', name: 'Haboob', nameEs: 'Haboob', tag: 'open', keywords: ['haboob'] },
  { id: 'glade', name: 'Glade', nameEs: 'Claro', tag: 'open', keywords: ['glade', 'claro'] },
  { id: 'graveyards', name: 'Graveyards', nameEs: 'Cementerios', tag: 'hybrid', keywords: ['graveyard', 'cementerio'] },
  { id: 'passage', name: 'Passage', nameEs: 'Pasaje', tag: 'hybrid', keywords: ['passage', 'pasaje'] },
  { id: 'team_islands', name: 'Team Islands', nameEs: 'Islas en Equipo', tag: 'water', keywords: ['team islands', 'islas equipo'] },
  { id: 'baltic', name: 'Baltic', nameEs: 'Báltico', tag: 'water', keywords: ['baltic', 'baltico'] },
  { id: 'coastal', name: 'Coastal', nameEs: 'Costero', tag: 'water', keywords: ['coastal', 'costero'] },
  { id: 'land_nomad', name: 'Land Nomad', nameEs: 'Nómada Terrestre', tag: 'nomad', keywords: ['land nomad', 'nomada terrestre'] },
  { id: 'oasis', name: 'Oasis', nameEs: 'Oasis', tag: 'hybrid', keywords: ['oasis'] },
  { id: 'yucatan', name: 'Yucatan', nameEs: 'Yucatán', tag: 'hybrid', keywords: ['yucatan', 'yucatán'] },
];

export const MAP_BY_ID = Object.fromEntries(MAPS.map((m) => [m.id, m]));

export const MAP_TAG_LABELS: Record<string, string> = {
  open: 'Abierto',
  closed: 'Cerrado',
  hybrid: 'Híbrido',
  water: 'Agua',
  nomad: 'Nómada',
};
