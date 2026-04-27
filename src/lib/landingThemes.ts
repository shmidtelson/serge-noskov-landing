/** Активная тема лендинга: современный градиент (aurora). */
export type LandingVariant = 'aurora';

export type LandingTheme = {
  label: string;
  blurb: string;
  page: string;
  bg1: string;
  bg1Style?: string;
  bg2: string;
  bg2Style: string;
  kicker: string;
  h1: string;
  h2: string;
  lead: string;
  cta: string;
  imageFrame: string;
  deco: string;
  painSection: string;
  painTitle: string;
  painCard: string;
  painIcon: string;
  painText: string;
  bridge: string;
  trustTitle: string;
  row: string;
  iconBox: string;
  rowText: string;
  listBox: string;
  listKicker: string;
  listText: string;
  check: string;
  finalSection: string;
  finalH: string;
  finalP: string;
  finalCta: string;
  finalNote: string;
  placeholder: string;
  /** фон плейсхолдера, если нет фото */
  emptyPhoto: string;
};

const heading = '[font-family:var(--font-landing-serif),Georgia,serif]';

export const LANDING_THEMES: Record<LandingVariant, LandingTheme> = {
  aurora: {
    label: 'Современный градиент',
    blurb: 'Мягкие переливы, стеклянные карточки, дружелюбный digital-стиль.',
    page: 'relative min-h-screen overflow-x-hidden text-slate-800 [font-family:var(--font-landing),ui-sans-serif,system-ui,sans-serif]',
    bg1: 'pointer-events-none fixed inset-0 -z-10',
    bg1Style:
      'background: linear-gradient(135deg, #e0e7ff 0%, #fae8ff 40%, #e0f2fe 100%)',
    bg2: 'pointer-events-none fixed inset-0 -z-10 opacity-50',
    bg2Style: `background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    kicker: 'text-base font-semibold uppercase tracking-[0.2em] text-indigo-600/85 sm:text-lg',
    h1: `${heading} text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]`,
    h2: `${heading} text-3xl font-bold sm:text-4xl`,
    lead: 'text-lg leading-relaxed text-slate-600 sm:text-xl',
    cta: 'group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
    imageFrame:
      'relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/60 bg-white/30 shadow-xl shadow-indigo-500/10 ring-1 ring-white/50 backdrop-blur sm:ml-auto sm:max-w-md',
    deco: 'absolute -bottom-3 -right-2 hidden h-20 w-20 rounded-3xl bg-gradient-to-br from-indigo-400/30 to-violet-400/30 blur-xl sm:block',
    painSection: 'relative border-y border-white/50 bg-white/40 py-20 backdrop-blur-md',
    painTitle: 'text-slate-900',
    painCard: 'flex gap-3 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur',
    painIcon: 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm text-indigo-700',
    painText: 'leading-relaxed text-slate-600',
    bridge: 'mt-12 max-w-3xl text-lg leading-relaxed text-slate-600',
    trustTitle: 'text-slate-900',
    row: 'flex gap-4 rounded-2xl border border-white/50 bg-white/60 p-5 shadow-sm backdrop-blur sm:gap-5 sm:p-6',
    iconBox: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md',
    rowText: 'pt-0.5 leading-relaxed text-slate-600',
    listBox: 'mt-14 rounded-3xl border border-white/50 bg-white/50 p-6 shadow-lg backdrop-blur sm:p-8',
    listKicker: 'text-sm font-semibold uppercase tracking-widest text-indigo-600',
    listText: 'flex gap-3 text-slate-700',
    check: 'mt-0.5 h-5 w-5 shrink-0 text-indigo-600',
    finalSection: 'border-t border-white/30 bg-gradient-to-b from-slate-900 to-indigo-950 py-20 text-white',
    finalH: `${heading} text-3xl font-bold text-white sm:text-4xl`,
    finalP: 'text-lg leading-relaxed text-indigo-100/90',
    finalCta:
      'group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50',
    finalNote: 'text-sm text-indigo-200/80',
    placeholder: 'text-indigo-600',
    emptyPhoto:
      'flex h-full min-h-[20rem] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-indigo-200 bg-white/50 p-8 text-center backdrop-blur',
  },
};
