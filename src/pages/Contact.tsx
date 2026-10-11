import { Mail, MapPin, Phone } from 'lucide-react';
import EnquiryForm from '@/components/EnquiryForm';
import ScrollReveal from '@/components/ScrollReveal';
import usePageTitle from '@/hooks/usePageTitle';

export default function Contact() {
  usePageTitle('Contact', 'Contact VerdanSeed for crop variety information and product requests.');
  return <div className="bg-forest min-h-screen py-16"><section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><ScrollReveal><p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">Get in touch</p><h1 className="mt-3 text-4xl font-semibold text-warm sm:text-5xl">Let&apos;s talk crops.</h1><p className="mt-4 max-w-2xl text-warm-muted">Tell us what you are looking to grow, and our team will help you explore suitable varieties.</p></ScrollReveal><div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><ScrollReveal className="space-y-5">{[[MapPin, 'Visit us', 'Greenfield Agri Park, Sector 42, Indore, MP 452001'], [Phone, 'Call us', '+91 731 455 200'], [Mail, 'Email us', 'hello@verdanseed.com']].map(([Icon, title, text]) => { const ItemIcon = Icon as typeof MapPin; return <div key={title as string} className="flex gap-4 rounded-2xl glass p-5"><ItemIcon className="h-5 w-5 shrink-0 text-emerald-400" /><div><h2 className="font-medium text-warm">{title as string}</h2><p className="mt-1 text-sm text-warm-muted">{text as string}</p></div></div>; })}</ScrollReveal><ScrollReveal><div className="rounded-2xl glass p-6 sm:p-8"><h2 className="text-xl font-semibold text-warm">Send a product request</h2><p className="mt-2 text-sm text-warm-muted">We&apos;ll get back to you shortly.</p><div className="mt-6"><EnquiryForm /></div></div></ScrollReveal></div></section></div>;
}
