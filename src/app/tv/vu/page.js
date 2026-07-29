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

export const metadata = {
  title: 'Vu TV Repair Service',
  description: 'Expert Vu TV repair for LED, 4K, and Smart TVs with fast service and genuine parts.',
};

export default function Page() {
  const content = serviceLandingContent.tv.vu;

  return (
    <>
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
      />
      <BrandInfo
        title="Vu TV"
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
      <BookingCTA brand="Vu" category="TV" />
      <ContactForm />
    </>
  );
}
