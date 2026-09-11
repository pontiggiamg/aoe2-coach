import type { ReactNode } from 'react';
import type { StrategyContent, TimingCheckpoints } from '../data/types';
import {
  Crosshair,
  Map,
  Swords,
  RefreshCw,
  ListChecks,
  AlertTriangle,
  Timer,
} from 'lucide-react';

interface Props {
  content: StrategyContent;
  resolutionPath: string[];
  title: string;
}

function Panel({
  icon,
  title,
  children,
  accent = 'amber',
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  accent?: 'amber' | 'sky' | 'rose' | 'emerald' | 'violet' | 'orange' | 'cyan';
}) {
  const accents = {
    amber: 'border-amber-500/40 from-amber-500/10',
    sky: 'border-sky-500/40 from-sky-500/10',
    rose: 'border-rose-500/40 from-rose-500/10',
    emerald: 'border-emerald-500/40 from-emerald-500/10',
    violet: 'border-violet-500/40 from-violet-500/10',
    orange: 'border-orange-500/40 from-orange-500/10',
    cyan: 'border-cyan-500/40 from-cyan-500/10',
  };
  return (
    <section
      className={`min-w-0 overflow-hidden rounded-xl border bg-gradient-to-br ${accents[accent]} to-slate-900/80 p-4 shadow-lg`}
    >
      <header className="mb-3 flex items-center gap-2">
        <span className="shrink-0 text-amber-400">{icon}</span>
        <h2 className="min-w-0 text-base font-bold tracking-wide text-amber-100 sm:text-lg">{title}</h2>
      </header>
      {children}
    </section>
  );
}

/** Render inline **bold** markers for timing numbers / emphasis. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-bold text-amber-200">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function Bullets({ items, rich = false }: { items: string[]; rich?: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed break-words text-slate-200">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
          <span className="min-w-0">{rich ? <RichText text={t} /> : t}</span>
        </li>
      ))}
    </ul>
  );
}

const TIMING_PHASES: Array<{ key: keyof TimingCheckpoints; label: string }> = [
  { key: 'dark', label: 'Dark Age' },
  { key: 'feudalEarly', label: 'Feudal temprano' },
  { key: 'feudalMid', label: 'Feudal medio' },
  { key: 'castleClick', label: 'Click a Castillos' },
  { key: 'castleMid', label: 'Mitad de Castillos' },
  { key: 'late', label: 'Late / Imp' },
];

function TimingsPanel({ timings }: { timings: TimingCheckpoints }) {
  const phases = TIMING_PHASES.filter((p) => (timings[p.key]?.length ?? 0) > 0);
  if (phases.length === 0) return null;

  return (
    <Panel icon={<Timer className="h-5 w-5" />} title="Checkpoints de timing" accent="cyan">
      <p className="mb-3 text-xs text-slate-400">
        Mirada rápida en partida (Elo ~1000–1100). Números en negrita = anclas concretas.
      </p>
      <div className="space-y-3">
        {phases.map(({ key, label }) => (
          <div key={key} className="rounded-lg border border-cyan-500/20 bg-slate-950/40 px-3 py-2">
            <h3 className="mb-1.5 text-sm font-semibold text-cyan-300">{label}</h3>
            <Bullets items={timings[key]!} rich />
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function StrategyPanels({ content, resolutionPath, title }: Props) {
  const adaptEntries: Array<{ key: keyof StrategyContent['adaptaciones']; label: string }> = [
    { key: 'archers', label: 'Si rival va arqueros' },
    { key: 'scouts', label: 'Si rival va scouts' },
    { key: 'maa', label: 'Si rival va MAA' },
    { key: 'fc', label: 'Si rival va Fast Castle' },
    { key: 'towers', label: 'Si rival va torres' },
    { key: 'water', label: 'Si hay agua / docks' },
  ];

  return (
    <div className="min-w-0 space-y-4 overflow-x-hidden">
      <div className="min-w-0 overflow-hidden rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3">
        <h1 className="break-words text-xl font-bold text-amber-400 sm:text-2xl">{title}</h1>
        <p className="mt-1 break-words text-xs text-slate-400">
          <span className="sm:hidden">Elo ~1000–1100 · Sin win rates inventados</span>
          <span className="hidden sm:inline">
            Resolución: {resolutionPath.join(' → ')} · Elo objetivo ~1000–1100 · Sin win rates inventados
          </span>
        </p>
      </div>

      {content.timings && <TimingsPanel timings={content.timings} />}

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <Panel icon={<Swords className="h-5 w-5" />} title="1. Apertura / Build order" accent="amber">
          <Bullets items={content.apertura} />
        </Panel>
        <Panel icon={<Map className="h-5 w-5" />} title="2. Plan del mapa" accent="sky">
          <Bullets items={content.planMapa} />
        </Panel>
        <Panel icon={<Crosshair className="h-5 w-5" />} title="3. Vs rival" accent="rose">
          <Bullets items={content.vsRival} />
        </Panel>
        <Panel icon={<RefreshCw className="h-5 w-5" />} title="4. Adaptaciones" accent="violet">
          <div className="space-y-3">
            {adaptEntries.map(({ key, label }) => (
              <div key={key}>
                <h3 className="mb-1 text-sm font-semibold text-violet-300">{label}</h3>
                <Bullets items={content.adaptaciones[key]} />
              </div>
            ))}
          </div>
        </Panel>
        <Panel icon={<ListChecks className="h-5 w-5" />} title="5. Tips en partida" accent="emerald">
          <h3 className="mb-1 text-sm font-semibold text-emerald-300">Feudal</h3>
          <Bullets items={content.tipsPartida.feudal} />
          <h3 className="mb-1 mt-3 text-sm font-semibold text-emerald-300">Castle</h3>
          <Bullets items={content.tipsPartida.castle} />
        </Panel>
        <Panel icon={<AlertTriangle className="h-5 w-5" />} title="6. Errores comunes ~1k Elo" accent="orange">
          <Bullets items={content.erroresComunes} />
        </Panel>
      </div>
    </div>
  );
}
