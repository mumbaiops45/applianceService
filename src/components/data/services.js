// data/services.js

export const serviceCategories = [
  {
    slug: 'washing-machine',
    label: 'Washing Machine',
    icon: '🔄',
    image: '/service1.jpg',
    brands: [
      { slug: 'lg', label: 'LG', isOptional: false },
      { slug: 'samsung', label: 'Samsung', isOptional: false },
      { slug: 'bosch', label: 'Bosch', isOptional: false },
      { slug: 'ifb', label: 'IFB', isOptional: true },
    ],
  },
  {
    slug: 'refrigerator',
    label: 'Refrigerator',
    icon: '🧊',
    image: '/service2.jpg',
    brands: [
      { slug: 'lg', label: 'LG', isOptional: false },
      { slug: 'samsung', label: 'Samsung', isOptional: false },
      { slug: 'whirlpool', label: 'Whirlpool', isOptional: false },
      { slug: 'godrej', label: 'Godrej', isOptional: true },
    ],
  },
  {
    slug: 'tv',
    label: 'TV',
    icon: '📺',
    image: '/service3.jpg',
    brands: [
      { slug: 'lg', label: 'LG', isOptional: false },
      { slug: 'samsung', label: 'Samsung', isOptional: false },
      { slug: 'sony', label: 'Sony', isOptional: false },
      { slug: 'vu', label: 'Vu', isOptional: true },
    ],
  },
];

// Brand-specific content for service pages
export const brandContent = {
  'washing-machine': {
    lg: {
      title: 'LG Washing Machine Repair',
      description:
        'Expert repair for all LG washing machine models – front load, top load, and semi‑automatic. We use genuine LG spare parts and provide same‑day doorstep service.',
      heroImage: '/washing-machine-lg.jpg',
      features: [
        'Genuine LG parts',
        'Certified LG technicians',
        'Same‑day service',
        'Warranty on repairs',
      ],
      process: [
        'Book appointment',
        'Technician visit',
        'Diagnose & quote',
        'Repair & test',
      ],
      faq: [
        {
          q: 'How long does an LG washing machine repair take?',
          a: 'Most repairs are completed within 2‑3 hours. We provide same‑day service for most issues.',
        },
        {
          q: 'Do you provide warranty on repairs?',
          a: 'Yes, we offer a 90‑day warranty on all repairs and spare parts.',
        },
      ],
      testimonials: [
        {
          name: 'Ravi Kumar',
          role: 'LG Front Load User',
          text: 'Quick and professional repair. My LG washing machine works like new.',
          rating: 5,
        },
      ],
    },
    samsung: {
      title: 'Samsung Washing Machine Repair',
      description:
        'Professional repair for Samsung washing machines – from digital inverter to EcoBubble models. Fast, reliable, and affordable.',
      heroImage: '/washing-machine-samsung.jpg',
      features: [
        'Samsung certified engineers',
        'Genuine parts',
        'Free inspection',
        'Service guarantee',
      ],
      process: [
        'Schedule service',
        'Engineer arrives',
        'Problem diagnosis',
        'Repair & testing',
      ],
      faq: [
        {
          q: 'What models do you cover?',
          a: 'All Samsung washing machine models including front load, top load, and add‑wash.',
        },
      ],
      testimonials: [
        {
          name: 'Priya Sharma',
          role: 'Samsung EcoBubble User',
          text: 'Excellent service! They fixed my machine in under 2 hours.',
          rating: 5,
        },
      ],
    },
    bosch: {
      title: 'Bosch Washing Machine Repair',
      description:
        'Specialized repair for Bosch washing machines – known for German engineering. Our experts handle all Bosch models with care.',
      heroImage: '/washing-machine-bosch.jpg',
      features: [
        'Bosch specialists',
        'Original components',
        'Quick turnaround',
        'Affordable rates',
      ],
      process: [
        'Book online',
        'On‑site visit',
        'Accurate diagnosis',
        'Repair completion',
      ],
      faq: [
        {
          q: 'Do you repair both front and top load Bosch machines?',
          a: 'Yes, we service all types of Bosch washing machines.',
        },
      ],
      testimonials: [
        {
          name: 'Amit Patel',
          role: 'Bosch Serie 4 User',
          text: 'Very professional team. My Bosch is running perfectly now.',
          rating: 4.5,
        },
      ],
    },
    ifb: {
      title: 'IFB Washing Machine Repair',
      description:
        'Expert repair for IFB washing machines – front load, top load, and semi‑automatic. We use genuine IFB spare parts.',
      heroImage: '/washing-machine-ifb.jpg',
      features: [
        'IFB trained engineers',
        'Genuine IFB parts',
        'Same‑day service',
        'Repair warranty',
      ],
      process: [
        'Request call',
        'Visit & diagnose',
        'Fix & test',
        'Follow‑up',
      ],
      faq: [
        {
          q: 'Do you repair IFB front load machines?',
          a: 'Yes, we specialize in IFB front load and top load repairs.',
        },
      ],
      testimonials: [
        {
          name: 'Sneha Reddy',
          role: 'IFB Aqua SX User',
          text: 'Great service! They fixed my machine on the same day.',
          rating: 5,
        },
      ],
    },
  },
  'refrigerator': {
    lg: {
      title: 'LG Refrigerator Repair',
      description:
        'Professional repair for LG refrigerators – single door, double door, side‑by‑side, and French door models. We fix cooling, compressor, and gas leakage issues.',
      heroImage: '/refrigerator-lg.jpg',
      features: [
        'LG certified engineers',
        'Genuine LG parts',
        'Fast response',
        '90‑day warranty',
      ],
      process: [
        'Call or book',
        'Technician inspection',
        'Issue resolution',
        'Testing & approval',
      ],
      faq: [
        {
          q: 'How long does a refrigerator repair take?',
          a: 'Most repairs are completed within 3‑4 hours, including gas refilling.',
        },
        {
          q: 'Do you provide pick‑up and drop‑off?',
          a: 'Yes, we offer free pick‑up and drop‑off for major repairs.',
        },
      ],
      testimonials: [
        {
          name: 'Mohan Singh',
          role: 'LG Double Door User',
          text: 'They fixed my fridge quickly. Very satisfied.',
          rating: 5,
        },
      ],
    },
    samsung: {
      title: 'Samsung Refrigerator Repair',
      description:
        'Trusted repair for Samsung refrigerators – from digital inverter to convertible models. We handle all issues with precision.',
      heroImage: '/refrigerator-samsung.jpg',
      features: [
        'Samsung specialists',
        'Original Samsung parts',
        'On‑site service',
        'Affordable pricing',
      ],
      process: [
        'Book online',
        'Engineer visit',
        'Diagnose & quote',
        'Repair & demo',
      ],
      faq: [
        {
          q: 'Can you repair Samsung side‑by‑side refrigerators?',
          a: 'Yes, we have expertise in all Samsung refrigerator types.',
        },
      ],
      testimonials: [
        {
          name: 'Kiran Desai',
          role: 'Samsung Convertible User',
          text: 'Very efficient service. My fridge cools perfectly now.',
          rating: 5,
        },
      ],
    },
    whirlpool: {
      title: 'Whirlpool Refrigerator Repair',
      description:
        'Expert repair for Whirlpool refrigerators – single door, double door, and side‑by‑side. We guarantee genuine spare parts and quality service.',
      heroImage: '/refrigerator-whirlpool.jpg',
      features: [
        'Whirlpool trained engineers',
        'Genuine Whirlpool parts',
        'Quick service',
        'Warranty on repairs',
      ],
      process: [
        'Request appointment',
        'Technician arrives',
        'Problem fixed',
        'Testing completed',
      ],
      faq: [
        {
          q: 'Do you repair gas leakage?',
          a: 'Yes, we specialize in gas refilling and leak repair.',
        },
      ],
      testimonials: [
        {
          name: 'Rohit Gupta',
          role: 'Whirlpool Double Door User',
          text: 'They fixed my gas leakage in just one visit. Excellent!',
          rating: 4.5,
        },
      ],
    },
    godrej: {
      title: 'Godrej Refrigerator Repair',
      description:
        'Professional repair for Godrej refrigerators – all models including frost‑free and direct‑cool. We provide reliable and affordable service.',
      heroImage: '/refrigerator-godrej.jpg',
      features: [
        'Godrej experts',
        'Genuine parts',
        'Same‑day service',
        '6‑month warranty',
      ],
      process: [
        'Call us',
        'Inspection',
        'Repair',
        'Quality check',
      ],
      faq: [
        {
          q: 'Do you repair frost‑free models?',
          a: 'Yes, we handle all Godrej refrigerator models.',
        },
      ],
      testimonials: [
        {
          name: 'Anita Verma',
          role: 'Godrej Frost‑Free User',
          text: 'Great service, very professional team.',
          rating: 5,
        },
      ],
    },
  },
  'tv': {
    lg: {
      title: 'LG TV Repair',
      description:
        'Professional repair for LG TVs – LED, OLED, 4K, and Smart TVs. We fix screen issues, power problems, and connectivity errors.',
      heroImage: '/tv-lg.jpg',
      features: [
        'LG certified engineers',
        'Genuine LG parts',
        'Doorstep service',
        'Repair warranty',
      ],
      process: [
        'Book service',
        'Technician visit',
        'Diagnose',
        'Repair & test',
      ],
      faq: [
        {
          q: 'How long does a TV repair take?',
          a: 'Most repairs are done within 2‑3 hours. Complex issues may take longer.',
        },
      ],
      testimonials: [
        {
          name: 'Sunil Kumar',
          role: 'LG OLED User',
          text: 'My OLED TV was fixed perfectly. Highly recommend.',
          rating: 5,
        },
      ],
    },
    samsung: {
      title: 'Samsung TV Repair',
      description:
        'Expert repair for Samsung TVs – QLED, 4K, Curved, and Smart TVs. We resolve all hardware and software issues.',
      heroImage: '/tv-samsung.jpg',
      features: [
        'Samsung specialists',
        'Original Samsung parts',
        'Fast service',
        '90‑day warranty',
      ],
      process: [
        'Schedule a visit',
        'Engineer arrives',
        'Issue fixed',
        'Demo',
      ],
      faq: [
        {
          q: 'Do you repair Samsung Smart TV motherboard?',
          a: 'Yes, we repair motherboards and replace if needed.',
        },
      ],
      testimonials: [
        {
          name: 'Neha Jain',
          role: 'Samsung QLED User',
          text: 'Quick and reliable. My TV works like new.',
          rating: 5,
        },
      ],
    },
    sony: {
      title: 'Sony TV Repair',
      description:
        'Professional repair for Sony TVs – BRAVIA, OLED, 4K, and Android TVs. We use genuine Sony parts and provide expert service.',
      heroImage: '/tv-sony.jpg',
      features: [
        'Sony trained engineers',
        'Genuine Sony parts',
        'On‑site service',
        'Repair guarantee',
      ],
      process: [
        'Contact us',
        'Technician visit',
        'Diagnose & repair',
        'Final testing',
      ],
      faq: [
        {
          q: 'Can you repair Sony OLED screen burn‑in?',
          a: 'Yes, we handle all Sony TV issues including screen burn‑in.',
        },
      ],
      testimonials: [
        {
          name: 'Vikram Reddy',
          role: 'Sony BRAVIA User',
          text: 'Excellent service, very knowledgeable staff.',
          rating: 5,
        },
      ],
    },
    vu: {
      title: 'Vu TV Repair',
      description:
        'Expert repair for Vu TVs – LED, 4K, and Smart TVs. We provide fast and affordable service with genuine parts.',
      heroImage: '/tv-vu.jpg',
      features: [
        'Vu specialists',
        'Genuine Vu parts',
        'Quick turnaround',
        'Warranty',
      ],
      process: [
        'Book appointment',
        'Visit & diagnose',
        'Repair',
        'Test',
      ],
      faq: [
        {
          q: 'Do you repair Vu Android TVs?',
          a: 'Yes, we repair all Vu TV models including Android TVs.',
        },
      ],
      testimonials: [
        {
          name: 'Deepak Patel',
          role: 'Vu 4K User',
          text: 'Great service, very affordable. Highly recommended.',
          rating: 4.5,
        },
      ],
    },
  },
};