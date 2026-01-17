import { Watch, Testimonial } from './types';

export const NAV_ITEMS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Crown Jewels', href: '#featured' },
  { label: 'Authentication', href: '#authentication' },
  { label: 'Investment', href: '#investment' },
];

export const WATCHES: Watch[] = [
  {
    id: '1',
    brand: 'Rolex',
    model: 'Daytona "Panda"',
    reference: '116500LN',
    price: 32500,
    image: 'https://images.unsplash.com/photo-1639037703873-4556488736eb?auto=format&fit=crop&q=80&w=800',
    status: 'AVAILABLE',
    condition: 'Like New',
    year: 2023,
    specs: ['Automatic', 'Chronograph', 'Ceramic Bezel', '40mm'],
    isInvestmentGrade: true,
    description: 'The definitive racing chronograph. Highly sought after white dial configuration.'
  },
  {
    id: '2',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A',
    price: 115000,
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=800',
    status: 'RESERVED',
    condition: 'Excellent',
    year: 2020,
    specs: ['Automatic', 'Date', 'Blue Dial', '40mm'],
    isInvestmentGrade: true,
    description: 'The icon of luxury sports watches. Discontinued model with immense collector value.'
  },
  {
    id: '3',
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST',
    price: 48000,
    image: 'https://images.unsplash.com/photo-1623199464010-3882a8289748?auto=format&fit=crop&q=80&w=800',
    status: 'AVAILABLE',
    condition: 'New',
    year: 2024,
    specs: ['Automatic', 'Black Dial', '41mm', 'Display Back'],
    isNewArrival: true,
    description: 'Genta design perfection. The latest iteration of the classic Royal Oak.'
  },
  {
    id: '4',
    brand: 'Omega',
    model: 'Speedmaster Calibre 321',
    reference: '311.30.40.30.01.001',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&q=80&w=800',
    status: 'AVAILABLE',
    condition: 'New',
    year: 2024,
    specs: ['Manual Wind', 'Chronograph', 'Historic Movement', '39.7mm'],
    isInvestmentGrade: true,
    description: 'Recreation of the movement that went to the moon. Platinum tier engineering.'
  },
  {
    id: '5',
    brand: 'Vacheron Constantin',
    model: 'Overseas',
    reference: '4500V/110A',
    price: 29000,
    image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&q=80&w=800',
    status: 'AVAILABLE',
    condition: 'Excellent',
    year: 2022,
    specs: ['Automatic', 'Blue Dial', 'Quick-change Straps', '41mm'],
    description: 'Holy Trinity sports watch with exceptional finishing and versatility.'
  },
  {
    id: '6',
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    price: 14500,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800',
    status: 'SOLD',
    condition: 'Like New',
    year: 2023,
    specs: ['Automatic', 'Diver 300m', 'Ceramic', '41mm'],
    description: 'The standard by which all dive watches are measured.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander V.',
    location: 'Zurich, CH',
    quote: 'The authentication process gave me total peace of mind for my Patek purchase.',
    watch: 'Patek Philippe Nautilus',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'James L.',
    location: 'New York, USA',
    quote: 'Seamless delivery to my office. The packaging was as impressive as the timepiece.',
    watch: 'Rolex Daytona',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Wei C.',
    location: 'Singapore, SG',
    quote: 'A true white-glove service. The Vault team sourced a rare vintage Omega in weeks.',
    watch: 'Omega Speedmaster 321',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];
