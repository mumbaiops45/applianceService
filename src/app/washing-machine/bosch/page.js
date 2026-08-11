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
  title: "Bosch Washing Machine Repair Service | Expert Repair Technicians",

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
  ],

  alternates: {
    canonical: "https://customercare247.support/washing-machine/bosch",
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
      />
      <BrandInfo
        title="Bosch Washing Machine"
        description={content.introText}
        highlights={content.highlights}
        stats={[
          { value: '15+', label: 'Years Experience' },
          { value: '25K+', label: 'Repairs Completed' },
          { value: '100%', label: 'Customer Satisfaction' },
          { value: '4.9★', label: 'Customer Rating' },
        ]}
      />
      <ServiceCards services={content.services} />
      <Benefits features={content.benefits} title="Why Choose Our Service" />
      <RepairProcess steps={content.process} />
      <Reviews testimonials={content.testimonials} />
      <FAQSection faq={content.faq} />
      <BookingCTA brand="Bosch" category="Washing Machine" />
<ContactForm brand="Bosch" />
    </>
  );
}