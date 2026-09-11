import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Clock, ExternalLink, Pencil, RotateCcw, Sparkles } from 'lucide-react';
import { Combobox } from './components/Combobox';
import { StrategyPanels } from './components/StrategyPanels';
import { CIVS, CIV_BY_ID, DEFAULT_MY_CIV } from './data/civs';
import { MAPS, MAP_BY_ID, MAP_TAG_LABELS } from './data/maps';
import { META } from './data/meta';
import { resolveStrategy } from './lib/resolveStrategy';
import { loadState, pushRecent, saveState } from './lib/storage';

function App() {
  const initial = loadState();
  const [myCivId, setMyCivId] = useState(initial.myCivId || DEFAULT_MY_CIV);
  const [oppCivId, setOppCivId] = useState(initial.oppCivId);
  const [mapId, setMapId] = useState(initial.mapId);
  const [recents, setRecents] = useState(initial.recents);
  /** Mobile: after matchup ready, selectors collapse into a compact bar unless expanded. */
  const [selectorsExpanded, setSelectorsExpanded] = useState(false);

  const civItems = useMemo(
    () =>
      CIVS.map((c) => ({
        id: c.id,
        label: c.nameEs,
        sublabel: c.name,
        keywords: c.keywords,
      })).sort((a, b) => a.label.localeCompare(b.label, 'es')),
    []
  );

  const mapItems = useMemo(
    () =>
      MAPS.map((m) => ({
        id: m.id,
        label: m.nameEs,
        sublabel: `${m.name} · ${MAP_TAG_LABELS[m.tag]}${m.inReferencePool ? ' · pool ref.' : ''}`,
        keywords: m.keywords,
      })).sort((a, b) => a.label.localeCompare(b.label, 'es')),
    []
  );

  const ready = Boolean(myCivId && oppCivId && mapId);
  const myCiv = CIV_BY_ID[myCivId];
  const oppCiv = CIV_BY_ID[oppCivId];
  const map = MAP_BY_ID[mapId];

  const coaching = useMemo(() => {
    if (!myCiv || !oppCiv || !map) return null;
    return resolveStrategy(myCiv, oppCiv, map);
  }, [myCiv, oppCiv, map]);

  useEffect(() => {
    saveState({ myCivId, oppCivId, mapId, recents });
  }, [myCivId, oppCivId, mapId, recents]);

  useEffect(() => {
    if (!myCivId || !oppCivId || !mapId) return;
    setRecents((prev) => {
      const next = pushRecent(
        { myCivId, oppCivId, mapId, recents: prev },
        { myCivId, oppCivId, mapId }
      );
      return next.recents;
    });
  }, [myCivId, oppCivId, mapId]);

  // When matchup becomes ready, collapse selectors on mobile so content is not covered.
  useEffect(() => {
    if (ready) setSelectorsExpanded(false);
  }, [ready, myCivId, oppCivId, mapId]);

  function loadRecent(r: { myCivId: string; oppCivId: string; mapId: string }) {
    setMyCivId(r.myCivId);
    setOppCivId(r.oppCivId);
    setMapId(r.mapId);
    setSelectorsExpanded(false);
  }

  function reset() {
    setMyCivId(DEFAULT_MY_CIV);
    setOppCivId('');
    setMapId('');
    setSelectorsExpanded(true);
  }

  const compactLabel =
    ready && myCiv && oppCiv && map
      ? `${myCiv.nameEs} vs ${oppCiv.nameEs} · ${map.nameEs}`
      : null;

  /** On mobile with a ready matchup and not editing: show compact bar only. */
  const showCompactBar = ready && !selectorsExpanded;
  /** Full selectors: always on desktop; on mobile when not ready or expanded. */
  const showFullSelectors = !ready || selectorsExpanded;

  return (
    <div className="min-h-screen min-h-dvh bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(180,140,40,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-safe pt-safe sm:px-6 sm:py-10">
        <header className="mb-6 pt-4 sm:mb-8 sm:pt-0">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/80">
                <Sparkles className="h-3.5 w-3.5" />
                AoE2 DE · Ranked 1v1
              </p>
              <h1 className="text-3xl font-black tracking-tight text-amber-400 sm:text-4xl">
                Coach local
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                Elegí tu civ, el rival y el mapa. Tips prácticos para Elo 1000–1100 en español.
                Sin win rates inventados — solo coaching cualitativo.
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-300 touch-manipulation hover:border-amber-500/50 hover:text-amber-200"
            >
              <RotateCcw className="h-4 w-4" />
              Reset (Búlgaros)
            </button>
          </div>
        </header>

        <div className="mb-4 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs text-amber-200/90">
          <Clock className="mr-1 inline h-3.5 w-3.5" />
          <span className="sm:hidden">
            El pool ranked rota ~cada 2 semanas. Incluye pool de referencia y mapas frecuentes.
          </span>
          <span className="hidden sm:inline">
            El pool de mapas ranked rota aproximadamente cada 2 semanas. La lista incluye el pool de
            referencia (Acropolis, Arabia, Arena, Four Lakes, Gold Rush, Hideout, Islands) y otros
            mapas frecuentes de rotación. Actualizá{' '}
            <code className="text-amber-300">src/data/maps.ts</code> cuando cambie el pool.
          </span>
        </div>

        {/* Sticky matchup bar — compact on mobile when ready so it never covers strategy text */}
        <section className="sticky top-0 z-40 mb-8">
          {/* Compact bar: mobile only when matchup ready and collapsed */}
          {showCompactBar && compactLabel && (
            <button
              type="button"
              onClick={() => setSelectorsExpanded(true)}
              className="flex w-full min-h-11 items-center justify-between gap-3 rounded-xl border border-amber-500/40 bg-slate-900/95 px-3 py-2.5 text-left shadow-xl backdrop-blur-md touch-manipulation sm:hidden"
              aria-expanded={false}
              aria-label="Editar matchup"
            >
              <span className="min-w-0 truncate text-sm font-semibold text-amber-100">
                {compactLabel}
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                <Pencil className="h-3.5 w-3.5" />
                Editar
              </span>
            </button>
          )}

          {/* Full selectors: always visible on sm+; on mobile when picking or editing */}
          <div
            className={`${
              showFullSelectors ? 'grid' : 'hidden'
            } gap-4 rounded-xl border border-slate-700 bg-slate-900/95 p-4 shadow-xl backdrop-blur-md sm:!grid sm:static sm:bg-slate-900/70 sm:backdrop-blur-none sm:grid-cols-3`}
          >
            {ready && (
              <div className="flex items-center justify-between gap-2 sm:hidden col-span-full -mt-1 mb-1">
                <p className="text-xs font-medium text-slate-400">Editá el matchup</p>
                <button
                  type="button"
                  onClick={() => setSelectorsExpanded(false)}
                  className="inline-flex min-h-9 items-center gap-1 rounded-md border border-slate-600 px-2.5 py-1.5 text-xs text-slate-300 touch-manipulation"
                >
                  Listo
                  <ChevronDown className="h-3.5 w-3.5 rotate-180" />
                </button>
              </div>
            )}
            <Combobox
              label="Mi civ"
              items={civItems}
              value={myCivId}
              onChange={setMyCivId}
              placeholder="Buscar mi civilización…"
            />
            <Combobox
              label="Rival"
              items={civItems}
              value={oppCivId}
              onChange={setOppCivId}
              placeholder="Buscar civ rival…"
            />
            <Combobox
              label="Mapa"
              items={mapItems}
              value={mapId}
              onChange={setMapId}
              placeholder="Buscar mapa…"
            />
          </div>

          {/* Desktop always shows full selectors above; compact bar is mobile-only.
              When collapsed on mobile, add a tiny spacer note is unnecessary. */}
        </section>

        {recents.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-2 text-sm font-semibold text-slate-400">Matchups recientes</h2>
            <div className="flex flex-wrap gap-2">
              {recents.map((r) => {
                const a = CIV_BY_ID[r.myCivId]?.nameEs ?? r.myCivId;
                const b = CIV_BY_ID[r.oppCivId]?.nameEs ?? r.oppCivId;
                const m = MAP_BY_ID[r.mapId]?.nameEs ?? r.mapId;
                return (
                  <button
                    key={`${r.myCivId}-${r.oppCivId}-${r.mapId}-${r.at}`}
                    type="button"
                    onClick={() => loadRecent(r)}
                    className="min-h-10 rounded-full border border-slate-600 bg-slate-900 px-3 py-2 text-xs text-slate-300 touch-manipulation hover:border-amber-500/60 hover:text-amber-200"
                  >
                    {a} vs {b} · {m}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {!ready && (
          <div className="rounded-xl border border-dashed border-slate-600 bg-slate-900/40 px-6 py-16 text-center">
            <p className="text-lg text-slate-300">Elegí Mi civ, Rival y Mapa para ver el plan.</p>
            <p className="mt-2 text-sm text-slate-500">
              Tip: escribí “bul”, “fran”, “ara” para filtrar al instante.
            </p>
          </div>
        )}

        {ready && coaching && (
          <StrategyPanels
            content={coaching.content}
            resolutionPath={coaching.resolutionPath}
            title={`${myCiv.nameEs} vs ${oppCiv.nameEs} en ${map.nameEs}`}
          />
        )}

        <footer className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
              Patch {META.patchId}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-900 px-3 py-1 text-xs text-slate-400">
              Revisado {META.lastReviewed}
            </span>
          </div>
          <p className="mb-2 text-xs text-slate-500">{META.notes}</p>
          <p className="mb-2 font-semibold text-slate-400">Fuentes y datos</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {META.sources.map((s) => (
              <li key={s.url}>
                <a
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 py-2.5 text-amber-500/90 touch-manipulation hover:bg-slate-800 hover:text-amber-400"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-600">
            App 100% local · {CIVS.length} civs · {MAPS.length} mapas · Coaching cualitativo para
            ranked RM 1v1 · Actualizá <code className="text-slate-500">src/data/meta.ts</code> tras
            cada patch
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
