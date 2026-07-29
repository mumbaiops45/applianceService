import { notFound } from 'next/navigation';
import { serviceCategories, brandContent } from '@/components/data/services';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceCards from '@/components/service/ServiceCards';
import { Benefits } from '@/components/service/Benefits';
import { RepairProcess } from '@/components/service/RepairProcess';
import { BookingCTA } from '@/components/service/BookingCTA';
import { Reviews } from '@/components/service/Reviews';
import { FAQSection } from '@/components/service/FAQSection';
import { ContactForm } from '@/components/service/ContactForm';

export async function generateMetadata({ params }) {
  const { category, brand } = params;
  const content = brandContent[category]?.[brand];
  if (!content) return {};
  const categoryLabel = serviceCategories.find(c => c.slug === category)?.label || category;
  return {
    title: `${content.title} | ApplianceCare`,
    description: content.description,
  };
}

export async function generateStaticParams() {
  const paths = [];
  for (const cat of serviceCategories) {
    for (const brand of cat.brands) {
      paths.push({ category: cat.slug, brand: brand.slug });
    }
  }
  return paths;
}

export default function ServicePage({ params }) {
  const { category, brand } = params;
  const content = brandContent[category]?.[brand];
  if (!content) notFound();

  const categoryLabel = serviceCategories.find(c => c.slug === category)?.label || category;
  const brandLabel = serviceCategories.find(c => c.slug === category)?.brands.find(b => b.slug === brand)?.label || brand;

  return (
    <>
      <ServiceHero
        title={content.title}
        description={content.description}
        heroImage={content.heroImage}
        brand={brandLabel}
        category={categoryLabel}
        categorySlug={category}
        badge="Certified Repair Specialists"
        stats={[
          { value: '4.9/5', label: 'Google Rating' },
          { value: 'Same Day', label: 'Doorstep Visits' },
          { value: '90 Days', label: 'Repair Warranty' },
        ]}
      />
      <ServiceCards services={content.services || []} />
      <Benefits features={content.features || []} />
      <RepairProcess steps={content.process || []} />
      <BookingCTA brand={brandLabel} category={categoryLabel} />
      <Reviews testimonials={content.testimonials || []} />
      <FAQSection faq={content.faq || []} />
      <ContactForm />
      <Footer />
    </>
  );
}