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
    absolute: "Samsung Refrigerator Repair Service | Quick Home Service",
  },

  description:
    "Get Samsung Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",

  keywords: [
    "Samsung Refrigerator Repair Service",
    "Samsung Refrigerator Repair",
    "Samsung Fridge Repair",
    "Samsung Refrigerator Technician",
    "Samsung Refrigerator Service",
    "Doorstep Samsung Refrigerator Repair",
    "Same Day Samsung Refrigerator Repair",
    "Samsung Refrigerator Spare Parts",
    "Samsung Refrigerator Repair Technician",
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "Refrigerator Repair",
    "Home Appliance Repair Near Me",
  ],

  alternates: {
    canonical: "https://customercare247.support/refrigerator/samsung",
  },

  openGraph: {
    title: "Samsung Refrigerator Repair Service | Quick Home Service",
    description: "Get Samsung Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
    url: "https://customercare247.support/refrigerator/samsung",
    siteName: "ApplianceCare",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Samsung Refrigerator Repair Service | Quick Home Service",
    description: "Get Samsung Refrigerator Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
  },
};
export default function Page() {
  const content = serviceLandingContent.refrigerator.samsung;

  return (
    <>
    <CustomerEnquiryPopup brand="Samsung" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="Samsung"
        brandSlug="samsung"
        category="Refrigerator"
        categorySlug="refrigerator"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
        cardText={content.heroCardText}
      />
      <BrandInfo
        title="Samsung Refrigerator"
        description={content.introText}
        highlights={content.highlights}
        ctaText={content.brandCtaText}
        stats={[
          {
            value: '15+',
            label: 'Years Experience',
            text: 'Our technicians have practical experience handling different refrigerator models and common cooling, electrical, and mechanical problems.',
          },
          {
            value: '25K+',
            label: 'Repairs Completed',
            text: 'Thousands of completed repairs reflect our focus on dependable service and customer convenience.',
          },
          {
            value: '100%',
            label: 'Customer Satisfaction',
            text: 'We prioritize professional workmanship, clear communication, and a smooth repair experience.',
          },
          {
            value: '4.9★',
            label: 'Customer Rating',
            text: 'Our service approach focuses on reliable repairs and responsive customer support.',
          },
        ]}
      />
      <ServiceCards services={content.services} subtitle={content.servicesIntro} />
      <Benefits features={content.benefits} title={content.benefitsTitle} subtitle={content.benefitsIntro} />
      <RepairProcess steps={content.process} subtitle={content.processIntro} />
      <Reviews testimonials={content.testimonials} title={content.reviewsTitle} subtitle={content.reviewsIntro} />
      <FAQSection faq={content.faq} subtitle={content.faqIntro} />
      <BookingCTA brand="Samsung" category="Refrigerator" description={content.ctaText} />
<ContactForm brand="Samsung" subtitle={content.contactIntro} />
    </>
  );
}