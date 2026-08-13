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
    absolute: "LG TV Repair Service | Expert Doorstep TV Repair",
  },

  description:
    "Get LG TV Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",

  keywords: [
    "LG TV Repair Service",
    "LG TV Repair",
    "LG Television Repair",
    "LG Smart TV Repair",
    "LG TV Technician",
    "LG TV Service",
    "Doorstep LG TV Repair",
    "Same Day LG TV Repair",
    "LG TV Spare Parts",
    "LG TV Repair Technician",
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "TV Repair",
    "Home Appliance Repair Near Me",
  ],

  alternates: {
    canonical: "https://customercare247.support/tv/lg",
  },

  openGraph: {
    title: "LG TV Repair Service | Expert Doorstep TV Repair",
    description: "Get LG TV Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
    url: "https://customercare247.support/tv/lg",
    siteName: "ApplianceCare",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LG TV Repair Service | Expert Doorstep TV Repair",
    description: "Get LG TV Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",
  },
};

export default function Page() {
  const content = serviceLandingContent.tv.lg;

  return (
    <>
    <CustomerEnquiryPopup brand="LG" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="LG"
        brandSlug="lg"
        category="TV"
        categorySlug="tv"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
        cardText={content.heroCardText}
      />
      <BrandInfo
        title="LG TV"
        description={content.introText}
        highlights={content.highlights}
        ctaText={content.brandCtaText}
        stats={[
          {
            value: '15+',
            label: 'Years Experience',
            text: 'Our technicians bring practical experience in diagnosing different television models and common technical problems.',
          },
          {
            value: '25K+',
            label: 'Repairs Completed',
            text: 'Thousands of completed repairs reflect our focus on reliable service and customer convenience.',
          },
          {
            value: '100%',
            label: 'Customer Satisfaction',
            text: 'We prioritize professional workmanship, clear communication, and a smooth repair experience.',
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
      <BookingCTA brand="LG" category="TV" description={content.ctaText} />
<ContactForm brand="LG" subtitle={content.contactIntro} />
    </>
  );
}