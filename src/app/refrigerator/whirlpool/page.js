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
  title: "Whirlpool Refrigerator Repair Service | Doorstep Fridge Repair",

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
  ],

  alternates: {
    canonical: "https://customercare247.support/refrigerator/whirlpool",
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
      />
      <BrandInfo
        title="Whirlpool Refrigerator"
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
      <BookingCTA brand="Whirlpool" category="Refrigerator" />
<ContactForm brand="Whirlpool" />
    </>
  );
}