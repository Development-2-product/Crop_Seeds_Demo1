import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { submitEnquiry, type EnquiryFormData } from '@/services/enquiry';
import { categories } from '@/data/categories';
import { crops } from '@/data/crops';

interface EnquiryFormProps {
  preselectedCrop?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function EnquiryForm({ preselectedCrop = '', onSuccess, compact = false }: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    cropCategory: '',
    productVariety: preselectedCrop,
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const preselectedCropData = crops.find((c) => c.slug === preselectedCrop || c.name === preselectedCrop);

  const updateField = (field: keyof EnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!formData.fullName.trim()) e.fullName = 'Full name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email address';
    if (!formData.phone.trim()) e.phone = 'Phone number is required';
    if (!formData.message.trim()) e.message = 'Please tell us about your requirement';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setErrorMsg('');

    const result = await submitEnquiry(formData);
    if (result.success) {
      setStatus('success');
      onSuccess?.();
    } else {
      setStatus('error');
      setErrorMsg(result.message);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      location: '',
      cropCategory: '',
      productVariety: '',
      quantity: '',
      message: '',
    });
    setStatus('idle');
    setErrors({});
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl glass p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-warm">Request Received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-warm-muted">
          Thank you for your enquiry. Our team will review your requirement and contact you shortly.
        </p>
        <button onClick={resetForm} className="btn-secondary mt-6">
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {preselectedCropData && (
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/5 px-4 py-3">
          <p className="text-xs uppercase tracking-wider text-emerald-400/70">Selected Crop</p>
          <p className="mt-0.5 text-sm font-medium text-warm">{preselectedCropData.name}</p>
        </div>
      )}

      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 gap-4 sm:grid-cols-2'}>
        <div>
          <label className="label-field" htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            type="text"
            className={`input-field ${errors.fullName ? 'border-red-400/50' : ''}`}
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="Your full name"
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
        </div>

        <div>
          <label className="label-field" htmlFor="company">Company / Farm</label>
          <input
            id="company"
            type="text"
            className="input-field"
            value={formData.company}
            onChange={(e) => updateField('company', e.target.value)}
            placeholder="Company or farm name"
          />
        </div>

        <div>
          <label className="label-field" htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            className={`input-field ${errors.email ? 'border-red-400/50' : ''}`}
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label className="label-field" htmlFor="phone">Phone *</label>
          <input
            id="phone"
            type="tel"
            className={`input-field ${errors.phone ? 'border-red-400/50' : ''}`}
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
        </div>

        <div>
          <label className="label-field" htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            className="input-field"
            value={formData.location}
            onChange={(e) => updateField('location', e.target.value)}
            placeholder="City, State / Region"
          />
        </div>

        <div>
          <label className="label-field" htmlFor="cropCategory">Crop Category</label>
          <select
            id="cropCategory"
            className="input-field"
            value={formData.cropCategory}
            onChange={(e) => updateField('cropCategory', e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="label-field" htmlFor="productVariety">Product / Variety</label>
          <input
            id="productVariety"
            type="text"
            className="input-field"
            value={formData.productVariety}
            onChange={(e) => updateField('productVariety', e.target.value)}
            placeholder="Specific crop or variety"
          />
        </div>

        <div>
          <label className="label-field" htmlFor="quantity">Quantity Required</label>
          <input
            id="quantity"
            type="text"
            className="input-field"
            value={formData.quantity}
            onChange={(e) => updateField('quantity', e.target.value)}
            placeholder="e.g. 50 kg, 2 acres, 100 bags"
          />
        </div>
      </div>

      <div>
        <label className="label-field" htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows={compact ? 3 : 4}
          className={`input-field resize-none ${errors.message ? 'border-red-400/50' : ''}`}
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell us about your requirement, cultivation conditions, or any questions..."
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Product Request
          </>
        )}
      </button>
    </form>
  );
}
