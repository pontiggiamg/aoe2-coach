import type { CivArchetype, MapTag, StrategyContent } from './types';

/** Contenido genérico base — nunca pantalla en blanco */
export const GENERIC: StrategyContent = {
  apertura: [
    'Dark Age estándar 1k: 6 ovejas → 4 madera → jabalí → bayas → segundo jabalí → granjas/oro según plan.',
    'Objetivo práctico: click Feudal ~21–22 pop (no hace falta 19–20 pro). Priorizá TC idle cero.',
    'Scout continuo: contá casas, milicia, oro y si el rival walla. Eso decide tu follow-up.',
    '2 TC o producción militar estable > micro perfecto. En 1k gana quien no se queda sin aldeanos.',
  ],
  planMapa: [
    'Leé el mapa en 30 s: oro adelante, piedra, choke points, muro natural.',
    'Si hay wall natural, usalo. Si es abierto, pensá en muro parcial + spearmen vs scouts.',
    'No pelees por un gold malo lejos si podés tomar el de atrás seguro.',
  ],
  vsRival: [
    'Identificá el arquetipo del rival (arqueros, caballeros, camellos, infantería, pólvora).',
    'Respondé con tus herramientas: spears vs caballería, skirms vs arqueros, monks/camellos vs caballeros si los tenés.',
    'No copies el plan del rival: jugá tu plan y adaptá solo lo necesario.',
  ],
  adaptaciones: {
    archers: [
      'Vs arqueros: skirms + spears si hay scouts; wallá; no pelees en campo abierto sin número.',
      'Un forward tower temprano puede molestar mucho en 1k si el rival no reacciona.',
    ],
    scouts: [
      'Vs scouts: spears inmediatos (2–3), wallá bayas/oro, no dejes aldeanos solos afuera.',
      'Si te raidean, repara y reponé aldeanos; no abandones el eco por perseguir scouts.',
    ],
    maa: [
      'Vs MAA: spears ligeros no sirven — usá archers o tus propios MAA; wallá rápido.',
      'Si llegan a tu TC, garrisoná y reponé wood/food.',
    ],
    fc: [
      'Vs Fast Castle: presión feudal (scouts/archers/MAA) o wall + eco limpio para llegar juntos.',
      'Si llegás tarde a Castle, no suicides ejército feudal: wallá y catch-up con 2º TC.',
    ],
    towers: [
      'Vs torres: no pelees debajo. Tomá otro recurso, usá towers propias o esperá siege en Castle.',
      'Un ram + algunos soldados suele romper torres feudal/castle tempranas en 1k.',
    ],
    water: [
      'En agua: no ignores docks. 1–2 fishing ships temprano y control de water con fire/demo según civ.',
      'Si perdés water, enfocá tierra y wallá costa.',
    ],
  },
  tipsPartida: {
    feudal: [
      'Checklist Feudal: Blacksmith upgrades relevantes, segundo building militar, muro parcial, farm transition.',
      'Mantené 1 scout vivo para ver el click a Castle del rival.',
      'No overdrainees: 6–10 unidades de presión + eco > deathball feudal.',
    ],
    castle: [
      'Checklist Castle: 2º TC (o 3º), upgrades de unidad principal, siege workshop si hay walls/towers.',
      'Raids de light cav / hussar a eco atrasado ganan más partidas en 1k que el fight frontal.',
      'Si vas perdiendo el fight, dropá un building defensivo (tower/krepost/castle) y restablecé eco.',
    ],
  },
  timings: {
    dark: [
      '**6** ovejas → **4** madera → jabalí → bayas → 2º jabalí.',
      'Click Feudal ~**21–22** pop (1k: no hace falta 19–20). **TC idle = 0**.',
      'Casas: no te quedes housing — siempre **+2–3** casas de holgura.',
    ],
    feudalEarly: [
      'Al llegar: Loom si hay amenaza; 1er building militar + Blacksmith si vas a pelear.',
      'Farms: empezá transición — **~6–8** farms pronto; no dejes solo bayas.',
      'Presión típica: **6–10** unidades + eco, no deathball feudal.',
    ],
    feudalMid: [
      'Wall parcial / spears vs scouts / skirms vs archers según scout.',
      '2º building militar si hay pelea. Mantené **1 scout** vivo.',
      'Wood bank para Castle: apuntá **~200–275** wood + food para click limpio.',
    ],
    castleClick: [
      'Click Castle cuando farms + wood bank estén listos (no “porque sí”).',
      'Antes del click: decidí 2º TC vs army — en 1k **2º TC** casi siempre.',
    ],
    castleMid: [
      'A mitad de Castillos: **2 TC** + **~2–3** upgrades clave + ejército usable (no 5 unidades).',
      'Producción continua desde **2** buildings militares. Raids > solo fight frontal.',
      'Siege workshop si hay walls/towers.',
    ],
    late: [
      '3er TC o Imp según mapa. Upgrades de unidad principal + armor.',
      'Si vas perdiendo el fight: building defensivo + restablecé eco antes de re-engage.',
    ],
  },
  erroresComunes: [
    'TC idle y casas olvidadas (housing).',
    'Ir a Castle sin farms / sin wood bank.',
    'Pelear sin upgrades de Blacksmith.',
    'No scoutear y “adivinar” el plan del rival.',
    'All-in feudal sin plan B cuando el rival walla.',
    'Olvidar spears vs caballería o skirms vs arqueros.',
  ],
};

/** Aperturas / planes por arquetipo de MI civ */
export const ARCHETYPE_OPENINGS: Record<CivArchetype, Partial<StrategyContent>> = {
  infantry: {
    apertura: [
      'Civ de infantería: MAA 20–22 pop es tu default en open. Barracks antes o al click Feudal.',
      'Aprovechá upgrades de barracks/blacksmith baratos si tu civ los tiene.',
      'Follow-up típico: skirms o scouts según respuesta; Castle → unidad única / knights / siege.',
    ],
  },
  archer: {
    apertura: [
      'Civ de arqueros: 22–24 pop archers o MAA→archers. 1–2 ranges en Feudal.',
      'Priorizá fletching temprano; skirms propios si el rival también va archers.',
      'Castle: crossbow + ballistics + siege (mangonel/BBC según civ).',
    ],
  },
  knight: {
    apertura: [
      'Civ de caballeros: scouts Feudal o FC según mapa. En open, scouts 22 pop es seguro en 1k.',
      'Castle: knights (+ bloodlines/armor). No te olvides de spears del rival.',
      'Raids constantes > fight frontal si el rival mass spears/camels.',
    ],
  },
  camel: {
    apertura: [
      'Civ de camellos: Feudal flexible (archers/scouts); Castle camels vs knights.',
      'Scouteá si el rival va caballería — ahí brillás. Vs archers, necesitás skirms/siege.',
    ],
  },
  gunpowder: {
    apertura: [
      'Civ de pólvora: sobreviví Feudal limpio (archers/scouts/FC) y llegá a Castle/Imp con tu power spike.',
      'No forces hand cannons sin eco; usá monks/siege de soporte.',
    ],
  },
  water: {
    apertura: [
      'Civ de agua: en maps water, docks temprano y fishing. En tierra, jugá tu plan secundario (inf/archers).',
      'No abandones tierra por overcommit en water si el mapa es híbrido.',
    ],
  },
  hybrid: {
    apertura: [
      'Civ flexible: elegí según scout del rival. Default seguro: archers o scouts + transición Castle sólida.',
      'Usá tus bonuses económicos para 2º TC cómodo.',
    ],
  },
  cavalry_archer: {
    apertura: [
      'Civ de CA: scouts o archers Feudal → CA en Castle. Mantené movilidad y raids.',
      'Cuidado con skirms masivos; añadí light cav / siege.',
    ],
  },
  siege: {
    apertura: [
      'Civ de siege: presión feudal moderada y spike con siege workshop barato / rápido en Castle.',
      'Rams + unidad de meat (inf/cav) rompen bases walladas en 1k.',
    ],
  },
  elephant: {
    apertura: [
      'Civ de elefantes: Feudal estándar (archers/scouts); Castle elefantes solo con eco fuerte.',
      'No hagas 1 elefante solo — mass o acompañá con archers/halbs.',
    ],
  },
};

/** Consejos por tag de mapa (para mi civ + mapTag) */
export const MAP_TAG_TIPS: Record<MapTag, string[]> = {
  open: [
    'Mapa abierto: scouting y wall parcial son prioridad. Expect scouts/MAA/archers.',
    'Controlá el medio y los golds forward con presión, no solo con muro.',
    'Spears + wall vs scouts; skirms vs archers. No dejes el eco expuesto.',
  ],
  closed: [
    'Mapa cerrado (Arena/Hideout/BF): FC o boom a 2–3 TC es común en 1k.',
    'Prepará unique unit / knights / siege para el break. No quedes sin stone para castle.',
    'Monk + siege suele decidir. Scouteá el push del rival por los gaps.',
  ],
  hybrid: [
    'Mapa híbrido: puede haber lagos/chokes. Decidí temprano si invertís en water o solo tierra.',
    'Usá el terreno (acantilados, bosques) para wallear barato.',
  ],
  water: [
    'Mapa de agua: docks + fishing ships. Perder water duele mucho — no lo ignores.',
    'Transportes y landings: wallá costa y tené spears/archers listos.',
  ],
  nomad: [
    'Nómada: primer TC spot seguro (madera + food). No pelees Dark Age sin necesidad.',
    'Scout agresivo para denegar TC del rival. Boom o presión feudal según posición.',
  ],
};

/** Matchups arquetipo vs arquetipo (cualitativo) */
export const ARCHETYPE_MATCHUPS: Partial<
  Record<CivArchetype, Partial<Record<CivArchetype, string[]>>>
> = {
  infantry: {
    knight: [
      'Vs caballeros: tus spears/halbs son clave. No pelees en campo abierto sin ellos.',
      'Usá siege y wall. Raids de light cav enemigos: wallá y reponé.',
    ],
    archer: [
      'Vs arqueros: skirms + tu infantería para tankear. Cerrá distancia; mangonels ayudan.',
    ],
    camel: [
      'Vs camellos: tu caballería sufre — apoyate en infantería + archers/siege.',
    ],
    infantry: [
      'Mirror infantería: upgrades y número ganan. No pelees sin blacksmith.',
    ],
    gunpowder: [
      'Vs pólvora: no dejes que mass hand cannons te limpien — usá knights/light cav si los tenés, o rush antes del spike.',
    ],
  },
  archer: {
    knight: [
      'Vs caballeros: spears delante de archers, wall, y monks si podés. No quedes en bola sin carne.',
    ],
    archer: [
      'Mirror arqueros: skirms + fletching primero. El que walla y llega a xbow limpio suele ganar.',
    ],
    infantry: [
      'Vs infantería: micro atrás, mangonels, y no dejes que te cierren.',
    ],
  },
  knight: {
    archer: [
      'Vs arqueros: knights flanqueando + skirms propios. Evitá mangonel shots en bola.',
    ],
    camel: [
      'Vs camellos: no mass solo knights. Añadí archers o light cav para raids y siege.',
    ],
    infantry: [
      'Vs infantería: raids a eco > fight frontal vs halb mass.',
    ],
  },
};

// ——— BÚLGAROS: cobertura profunda ———

export const BULGARIAN_BASE: StrategyContent = {
  apertura: [
    'Apertura 1k recomendada: 20–21 pop Men-at-Arms. MAA upgrade gratis al llegar a Feudal → no hace falta mining camp: 1 aldeano a oro (10 gold a distancia) alcanza para 3 milicias.',
    'Build práctico: 6 ovejas → 4 wood → jabalí → bayas → 2º jabalí → farms → click Feudal con ~20–21 pop + barracks al click o justo antes.',
    'Al llegar Feudal: 3 MAA hacia el rival. Mientras, decidí follow-up: Stable (scouts) si no walla / hay espacio, o Archery (skirms) si ves arqueros o walls.',
    'Blacksmith barato: sacá armor/attack de infantería pronto. No olvides Loom si hay amenaza de scout/drush.',
    'Alternativa scouts-only 22 pop también sirve en 1k si preferís simple — pero MAA aprovecha mejor el bonus búlgaro.',
  ],
  planMapa: [
    'En open (Arabia etc.): MAA + presión, wall parcial detrás, farms tempranas. Buscá denegar wall del rival con los MAA.',
    'Piedra: pensá Krepost en Castle (más barato que Castle) para forward pressure o defensa de gold.',
    'Si el mapa es cerrado: FC a Krepost/Castillo + Konniks o Caballeros es válido; usá el free MAA solo si podés castigar un gap.',
  ],
  vsRival: [
    'Identidad búlgara: agresión feudal con MAA, Blacksmith barato, Krepost, Konniks (cavalry que se baja a infantería al morir) y Stirrups (attack speed caballería).',
    'En Castle: Caballeros primero (fáciles de mass), luego Konniks cuando tengas oro/upgrades, o Stirrups Hussar para raids.',
    'Siege workshop barato: rams + tu meat (konnik/inf) rompe walls y TCs en este elo.',
  ],
  adaptaciones: {
    archers: [
      'Si el rival responde arqueros a tus MAA: 1 range skirms, mantené MAA vivos como carne, wallá, y andá a Castle → 2 stable knights.',
      'No pelees arqueros en bola sin skirms. Fletching + skirm armor ayudan.',
    ],
    scouts: [
      'Vs scouts: 2–3 spears ya, wallá bayas/oro. Tus MAA no counterean scouts bien — spears sí.',
      'Si el rival va scouts puros, podés ir MAA→scouts vos también (ahorrás el food del upgrade MAA).',
    ],
    maa: [
      'Mirror MAA: pelea con número + armor de Blacksmith (barato). Skirms detrás si aparecen archers.',
    ],
    fc: [
      'Vs FC: presión MAA + scouts/skirms para atrasarlo. Si walla perfecto, wallá vos y llegá a Castle con eco limpio → knights/krepost.',
      'No suicides todo el ejército feudal contra un FC wallado; convertí a eco.',
    ],
    towers: [
      'Vs towers: no pelees debajo. Tomá otro gold, o esperá ram en Castle (siege barato búlgaro). Krepost propio puede contestar forward towers.',
    ],
    water: [
      'Búlgaros no son civ de agua. En Islands/Migration: docks básicos + fishing; en tierra usá tu plan MAA/knights. Si perdés water, wallá costa y jugá land.',
    ],
  },
  tipsPartida: {
    feudal: [
      '¿3 MAA en camino? ¿Blacksmith? ¿Spears si hay scouts? ¿Wall parcial? ¿Farms subiendo?',
      'Scout vivo: mirá si el rival clickea Castle o mass archers.',
      'Producción: no dejes el barracks idle si estás en pelea MAA.',
    ],
    castle: [
      '2º TC pronto. Knights desde 1–2 stables mientras subís farms.',
      'Krepost forward en un gold/stone del rival = enorme en 1k (muchos no saben responder).',
      'Stirrups cuando vayas heavy cav/hussar. Konniks: asegurate de tener gold y armor upgrades (monté y a pie).',
      'Siege: ram + knights/konniks vs base wallada.',
    ],
  },
  timings: {
    dark: [
      '**6** ovejas → **4** wood → jabalí → bayas → 2º jabalí → farms.',
      'Click Feudal **20–21** pop + Barracks al click (o justo antes). **No** mining camp de oro solo por MAA.',
      'Para **3** milicias: **1** vil a oro a distancia (~**10** gold) alcanza (upgrade MAA gratis en Feudal).',
    ],
    feudalEarly: [
      'Al llegar Feudal: upgrade MAA gratis → mandá **3** MAA al rival.',
      'Blacksmith barato: armor/attack de infantería pronto.',
      'Farms subiendo ya; follow-up: Stable (scouts) o Archery (skirms) según scout.',
    ],
    feudalMid: [
      'Tras MAA: **2–3** spears si ves scouts; **skirms** si ves arqueros; wall parcial detrás.',
      'No overcommit: presión + eco. Si wallan perfecto → skirms + prepará Castle.',
      'Wood/food bank para Castle; seguí farms (**~10–12** hacia el click).',
    ],
    castleClick: [
      'Click Castle limpio con farms. Prioridad post-click: **2º TC** + **1–2** Stable(s).',
      'Piedra en mente para **Krepost** (más barato que Castle) en gold/forward.',
    ],
    castleMid: [
      'A mitad de Castillos: **2 TC** + **~3** upgrades (armor/attack cab o inf + ballistics si hay archers) + **8–12** knights/konniks en producción.',
      'Krepost en gold/stone del rival = enorme en 1k. Siege (ram) si hay walls.',
      'Stirrups cuando vayas heavy cav/hussar. Konniks solo con oro + upgrades.',
    ],
    late: [
      '3er TC o Imp. Hussar (Stirrups) raids a eco + rams vs base.',
      'No pelees knights enemigos sin spears/halbs. Mantené producción dual (raid + push).',
    ],
  },
  erroresComunes: [
    'Hacer mining camp de oro en Dark solo para MAA (con 1 vil a distancia alcanza).',
    'Ir MAA y no adaptar: si wallan, no sigas chocando — skirms o Castle.',
    'Olvidar spears vs scouts/knights enemigos.',
    'Sacar Konniks sin oro ni upgrades y perder el fight.',
    'No usar Krepost nunca (es tu herramienta más infravalorada en 1k).',
    'TC idle mientras microeás MAA lejos del eco.',
  ],
};

/** Matchups específicos Búlgaros vs civ */
export const BULGARIAN_VS: Record<string, string[]> = {
  franks: [
    'Francos = caballeros fuertes + axes. Expect scouts Feudal → knights Castle.',
    'Tu plan: MAA presión, spears listos, Castle con knights propios + spears/halbs. Krepost para anclar el frente.',
    'No pelees knights francos 1v1 en campo sin spears. Raids de hussar (Stirrups) a farms francas funcionan muy bien.',
    'Si el franco axe-raidea tus buildings, repará y no persigas con aldeanos solos.',
  ],
  britons: [
    'Britanos = arqueros / longbow. MAA inicial molesta; después skirms + wall, Castle knights para flanquear ranges.',
    'No dejes que mass archers te denieguen el gold forward. Krepost cerca del medio ayuda.',
  ],
  mayans: [
    'Mayas = archers baratos + walls. MAA→skirms, no pelees la bola de plumes sin meat/siege.',
    'Castle: knights + mangonel/ram. Cuidado con eagle switches.',
  ],
  mongols: [
    'Mongoles = scouts agresivos + CA/siege. Spears tempranos OBLIGATORIOS. Wallá.',
    'En Castle no dejes que mangudai te kiten: knights + skirms o spearmen + skirms según composición.',
  ],
  huns: [
    'Hunos sin houses = scouts/CA rápidos. Spears + wall. Tus MAA pueden castigar si no wallan.',
    'Castle: knights vs CA funciona si no te rodean; añadí skirms.',
  ],
  ethiopians: [
    'Etíopes = archers + siege rápido. Skirms y presión para no quedar bajo mangonel.',
    'Castle knights para cerrar distancia.',
  ],
  goths: [
    'Godos = infantry flood. No pelees solo con infantry: knights + siege. Denegá su barrack production con pressure.',
  ],
  teutons: [
    'Teutones = knights tanky + monks en closed. En open, presión feudal. En Arena, prepare siege + konniks/halbs.',
  ],
  persians: [
    'Persas = eco TC + knights. Presión temprana paga. Spears vs knights; no ignores su boom.',
  ],
  cumans: [
    'Cumanos = 2 TC feudal / kipchaks. Scouteá el 2º TC; presión MAA puede castigar. En Castle, cuidado con kipchak mass — skirms + meat.',
  ],
  lithuanians: [
    'Lituanos = knights con attack por reliquias. Contestá reliquias, spears, y raids.',
  ],
  magyars: [
    'Magiares = scouts excelentes + CA. Spears y wall. Castle: skirms + knights.',
  ],
  turks: [
    'Turcos = gunpowder / FC a janissary en algunos maps. Presión feudal fuerte. No dejes que lleguen cómodos a su spike.',
  ],
  spanish: [
    'Españoles = conquistadores / monks. En Castle no pelees conbola de infantry sola vs conqs — usá skirms/pikemen según composición y raids.',
  ],
  berbers: [
    'Bereberes = camellos / camel archers. Tus knights sufren: más archers/skirms + konniks (el dismount ayuda vs camellos a veces) + siege.',
  ],
  saracens: [
    'Sarracenos = camellos / mamelukes / archers. Similar: no solo knights. Mix y raids.',
  ],
  hindustanis: [
    'Hindustaníes = camellos + ghulams. Evitá all-in knights; usá infantry upgrades (gratis en línea militia) + archers.',
  ],
  byzantines: [
    'Bizantinos = counters baratos (spear/skirm). Tu MAA presión sigue válida; en late usá siege y konniks para forzar.',
  ],
  chinese: [
    'Chinos = eco extra vil + archers. Presión temprana antes de que el eco hable. Skirms vs their archers.',
  ],
  vikings: [
    'Vikingos (rework) = infantry/water. En tierra, MAA mirror + knights. En water maps, no ignores docks.',
  ],
  romans: [
    'Romanos = infantry fuerte / centurions. No pelees infantry pura: knights + siege + krepost.',
  ],
  sicilians: [
    'Sicilianos = serjeants / reduced bonus damage. Presión y knights; cuidado con donjons/towers.',
  ],
  malians: [
    'Malíes = infantry con armor + eco. Skirms y knights; no pelees longsword maliense sin upgrades.',
  ],
  celts: [
    'Celtas = siege rápido + infantry. No dejes que el siege te abra la base: knights para snipe siege + pressure.',
  ],
  slavs: [
    'Eslavos = farms / boyars / infantry. Presión feudal; en Castle mix vs boyars (halbs + archers o konniks).',
  ],
  poles: [
    'Polacos = obuch / winged hussar potential. Spears y cuidado con el raid. Krepost ancla bien.',
  ],
  burgundians: [
    'Borgoñones = eco cav / coustilliers. Presión antes de su power spike; spears + skirms.',
  ],
  khmer: [
    'Jemeres = no building req + ballista elephants. Presión feudal; en Castle no dejes elephants libres — halbs + monks si podés.',
  ],
  vietnamese: [
    'Vietnamitas = archers tanky. Skirms + knights flank.',
  ],
  shu: [
    'Shu = arqueros fuertes (meta reciente). MAA→skirms, wall, Castle knights + mangonel.',
  ],
  wei: [
    'Wei = caballería. Spears tempranos, MAA pressure, Castle spears + knights/konniks + krepost.',
  ],
  wu: [
    'Wu = infantry. Mirror con tus bonuses de blacksmith/militia; añadí knights para raids.',
  ],
  khitans: [
    'Kitán = scouts / pasture eco / cavalry. Spears + wall; presión para no quedar atrás en eco.',
  ],
  jurchens: [
    'Yurchen = gunpowder / cav. Presión feudal; no dejes que el spike de pólvora te limpie sin siege/knights listos.',
  ],
  mapuche: [
    'Mapuche = caballería unconventional (Kona/Bolas). Spears y no pelees heridos en mala posición (Kona pega más a heridos).',
  ],
  muisca: [
    'Muisca = ranged / piety. Skirms + knights; cuidado con mass guecha.',
  ],
  tupi: [
    'Tupí = infantry/ranged baratos. Tus knights y siege castigan; no pelees solo infantry vs sus unique.',
  ],
  danes: [
    'Daneses = raids navales / jomsviking. En tierra, plan MAA/knights; en water, docks.',
  ],
  saxons: [
    'Sajones = infantry defensiva (Hearth Troop). Presión y knights para no pelear en su término.',
  ],
  varangians: [
    'Varangios = Jarl (cav con hacha). Spears + skirms; krepost para anclar.',
  ],
};

/** Planes búlgaros por map tag */
export const BULGARIAN_MAP: Record<MapTag, string[]> = {
  open: [
    'Arabia/open: MAA 20–21 → adapt (scouts o skirms) → Castle knights + krepost opcional en gold forward.',
    'Wall parcial detrás de la presión. Farms desde Feudal. Scout continuo del rival.',
    'Si el rival walla perfecto, no fuerces: skirms + click Castle limpio.',
  ],
  closed: [
    'Arena/Hideout: FC o semi-FC a Krepost/Castillo. Unique: Konniks + Stirrups.',
    'Monks + siege para el break. Piedra para krepost forward en el gap.',
    'Si hay gap temprano, un MAA sneak puede retrasar al rival en 1k.',
  ],
  hybrid: [
    'Híbrido: mismo plan open si hay pelea feudal; si hay lagos, 1 dock solo si el water importa de verdad.',
    'Usá bosques para wall barato y sacá knights.',
  ],
  water: [
    'Water: Búlgaros priorizan land. Fishing básico; no intentes ser Vikingos. Land MAA/knights decide muchas partidas 1k en hybrid-water.',
  ],
  nomad: [
    'Nómada: TC seguro, eco, después MAA o scouts según distancia al rival. Krepost es excelente para claimar un área.',
  ],
};

/** Entradas sólidas para civs populares (como my-civ) */
export const POPULAR_MY_CIV: Record<string, Partial<StrategyContent>> = {
  franks: {
    apertura: [
      'Francos 1k: 22 pop scouts es el plan más simple y efectivo. Farms gratis bonus ayuda el eco.',
      'Castle: knights (tu unidad). Bloodlines si lo tenés en path; no olvides armor.',
      'Axes para raid de buildings cuando haya espacio.',
    ],
    vsRival: [
      'Tu win condition: caballeros + raids. Vs camellos/halbs mass, añadí archers o light cav raids a eco.',
    ],
  },
  mayans: {
    apertura: [
      'Mayas: archers 22–24 pop, walls, eco de arqueros baratos. No hace falta all-in.',
      'Castle: crossbow + eagles para raids y mop-up.',
    ],
  },
  britons: {
    apertura: [
      'Britanos: archers + range más largo. Fletching temprano, 2 ranges, wall.',
      'Castle: xbow + ballistics. Capillary pressure con towers si el rival no responde.',
    ],
  },
  mongols: {
    apertura: [
      'Mongoles: scouts agresivos (hunt bonus). Presión feudal fuerte → CA o knights según rival.',
    ],
  },
  ethiopians: {
    apertura: [
      'Etíopes: archers + siege out rápido. 2 ranges, fletching, Castle mangonels/BBC path.',
    ],
  },
  huns: {
    apertura: [
      'Hunos: scouts sin houses stress. Presión continua → CA Castle. Map control > perfect BO.',
    ],
  },
  goths: {
    apertura: [
      'Godos: sobreviví Feudal (skirms/spear) → infantry flood Castle con barrack spam. Instant barracks bonus.',
    ],
  },
  persians: {
    apertura: [
      'Persas: eco de TC; scouts o FC. Castle knights / war elephants solo con mucho eco.',
    ],
  },
  cumans: {
    apertura: [
      'Cumanos: 2 TC feudal es tu identidad — practicá el timing. Kipchaks en Castle.',
    ],
  },
  lithuanians: {
    apertura: [
      'Lituanos: scouts/FC → knights. Reliquias = más attack. Priorizá monks en closed maps.',
    ],
  },
  romans: {
    apertura: [
      'Romanos: MAA/infantry sólida. Usá centurion buff en Castle. Eco estable + push infantry/siege.',
    ],
  },
  vikings: {
    apertura: [
      'Vikingos (rework): infantry + water strong. En Arabia, MAA/archers → berserks/ULF. En water, longboats.',
    ],
  },
  shu: {
    apertura: [
      'Shu: plan de arqueros. Feudal ranges limpios → power spike arqueros en Castle. Wall y eco.',
    ],
  },
  wei: {
    apertura: [
      'Wei: caballería. Scouts → knights / unique cav. Spears del rival son tu amenaza #1.',
    ],
  },
  wu: {
    apertura: [
      'Wu: infantry focus. MAA pressure y unique infantry en Castle. Blacksmith upgrades.',
    ],
  },
};

export function mergeStrategy(
  ...parts: Array<Partial<StrategyContent> | StrategyContent | undefined | null>
): StrategyContent {
  const base: StrategyContent = JSON.parse(JSON.stringify(GENERIC));
  for (const p of parts) {
    if (!p) continue;
    if (p.apertura?.length) base.apertura = p.apertura;
    if (p.planMapa?.length) base.planMapa = p.planMapa;
    if (p.vsRival?.length) base.vsRival = p.vsRival;
    if (p.erroresComunes?.length) base.erroresComunes = p.erroresComunes;
    if (p.tipsPartida?.feudal?.length) base.tipsPartida.feudal = p.tipsPartida.feudal;
    if (p.tipsPartida?.castle?.length) base.tipsPartida.castle = p.tipsPartida.castle;
    if (p.adaptaciones) {
      for (const key of Object.keys(base.adaptaciones) as (keyof StrategyContent['adaptaciones'])[]) {
        const v = p.adaptaciones[key];
        if (v?.length) base.adaptaciones[key] = v;
      }
    }
    if (p.timings) {
      base.timings = { ...(base.timings ?? {}), ...p.timings };
      for (const key of Object.keys(p.timings) as (keyof NonNullable<StrategyContent['timings']>)[]) {
        const v = p.timings[key];
        if (v?.length) base.timings![key] = v;
      }
    }
  }
  return base;
}
