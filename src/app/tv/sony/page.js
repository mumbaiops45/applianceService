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
  title: "Sony TV Repair Service | Fast & Reliable TV Repairs",

  description:
    "Get Sony TV Repair Service with expert diagnostics, doorstep support, genuine spare parts, transparent pricing, and same-day service when available.",

  keywords: [
    "Sony TV Repair Service",
    "Sony TV Repair",
    "Sony Television Repair",
    "Sony Smart TV Repair",
    "Sony Bravia TV Repair",
    "Sony TV Technician",
    "Sony TV Service",
    "Sony TV Repair Technician",
    "Doorstep Sony TV Repair",
    "Same Day Sony TV Repair",
    "Sony TV Display Repair",
    "Sony TV Sound Repair",
  ],

  alternates: {
    canonical: "https://customercare247.support/tv/sony",
  },
};

export default function Page() {
  const content = serviceLandingContent.tv.sony;

  return (
    <>
    <CustomerEnquiryPopup brand="Sony" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="Sony"
        brandSlug="sony"
        category="TV"
        categorySlug="tv"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
      />
      <BrandInfo
        title="Sony TV"
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
      <BookingCTA brand="Sony" category="TV" />
<ContactForm brand="Sony" />
    </>
  );
}