/**
 * Визуальные темы лендинга. Добавьте ключ в LandingVariant + страницу в src/pages/<slug>/
 */
export type LandingVariant = 'classic' | 'midnight' | 'nordic' | 'editorial' | 'aurora';

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
  classic: {
    label: 'Тёплая, «школа + дом»',
    blurb: 'Крем, лесной зелёный, золотистый акцент. Как сейчас на главной.',
    page: 'relative min-h-screen overflow-x-hidden text-[#1c1916] [font-family:var(--font-landing),ui-sans-serif,system-ui,sans-serif]',
    bg1: 'pointer-events-none fixed inset-0 -z-10 bg-[#f7f4ef]',
    bg1Style:
      'background-image: radial-gradient(1200px 600px at 10% 0%, rgba(196, 165, 116, 0.18) 0%, transparent 50%), radial-gradient(900px 500px at 100% 20%, rgba(45, 74, 62, 0.12) 0%, transparent 50%)',
    bg2: 'pointer-events-none fixed inset-0 -z-10 opacity-[0.35]',
    bg2Style: `background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d4a3e' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    kicker: 'text-sm font-medium uppercase tracking-[0.2em] text-[#2d4a3e]/80',
    h1: `${heading} text-4xl font-semibold leading-tight text-[#141210] sm:text-5xl lg:text-[3.25rem]`,
    h2: `${heading} text-3xl font-semibold sm:text-4xl`,
    lead: 'text-lg leading-relaxed text-[#3d3833] sm:text-xl',
    cta: 'group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2d4a3e] to-[#1e3d32] px-7 py-4 text-base font-semibold text-[#f7f4ef] shadow-[0_12px_40px_-12px_rgba(30,61,50,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-12px_rgba(30,61,50,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]',
    imageFrame:
      'relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-white/50 to-white/5 shadow-[0_32px_80px_-24px_rgba(30,61,50,0.45)] sm:ml-auto sm:max-w-md',
    deco: 'absolute -bottom-4 -right-2 hidden h-24 w-24 rounded-3xl border border-[#c4a574]/30 bg-[#c4a574]/20 sm:block',
    painSection: 'relative border-y border-[#2d4a3e]/10 bg-white/50 py-20 backdrop-blur-sm',
    painTitle: 'text-[#141210]',
    trustTitle: 'text-[#141210]',
    painCard:
      'flex gap-3 rounded-2xl border border-[#2d4a3e]/10 bg-[#f7f4ef]/80 p-5 shadow-sm',
    painIcon: 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2d4a3e]/10 text-sm text-[#2d4a3e]',
    painText: 'leading-relaxed text-[#3d3833]',
    bridge: 'mt-12 max-w-3xl text-lg leading-relaxed text-[#3d3833]',
    row: 'flex gap-4 rounded-2xl border border-[#c4a574]/25 bg-gradient-to-r from-white/60 to-[#f7f4ef]/60 p-5 sm:gap-5 sm:p-6',
    iconBox: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2d4a3e] text-[#f7f4ef]',
    rowText: 'pt-0.5 leading-relaxed text-[#3d3833]',
    listBox: 'mt-14 rounded-[2rem] border border-[#2d4a3e]/12 bg-white/60 p-6 sm:p-8',
    listKicker: 'text-sm font-semibold uppercase tracking-widest text-[#2d4a3e]',
    listText: 'flex gap-3 text-[#3d3833]',
    check: 'mt-0.5 h-5 w-5 shrink-0 text-[#2d4a3e]',
    finalSection:
      'border-t border-[#2d4a3e]/10 bg-gradient-to-b from-[#2d4a3e] to-[#1a2f28] py-20 text-[#f0ebe3]',
    finalH: `${heading} text-3xl font-semibold text-[#f0ebe3] sm:text-4xl`,
    finalP: 'text-lg leading-relaxed text-[#d8cfc3]',
    finalCta:
      'group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f7f4ef] px-7 py-4 text-base font-semibold text-[#1a2f28] shadow-lg transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]',
    finalNote: 'text-sm text-[#a89f94]',
    placeholder: 'text-[#2d4a3e]',
    emptyPhoto:
      'flex h-full min-h-[20rem] w-full flex-col items-center justify-center bg-gradient-to-br from-[#e8dfd2] via-[#d4c4ad] to-[#2d4a3e] p-8 text-center',
  },
  midnight: {
    label: 'Ночь и янтарь',
    blurb: 'Тёмный фон, золотистый акцент, ощущение «эксперт в студии».',
    page: 'relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 [font-family:var(--font-landing),ui-sans-serif,system-ui,sans-serif]',
    bg1: 'pointer-events-none fixed inset-0 -z-10',
    bg1Style:
      'background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245, 158, 11, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(59, 130, 246, 0.12), transparent), #020617',
    bg2: 'pointer-events-none fixed inset-0 -z-10 opacity-30',
    bg2Style: `background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0z' fill='rgba(148,163,184,0.12)'/%3E%3C/svg%3E")`,
    kicker: 'text-sm font-medium uppercase tracking-[0.25em] text-amber-200/80',
    h1: `${heading} text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.25rem]`,
    h2: `${heading} text-3xl font-semibold sm:text-4xl`,
    lead: 'text-lg leading-relaxed text-slate-300 sm:text-xl',
    cta: 'group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-amber-900/30 transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300',
    imageFrame:
      'relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-amber-500/20 bg-slate-900/50 shadow-2xl shadow-amber-950/40 sm:ml-auto sm:max-w-md',
    deco: 'absolute -bottom-4 -right-2 hidden h-20 w-20 rounded-2xl border border-amber-500/20 bg-amber-500/10 sm:block',
    painSection: 'relative border-y border-slate-800/80 bg-slate-900/40 py-20 backdrop-blur-sm',
    painTitle: 'text-white',
    painCard: 'flex gap-3 rounded-2xl border border-slate-700/60 bg-slate-800/40 p-5 shadow-sm',
    painIcon: 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm text-amber-200',
    painText: 'leading-relaxed text-slate-300',
    bridge: 'mt-12 max-w-3xl text-lg leading-relaxed text-slate-300',
    trustTitle: 'text-white',
    row: 'flex gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/30 p-5 sm:gap-5 sm:p-6',
    iconBox: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-200',
    rowText: 'pt-0.5 leading-relaxed text-slate-300',
    listBox: 'mt-14 rounded-2xl border border-slate-700/50 bg-slate-800/25 p-6 sm:p-8',
    listKicker: 'text-sm font-semibold uppercase tracking-widest text-amber-200/90',
    listText: 'flex gap-3 text-slate-200',
    check: 'mt-0.5 h-5 w-5 shrink-0 text-amber-400',
    finalSection: 'border-t border-slate-800 bg-gradient-to-b from-slate-900 to-black py-20',
    finalH: `${heading} text-3xl font-semibold text-white sm:text-4xl`,
    finalP: 'text-lg leading-relaxed text-slate-400',
    finalCta:
      'group inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-7 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400',
    finalNote: 'text-sm text-slate-500',
    placeholder: 'text-amber-200/80',
    emptyPhoto:
      'flex h-full min-h-[20rem] w-full flex-col items-center justify-center bg-slate-800/80 p-8 text-center',
  },
  nordic: {
    label: 'Скандинавский минимум',
    blurb: 'Много воздуха, белый фон, чёткая типографика, спокойный зелёный акцент.',
    page: 'relative min-h-screen overflow-x-hidden bg-[#fafaf9] text-stone-900 [font-family:var(--font-landing),ui-sans-serif,system-ui,sans-serif]',
    bg1: 'pointer-events-none fixed inset-0 -z-10 bg-[#fafaf9]',
    bg1Style: '',
    bg2: 'pointer-events-none fixed inset-0 -z-10',
    bg2Style: 'background-image: linear-gradient(180deg, rgba(22, 101, 52, 0.04) 0%, transparent 35%)',
    kicker: 'text-sm font-medium uppercase tracking-[0.2em] text-[#166534]/80',
    h1: `${heading} text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-[3.25rem]`,
    h2: `${heading} text-3xl font-semibold sm:text-4xl`,
    lead: 'text-lg leading-relaxed text-stone-600 sm:text-xl',
    cta: 'group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#166534] bg-[#166534] px-7 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#14532d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#166534]',
    imageFrame:
      'relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] sm:ml-auto sm:max-w-md',
    deco: 'absolute -bottom-3 -right-2 hidden h-16 w-16 rounded-lg bg-[#166534]/10 sm:block',
    painSection: 'border-y border-stone-200 bg-white py-20',
    painTitle: 'text-stone-900',
    painCard: 'flex gap-3 rounded-lg border border-stone-200 bg-stone-50/80 p-5',
    painIcon: 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#166534]/10 text-sm text-[#166534]',
    painText: 'leading-relaxed text-stone-600',
    bridge: 'mt-12 max-w-3xl text-lg leading-relaxed text-stone-600',
    trustTitle: 'text-stone-900',
    row: 'flex gap-4 rounded-lg border border-stone-200 bg-white p-5 sm:gap-5 sm:p-6',
    iconBox: 'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#166534] text-white',
    rowText: 'pt-0.5 leading-relaxed text-stone-600',
    listBox: 'mt-14 rounded-lg border border-stone-200 bg-stone-50 p-6 sm:p-8',
    listKicker: 'text-sm font-semibold uppercase tracking-widest text-[#166534]',
    listText: 'flex gap-3 text-stone-700',
    check: 'mt-0.5 h-5 w-5 shrink-0 text-[#166534]',
    finalSection: 'border-t border-stone-200 bg-stone-900 py-20 text-stone-50',
    finalH: `${heading} text-3xl font-semibold text-white sm:text-4xl`,
    finalP: 'text-lg leading-relaxed text-stone-300',
    finalCta:
      'group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-100',
    finalNote: 'text-sm text-stone-500',
    placeholder: 'text-[#166534]',
    emptyPhoto:
      'flex h-full min-h-[20rem] w-full flex-col items-center justify-center border border-dashed border-stone-300 bg-stone-100 p-8 text-center',
  },
  editorial: {
    label: 'Редакция / журнал',
    blurb: 'Бумажный фон, жирные заголовки, терракота и тонкая сетка.',
    page: 'relative min-h-screen overflow-x-hidden bg-[#f4efe6] text-[#1a1a1a] [font-family:var(--font-landing),ui-sans-serif,system-ui,sans-serif]',
    bg1: 'pointer-events-none fixed inset-0 -z-10 bg-[#f4efe6]',
    bg1Style: '',
    bg2: 'pointer-events-none fixed inset-0 -z-10',
    bg2Style: `background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0z' fill='%23c4a18a' fill-opacity='0.12'/%3E%3C/svg%3E")`,
    kicker: 'text-sm font-bold uppercase tracking-widest text-[#8b3a1f]/80',
    h1: `${heading} text-4xl font-bold leading-[1.1] text-[#0f0f0f] sm:text-5xl lg:text-[3.5rem]`,
    h2: `${heading} text-3xl font-bold sm:text-4xl`,
    lead: 'text-lg leading-relaxed text-stone-700 sm:text-xl',
    cta: 'group inline-flex items-center justify-center gap-2 border-2 border-[#0f0f0f] bg-[#0f0f0f] px-7 py-4 text-base font-bold text-[#f4efe6] transition hover:-translate-y-0.5 hover:bg-[#8b3a1f] hover:border-[#8b3a1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b3a1f]',
    imageFrame:
      'relative aspect-[4/5] w-full max-w-sm overflow-hidden border-4 border-[#0f0f0f] bg-white shadow-[12px_12px_0_0_#8b3a1f] sm:ml-auto sm:max-w-md',
    deco: 'absolute -bottom-2 -right-2 hidden h-20 w-20 border-2 border-[#0f0f0f] bg-[#8b3a1f]/20 sm:block',
    painSection: 'border-y-2 border-[#0f0f0f] bg-[#ede4d6] py-20',
    painTitle: 'text-[#0f0f0f]',
    painCard: 'flex gap-3 border-2 border-[#0f0f0f] bg-white p-4',
    painIcon: 'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center text-sm font-bold text-[#8b3a1f]',
    painText: 'leading-relaxed text-stone-800',
    bridge: 'mt-12 max-w-3xl text-lg leading-relaxed text-stone-800',
    trustTitle: 'text-[#0f0f0f]',
    row: 'flex gap-4 border-2 border-[#0f0f0f] bg-white p-5 sm:gap-5 sm:p-6',
    iconBox: 'flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#0f0f0f] bg-[#8b3a1f] text-white',
    rowText: 'pt-0.5 leading-relaxed text-stone-800',
    listBox: 'mt-14 border-2 border-[#0f0f0f] bg-[#f4efe6] p-6 sm:p-8',
    listKicker: 'text-sm font-bold uppercase tracking-widest text-[#8b3a1f]',
    listText: 'flex gap-3 text-stone-800',
    check: 'mt-0.5 h-5 w-5 shrink-0 text-[#8b3a1f]',
    finalSection: 'border-t-2 border-[#0f0f0f] bg-[#0f0f0f] py-20 text-[#f4efe6]',
    finalH: `${heading} text-3xl font-bold text-[#f4efe6] sm:text-4xl`,
    finalP: 'text-lg leading-relaxed text-stone-300',
    finalCta:
      'group inline-flex items-center justify-center gap-2 border-2 border-[#f4efe6] bg-[#f4efe6] px-7 py-4 text-base font-bold text-[#0f0f0f] transition hover:-translate-y-0.5 hover:bg-[#8b3a1f] hover:text-white hover:border-[#8b3a1f]',
    finalNote: 'text-sm text-stone-500',
    placeholder: 'text-[#8b3a1f]',
    emptyPhoto:
      'flex h-full min-h-[20rem] w-full flex-col items-center justify-center border-2 border-dashed border-stone-400 bg-white p-8 text-center',
  },
  aurora: {
    label: 'Современный градиент',
    blurb: 'Мягкие переливы, стеклянные карточки, дружелюбный digital-стиль.',
    page: 'relative min-h-screen overflow-x-hidden text-slate-800 [font-family:var(--font-landing),ui-sans-serif,system-ui,sans-serif]',
    bg1: 'pointer-events-none fixed inset-0 -z-10',
    bg1Style:
      'background: linear-gradient(135deg, #e0e7ff 0%, #fae8ff 40%, #e0f2fe 100%)',
    bg2: 'pointer-events-none fixed inset-0 -z-10 opacity-50',
    bg2Style: `background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    kicker: 'text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600/80',
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
