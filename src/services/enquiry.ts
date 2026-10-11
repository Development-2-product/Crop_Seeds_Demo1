export interface EnquiryFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  cropCategory: string;
  productVariety: string;
  quantity: string;
  message: string;
}

export interface EnquiryResult {
  success: boolean;
  message: string;
}

const MOCK_DELAY = 1200;

export async function submitEnquiry(data: EnquiryFormData): Promise<EnquiryResult> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

  if (!data.fullName || !data.email || !data.phone || !data.message) {
    return {
      success: false,
      message: 'Please fill in all required fields before submitting.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  const enquiryRecord = {
    id: `ENQ-${Date.now()}`,
    ...data,
    submittedAt: new Date().toISOString(),
    status: 'pending',
  };

  console.log('[Enquiry Service] Submission received:', enquiryRecord);

  return {
    success: true,
    message: 'Request received. Our team will review your requirement and contact you shortly.',
  };
}
