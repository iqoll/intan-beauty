export interface ServiceStep {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  category: 'hair' | 'facial' | 'laser-ipl';
  name: string;
  price: string;
  image: string;
  description?: string;
  steps?: ServiceStep[];
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
