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
    absolute: "Bosch Washing Machine Repair Service | Expert Repair Technicians",
  },

  description:
    "Get Bosch Washing Machine Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",

  keywords: [
    "Bosch Washing Machine Repair Service",
    "Bosch Washing Machine Repair",
    "Bosch Washer Repair",
    "Bosch Washing Machine Technician",
    "Bosch Washing Machine Service",
    "Doorstep Bosch Washing Machine Repair",
    "Same Day Bosch Washing Machine Repair",
    "Bosch Washing Machine Spare Parts",
    "Bosch Washing Machine Repair Technician",
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "Washing Machine Repair",
    "Home Appliance Repair Near Me",
  ],

  alternates: {
    canonical: "https://customercare247.support/washing-machine/bosch",
  },

  openGraph: {
    title: "Bosch Washing Machine Repair Service | Expert Repair Technicians",
    description: "Get Bosch Washing Machine Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
    url: "https://customercare247.support/washing-machine/bosch",
    siteName: "ApplianceCare",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bosch Washing Machine Repair Service | Expert Repair Technicians",
    description: "Get Bosch Washing Machine Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
  },
};

export default function Page() {
  const content = serviceLandingContent['washing-machine'].bosch;

  return (
    <>
    <CustomerEnquiryPopup brand="Bosch" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="Bosch"
        brandSlug="bosch"
        category="Washing Machine"
        categorySlug="washing-machine"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
        cardText={content.heroCardText}
      />
      <BrandInfo
        title="Bosch Washing Machine"
        description={content.introText}
        highlights={content.highlights}
        ctaText={content.brandCtaText}
        stats={[
          {
            value: '15+',
            label: 'Years Experience',
            text: 'Our technicians bring practical experience in diagnosing and repairing different washing machine problems.',
          },
          {
            value: '25K+',
            label: 'Repairs Completed',
            text: 'Thousands of completed repairs demonstrate our focus on professional service and customer convenience.',
          },
          {
            value: '100%',
            label: 'Customer Satisfaction',
            text: 'We prioritize clear communication, careful workmanship, and a smooth repair experience.',
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
      <BookingCTA brand="Bosch" category="Washing Machine" description={content.ctaText} />
<ContactForm brand="Bosch" subtitle={content.contactIntro} />
    </>
  );
}