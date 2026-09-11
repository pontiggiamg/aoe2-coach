import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

export interface ComboboxItem {
  id: string;
  label: string;
  sublabel?: string;
  keywords?: string[];
}

interface ComboboxProps {
  label: string;
  items: ComboboxItem[];
  value: string;
  onChange: (id: string) => void;
  placeholder?: string;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '');
}

export function Combobox({ label, items, value, onChange, placeholder }: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const selected = items.find((i) => i.id === value);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return items;
    return items.filter((i) => {
      const hay = normalize(
        [i.label, i.sublabel, ...(i.keywords ?? [])].filter(Boolean).join(' ')
      );
      return hay.includes(q) || q.split(/\s+/).every((part) => hay.includes(part));
    });
  }, [items, query]);

  useEffect(() => {
    setHighlight(0);
  }, [query, open]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  function pick(id: string) {
    onChange(id);
    setOpen(false);
    setQuery('');
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[highlight];
      if (item) pick(item.id);
    } else if (e.key === 'Escape') {
      setOpen(false);
      setQuery('');
    }
  }

  return (
    <div ref={rootRef} className="relative flex flex-col gap-1.5">
      <label className="text-sm font-semibold tracking-wide text-amber-500/90">{label}</label>
      <div
        className={`flex min-h-11 items-center gap-2 rounded-lg border bg-slate-900/80 px-3 py-2.5 shadow-inner transition touch-manipulation
          ${open ? 'border-amber-500 ring-1 ring-amber-500/40' : 'border-slate-600 hover:border-slate-500'}`}
      >
        <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
        <input
          ref={inputRef}
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          className="min-w-0 flex-1 bg-transparent text-base text-slate-100 outline-none placeholder:text-slate-500"
          placeholder={selected ? selected.label : placeholder ?? 'Buscar…'}
          value={open ? query : selected?.label ?? ''}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setOpen(true);
            setQuery('');
          }}
          onKeyDown={onKeyDown}
        />
        {value && (
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-slate-400 touch-manipulation hover:bg-slate-700 hover:text-slate-200"
            aria-label="Limpiar"
            onClick={() => {
              onChange('');
              setQuery('');
              inputRef.current?.focus();
            }}
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition ${open ? 'rotate-180' : ''}`} />
      </div>
      {selected?.sublabel && !open && (
        <span className="text-xs text-slate-400">{selected.sublabel}</span>
      )}
      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute top-full z-50 mt-1 max-h-[min(50dvh,16rem)] w-full overflow-auto overscroll-contain rounded-lg border border-slate-600 bg-slate-900 py-1 shadow-xl touch-manipulation sm:max-h-64"
        >
          {filtered.length === 0 && (
            <li className="px-3 py-3 text-sm text-slate-400">Sin resultados</li>
          )}
          {filtered.map((item, idx) => (
            <li
              key={item.id}
              role="option"
              aria-selected={item.id === value}
              className={`cursor-pointer px-3 py-3 text-base touch-manipulation ${
                idx === highlight ? 'bg-amber-500/20 text-amber-100' : 'text-slate-200 hover:bg-slate-800'
              } ${item.id === value ? 'font-semibold' : ''}`}
              onMouseEnter={() => setHighlight(idx)}
              onMouseDown={(e) => {
                e.preventDefault();
                pick(item.id);
              }}
            >
              <div>{item.label}</div>
              {item.sublabel && <div className="text-xs text-slate-400">{item.sublabel}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
