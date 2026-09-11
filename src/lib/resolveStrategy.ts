import type { Civilization, MapTag, RankedMap, StrategyContent } from '../data/types';
import {
  ARCHETYPE_MATCHUPS,
  ARCHETYPE_OPENINGS,
  BULGARIAN_BASE,
  BULGARIAN_MAP,
  BULGARIAN_VS,
  MAP_TAG_TIPS,
  POPULAR_MY_CIV,
  mergeStrategy,
} from '../data/strategies';

export interface ResolvedCoaching {
  content: StrategyContent;
  resolutionPath: string[];
  myCiv: Civilization;
  oppCiv: Civilization;
  map: RankedMap;
}

/**
 * Cascada: matchup específico → myCiv+mapTag → arquetipo → genérico.
 * Nunca vacío.
 */
export function resolveStrategy(
  myCiv: Civilization,
  oppCiv: Civilization,
  map: RankedMap
): ResolvedCoaching {
  const path: string[] = [];
  const mapTag = map.tag;

  if (myCiv.id === 'bulgarians') {
    path.push('Búlgaros (base profunda)');
    const vs = BULGARIAN_VS[oppCiv.id];
    const mapTips = BULGARIAN_MAP[mapTag];
    const archTips =
      ARCHETYPE_MATCHUPS.infantry?.[oppCiv.archetype] ??
      ARCHETYPE_MATCHUPS[myCiv.archetype]?.[oppCiv.archetype];

    const vsRival = [
      ...(vs ?? []),
      ...(vs ? [] : archTips ?? []),
      `Rival: ${oppCiv.nameEs} (${labelArchetype(oppCiv.archetype)}). Usá tus herramientas: MAA, Blacksmith barato, Krepost, Konniks/Caballeros, Stirrups.`,
    ];

    const planMapa = [
      ...(mapTips ?? MAP_TAG_TIPS[mapTag]),
      `Mapa: ${map.nameEs} — tipo ${labelMapTag(mapTag)}.`,
    ];

    if (vs) path.push(`Matchup Búlgaros vs ${oppCiv.nameEs}`);
    else if (archTips) path.push(`Arquetipo infantry vs ${oppCiv.archetype}`);
    else path.push('Fallback vs rival (plantilla)');

    path.push(`Mapa tag: ${mapTag}`);

    const content = mergeStrategy(BULGARIAN_BASE, {
      vsRival,
      planMapa,
    });

    return { content, resolutionPath: path, myCiv, oppCiv, map };
  }

  // Otras civs
  const popular = POPULAR_MY_CIV[myCiv.id];
  const archOpening = ARCHETYPE_OPENINGS[myCiv.archetype];
  const archMatch =
    ARCHETYPE_MATCHUPS[myCiv.archetype]?.[oppCiv.archetype] ??
    ARCHETYPE_MATCHUPS[oppCiv.archetype]?.[myCiv.archetype]?.map(
      (s) => `(Invertí la lectura) ${s}`
    );

  if (popular) path.push(`Guía ${myCiv.nameEs}`);
  else path.push(`Arquetipo ${myCiv.archetype}`);
  if (archMatch) path.push(`Matchup ${myCiv.archetype} vs ${oppCiv.archetype}`);
  else path.push('Vs rival genérico');
  path.push(`Mapa tag: ${mapTag}`);

  const vsRival = [
    ...(archMatch ?? []),
    `Vos: ${myCiv.nameEs} (${labelArchetype(myCiv.archetype)}). Rival: ${oppCiv.nameEs} (${labelArchetype(oppCiv.archetype)}).`,
    'Priorizá tus unidades fuertes y contestá con spears/skirms/camellos según lo que haga el rival.',
    myCiv.notes ? `Nota: ${myCiv.notes}` : '',
  ].filter(Boolean);

  const planMapa = [
    ...MAP_TAG_TIPS[mapTag],
    `Mapa: ${map.nameEs} — tipo ${labelMapTag(mapTag)}.`,
  ];

  const content = mergeStrategy(archOpening, popular, {
    vsRival,
    planMapa,
  });

  return { content, resolutionPath: path, myCiv, oppCiv, map };
}

function labelArchetype(a: string): string {
  const map: Record<string, string> = {
    archer: 'arqueros',
    knight: 'caballeros',
    infantry: 'infantería',
    camel: 'camellos',
    gunpowder: 'pólvora',
    water: 'agua',
    hybrid: 'híbrida',
    cavalry_archer: 'arqueros a caballo',
    siege: 'asedio',
    elephant: 'elefantes',
  };
  return map[a] ?? a;
}

function labelMapTag(t: MapTag): string {
  const map: Record<MapTag, string> = {
    open: 'abierto',
    closed: 'cerrado',
    hybrid: 'híbrido',
    water: 'agua',
    nomad: 'nómada',
  };
  return map[t];
}
