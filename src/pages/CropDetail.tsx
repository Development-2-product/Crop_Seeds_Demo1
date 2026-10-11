import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  Send,
  Calendar,
  Thermometer,
  Droplets,
  MapPin,
  Sprout,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { getCropBySlug, getRelatedCrops } from '@/data/crops';
import { useEnquiry } from '@/contexts/EnquiryContext';
import ScrollReveal from '@/components/ScrollReveal';
import CropCard from '@/components/CropCard';
import usePageTitle from '@/hooks/usePageTitle';
import { responsiveImage, responsiveImageSet } from '@/lib/images';

export default function CropDetail() {
  const { slug } = useParams<{ slug: string }>();
  const crop = slug ? getCropBySlug(slug) : undefined;
  const { openModal } = useEnquiry();

  usePageTitle(
    crop ? `${crop.name} — ${crop.category}` : 'Crop Not Found',
    crop?.shortDescription
  );

  if (!crop) {
    return <Navigate to="/crops" replace />;
  }

  const relatedCrops = getRelatedCrops(crop, 3);
  const heroImage = responsiveImage(crop.image, 2400);

  return (
    <div className="bg-forest min-h-screen">
      {/* Hero */}
      <section className="relative -mt-20 h-[clamp(36rem,78vh,54rem)] min-h-[560px] overflow-hidden pt-20">
        <img
          src={heroImage}
          srcSet={responsiveImageSet(crop.image)}
          sizes="100vw"
          alt={crop.name}
          className="absolute inset-0 h-full w-full object-cover object-center brightness-110 saturate-110"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="image-shade absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/45 to-forest-950/20" />
        <div className="image-shade absolute inset-0 bg-gradient-to-r from-forest-950/75 via-forest-950/15 to-transparent" />

        <div className="image-text absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
            <div className="hero-copy max-w-3xl">
            <Link
              to="/crops"
              className="inline-flex items-center gap-2 text-sm text-warm-muted transition-colors hover:text-emerald-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Crops
            </Link>

            <div className="mt-4">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-emerald-400">
                <Sprout className="h-3.5 w-3.5" />
                {crop.category}
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-warm sm:text-5xl lg:text-6xl">
                {crop.name}
              </h1>
              <p className="mt-2 text-lg italic text-warm-muted">{crop.scientificName}</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main column */}
            <div className="space-y-12 lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-semibold text-warm">Overview</h2>
                <p className="mt-4 text-base leading-relaxed text-warm-muted">
                  {crop.overview}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold text-warm">Characteristics</h2>
                <ul className="mt-4 space-y-3">
                  {crop.characteristics.map((char, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="text-sm leading-relaxed text-warm-muted">{char}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold text-warm">Growing Season</h2>
                <p className="mt-4 text-base leading-relaxed text-warm-muted">
                  {crop.growingSeason}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-warm">{crop.season}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-semibold text-warm">Suitable Conditions</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {crop.conditions.map((cond, i) => {
                    const icons = [Thermometer, Droplets, MapPin, CropSun];
                    const Icon = icons[i % icons.length];
                    return (
                      <div key={i} className="flex items-start gap-3 rounded-xl glass p-4">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400/70" />
                        <span className="text-sm leading-relaxed text-warm-muted">{cond}</span>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="rounded-2xl glass p-6">
                  <h3 className="text-base font-semibold text-warm">Quick Facts</h3>
                  <dl className="mt-4 space-y-3">
                    <div className="flex justify-between border-b border-glass pb-3">
                      <dt className="text-sm text-warm-dim">Category</dt>
                      <dd className="text-sm font-medium text-warm">{crop.category}</dd>
                    </div>
                    <div className="flex justify-between border-b border-glass pb-3">
                      <dt className="text-sm text-warm-dim">Season</dt>
                      <dd className="text-sm font-medium text-warm">{crop.season}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-warm-dim">Scientific Name</dt>
                      <dd className="text-right text-sm font-medium italic text-warm">{crop.scientificName}</dd>
                    </div>
                  </dl>

                  <button
                    onClick={() => openModal(crop.name)}
                    className="btn-primary mt-6 w-full"
                  >
                    <Send className="h-4 w-4" />
                    Request {crop.name}
                  </button>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-2xl glass p-6">
                  <h3 className="text-base font-semibold text-warm">Available Varieties</h3>
                  <ul className="mt-4 space-y-4">
                    {crop.varieties.map((variety, i) => (
                      <li key={i}>
                        <p className="text-sm font-medium text-emerald-400">{variety.name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-warm-muted">
                          {variety.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery images */}
      {crop.galleryImages.length > 1 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-8">
              <h2 className="text-2xl font-semibold text-warm">{crop.name} Gallery</h2>
            </ScrollReveal>
            <ScrollReveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {crop.galleryImages.map((img, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl glass-light">
                  <img
                    src={img}
                    alt={`${crop.name} field photograph ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl glass-strong p-12 text-center">
              <div className="gradient-emerald-glow absolute inset-0 opacity-40" />
              <div className="relative">
                <h2 className="text-2xl font-semibold text-warm sm:text-3xl">
                  Interested in {crop.name} seeds?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm text-warm-muted">
                  Submit a product request and our team will get back to you with
                  variety details and availability.
                </p>
                <button
                  onClick={() => openModal(crop.name)}
                  className="btn-primary mt-6"
                >
                  <Send className="h-4 w-4" />
                  Request Product
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related crops */}
      {relatedCrops.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-warm">Related Crops</h2>
              <Link
                to="/crops"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ScrollReveal stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCrops.map((rc) => (
                <CropCard key={rc.slug} crop={rc} />
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}
    </div>
  );
}

function CropSun(props: React.ComponentProps<typeof Thermometer>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}
