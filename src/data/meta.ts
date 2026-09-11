/** Patch / meta review — update after each AoE2 DE balance patch. */
export interface PatchMeta {
  /** Official patch id or name, e.g. "Update 153015" or "September 2026 balance" */
  patchId: string;
  /** ISO date (YYYY-MM-DD) of last coaching review */
  lastReviewed: string;
  notes: string;
  sources: Array<{ label: string; url: string }>;
}

export const META: PatchMeta = {
  patchId: 'Update 153015 (ref. Sep 2026)',
  lastReviewed: '2026-09-11',
  notes:
    'Coaching cualitativo Elo 1000–1100. Revisar timings y tip list tras cada balance patch; no inventar win rates.',
  sources: [
    { label: 'aoestats.io', url: 'https://aoestats.io' },
    { label: 'aoe2insights', url: 'https://www.aoe2insights.com' },
    { label: 'Noticias oficiales AoE', url: 'https://www.ageofempires.com/news/' },
  ],
};
