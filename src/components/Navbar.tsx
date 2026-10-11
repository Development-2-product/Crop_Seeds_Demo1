import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sprout, Menu, Moon, Sun, X } from 'lucide-react';
import { useEnquiry } from '@/contexts/EnquiryContext';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Crops', path: '/crops' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const location = useLocation();
  const { openModal } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const nextTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredTheme;
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
  };

  const themeToggle = (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-xl glass text-warm transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
              scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'glass'
            }`}
          >
            <Link to="/" className="flex items-center gap-2.5" aria-label="VerdanSeed home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30">
                <Sprout className="h-5 w-5 text-emerald-400" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-warm">
                Verdan<span className="text-emerald-400">Seed</span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-emerald-400'
                        : 'text-warm-muted hover:text-warm'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              {themeToggle}
              <button
                onClick={() => openModal()}
                className="btn-primary"
              >
                Request Product
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              {themeToggle}
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg text-warm"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-forest/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="mobile-menu-enter absolute inset-x-0 top-0 px-4 pt-20 pb-6">
            <div className="glass-strong rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3.5 text-base font-medium transition-colors duration-300 ${
                        isActive
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'text-warm-muted hover:bg-forest-700/50 hover:text-warm'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="btn-primary mt-3 w-full"
              >
                Request Product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
