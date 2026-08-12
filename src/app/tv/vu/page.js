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
    absolute: "Vu TV Repair Service | Reliable Home TV Repairs",
  },

  description:
    "Get Vu TV Repair Service for LED, 4K and Smart TVs with expert diagnostics, doorstep support, genuine parts and same-day service when available.",

  keywords: [
    "Vu TV Repair Service",
    "Vu TV Repair",
    "Vu Television Repair",
    "Vu Smart TV Repair",
    "Vu LED TV Repair",
    "Vu 4K TV Repair",
    "Vu TV Technician",
    "Vu TV Service",
    "Vu TV Repair Technician",
    "Doorstep Vu TV Repair",
    "Same Day Vu TV Repair",
    "Vu TV Display Repair",
    "Vu TV Sound Repair",
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "TV Repair",
    "Home Appliance Repair Near Me",
  ],

  alternates: {
    canonical: "https://customercare247.support/tv/vu",
  },

  openGraph: {
    title: "Vu TV Repair Service | Reliable Home TV Repairs",
    description: "Get Vu TV Repair Service for LED, 4K and Smart TVs with expert diagnostics, doorstep support, genuine parts and same-day service when available.",
    url: "https://customercare247.support/tv/vu",
    siteName: "ApplianceCare",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vu TV Repair Service | Reliable Home TV Repairs",
    description: "Get Vu TV Repair Service for LED, 4K and Smart TVs with expert diagnostics, doorstep support, genuine parts and same-day service when available.",
  },
};

export default function Page() {
  const content = serviceLandingContent.tv.vu;

  return (
    <>
    <CustomerEnquiryPopup brand="Vu" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="Vu"
        brandSlug="vu"
        category="TV"
        categorySlug="tv"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
        cardText={content.heroCardText}
      />
      <BrandInfo
        title="Vu TV"
        description={content.introText}
        highlights={content.highlights}
        ctaText={content.brandCtaText}
        stats={[
          { value: '15+', label: 'Years Experience' },
          { value: '25K+', label: 'Repairs Completed' },
          { value: '100%', label: 'Customer Satisfaction' },
          { value: '4.9★', label: 'Customer Rating' },
        ]}
      />
      <ServiceCards services={content.services} subtitle={content.servicesIntro} />
      <Benefits features={content.benefits} title={content.benefitsTitle} subtitle={content.benefitsIntro} />
      <RepairProcess steps={content.process} subtitle={content.processIntro} />
      <Reviews testimonials={content.testimonials} title={content.reviewsTitle} subtitle={content.reviewsIntro} />
      <FAQSection faq={content.faq} subtitle={content.faqIntro} />
      <BookingCTA brand="Vu" category="TV" description={content.ctaText} />
<ContactForm brand="Vu" subtitle={content.contactIntro} />
    </>
  );
}