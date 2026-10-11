import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Send,
  Sprout,
  Leaf,
  Sun,
  Layers,
  Wheat,
  ShieldCheck,
  Headphones,
  Award,
  ArrowDown,
} from 'lucide-react';
import { categories } from '@/data/categories';
import { getFeaturedCrops } from '@/data/crops';
import { galleryImages } from '@/data/gallery';
import { useEnquiry } from '@/contexts/EnquiryContext';
import ScrollReveal from '@/components/ScrollReveal';
import CropCard from '@/components/CropCard';
import usePageTitle from '@/hooks/usePageTitle';

const iconMap: Record<string, typeof Wheat> = {
  Wheat,
  Sprout,
  Leaf,
  Sun,
  Layers,
  Grass: Sprout,
};

const whyChooseUs = [
  {
    icon: Sprout,
    title: 'Diverse Crop Portfolio',
    description:
      'From cereals and millets to pulses, oilseeds, fiber, and forage — our catalog spans the full spectrum of field crops for varied cultivation needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Focus',
    description:
      'Every seed variety in our collection is selected through careful evaluation of germination, purity, and consistency to support productive cultivation.',
  },
  {
    icon: Award,
    title: 'Agricultural Expertise',
    description:
      'Our team brings deep knowledge of field crop agriculture, helping growers match the right varieties to their specific soil, climate, and seasonal conditions.',
  },
  {
    icon: Headphones,
    title: 'Reliable Support',
    description:
      'We assist cultivators with crop selection guidance, variety information, and responsive communication throughout the enquiry and supply process.',
  },
];

export default function Home() {
  const { openModal } = useEnquiry();
  const featuredCrops = getFeaturedCrops();
  const galleryPreview = galleryImages.slice(0, 8);

  usePageTitle(
    '',
    'VerdanSeed — Explore field crop seed varieties for modern agriculture: cereals, millets, pulses, oilseeds, fiber, and forage crops.'
  );

  return (
    <div className="bg-forest">
      {/* 1. Cinematic Hero */}
      <section className="relative -mt-20 flex min-h-[44rem] items-start overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=2400"
            srcSet="https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=960 960w, https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=1600 1600w, https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=2400 2400w"
            sizes="100vw"
            alt="Cinematic cornfield at sunset"
            className="h-full w-full object-cover brightness-110 saturate-110"
            loading="eager"
          />
          <div className="image-shade absolute inset-0 bg-gradient-to-b from-forest-950/45 via-forest-950/35 to-forest-950/80" />
          <div className="image-shade absolute inset-0 bg-gradient-to-r from-forest-950/75 via-forest-950/20 to-transparent" />
        </div>

        <div className="image-text relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pt-40 lg:px-8 lg:pt-44">
          <div className="hero-copy max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-wider text-emerald-400">
              <Sprout className="h-3.5 w-3.5" />
              Field Crop Seed Collection
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-warm sm:text-5xl lg:text-6xl">
              Seeds That Shape<br />
              the <span className="text-emerald-400 text-glow">Field.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-muted sm:text-lg">
              Explore our collection of field crop seed varieties for modern agriculture
              and diverse cultivation needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/crops" className="btn-primary">
                Explore Crop Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button onClick={() => openModal()} className="btn-secondary">
                <Send className="h-4 w-4" />
                Request a Product
              </button>
            </div>

            <div className="mt-12 animate-float">
              <div className="glass-strong rounded-2xl px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Field Crop Collection
                </p>
                <p className="mt-1.5 text-sm text-warm-muted">
                  Cereals • Millets • Pulses • Oilseeds • Fiber • Forage
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown className="h-5 w-5 animate-bounce text-warm-dim" />
        </div>
      </section>

      {/* 2. Crop Categories */}
      <section className="relative py-24">
        <div className="gradient-radial-glow absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Browse by Type
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-warm sm:text-4xl">
              Crop Categories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-warm-muted">
              Six distinct categories covering the full range of field crop seeds,
              each tailored to different agricultural purposes and growing conditions.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] ?? Sprout;
              return (
                <Link
                  key={cat.id}
                  to={`/crops?category=${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:border-emerald-400/20 hover:shadow-[0_20px_60px_-20px_rgba(52,211,153,0.15)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="image-shade absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-950/60 backdrop-blur-md ring-1 ring-emerald-400/20">
                        <Icon className="h-5 w-5 text-emerald-400" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-warm">{cat.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-muted">
                      {cat.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-warm-dim">{cat.cropCount} crops</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors group-hover:text-emerald-300">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Featured Crops */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14 flex flex-col items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Selected Varieties
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-warm sm:text-4xl">
              Featured Crops
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-warm-muted">
              A curated selection from our portfolio, highlighting crops that represent
              the diversity of our field crop seed collection.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCrops.map((crop) => (
              <CropCard key={crop.slug} crop={crop} />
            ))}
          </ScrollReveal>

          <div className="mt-12 text-center">
            <Link to="/crops" className="btn-secondary">
              View All Crops
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Agriculture Story */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              The Journey
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-warm sm:text-4xl">
              From Seed to Harvest
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-warm-muted">
              Every crop follows a path — from the seed in hand to the field in bloom
              to the harvest that sustains communities.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Seed',
                image: 'https://images.pexels.com/photos/15182672/pexels-photo-15182672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                description: 'It begins with selecting the right seed — chosen for the soil, the season, and the purpose at hand.',
                label: 'Selection & Sowing',
              },
              {
                step: '02',
                title: 'Field',
                image: 'https://images.pexels.com/photos/37405722/pexels-photo-37405722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                description: 'The crop takes root and grows — tended through the season with knowledge, care, and attention to conditions.',
                label: 'Growth & Cultivation',
              },
              {
                step: '03',
                title: 'Harvest',
                image: 'https://images.pexels.com/photos/27054126/pexels-photo-27054126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                description: 'The season culminates in harvest — the outcome of every decision made from seed to field.',
                label: 'Reaping the Yield',
              },
            ].map((panel) => (
              <article
                key={panel.step}
                className="group relative overflow-hidden rounded-2xl glass"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="image-shade absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent" />
                  <div className="image-text absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-5xl font-bold text-emerald-400/20">{panel.step}</span>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      {panel.label}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-warm">{panel.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-warm-muted">
                      {panel.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="relative py-24">
        <div className="gradient-emerald-glow absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Our Approach
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-warm sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-warm-muted">
              We focus on what matters to cultivators — diversity, quality, knowledge,
              and dependable support.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl glass p-6 transition-all duration-500 hover:border-emerald-400/20"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/20 transition-all duration-500 group-hover:bg-emerald-500/15">
                  <item.icon className="h-6 w-6 text-emerald-400" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-warm">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Gallery Preview */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14 flex flex-col items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Visual Field Notes
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-warm sm:text-4xl">
              Gallery Preview
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-warm-muted">
              A glimpse of the agricultural landscapes and crop imagery from our collection.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryPreview.map((img) => (
              <Link
                key={img.id}
                to="/gallery"
                className="group relative aspect-square overflow-hidden rounded-xl glass-light"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="image-shade absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="image-text absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <p className="text-xs text-warm-muted">{img.category}</p>
                  <p className="text-sm font-medium text-warm">{img.caption}</p>
                </div>
              </Link>
            ))}
          </ScrollReveal>

          <div className="mt-12 text-center">
            <Link to="/gallery" className="btn-secondary">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Product Request CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/5454206/pexels-photo-5454206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Harvest machinery in a wheat field"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="image-shade absolute inset-0 bg-forest-950/80 backdrop-blur-sm" />
              </div>

              <div className="image-text relative flex flex-col items-center px-6 py-20 text-center">
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-warm sm:text-4xl lg:text-5xl">
                  Looking for a specific crop or seed?
                </h2>
                <p className="mt-5 max-w-xl text-base text-warm-muted">
                  Tell us what you need. Our team will help you find the right variety
                  for your cultivation requirements.
                </p>
                <button onClick={() => openModal()} className="btn-primary mt-8">
                  <Send className="h-4 w-4" />
                  Request Product
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
