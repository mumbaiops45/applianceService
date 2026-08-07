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
  title: 'Samsung Refrigerator Repair Service',
  description: 'Dependable Samsung refrigerator repair for cooling, dispenser, and compressor faults.',
};

export default function Page() {
  const content = serviceLandingContent.refrigerator.samsung;

  return (
    <main className="samsung-theme">
      <CustomerEnquiryPopup brand="Samsung" />
      <ServiceHero title={content.title} description={content.description} brand="Samsung" brandSlug="samsung" category="Refrigerator" categorySlug="refrigerator" badge={content.badge} stats={content.stats} heroImage={content.heroImage} />
      <BrandInfo title="Samsung Refrigerator" description={content.introText} highlights={content.highlights} />
      <ServiceCards services={content.services} />
      <Benefits features={content.benefits} title="Why Choose Our Service" />
      <RepairProcess steps={content.process} />
      <Reviews testimonials={content.testimonials} />
      <FAQSection faq={content.faq} />
      <BookingCTA brand="Samsung" category="Refrigerator" />
  <ContactForm brand="Samsung" />
    </main>
  );
}
