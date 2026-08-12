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
    absolute: "LG Washing Machine Repair Service | Doorstep LG Washer Repair",
  },

  description:
    "Get reliable LG Washing Machine Repair Service with certified technicians, doorstep visits, genuine spare parts, expert diagnostics, clear pricing and warranty support.",

  keywords: [
    "LG Washing Machine Repair Service",
    "LG Washing Machine Repair",
    "LG Washer Repair",
    "LG Washing Machine Technician",
    "LG Washing Machine Service",
    "Doorstep LG Washing Machine Repair",
    "Same Day LG Washing Machine Repair",
    "LG Washing Machine Spare Parts",
    "LG Washing Machine Repair Technician",
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "Washing Machine Repair",
    "Home Appliance Repair Near Me",
  ],

  alternates: {
    canonical: "https://customercare247.support/washing-machine/lg",
  },

  openGraph: {
    title: "LG Washing Machine Repair Service | Doorstep LG Washer Repair",
    description: "Get reliable LG Washing Machine Repair Service with certified technicians, doorstep visits, genuine spare parts, expert diagnostics, clear pricing and warranty support.",
    url: "https://customercare247.support/washing-machine/lg",
    siteName: "ApplianceCare",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LG Washing Machine Repair Service | Doorstep LG Washer Repair",
    description: "Get reliable LG Washing Machine Repair Service with certified technicians, doorstep visits, genuine spare parts, expert diagnostics, clear pricing and warranty support.",
  },
};
export default function Page() {
  const content = serviceLandingContent['washing-machine'].lg;

  return (
    <>
    <CustomerEnquiryPopup brand="LG" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="LG"
        brandSlug="lg"
        category="Washing Machine"
        categorySlug="washing-machine"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
        cardText={content.heroCardText}
      />
      <BrandInfo
        title="LG Washing Machine"
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
      <BookingCTA brand="LG" category="Washing Machine" description={content.ctaText} />
<ContactForm brand="LG" subtitle={content.contactIntro} />
    </>
  );
}