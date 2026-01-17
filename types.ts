export interface Watch {
  id: string;
  brand: string;
  model: string;
  reference: string;
  price: number;
  image: string;
  status: 'AVAILABLE' | 'RESERVED' | 'SOLD';
  condition: 'New' | 'Like New' | 'Excellent' | 'Vintage';
  year: number;
  specs: string[];
  isInvestmentGrade?: boolean;
  isNewArrival?: boolean;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  watch: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}
