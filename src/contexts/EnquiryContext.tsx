import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

interface EnquiryContextValue {
  isOpen: boolean;
  preselectedCrop: string;
  openModal: (crop?: string) => void;
  closeModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextValue | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedCrop, setPreselectedCrop] = useState('');

  const openModal = useCallback((crop?: string) => {
    setPreselectedCrop(crop ?? '');
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setPreselectedCrop('');
  }, []);

  return (
    <EnquiryContext.Provider value={{ isOpen, preselectedCrop, openModal, closeModal }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used within EnquiryProvider');
  return ctx;
}
