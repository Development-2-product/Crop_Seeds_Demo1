import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { crops } from '@/data/crops';
import { categories } from '@/data/categories';
import CropCard from '@/components/CropCard';
import ScrollReveal from '@/components/ScrollReveal';
import usePageTitle from '@/hooks/usePageTitle';
import { responsiveImage, responsiveImageSet } from '@/lib/images';

const allCropsHeroImage =
  'https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=2400';

const categoryHeroPositions: Record<string, string> = {
  cereals: 'object-center',
  millets: 'object-[center_42%]',
  pulses: 'object-[center_48%]',
  oilseeds: 'object-[center_38%]',
  fiber: 'object-[center_42%]',
  forage: 'object-[center_46%]',
};

export default function Crops() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [showFilters, setShowFilters] = useState(false);

  usePageTitle('Crops', 'Browse our full collection of field crop seed varieties across cereals, millets, pulses, oilseeds, fiber, and forage crops.');

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [searchParams]);

  const setCategory = (slug: string) => {
    setActiveCategory(slug);
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
    setShowFilters(false);
  };

  const filteredCrops = useMemo(() => {
    return crops.filter((crop) => {
      const matchesSearch =
        !search ||
        crop.name.toLowerCase().includes(search.toLowerCase()) ||
        crop.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        crop.category.toLowerCase().includes(search.toLowerCase()) ||
        crop.scientificName.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === 'all' || crop.categoryId === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const activeCategoryData = categories.find((c) => c.slug === activeCategory);
  const heroImage = activeCategoryData?.image ?? allCropsHeroImage;
  const heroPosition = activeCategoryData
    ? categoryHeroPositions[activeCategoryData.slug] ?? 'object-center'
    : 'object-[center_44%]';

  const filterChips = [{ slug: 'all', name: 'All Crops' }, ...categories.map((c) => ({ slug: c.slug, name: c.shortName }))];

  return (
    <div className="bg-forest min-h-screen">
      {/* Page header */}
      <section className="relative -mt-20 flex min-h-[31rem] items-end overflow-hidden pt-20 sm:min-h-[35rem] lg:min-h-[39rem]">
        <img
          key={heroImage}
          src={responsiveImage(heroImage, 2400)}
          srcSet={responsiveImageSet(heroImage)}
          sizes="100vw"
          alt=""
          className={`absolute inset-0 h-full w-full object-cover brightness-110 saturate-110 ${heroPosition}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="image-shade absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/15" />
        <div className="image-shade absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-950/25 to-transparent" />

        <div className="image-text relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <ScrollReveal key={activeCategory} className="hero-copy max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Field Crop Seeds
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-warm sm:text-5xl">
              {activeCategoryData ? activeCategoryData.name : 'All Crops'}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-muted sm:text-lg">
              {activeCategoryData
                ? activeCategoryData.longDescription
                : 'Browse our complete portfolio of field crop seed varieties. Search by name, filter by category, and explore detailed information for each crop.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-20 z-30 border-b border-glass bg-forest-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-dim" />
              <input
                type="text"
                placeholder="Search crops, varieties, or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl glass border-glass py-3 pl-11 pr-10 text-sm text-warm placeholder:text-warm-dim transition-all duration-300 focus:border-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/15"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-dim hover:text-warm"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => setShowFilters((v) => !v)}
              className="flex items-center gap-2 rounded-xl glass px-4 py-3 text-sm font-medium text-warm-muted transition-all duration-300 hover:text-warm lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* Desktop filters */}
          <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
            {filterChips.map((chip) => (
              <button
                key={chip.slug}
                onClick={() => setCategory(chip.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === chip.slug
                    ? 'bg-emerald-500 text-[#0a120e]'
                    : 'glass text-warm-muted hover:text-warm'
                }`}
              >
                {chip.name}
              </button>
            ))}
          </div>

          {/* Mobile filters */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
              {filterChips.map((chip) => (
                <button
                  key={chip.slug}
                  onClick={() => setCategory(chip.slug)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === chip.slug
                      ? 'bg-emerald-500 text-[#0a120e]'
                      : 'glass text-warm-muted'
                  }`}
                >
                  {chip.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Crops grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-warm-muted">
              {filteredCrops.length} {filteredCrops.length === 1 ? 'crop' : 'crops'} found
            </p>
          </div>

          {filteredCrops.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCrops.map((crop, index) => (
                <CropCard key={crop.slug} crop={crop} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl glass py-20 text-center">
              <Search className="h-10 w-10 text-warm-dim" />
              <h3 className="mt-4 text-lg font-semibold text-warm">No crops found</h3>
              <p className="mt-2 text-sm text-warm-muted">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setCategory('all');
                }}
                className="btn-secondary mt-6"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
