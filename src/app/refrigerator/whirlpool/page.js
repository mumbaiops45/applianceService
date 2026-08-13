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
    absolute: "Whirlpool Refrigerator Repair Service | Doorstep Fridge Repair",
  },

  description:
    "Get Whirlpool Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",

  keywords: [
    "Whirlpool Refrigerator Repair Service",
    "Whirlpool Refrigerator Repair",
    "Whirlpool Fridge Repair",
    "Whirlpool Refrigerator Technician",
    "Whirlpool Refrigerator Service",
    "Doorstep Whirlpool Refrigerator Repair",
    "Same Day Whirlpool Refrigerator Repair",
    "Whirlpool Refrigerator Spare Parts",
    "Whirlpool Refrigerator Repair Technician",
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "Refrigerator Repair",
    "Home Appliance Repair Near Me",
  ],

  alternates: {
    canonical: "https://customercare247.support/refrigerator/whirlpool",
  },

  openGraph: {
    title: "Whirlpool Refrigerator Repair Service | Doorstep Fridge Repair",
    description: "Get Whirlpool Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
    url: "https://customercare247.support/refrigerator/whirlpool",
    siteName: "ApplianceCare",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Whirlpool Refrigerator Repair Service | Doorstep Fridge Repair",
    description: "Get Whirlpool Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
  },
};
export default function Page() {
  const content = serviceLandingContent.refrigerator.whirlpool;

  return (
    <>
    <CustomerEnquiryPopup brand="Whirlpool" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="Whirlpool"
        brandSlug="whirlpool"
        category="Refrigerator"
        categorySlug="refrigerator"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
        cardText={content.heroCardText}
      />
      <BrandInfo
        title="Whirlpool Refrigerator"
        description={content.introText}
        highlights={content.highlights}
        ctaText={content.brandCtaText}
        stats={[
          {
            value: '15+',
            label: 'Years Experience',
            text: 'Our technicians have practical experience handling different refrigerator models and common cooling, electrical, drainage, and mechanical faults.',
          },
          {
            value: '25K+',
            label: 'Repairs Completed',
            text: 'Thousands of completed repairs reflect our focus on convenient and professional appliance service.',
          },
          {
            value: '100%',
            label: 'Customer Satisfaction',
            text: 'We prioritize clear communication, careful workmanship, and a smooth customer experience.',
          },
          {
            value: '4.9★',
            label: 'Customer Rating',
            text: 'Our service approach focuses on dependable repairs and responsive customer support.',
          },
        ]}
      />
      <ServiceCards services={content.services} subtitle={content.servicesIntro} />
      <Benefits features={content.benefits} title={content.benefitsTitle} subtitle={content.benefitsIntro} />
      <RepairProcess steps={content.process} subtitle={content.processIntro} />
      <Reviews testimonials={content.testimonials} title={content.reviewsTitle} subtitle={content.reviewsIntro} />
      <FAQSection faq={content.faq} subtitle={content.faqIntro} />
      <BookingCTA brand="Whirlpool" category="Refrigerator" description={content.ctaText} />
<ContactForm brand="Whirlpool" subtitle={content.contactIntro} />
    </>
  );
}