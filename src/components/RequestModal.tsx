import { useEffect, useState } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { useEnquiry } from '@/contexts/EnquiryContext';
import EnquiryForm from './EnquiryForm';

export default function RequestModal() {
  const { isOpen, preselectedCrop, closeModal } = useEnquiry();
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      closeModal();
      setClosing(false);
    }, 250);
  };

  if (!isOpen && !closing) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Product enquiry form"
    >
      <div
        className={`absolute inset-0 bg-forest/85 backdrop-blur-md ${closing ? 'modal-overlay-closing' : 'modal-overlay'}`}
        onClick={handleClose}
      />

      <div
        className={`relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl glass-strong shadow-2xl scrollbar-hide ${closing ? 'modal-content-closing' : 'modal-content'}`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-glass bg-forest-900/80 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/25">
              <MessageSquare className="h-4.5 w-4.5 text-emerald-400" />
            </span>
            <div>
              <h2 className="text-base font-semibold text-warm">Request a Product</h2>
              <p className="text-xs text-warm-dim">Fill in your details and we'll get back to you</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-warm-muted transition-colors hover:bg-forest-700/50 hover:text-warm"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <EnquiryForm preselectedCrop={preselectedCrop} compact onSuccess={handleClose} />
        </div>
      </div>
    </div>
  );
}
