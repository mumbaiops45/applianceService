import Link from 'next/link';
import {
  ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, Wrench, Clock3,
  BadgeCheck, PackageCheck, Receipt, Tag, MapPin, Users, ThumbsUp, HelpCircle,
  ChevronDown, Zap, Gauge, Droplets, Volume2, Tv, Wind, RotateCw, MonitorCheck,
  PhoneCall, CalendarCheck, Star, Truck, MessageCircle, ClipboardCheck, Headphones,
} from 'lucide-react';

export const metadata = {
  title: "Appliance Repair Service Features | Reliable & Transparent Support",

  description:
    "Explore Appliance Repair Service Features including genuine spare parts, same-day support, doorstep service, transparent pricing, warranty-backed repairs and expert support.",

  keywords: [
    "Appliance Repair Service Features",
    "Appliance Repair Service",
    "Genuine Spare Parts",
    "Same Day Appliance Repair",
    "Doorstep Appliance Repair",
    "Appliance Repair Services",
    "Appliance Repair Technicians",
    "Warranty-Backed Appliance Repair",
    "Transparent Appliance Repair",
  ],

  alternates: {
    canonical: "https://customercare247.support/features",
  },
};

// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const CLIENT_PHONE = '1800202257';
const CLIENT_PHONE_DISPLAY = '1800-202-257';
const CLIENT_WHATSAPP = '6366949496';
// ============================================

const featureList = [
  'Same-day support on common appliance issues',
  'Genuine replacement parts with warranty protection',
  'Transparent pricing and no surprise costs',
  'Friendly support from booking to completion',
];

const sameDayFactors = [
  { icon: Users, label: 'Technician Availability' },
  { icon: Tv, label: 'Appliance Type' },
  { icon: MapPin, label: 'Service Location' },
  { icon: Gauge, label: 'Nature of the Problem' },
];

const testingChecks = [
  { icon: Zap, label: 'Normal Operation' },
  { icon: Zap, label: 'Power Functionality' },
  { icon: Gauge, label: 'Controls' },
  { icon: Wind, label: 'Cooling Performance' },
  { icon: Droplets, label: 'Drainage' },
  { icon: MonitorCheck, label: 'Display Operation' },
  { icon: Volume2, label: 'Noise / Vibration' },
  { icon: CheckCircle2, label: 'Other Relevant Functions' },
];

const appliancesRepaired = [
  { icon: RotateCw, label: 'Washing Machines' },
  { icon: Wind, label: 'Refrigerators' },
  { icon: Tv, label: 'Televisions' },
  { icon: Droplets, label: 'Dishwashers' },
  { icon: Zap, label: 'Microwaves' },
  { icon: Wind, label: 'Chimneys' },
];

const brandsServiced = ['LG', 'Samsung', 'Bosch', 'IFB', 'Whirlpool', 'Godrej', 'Sony', 'Vu'];

const whyChoose = [
  { icon: ShieldCheck, title: 'Reliable Support', desc: 'Dependable repair assistance for everyday household appliances.' },
  { icon: PackageCheck, title: 'Quality Parts', desc: 'Genuine or suitable quality replacement components for every repair.' },
  { icon: Wrench, title: 'Experienced Technicians', desc: 'Practical knowledge and appropriate tools to inspect and repair.' },
  { icon: Receipt, title: 'Transparent Service', desc: 'We explain the problem and recommended repair before work begins.' },
  { icon: Truck, title: 'Customer Convenience', desc: 'Convenient booking, doorstep assistance, and after-service guidance.' },
];

const serviceBenefits = [
  'Genuine Spare Parts',
  'Certified Engineers',
  'Same-Day Support',
  'Transparent Pricing',
  'Warranty-Backed Repairs',
  'Convenient Booking',
  'Doorstep Assistance',
  'Customer Support',
];

const faqs = [
  {
    q: 'What are the main Appliance Repair Service Features offered by ApplianceCare?',
    a: 'Our key features include warranty-backed repairs, genuine spare parts, transparent pricing, customer support, convenient booking, doorstep assistance, and same-day support for eligible service requests.',
  },
  {
    q: 'Do you provide same-day appliance repair?',
    a: 'Same-day service may be available for common appliance issues depending on technician availability, service location, appliance type, and the nature of the problem.',
  },
  {
    q: 'Do you use genuine spare parts?',
    a: 'We prioritize genuine or suitable quality replacement components according to the appliance brand, model, and repair requirement. The applicable part can be discussed before replacement.',
  },
  {
    q: 'Is there a warranty on appliance repairs?',
    a: 'Eligible repairs are supported by applicable service warranty. The specific warranty coverage depends on the repair performed and parts used.',
  },
  {
    q: 'How do I book an appliance repair service?',
    a: 'You can contact ApplianceCare through the available booking or contact options. Provide your appliance type, brand, and issue, and our support team can help arrange a suitable appointment.',
  },
];

export default function FeaturesPage() {
  const whatsappNumber = CLIENT_WHATSAPP.replace(/\s/g, '');

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fdf2f4_0%,_#ffffff_50%,_#eef4ff_100%)]">

      {/* ============================================ */}
      {/* HERO — Premium Features */}
      {/* ============================================ */}
      <section className="px-4 pb-18 pt-28 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-[#FFF5F6] px-4 py-2 text-sm font-semibold text-[#B81F30]">
                <Sparkles size={16} /> Premium features
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl">
                Everything you want in a professional repair <span className="text-[#E0293D]">experience.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We combine practical expertise, elegant service, and honest communication to make appliance repair feel simple and reassuring.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#B81F30]">
                Get started <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[#E0293D]">
                  <ShieldCheck size={22} />
                  <h3 className="text-xl font-semibold text-[#0B1A2E]">Warranty-backed repairs</h3>
                </div>
                <p className="mt-3 text-slate-600">Reliable repairs supported by clear service guarantees and professional standards.</p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[#E0293D]">
                  <HeartHandshake size={22} />
                  <h3 className="text-xl font-semibold text-[#0B1A2E]">Customer-first support</h3>
                </div>
                <p className="mt-3 text-slate-600">From booking to final testing, our team keeps you informed and comfortable throughout.</p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <ul className="space-y-3">
                  {featureList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#E0293D]" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WARRANTY-BACKED REPAIRS */}
      {/* ============================================ */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
                WARRANTY-BACKED REPAIRS
              </span>
              <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
                Reliable Repairs <span className="text-[#E0293D]">with Service Support</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 text-justify">
                Our Appliance Repair Service Features include applicable warranty support on eligible repairs. Customers can understand the service coverage before the repair is completed.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B1A2E] px-7 py-3.5 font-semibold text-white transition hover:bg-[#E0293D]">
                Book a Service <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: ClipboardCheck, label: 'Clear warranty information' },
                { icon: Wrench, label: 'Quality repair workmanship' },
                { icon: Headphones ?? ShieldCheck, label: 'Service support after repair' },
                { icon: PackageCheck, label: 'Applicable parts coverage' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0293D]/10 text-[#E0293D]">
                      <Icon size={26} />
                    </div>
                    <p className="font-semibold text-[#0B1A2E]">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CUSTOMER-FIRST SUPPORT */}
      {/* ============================================ */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
              CUSTOMER-FIRST SUPPORT
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
              Support from <span className="text-[#E0293D]">Booking to Completion</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We believe good service goes beyond fixing an appliance. Our team keeps customers informed throughout the repair process, from booking assistance to after-service support.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1A2E] text-white">
                <PhoneCall size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">Easy Service Booking</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Share your appliance type, brand, and issue with our support team. We help arrange a convenient appointment based on availability.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0293D] text-white">
                <MessageCircle size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">Clear Communication</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Our technicians explain the identified issue and recommended repair before proceeding with any approved work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SAME-DAY SUPPORT */}
      {/* ============================================ */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-5">
              {sameDayFactors.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 rounded-3xl border border-[#E0293D]/15 bg-[#FFF5F6] p-6 text-center shadow-sm"
                  >
                    <Icon size={28} className="text-[#E0293D]" />
                    <p className="text-sm font-semibold text-[#0B1A2E]">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0B1A2E]/5 px-5 py-2 text-sm font-semibold text-[#0B1A2E]">
                <Clock3 size={16} /> SAME-DAY SUPPORT
              </span>
              <h2 className="mt-2 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
                Faster Assistance for <span className="text-[#E0293D]">Common Issues</span>
              </h2>
              <p className="mt-2 text-lg leading-8 text-slate-600 text-justify">
                A faulty appliance can disrupt your daily routine. Our{" "}
                <strong>Appliance Repair Service Features</strong> include same-day support
                for common appliance issues whenever technician availability allows.
              </p>
              <p className="mt-2 text-lg leading-8 text-slate-600 text-justify">
                We aim to reduce unnecessary waiting and help customers get professional
                assistance as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GENUINE REPLACEMENT PARTS */}
      {/* ============================================ */}
<section className="bg-slate-50 py-20 md:py-24">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
        GENUINE REPLACEMENT PARTS
      </span>

      <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
        Genuine Replacement{" "}
        <span className="text-[#E0293D]">Parts</span>
      </h2>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg">
        <PackageCheck size={30} className="text-[#E0293D]" />

        <h3 className="mt-5 text-xl font-bold text-[#0B1A2E]">
          Quality Components for Reliable Repairs
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Using the right replacement component is important for appliance
          performance. We prioritize{" "}
          <strong>Genuine Spare Parts</strong> or suitable quality components
          based on the appliance brand, model, and repair requirement.
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Our <strong>Appliance Repair Service Features</strong> are designed
          around quality workmanship and dependable repair solutions.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg">
        <ShieldCheck size={30} className="text-[#E0293D]" />

        <h3 className="mt-5 text-xl font-bold text-[#0B1A2E]">
          Parts with Warranty Protection
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Where applicable, replacement components are supported according to
          the relevant warranty terms. Customers can discuss the required
          parts with the technician before approving the repair.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ============================================ */}
      {/* TRANSPARENT PRICING */}
{/* ============================================ */}
<section className="py-20 md:py-24">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="grid items-center gap-14 lg:grid-cols-2">

      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
          <Receipt size={16} /> TRANSPARENT PRICING
        </span>

        <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
          Transparent <span className="text-[#E0293D]">Pricing</span>
        </h2>

        <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">
          No Surprise Costs
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-600 text-justify">
          Clear pricing is an important part of a trustworthy repair experience. We aim to explain the repair requirement and applicable charges before proceeding with approved work.
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-600 text-justify">
          Our <strong>Appliance Repair Service Features</strong> support transparent communication so customers can make informed decisions.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg">

        <h3 className="text-2xl font-bold text-[#0B1A2E]">
          Clear Repair Estimates
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          After inspecting the appliance, the technician explains the identified problem and recommended solution. Any applicable repair or replacement costs can be discussed before the work begins.
        </p>

      </div>

    </div>
  </div>
</section>
      {/* ============================================ */}
      {/* PROFESSIONAL APPLIANCE SUPPORT */}
      {/* ============================================ */}
  <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
              PROFESSIONAL APPLIANCE SUPPORT
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
              Professional Appliance <span className="text-[#E0293D]">Support</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Experienced Technicians */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0293D]/10 text-[#E0293D]">
                <Wrench size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">Experienced Technicians</h3>
              <p className="mt-3 text-slate-600">
                Our technicians work with major household appliances including:
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {appliancesRepaired.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-[#FFF5F6]"
                    >
                      <Icon size={18} className="shrink-0 text-[#E0293D]" />
                      <span className="text-sm font-medium text-slate-700">{item.label}</span>
                    </div>
                  );
                })}
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-[#FFF5F6]">
                  <CheckCircle2 size={18} className="shrink-0 text-[#E0293D]" />
                  <span className="text-sm font-medium text-slate-700">Other Supported Appliances</span>
                </div>
              </div>
            </div>

            {/* Multi-Brand Service */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0293D]/10 text-[#E0293D]">
                <BadgeCheck size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">Multi-Brand Service</h3>
              <p className="mt-3 text-slate-600">
                We provide repair assistance for leading brands including LG, Samsung, Bosch, IFB, Whirlpool, Godrej, Sony, and Vu, depending on the appliance category.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {brandsServiced.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                Our Appliance Repair Service Features combine multi-brand knowledge with practical repair support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================ */}
      {/* SAME-DAY DOORSTEP CONVENIENCE */}
      {/* ============================================ */}
<section className="py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
              <Truck size={16} /> SAME-DAY DOORSTEP CONVENIENCE
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
              Convenience, Delivered <span className="text-[#E0293D]">to Your Door</span>
            </h2>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl">
            <div className="grid md:grid-cols-2">

              {/* Left — Professional Assistance at Your Location */}
              <div className="p-8 md:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E0293D]/10 text-[#E0293D]">
                  <MapPin size={30} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">
                  Professional Assistance at Your Location
                </h3>
                <p className="mt-4 leading-7 text-slate-600 text-justify">
                  Transporting a washing machine, refrigerator, or other large appliance can be difficult. Our doorstep service provides a more convenient way to request professional appliance assistance.
                </p>
                <p className="mt-4 leading-7 text-slate-600 text-justify">
                  Customers can book a suitable appointment and have a technician inspect the appliance at their location.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B81F30]"
                >
                  Book Doorstep Service <ArrowRight size={16} />
                </Link>
              </div>

              {/* Divider */}
              <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-slate-200" />
              <div className="block md:hidden mx-8 h-px bg-slate-200" />

              {/* Right — Convenient Service Experience */}
              <div className="bg-slate-50 p-8 md:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1A2E]/10 text-[#0B1A2E]">
                  <CalendarCheck size={30} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">
                  Convenient Service Experience
                </h3>
                <p className="mt-4 leading-7 text-slate-600 text-justify">
                  From appointment scheduling to final testing, our team aims to keep the process straightforward and minimize unnecessary disruption to your routine.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    <CheckCircle2 size={16} className="text-[#E0293D]" /> Appointment Scheduling
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    <CheckCircle2 size={16} className="text-[#E0293D]" /> Final Testing
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* ============================================ */}
      {/* QUALITY TESTING AFTER REPAIR */}
      {/* ============================================ */}
  <section className="bg-slate-50 py-20 md:py-24">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
        QUALITY TESTING
      </span>

      <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
        Quality Testing <span className="text-[#E0293D]">After Repair</span>
      </h2>

      <h3 className="mt-4 text-2xl font-bold text-[#0B1A2E]">
        Repair, Check &amp; Confirm
      </h3>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Repairing the reported fault is only one part of the service. Our
        technicians also perform appropriate checks after approved repair work.
      </p>
    </div>

    <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {testingChecks.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E0293D]/10 text-[#E0293D]">
              <Icon size={18} />
            </div>

            <span className="text-sm font-medium text-slate-700">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>

    <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-slate-600">
      These <strong>Appliance Repair Service Features</strong> help ensure the
      appliance is operating properly after the repair.
    </p>
  </div>
</section>

      {/* ============================================ */}
      {/* CUSTOMER-FOCUSED SERVICE */}
      {/* ============================================ */}
<section className="py-20 md:py-24">
  <div className="container mx-auto max-w-7xl px-4">

    {/* Section Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
        CUSTOMER-FOCUSED SERVICE
      </span>

      <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
        Customer-Focused <span className="text-[#E0293D]">Service</span>
      </h2>
    </div>

    {/* H3 Sections */}
    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      {/* Friendly Assistance */}
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0293D]/10 text-[#E0293D]">
          <ThumbsUp size={28} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">
          Friendly Assistance
        </h3>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          We aim to make appliance repair easier for customers by providing
          helpful support before, during, and after the service.
        </p>

        <p className="mt-6 text-base font-semibold text-[#0B1A2E]">
          Our team can assist with:
        </p>

        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            "Service enquiries",
            "Appointment scheduling",
            "Appliance information",
            "Repair coordination",
            "Warranty-related questions",
            "After-service assistance",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              <CheckCircle2
                size={18}
                className="shrink-0 text-[#E0293D]"
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reliable Service Experience */}
      <div className="rounded-[28px] border border-slate-200 bg-[#0B1A2E] p-6 shadow-sm sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0293D] text-white">
          <ThumbsUp size={28} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">
          Reliable Service Experience
        </h3>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Our focus is on combining professional workmanship with honest
          communication and convenient service.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* ============================================ */}
      {/* WHY CHOOSE APPLIANCECARE */}
      {/* ============================================ */}
    <section className="bg-slate-50 py-20 md:py-24">
  <div className="container mx-auto max-w-7xl px-4">

    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
        WHY CHOOSE APPLIANCECARE
      </span>

      <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
        Why Choose <span className="text-[#E0293D]">ApplianceCare?</span>
      </h2>
    </div>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

      <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#E0293D] to-[#ff6b7c] text-white shadow-lg">
          <ShieldCheck size={26} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-[#0B1A2E]">
          Reliable Support
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          ApplianceCare focuses on providing dependable repair assistance for
          everyday household appliances.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#E0293D] to-[#ff6b7c] text-white shadow-lg">
          <PackageCheck size={26} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-[#0B1A2E]">
          Quality Parts
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          We prioritize genuine or suitable quality replacement components
          based on the repair requirement.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#E0293D] to-[#ff6b7c] text-white shadow-lg">
          <Wrench size={26} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-[#0B1A2E]">
          Experienced Technicians
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Our technicians use practical knowledge and appropriate tools to
          inspect and repair supported appliances.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#E0293D] to-[#ff6b7c] text-white shadow-lg">
          <Receipt size={26} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-[#0B1A2E]">
          Transparent Service
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          We explain the problem and recommended repair before approved work
          begins.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#E0293D] to-[#ff6b7c] text-white shadow-lg">
          <CalendarCheck size={26} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-[#0B1A2E]">
          Customer Convenience
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Our service is designed around convenient booking, doorstep
          assistance, same-day support when available, and after-service
          guidance.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ============================================ */}
      {/* FAQ */}
      {/* ============================================ */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">
              Have Questions? <span className="text-[#E0293D]">We've Got Answers</span>
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:border-[#E0293D]/40 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E0293D]/10 text-[#E0293D]">
                      <HelpCircle size={20} />
                    </div>
                    <span className="font-semibold text-[#0B1A2E]">{item.q}</span>
                  </div>
                  <ChevronDown size={20} className="shrink-0 text-slate-400 transition group-open:rotate-180 group-open:text-[#E0293D]" />
                </summary>
                <p className="mt-4 pl-14 leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICE BENEFITS + FINAL CTA */}
      {/* ============================================ */}
<section className="pb-24">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="rounded-[36px] border border-[#E0293D]/15 bg-linear-to-br from-[#FFF5F6] via-white to-[#eef4ff] p-10 shadow-xl md:p-14">

      {/* H2: ApplianceCare – Built Around Better Service */}
      <div>
        <h2 className="text-3xl font-bold text-[#0B1A2E] md:text-4xl">
          ApplianceCare –{" "}
          <span className="text-[#E0293D]">
            Built Around Better Service
          </span>
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
          Our <strong>Appliance Repair Service Features</strong> are designed
          to provide more than basic repair assistance. We focus on quality
          workmanship, clear communication, genuine parts, convenient booking,
          and customer support.
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
          Whether you need help with a washing machine, refrigerator,
          television, dishwasher, microwave, chimney, or another supported
          appliance, ApplianceCare is ready to assist.
        </p>
      </div>

      {/* H3: Our Service Benefits */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-[#0B1A2E]">
          Our Service Benefits
        </h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Genuine Spare Parts",
            "Certified Engineers",
            "Same-Day Support",
            "Transparent Pricing",
            "Warranty-Backed Repairs",
            "Convenient Booking",
            "Doorstep Assistance",
            "Customer Support",
          ].map((benefit) => (
            <span
              key={benefit}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0B1A2E] shadow-sm"
            >
              <CheckCircle2
                size={16}
                className="text-[#E0293D]"
              />
              {benefit}
            </span>
          ))}
        </div>
      </div>

      {/* H4: A Better Appliance Repair Experience */}
      <div className="mt-10">
        <h4 className="text-xl font-bold text-[#0B1A2E]">
          A Better Appliance Repair Experience
        </h4>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          We combine practical repair expertise with customer-friendly service
          to make the entire process easier, from your first enquiry to the
          completion of the repair.
        </p>
      </div>

      {/* H5: Professional Support When You Need It */}
      <div className="mt-8">
        <h5 className="text-lg font-bold text-[#0B1A2E]">
          Professional Support When You Need It
        </h5>

        <p className="mt-3 max-w-4xl leading-7 text-slate-600">
          Our team is ready to help you understand your appliance problem and
          arrange an appropriate service appointment.
        </p>
      </div>

      {/* H6: Get Started Today */}
      <div className="mt-8">
        <h6 className="text-base font-bold text-[#0B1A2E]">
          Get Started Today
        </h6>

        <p className="mt-3 max-w-4xl leading-7 text-slate-600">
          Book your appliance service with ApplianceCare and experience a
          convenient, transparent, and customer-focused repair process.
        </p>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}