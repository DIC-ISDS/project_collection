/**
 * Prefix an internal path with the configured base path, so links work both
 * at a domain root ("/") and under a subpath such as GitHub Pages'
 * "/project_collection/". Always use this for internal links and public assets.
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const url = (path = '/') => `${base}${path.startsWith('/') ? path : `/${path}`}`;

/** Remove the base path from a pathname, e.g. for active-link checks. */
export const stripBase = (pathname: string) =>
  (base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname) || '/';
