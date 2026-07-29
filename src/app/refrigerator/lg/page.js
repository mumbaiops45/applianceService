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
  title: 'LG Refrigerator Repair Service',
  description: 'Same-day LG refrigerator repair for cooling, drainage, and compressor issues.',
};

export default function Page() {
  const content = serviceLandingContent.refrigerator.lg;

  return (
    <>
      <ServiceHero title={content.title} description={content.description} brand="LG" brandSlug="lg" category="Refrigerator" categorySlug="refrigerator" badge={content.badge} stats={content.stats} heroImage={content.heroImage} />
      <BrandInfo title="LG Refrigerator" description={content.introText} highlights={content.highlights} />
      <ServiceCards services={content.services} />
      <Benefits features={content.benefits} title="Why Choose Our Service" />
      <RepairProcess steps={content.process} />
      <Reviews testimonials={content.testimonials} />
      <FAQSection faq={content.faq} />
      <BookingCTA brand="LG" category="Refrigerator" />
      <ContactForm />
    </>
  );
}
