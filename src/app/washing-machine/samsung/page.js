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
    absolute: "Samsung Washing Machine Repair Service | Quick Home Service",
  },

  description:
    "Get Samsung Washing Machine Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",

  keywords: [
    "Samsung Washing Machine Repair Service",
    "Samsung Washing Machine Repair",
    "Samsung Washer Repair",
    "Samsung Washing Machine Technician",
    "Samsung Washing Machine Service",
    "Doorstep Samsung Washing Machine Repair",
    "Same Day Samsung Washing Machine Repair",
    "Samsung Washing Machine Spare Parts",
    "Samsung Washing Machine Repair Technician",
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "Washing Machine Repair",
    "Home Appliance Repair Near Me",
  ],

  alternates: {
    canonical: "https://customercare247.support/washing-machine/samsung",
  },

  openGraph: {
    title: "Samsung Washing Machine Repair Service | Quick Home Service",
    description: "Get Samsung Washing Machine Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
    url: "https://customercare247.support/washing-machine/samsung",
    siteName: "ApplianceCare",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Samsung Washing Machine Repair Service | Quick Home Service",
    description: "Get Samsung Washing Machine Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
  },
};

export default function Page() {
  const content = serviceLandingContent['washing-machine'].samsung;

  return (
    <>
    <CustomerEnquiryPopup brand="Samsung" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="Samsung"
        brandSlug="samsung"
        category="Washing Machine"
        categorySlug="washing-machine"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
        cardText={content.heroCardText}
      />
      <BrandInfo
        title="Samsung Washing Machine"
        description={content.introText}
        highlights={content.highlights}
        ctaText={content.brandCtaText}
        stats={[
          {
            value: '15+',
            label: 'Years Experience',
            text: 'Our technicians bring extensive practical experience in handling different washing machine models and common appliance faults.',
          },
          {
            value: '25K+',
            label: 'Repairs Completed',
            text: 'Thousands of completed appliance repairs reflect our focus on convenient and dependable customer service.',
          },
          {
            value: '100%',
            label: 'Customer Satisfaction',
            text: 'We prioritize clear communication, professional workmanship, and a smooth service experience.',
          },
          {
            value: '4.9★',
            label: 'Customer Rating',
            text: 'Our service approach focuses on quality repairs and responsive customer support.',
          },
        ]}
      />
      <ServiceCards services={content.services} subtitle={content.servicesIntro} />
      <Benefits features={content.benefits} title={content.benefitsTitle} subtitle={content.benefitsIntro} />
      <RepairProcess steps={content.process} subtitle={content.processIntro} />
      <Reviews testimonials={content.testimonials} title={content.reviewsTitle} subtitle={content.reviewsIntro} />
      <FAQSection faq={content.faq} subtitle={content.faqIntro} />
      <BookingCTA brand="Samsung" category="Washing Machine" description={content.ctaText} />
<ContactForm brand="Samsung" subtitle={content.contactIntro} />
    </>
  );
}