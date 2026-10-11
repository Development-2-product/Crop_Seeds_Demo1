import { Sprout, ShieldCheck, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import usePageTitle from '@/hooks/usePageTitle';

const values = [
  { icon: Sprout, title: 'Built for the field', text: 'We curate practical crop varieties for a wide range of growing conditions.' },
  { icon: ShieldCheck, title: 'Quality focused', text: 'Clear variety information helps growers make confident seed decisions.' },
  { icon: Users, title: 'Grower partnership', text: 'Our team supports enquiries with responsive, knowledgeable guidance.' },
];

export default function About() {
  usePageTitle('About', 'Learn about VerdanSeed and our commitment to modern agriculture.');
  return <div className="bg-forest min-h-screen py-16"><section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><ScrollReveal className="max-w-3xl"><p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">About VerdanSeed</p><h1 className="mt-3 text-4xl font-semibold text-warm sm:text-5xl">Better seed choices for every field.</h1><p className="mt-6 text-lg leading-relaxed text-warm-muted">VerdanSeed brings together diverse field-crop varieties and useful crop information to help growers find options suited to their land, season, and goals.</p></ScrollReveal><ScrollReveal stagger className="mt-14 grid gap-6 md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl glass p-6"><Icon className="h-7 w-7 text-emerald-400" /><h2 className="mt-5 text-xl font-semibold text-warm">{title}</h2><p className="mt-3 text-sm leading-relaxed text-warm-muted">{text}</p></article>)}</ScrollReveal></section></div>;
}
