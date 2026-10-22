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
  patchId: 'Update 185872 (22 sep 2026, The Viking Sagas)',
  lastReviewed: '2026-10-22',
  notes:
    'Update 185872: Ballestero montado reemplaza al arquero a caballo en 12 civs europeas (+Cranequins), Varangian Guard, nuevas civs Daneses/Sajones/Varangios, Onager 55 atk/8 PA, rework Stand Ground Patrol. Búlgaros sin cambios directos. Sin parches de balance posteriores al 22/10. Pool 1v1 observado: Arabia, Arena, Arabian Desert, Nomad, Socotra.',
  sources: [
    { label: 'Update 185872', url: 'https://www.ageofempires.com/news/age-of-empires-ii-definitive-edition-update-185872/' },
    { label: 'aoe2ladder mapas', url: 'https://aoe2ladder.com/recaps/maps' },
    { label: 'aoestats.io', url: 'https://aoestats.io' },
    { label: 'aoe2insights', url: 'https://www.aoe2insights.com' },
    { label: 'Noticias oficiales AoE', url: 'https://www.ageofempires.com/news/' },
  ],
};
