import { useMemo, useState } from 'react';
import Lightbox from '@/components/Lightbox';
import ScrollReveal from '@/components/ScrollReveal';
import { galleryFilters, galleryImages } from '@/data/gallery';
import usePageTitle from '@/hooks/usePageTitle';

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = useMemo(
    () => filter === 'All' ? galleryImages : galleryImages.filter((image) => image.category === filter),
    [filter],
  );

  usePageTitle('Gallery', 'A look at the crops, fields, and harvests behind VerdanSeed.');

  return (
    <div className="bg-forest min-h-screen py-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">In the field</p>
          <h1 className="mt-3 text-4xl font-semibold text-warm sm:text-5xl">Crop Gallery</h1>
          <p className="mt-4 text-warm-muted">Explore the fields, seed varieties, and harvests that inspire our work.</p>
        </ScrollReveal>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Gallery filters">
          {galleryFilters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm transition-colors ${filter === item ? 'bg-emerald-500 text-[#0a120e]' : 'glass text-warm-muted hover:text-warm'}`}>
              {item}
            </button>
          ))}
        </div>
        <ScrollReveal stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button key={image.id} onClick={() => setSelectedIndex(index)} className="group relative aspect-[4/3] overflow-hidden rounded-2xl text-left glass-light">
              <img src={image.url} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="image-shade image-text absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/90 to-transparent px-4 pb-4 pt-12 text-sm text-warm">{image.caption}</span>
            </button>
          ))}
        </ScrollReveal>
      </section>
      {selectedIndex !== null && <Lightbox images={images} index={selectedIndex} onNavigate={setSelectedIndex} onClose={() => setSelectedIndex(null)} />}
    </div>
  );
}
