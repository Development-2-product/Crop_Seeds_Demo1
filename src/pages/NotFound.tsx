import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page Not Found');
  return <main className="flex min-h-[70vh] items-center justify-center bg-forest px-4 text-center"><div><p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">404</p><h1 className="mt-3 text-4xl font-semibold text-warm">This field is uncharted.</h1><p className="mt-4 text-warm-muted">The page you requested could not be found.</p><Link to="/" className="btn-primary mt-8">Return home</Link></div></main>;
}
