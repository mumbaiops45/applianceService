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
  title: 'Godrej Refrigerator Repair Service',
  description: 'Professional Godrej refrigerator repair for cooling, compressor, and leak issues with expert support.',
};

export default function Page() {
  const content = serviceLandingContent.refrigerator.godrej;

  return (
    <>
    <CustomerEnquiryPopup brand="Godrej" />
      <ServiceHero
        title={content.title}
        description={content.description}
        brand="Godrej"
        brandSlug="godrej"
        category="Refrigerator"
        categorySlug="refrigerator"
        badge={content.badge}
        stats={content.stats}
        heroImage={content.heroImage}
      />
      <BrandInfo
        title="Godrej Refrigerator"
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
      <BookingCTA brand="Godrej" category="Refrigerator" />
    <ContactForm brand="Godrej" />
    </>
  );
}
