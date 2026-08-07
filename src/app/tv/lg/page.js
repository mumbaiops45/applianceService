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
  title: 'LG TV Repair Service',
  description: 'Premium LG TV repair for display, power, sound, and smart TV issues.',
};

export default function Page() {
  const content = serviceLandingContent.tv.lg;

  return (
    <>
    <CustomerEnquiryPopup brand="LG" />
      <ServiceHero title={content.title} description={content.description} brand="LG" brandSlug="lg" category="TV" categorySlug="tv" badge={content.badge} stats={content.stats} heroImage={content.heroImage} />
      <BrandInfo title="LG TV" description={content.introText} highlights={content.highlights} />
      <ServiceCards services={content.services} />
      <Benefits features={content.benefits} title="Why Choose Our Service" />
      <RepairProcess steps={content.process} />
      <Reviews testimonials={content.testimonials} />
      <FAQSection faq={content.faq} />
      <BookingCTA brand="LG" category="TV" />
<ContactForm brand="LG" />
    </>
  );
}
