import { Watch, Testimonial } from './types';

export const NAV_ITEMS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Best-Sellers', href: '#featured' },
  { label: 'Quality', href: '#authentication' },
  { label: 'Why Us', href: '#why-us' },
];

export const WATCHES: Watch[] = [
  {
    id: '1',
    brand: 'Rolex',
    model: 'Daytona "Panda"',
    reference: '116500LN',
    price: 85000,
    image: 'https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/9878361/pexels-photo-9878361.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'AVAILABLE',
    condition: 'New',
    year: 2024,
    specs: ['Automatic', 'Chronograph', 'Ceramic Bezel', '40mm'],
    isNewArrival: true,
    description: 'The iconic racing chronograph. Premium replica with stunning white dial and black subdials.'
  },
  {
    id: '2',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A',
    price: 125000,
    image: 'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    status: 'AVAILABLE',
    condition: 'New',
    year: 2024,
    specs: ['Automatic', 'Date', 'Blue Dial', '40mm'],
    isNewArrival: true,
    description: 'The legendary sports luxury watch. Exceptional finishing with the iconic blue dial.'
  },
  {
    id: '3',
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500ST',
    price: 95000,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'AVAILABLE',
    condition: 'New',
    year: 2024,
    specs: ['Automatic', 'Black Dial', '41mm', 'Display Back'],
    isNewArrival: true,
    description: 'Genta masterpiece. Premium replica with impeccable octagonal bezel finishing.'
  },
  {
    id: '4',
    brand: 'Omega',
    model: 'Speedmaster Professional',
    reference: '310.30.42.50.01.001',
    price: 55000,
    image: 'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'AVAILABLE',
    condition: 'New',
    year: 2024,
    specs: ['Manual Wind', 'Chronograph', 'Hesalite Crystal', '42mm'],
    description: 'The Moonwatch. Legendary chronograph with exceptional movement accuracy.'
  },
  {
    id: '5',
    brand: 'Rolex',
    model: 'Submariner Date',
    reference: '126610LN',
    price: 65000,
    image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'AVAILABLE',
    condition: 'New',
    year: 2024,
    specs: ['Automatic', 'Diver 300m', 'Ceramic Bezel', '41mm'],
    isNewArrival: true,
    description: 'The ultimate dive watch. Premium build with luminous markers and rotating bezel.'
  },
  {
    id: '6',
    brand: 'Cartier',
    model: 'Santos de Cartier',
    reference: 'WSSA0018',
    price: 48000,
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'AVAILABLE',
    condition: 'New',
    year: 2024,
    specs: ['Automatic', 'Steel Case', 'Blue Dial', '39.8mm'],
    description: 'Pioneer of wristwatches. Elegant square case with signature blue hands.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandre V.',
    location: 'Paris, FR',
    quote: 'Incredible quality for the price. The finishing is really impressive.',
    watch: 'Patek Philippe Nautilus',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'James L.',
    location: 'London, UK',
    quote: 'Fast and discreet delivery. The packaging was perfect, like a real luxury box.',
    watch: 'Rolex Daytona',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Emeka T.',
    location: 'Lagos, NG',
    quote: 'Outstanding customer service. They answered all my questions very quickly.',
    watch: 'Omega Speedmaster',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];
