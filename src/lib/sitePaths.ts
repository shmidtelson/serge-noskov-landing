/**
 * Ссылки на файлы из `public/` (например `landing/autor.png`).
 * На GitHub Pages у проектного репо base = `/repo-name/`, поэтому нельзя использовать `/landing/...` —
 * браузер уйдёт на `github.io/landing/...` вместо `github.io/repo-name/landing/...`.
 */
export function publicUrl(path: string, baseUrl: string): string {
  const trimmed = path.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('//')) {
    return trimmed;
  }
  const rel = trimmed.replace(/^\//, '');
  return `${baseUrl}${rel}`;
}
