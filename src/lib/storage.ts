const KEY = 'aoe2-coach-v1';

export interface StoredState {
  myCivId: string;
  oppCivId: string;
  mapId: string;
  recents: Array<{
    myCivId: string;
    oppCivId: string;
    mapId: string;
    at: number;
  }>;
}

const DEFAULT: StoredState = {
  myCivId: 'bulgarians',
  oppCivId: '',
  mapId: '',
  recents: [],
};

export function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT };
    const parsed = JSON.parse(raw) as StoredState;
    return {
      myCivId: parsed.myCivId || 'bulgarians',
      oppCivId: parsed.oppCivId || '',
      mapId: parsed.mapId || '',
      recents: Array.isArray(parsed.recents) ? parsed.recents.slice(0, 5) : [],
    };
  } catch {
    return { ...DEFAULT };
  }
}

export function saveState(state: StoredState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify({
      ...state,
      recents: state.recents.slice(0, 5),
    }));
  } catch {
    /* ignore quota */
  }
}

export function pushRecent(
  state: StoredState,
  entry: { myCivId: string; oppCivId: string; mapId: string }
): StoredState {
  const filtered = state.recents.filter(
    (r) =>
      !(
        r.myCivId === entry.myCivId &&
        r.oppCivId === entry.oppCivId &&
        r.mapId === entry.mapId
      )
  );
  return {
    ...state,
    ...entry,
    recents: [{ ...entry, at: Date.now() }, ...filtered].slice(0, 5),
  };
}
