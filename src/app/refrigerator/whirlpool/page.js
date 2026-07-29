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
  title: 'Whirlpool Refrigerator Repair Service',
  description: 'Professional Whirlpool refrigerator repair for cooling issues, leakage, and noisy operation.',
};

export default function Page() {
  const content = serviceLandingContent.refrigerator.whirlpool;

  return (
    <>
      <ServiceHero title={content.title} description={content.description} brand="Whirlpool" brandSlug="whirlpool" category="Refrigerator" categorySlug="refrigerator" badge={content.badge} stats={content.stats} heroImage={content.heroImage} />
      <BrandInfo title="Whirlpool Refrigerator" description={content.introText} highlights={content.highlights} />
      <ServiceCards services={content.services} />
      <Benefits features={content.benefits} title="Why Choose Our Service" />
      <RepairProcess steps={content.process} />
      <Reviews testimonials={content.testimonials} />
      <FAQSection faq={content.faq} />
      <BookingCTA brand="Whirlpool" category="Refrigerator" />
      <ContactForm />
    </>
  );
}
