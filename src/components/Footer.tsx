import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { categories } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-glass bg-forest-light">
      <div className="gradient-radial-glow absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30">
                <Sprout className="h-5 w-5 text-emerald-400" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-warm">
                Verdan<span className="text-emerald-400">Seed</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-muted">
              A field crop seed company dedicated to providing diverse, quality seed
              varieties for modern agriculture and sustainable cultivation.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass-light text-warm-muted transition-all duration-300 hover:text-emerald-400 hover:ring-1 hover:ring-emerald-400/30"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Crops', path: '/crops' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-warm-muted transition-colors duration-300 hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm">
              Crop Categories
            </h4>
            <ul className="mt-4 space-y-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/crops?category=${cat.slug}`}
                    className="text-sm text-warm-muted transition-colors duration-300 hover:text-emerald-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-warm-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/70" />
                <span>Greenfield Agri Park, Sector 42<br />Indore, MP 452001, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-muted">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400/70" />
                <a href="tel:+91731455200" className="transition-colors hover:text-emerald-400">
                  +91 731 455 200
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-muted">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400/70" />
                <a href="mailto:hello@verdanseed.com" className="transition-colors hover:text-emerald-400">
                  hello@verdanseed.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-glass pt-8 sm:flex-row">
          <p className="text-xs text-warm-dim">
            © {new Date().getFullYear()} VerdanSeed. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-warm-dim transition-colors hover:text-warm-muted">Privacy Policy</a>
            <a href="#" className="text-xs text-warm-dim transition-colors hover:text-warm-muted">Terms of Service</a>
            <a href="#" className="text-xs text-warm-dim transition-colors hover:text-warm-muted">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
