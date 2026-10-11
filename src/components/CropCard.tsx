import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import type { Crop } from '@/data/crops';
import { useEnquiry } from '@/contexts/EnquiryContext';

interface CropCardProps {
  crop: Crop;
  index?: number;
}

export default function CropCard({ crop, index = 0 }: CropCardProps) {
  const { openModal } = useEnquiry();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-500 hover:border-emerald-400/20 hover:shadow-[0_20px_60px_-20px_rgba(52,211,153,0.15)]">
      <Link to={`/crops/${crop.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={crop.image}
          alt={crop.name}
          loading={index < 3 ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="image-shade absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-forest-950/60 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md ring-1 ring-emerald-400/20">
            {crop.category}
          </span>
        </div>
        <div className="image-text absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-semibold text-warm">{crop.name}</h3>
          <p className="mt-0.5 text-xs italic text-warm-muted">{crop.scientificName}</p>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-warm-muted">{crop.shortDescription}</p>

        <div className="mt-4 flex items-center gap-2 text-xs text-warm-dim">
          <span className="rounded-md bg-forest-700/40 px-2.5 py-1">{crop.season}</span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Link
            to={`/crops/${crop.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors duration-300 hover:text-emerald-300"
          >
            View Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            onClick={() => openModal(crop.name)}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg glass-light px-3 py-2 text-xs font-medium text-warm-muted transition-all duration-300 hover:text-emerald-400 hover:ring-1 hover:ring-emerald-400/30"
          >
            <Send className="h-3 w-3" />
            Request
          </button>
        </div>
      </div>
    </article>
  );
}
