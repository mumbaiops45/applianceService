import ServiceHero from '@/components/service/ServiceHero';
import BrandInfo from '@/components/service/BrandInfo';
import ServiceCards from '@/components/service/ServiceCards';
import { Benefits } from '@/components/service/Benefits';
import { RepairProcess } from '@/components/service/RepairProcess';
import { BookingCTA } from '@/components/service/BookingCTA';
import { Reviews } from '@/components/service/Reviews';
import { FAQSection } from '@/components/service/FAQSection';
import { ContactForm } from '@/components/service/ContactForm';
import { serviceLandingContent } from '@/components/service/serviceLandingContent';
import CustomerEnquiryPopup from '@/components/CustomerEnquiryPopup';

export const metadata = {
  title: {
    absolute: "Godrej Refrigerator Repair Service | Expert Technicians",
  },

  description:
    "Get Godrej Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",

  keywords: [
    "Godrej Refrigerator Repair Service",
    "Godrej Refrigerator Repair",
    "Godrej Fridge Repair",
    "Godrej Refrigerator Technician",
    "Godrej Refrigerator Service",
    "Doorstep Godrej Refrigerator Repair",
    "Same Day Godrej Refrigerator Repair",
    "Godrej Refrigerator Spare Parts",
    "Godrej Refrigerator Repair Technician",
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "Refrigerator Repair",
    "Home Appliance Repair Near Me",
  ],

  alternates: {
    canonical: "https://customercare247.support/refrigerator/godrej",
  },

  openGraph: {
    title: "Godrej Refrigerator Repair Service | Expert Technicians",
    description: "Get Godrej Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
    url: "https://customercare247.support/refrigerator/godrej",
    siteName: "ApplianceCare",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Godrej Refrigerator Repair Service | Expert Technicians",
    description: "Get Godrej Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
  },
};

export default function Page() {
  const content = serviceLandingContent.refrigerator.godrej;

  return (
    <>
    <CustomerEnquiryPopup brand="Godrej" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="Godrej"
        brandSlug="godrej"
        category="Refrigerator"
        categorySlug="refrigerator"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
        cardText={content.heroCardText}
      />
      <BrandInfo
        title="Godrej Refrigerator"
        description={content.introText}
        highlights={content.highlights}
        ctaText={content.brandCtaText}
        stats={[
          {
            value: '15+',
            label: 'Years Experience',
            text: 'Our technicians have practical experience handling different refrigerator models and common cooling, electrical, drainage, and compressor-related problems.',
          },
          {
            value: '25K+',
            label: 'Repairs Completed',
            text: 'Thousands of completed repairs reflect our focus on dependable appliance service and customer convenience.',
          },
          {
            value: '100%',
            label: 'Customer Satisfaction',
            text: 'We prioritize clear communication, careful workmanship, and a smooth repair experience.',
          },
          {
            value: '4.9★',
            label: 'Customer Rating',
            text: 'Our service approach focuses on professional repairs and responsive customer support.',
          },
        ]}
      />
      <ServiceCards services={content.services} subtitle={content.servicesIntro} />
      <Benefits features={content.benefits} title={content.benefitsTitle} subtitle={content.benefitsIntro} />
      <RepairProcess steps={content.process} subtitle={content.processIntro} />
      <Reviews testimonials={content.testimonials} title={content.reviewsTitle} subtitle={content.reviewsIntro} />
      <FAQSection faq={content.faq} subtitle={content.faqIntro} />
      <BookingCTA brand="Godrej" category="Refrigerator" description={content.ctaText} />
<ContactForm brand="Godrej" subtitle={content.contactIntro} />
    </>
  );
}