import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Brand
      brand: {
        name: 'Luxurious.ng',
        tagline: 'Premium Timepieces',
        since: 'Since 2010'
      },
      
      // Navigation
      nav: {
        collection: 'Collection',
        bestSellers: 'Best-Sellers',
        quality: 'Quality',
        advantages: 'Why Us',
        concierge: 'Concierge',
        myVault: 'My Vault'
      },

      // Hero
      hero: {
        tagline: 'Premium Replica Collection',
        title: 'Swiss Elegance,',
        titleAccent: 'Accessible Price',
        subtitle: 'Discover our curated collection of premium replica timepieces. Meticulously crafted to capture the essence of luxury watchmaking.',
        cta: 'Explore Collection',
        scroll: 'Scroll'
      },

      // Why Choose Us
      whyUs: {
        tagline: 'Accessible Excellence',
        title: 'Why Choose',
        titleAccent: 'Us',
        subtitle: 'We make the elegance of prestigious watchmaking accessible, without compromising on quality or customer experience.',
        qualityCommitment: 'Quality Commitment',
        satisfaction: 'Satisfied or refunded, no questions asked',
        orderNow: 'Order Now',
        advantages: {
          premium: {
            title: 'Premium Finish',
            desc: 'Superior quality materials and impeccable finishes replicating every detail.',
            highlight: '1:1'
          },
          attention: {
            title: 'Attention to Detail',
            desc: 'Every component is meticulously inspected to ensure perfect fidelity.',
            highlight: '100%'
          },
          shipping: {
            title: 'Discreet Shipping',
            desc: 'Careful packaging and secure shipping worldwide.',
            highlight: '🌍'
          },
          support: {
            title: '24/7 Support',
            desc: 'Our team is available at all times via WhatsApp.',
            highlight: '24/7'
          }
        }
      },

      // Featured Section
      featured: {
        tagline: 'Premium Selection',
        title: 'Best-Sellers'
      },

      // Authentication/Quality
      auth: {
        title: 'Our Quality Process',
        guarantee: '100% Guaranteed',
        warranty: 'Quality warranty on every piece.',
        downloadReport: 'Learn More',
        steps: {
          sourcing: { title: 'Sourcing', desc: 'Premium suppliers' },
          visual: { title: 'Visual Check', desc: 'Case, dial, hands' },
          movement: { title: 'Movement', desc: 'Precision testing' },
          packaging: { title: 'Packaging', desc: 'Luxury presentation' },
          shipping: { title: 'Shipping', desc: 'Secure & discreet' },
          support: { title: 'After-Sales', desc: 'Customer support' },
          warranty: { title: 'Warranty', desc: 'Quality guarantee' }
        }
      },

      // Contact
      contact: {
        tagline: 'Get In Touch',
        title: 'Contact Us',
        subtitle: 'Our team is ready to answer all your questions and guide you in your choice.',
        globalSourcing: 'Global Shipping',
        globalDesc: 'Delivery to over 47 countries.',
        guaranteed: 'Quality Guarantee',
        guaranteedDesc: 'Every piece verified by our experts.',
        online: 'Online Now',
        waiting: 'Awaiting Your Message',
        form: {
          name: 'Your Name',
          email: 'Your Email',
          interest: 'Model of Interest',
          message: 'Your Message',
          submit: 'Send Message',
          sent: 'Message Sent',
          whatsapp: 'Prefer Direct Message?',
          whatsappCta: 'WhatsApp Direct'
        }
      },

      // Cart
      cart: {
        title: 'Your Selection',
        empty: 'Your selection is empty',
        emptyDesc: 'Explore our collection to find your perfect timepiece.',
        explore: 'Explore Collection',
        subtotal: 'Subtotal',
        shipping: 'Worldwide Shipping',
        free: 'Free',
        total: 'Total',
        checkout: 'Proceed to Checkout',
        secure: 'Secure Transaction'
      },

      // Order Summary
      order: {
        title: 'Order Summary',
        ref: 'Ref',
        verification: 'Verification Complete',
        summary: 'Order Summary',
        qty: 'Qty',
        concierge: 'Concierge Fee',
        secureShipping: 'Secure Shipping',
        included: 'Included',
        complimentary: 'Free',
        totalEstimate: 'Total',
        name: 'Your Name',
        namePlaceholder: 'Enter your full name',
        confirm: 'Confirm via WhatsApp',
        terms: 'By confirming, you agree to our Terms of Service.',
        trust: {
          quality: 'Quality',
          verified: 'Verified',
          warranty: 'Warranty',
          months: '12 Months'
        }
      },

      // Footer
      footer: {
        description: 'Your premium destination for luxury replica timepieces. Serving customers worldwide since 2010.',
        collection: 'Collection',
        allWatches: 'All Watches',
        newArrivals: 'New Arrivals',
        bestSellers: 'Best-Sellers',
        contact: 'Contact',
        whatsapp: 'WhatsApp',
        email: 'Email',
        rights: '© 2026 Luxurious.ng. All rights reserved.',
        privacy: 'Privacy',
        terms: 'Terms'
      },

      // Catalog
      catalog: {
        title: 'Full Catalog',
        search: 'Search a model...',
        filters: {
          brand: 'Brand',
          condition: 'Condition',
          priceRange: 'Price Range',
          all: 'All'
        },
        sort: {
          label: 'Sort by',
          priceAsc: 'Price: Low to High',
          priceDesc: 'Price: High to Low',
          newest: 'Newest',
          name: 'Name'
        },
        addToCart: 'Add to Cart',
        noResults: 'No watches match your criteria.',
        resetFilters: 'Reset Filters'
      },

      // Product Detail
      product: {
        back: 'Back',
        ref: 'Reference',
        specs: 'Specifications',
        description: 'Description',
        addToCart: 'Add to Selection',
        similar: 'Similar Models',
        year: 'Year'
      },

      // Common
      common: {
        available: 'Available',
        reserved: 'Reserved',
        sold: 'Sold',
        new: 'New',
        likeNew: 'Like New',
        excellent: 'Excellent',
        vintage: 'Vintage'
      }
    }
  },
  fr: {
    translation: {
      // Brand
      brand: {
        name: 'Luxurious.ng',
        tagline: 'Montres de Prestige',
        since: 'Depuis 2010'
      },
      
      // Navigation
      nav: {
        collection: 'Collection',
        bestSellers: 'Best-Sellers',
        quality: 'Qualité',
        advantages: 'Avantages',
        concierge: 'Concierge',
        myVault: 'Mon Coffre'
      },

      // Hero
      hero: {
        tagline: 'Collection Réplique Premium',
        title: 'Élégance Suisse,',
        titleAccent: 'Prix Accessible',
        subtitle: 'Découvrez notre collection de répliques haut de gamme. Méticuleusement confectionnées pour capturer l\'essence de l\'horlogerie de luxe.',
        cta: 'Explorer la Collection',
        scroll: 'Défiler'
      },

      // Why Choose Us
      whyUs: {
        tagline: 'L\'Excellence Accessible',
        title: 'Pourquoi',
        titleAccent: 'Nous Choisir',
        subtitle: 'Nous rendons l\'élégance des grandes maisons horlogères accessible, sans compromis sur la qualité ni l\'expérience client.',
        qualityCommitment: 'Engagement Qualité',
        satisfaction: 'Satisfait ou remboursé, sans condition',
        orderNow: 'Commander Maintenant',
        advantages: {
          premium: {
            title: 'Finition Premium',
            desc: 'Matériaux de qualité supérieure et finitions impeccables reproduisant chaque détail.',
            highlight: '1:1'
          },
          attention: {
            title: 'Attention aux Détails',
            desc: 'Chaque composant est minutieusement inspecté pour garantir une fidélité parfaite.',
            highlight: '100%'
          },
          shipping: {
            title: 'Livraison Discrète',
            desc: 'Emballage soigné et expédition sécurisée partout dans le monde.',
            highlight: '🌍'
          },
          support: {
            title: 'Support 24/7',
            desc: 'Notre équipe est disponible à tout moment via WhatsApp.',
            highlight: '24/7'
          }
        }
      },

      // Featured Section
      featured: {
        tagline: 'Sélection Premium',
        title: 'Best-Sellers'
      },

      // Authentication/Quality
      auth: {
        title: 'Notre Processus Qualité',
        guarantee: 'Garanti 100%',
        warranty: 'Garantie qualité sur chaque pièce.',
        downloadReport: 'En Savoir Plus',
        steps: {
          sourcing: { title: 'Sourcing', desc: 'Fournisseurs premium' },
          visual: { title: 'Contrôle Visuel', desc: 'Boîtier, cadran, aiguilles' },
          movement: { title: 'Mouvement', desc: 'Test de précision' },
          packaging: { title: 'Emballage', desc: 'Présentation luxe' },
          shipping: { title: 'Expédition', desc: 'Sécurisée & discrète' },
          support: { title: 'SAV', desc: 'Support client' },
          warranty: { title: 'Garantie', desc: 'Assurance qualité' }
        }
      },

      // Contact
      contact: {
        tagline: 'Contactez-Nous',
        title: 'Nous Contacter',
        subtitle: 'Notre équipe est prête à répondre à toutes vos questions et vous guider dans votre choix.',
        globalSourcing: 'Livraison Mondiale',
        globalDesc: 'Livraison dans plus de 47 pays.',
        guaranteed: 'Qualité Garantie',
        guaranteedDesc: 'Chaque pièce vérifiée par nos experts.',
        online: 'En Ligne',
        waiting: 'Nous Attendons Votre Message',
        form: {
          name: 'Votre Nom',
          email: 'Votre Email',
          interest: 'Modèle d\'Intérêt',
          message: 'Votre Message',
          submit: 'Envoyer',
          sent: 'Message Envoyé',
          whatsapp: 'Préférez un Message Direct?',
          whatsappCta: 'WhatsApp Direct'
        }
      },

      // Cart
      cart: {
        title: 'Votre Sélection',
        empty: 'Votre sélection est vide',
        emptyDesc: 'Explorez notre collection pour trouver la montre parfaite.',
        explore: 'Explorer la Collection',
        subtotal: 'Sous-total',
        shipping: 'Livraison Mondiale',
        free: 'Gratuite',
        total: 'Total',
        checkout: 'Finaliser la Commande',
        secure: 'Transaction Sécurisée'
      },

      // Order Summary
      order: {
        title: 'Récapitulatif',
        ref: 'Réf',
        verification: 'Vérification Complète',
        summary: 'Récapitulatif de Commande',
        qty: 'Qté',
        concierge: 'Frais de Concierge',
        secureShipping: 'Livraison Sécurisée',
        included: 'Inclus',
        complimentary: 'Offert',
        totalEstimate: 'Total',
        name: 'Votre Nom',
        namePlaceholder: 'Entrez votre nom complet',
        confirm: 'Confirmer via WhatsApp',
        terms: 'En confirmant, vous acceptez nos Conditions de Service.',
        trust: {
          quality: 'Qualité',
          verified: 'Vérifiée',
          warranty: 'Garantie',
          months: '12 Mois'
        }
      },

      // Footer
      footer: {
        description: 'Votre destination premium pour les répliques de montres de luxe. Au service de clients du monde entier depuis 2010.',
        collection: 'Collection',
        allWatches: 'Toutes les Montres',
        newArrivals: 'Nouveautés',
        bestSellers: 'Best-Sellers',
        contact: 'Contact',
        whatsapp: 'WhatsApp',
        email: 'Email',
        rights: '© 2026 Luxurious.ng. Tous droits réservés.',
        privacy: 'Confidentialité',
        terms: 'CGV'
      },

      // Catalog
      catalog: {
        title: 'Catalogue Complet',
        search: 'Rechercher un modèle...',
        filters: {
          brand: 'Marque',
          condition: 'État',
          priceRange: 'Gamme de Prix',
          all: 'Tous'
        },
        sort: {
          label: 'Trier par',
          priceAsc: 'Prix croissant',
          priceDesc: 'Prix décroissant',
          newest: 'Nouveautés',
          name: 'Nom'
        },
        addToCart: 'Ajouter au Panier',
        noResults: 'Aucune montre ne correspond à vos critères.',
        resetFilters: 'Réinitialiser les Filtres'
      },

      // Product Detail
      product: {
        back: 'Retour',
        ref: 'Référence',
        specs: 'Caractéristiques',
        description: 'Description',
        addToCart: 'Ajouter à la Sélection',
        similar: 'Modèles Similaires',
        year: 'Année'
      },

      // Common
      common: {
        available: 'Disponible',
        reserved: 'Réservé',
        sold: 'Vendu',
        new: 'Neuf',
        likeNew: 'Comme Neuf',
        excellent: 'Excellent',
        vintage: 'Vintage'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
