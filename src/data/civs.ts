import type { Civilization } from './types';

/** Civilizaciones RM 1v1 (Sept 2026). Sin Chronicles. Incluye Three Kingdoms, Last Chieftains y Viking Sagas. */
export const CIVS: Civilization[] = [
  // Age of Kings
  { id: 'britons', name: 'Britons', nameEs: 'Britanos', archetype: 'archer', keywords: ['brit', 'briton', 'britano', 'longbow'] },
  { id: 'byzantines', name: 'Byzantines', nameEs: 'Bizantinos', archetype: 'hybrid', keywords: ['byz', 'bizantino', 'bizancio'] },
  { id: 'celts', name: 'Celts', nameEs: 'Celtas', archetype: 'infantry', keywords: ['celt', 'celta', 'woad'] },
  { id: 'chinese', name: 'Chinese', nameEs: 'Chinos', archetype: 'archer', keywords: ['china', 'chino', 'chu ko'] },
  { id: 'franks', name: 'Franks', nameEs: 'Francos', archetype: 'knight', keywords: ['frank', 'franco', 'axe'] },
  { id: 'goths', name: 'Goths', nameEs: 'Godos', archetype: 'infantry', keywords: ['goth', 'godo', 'huskarl'] },
  { id: 'japanese', name: 'Japanese', nameEs: 'Japoneses', archetype: 'infantry', keywords: ['japan', 'japones', 'samurai'] },
  { id: 'mongols', name: 'Mongols', nameEs: 'Mongoles', archetype: 'cavalry_archer', keywords: ['mongol', 'mangudai'] },
  { id: 'persians', name: 'Persians', nameEs: 'Persas', archetype: 'knight', keywords: ['persian', 'persa', 'war elephant'] },
  { id: 'saracens', name: 'Saracens', nameEs: 'Sarracenos', archetype: 'camel', keywords: ['saracen', 'sarraceno', 'mameluke'] },
  { id: 'teutons', name: 'Teutons', nameEs: 'Teutones', archetype: 'knight', keywords: ['teuton', 'teuton', 'teutonic'] },
  { id: 'turks', name: 'Turks', nameEs: 'Turcos', archetype: 'gunpowder', keywords: ['turk', 'turco', 'janissary'] },
  { id: 'vikings', name: 'Vikings', nameEs: 'Vikingos', archetype: 'infantry', keywords: ['viking', 'vikingo', 'berserk', 'longboat'], notes: 'Rework Viking Sagas 2026' },
  // Conquerors
  { id: 'aztecs', name: 'Aztecs', nameEs: 'Aztecas', archetype: 'infantry', keywords: ['aztec', 'azteca', 'jaguar'] },
  { id: 'huns', name: 'Huns', nameEs: 'Hunos', archetype: 'cavalry_archer', keywords: ['hun', 'huno', 'tarkan'] },
  { id: 'koreans', name: 'Koreans', nameEs: 'Coreanos', archetype: 'archer', keywords: ['korean', 'coreano', 'war wagon'] },
  { id: 'mayans', name: 'Mayans', nameEs: 'Mayas', archetype: 'archer', keywords: ['maya', 'plumed'] },
  { id: 'spanish', name: 'Spanish', nameEs: 'Españoles', archetype: 'gunpowder', keywords: ['spanish', 'espanol', 'conquistador', 'missionary'] },
  // Forgotten
  { id: 'incas', name: 'Incas', nameEs: 'Incas', archetype: 'infantry', keywords: ['inca', 'kamayuk', 'slinger'] },
  { id: 'italians', name: 'Italians', nameEs: 'Italianos', archetype: 'archer', keywords: ['italian', 'italiano', 'genoese'] },
  { id: 'magyars', name: 'Magyars', nameEs: 'Magiares', archetype: 'cavalry_archer', keywords: ['magyar', 'magiar', 'huszar'] },
  { id: 'slavs', name: 'Slavs', nameEs: 'Eslavos', archetype: 'infantry', keywords: ['slav', 'eslavo', 'boyar'] },
  // African Kingdoms
  { id: 'berbers', name: 'Berbers', nameEs: 'Bereberes', archetype: 'camel', keywords: ['berber', 'bereber', 'camel archer'] },
  { id: 'ethiopians', name: 'Ethiopians', nameEs: 'Etíopes', archetype: 'archer', keywords: ['ethiopian', 'etiope', 'shotel'] },
  { id: 'malians', name: 'Malians', nameEs: 'Malíes', archetype: 'infantry', keywords: ['malian', 'mali', 'gbeto'] },
  { id: 'portuguese', name: 'Portuguese', nameEs: 'Portugueses', archetype: 'gunpowder', keywords: ['portuguese', 'portugues', 'organ gun', 'carrack'] },
  // Rise of the Rajas
  { id: 'burmese', name: 'Burmese', nameEs: 'Birmanos', archetype: 'elephant', keywords: ['burmese', 'birmano', 'arambai'] },
  { id: 'khmer', name: 'Khmer', nameEs: 'Jemeres', archetype: 'elephant', keywords: ['khmer', 'jemer', 'ballista elephant'] },
  { id: 'malay', name: 'Malay', nameEs: 'Malayos', archetype: 'water', keywords: ['malay', 'malayo', 'karambit'] },
  { id: 'vietnamese', name: 'Vietnamese', nameEs: 'Vietnamitas', archetype: 'archer', keywords: ['vietnamese', 'vietnamita', 'rattan'] },
  // Last Khans
  { id: 'bulgarians', name: 'Bulgarians', nameEs: 'Búlgaros', archetype: 'infantry', keywords: ['bulgarian', 'bulgaro', 'konnik', 'krepost'], notes: 'Militia free MAA + Blacksmith barato + Konnik/Krepost' },
  { id: 'cumans', name: 'Cumans', nameEs: 'Cumanos', archetype: 'cavalry_archer', keywords: ['cuman', 'cumano', 'kipchak'] },
  { id: 'lithuanians', name: 'Lithuanians', nameEs: 'Lituanos', archetype: 'knight', keywords: ['lithuanian', 'lituano', 'leitis'] },
  { id: 'tatars', name: 'Tatars', nameEs: 'Tártaros', archetype: 'cavalry_archer', keywords: ['tatar', 'tartaro', 'keshik'] },
  // Lords of the West
  { id: 'burgundians', name: 'Burgundians', nameEs: 'Borgoñones', archetype: 'knight', keywords: ['burgundian', 'borgonon', 'coustillier'] },
  { id: 'sicilians', name: 'Sicilians', nameEs: 'Sicilianos', archetype: 'infantry', keywords: ['sicilian', 'siciliano', 'serjeant'] },
  // Dawn of the Dukes
  { id: 'bohemians', name: 'Bohemians', nameEs: 'Bohemios', archetype: 'gunpowder', keywords: ['bohemian', 'bohemio', 'hussite'] },
  { id: 'poles', name: 'Poles', nameEs: 'Polacos', archetype: 'knight', keywords: ['pole', 'polaco', 'obuch', 'winged'] },
  // Dynasties of India
  { id: 'bengalis', name: 'Bengalis', nameEs: 'Bengalíes', archetype: 'elephant', keywords: ['bengali', 'bengalie', 'ratha'] },
  { id: 'dravidians', name: 'Dravidians', nameEs: 'Drávidas', archetype: 'infantry', keywords: ['dravidian', 'dravida', 'urrumbu'] },
  { id: 'gurjaras', name: 'Gurjaras', nameEs: 'Gurjaras', archetype: 'camel', keywords: ['gurjara', 'shrivamsha', 'chakram'] },
  { id: 'hindustanis', name: 'Hindustanis', nameEs: 'Hindustaníes', archetype: 'camel', keywords: ['hindustani', 'hindustani', 'ghulam'] },
  // Return of Rome
  { id: 'romans', name: 'Romans', nameEs: 'Romanos', archetype: 'infantry', keywords: ['roman', 'romano', 'centurion', 'legionary'] },
  // Mountain Royals
  { id: 'armenians', name: 'Armenians', nameEs: 'Armenios', archetype: 'infantry', keywords: ['armenian', 'armenio', 'composite bowman'] },
  { id: 'georgians', name: 'Georgians', nameEs: 'Georgianos', archetype: 'knight', keywords: ['georgian', 'georgiano', 'monaspa'] },
  // Three Kingdoms
  { id: 'jurchens', name: 'Jurchens', nameEs: 'Yurchen', archetype: 'gunpowder', keywords: ['jurchen', 'yurchen', 'iron pagoda'] },
  { id: 'khitans', name: 'Khitans', nameEs: 'Kitán', archetype: 'cavalry_archer', keywords: ['khitan', 'kitan', 'pasture', 'liao'] },
  { id: 'shu', name: 'Shu', nameEs: 'Shu', archetype: 'archer', keywords: ['shu', 'liu bei', 'white feather'] },
  { id: 'wei', name: 'Wei', nameEs: 'Wei', archetype: 'knight', keywords: ['wei', 'cao cao', 'tiger cavalry'] },
  { id: 'wu', name: 'Wu', nameEs: 'Wu', archetype: 'infantry', keywords: ['wu', 'sun quan', 'fire lancer'] },
  // Last Chieftains
  { id: 'mapuche', name: 'Mapuche', nameEs: 'Mapuche', archetype: 'knight', keywords: ['mapuche', 'kona', 'bolas'] },
  { id: 'muisca', name: 'Muisca', nameEs: 'Muisca', archetype: 'archer', keywords: ['muisca', 'guecha', 'temple guard'] },
  { id: 'tupi', name: 'Tupi', nameEs: 'Tupí', archetype: 'infantry', keywords: ['tupi', 'tupí', 'blackwood', 'ibirapema'] },
  // Viking Sagas (lanzamiento 22 sep 2026 — incluidos para ranked)
  { id: 'danes', name: 'Danes', nameEs: 'Daneses', archetype: 'water', keywords: ['dane', 'danes', 'daneses', 'jomsviking'] },
  { id: 'saxons', name: 'Saxons', nameEs: 'Sajones', archetype: 'infantry', keywords: ['saxon', 'sajon', 'hearth troop'] },
  { id: 'varangians', name: 'Varangians', nameEs: 'Varangios', archetype: 'knight', keywords: ['varangian', 'varangio', 'jarl'] },
];

export const CIV_BY_ID = Object.fromEntries(CIVS.map((c) => [c.id, c]));
export const DEFAULT_MY_CIV = 'bulgarians';
