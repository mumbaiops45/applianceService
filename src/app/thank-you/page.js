import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Home,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Wrench,
} from "lucide-react";

// ============================================
// 📞 CLIENT CONTACT DETAILS - UPDATE THESE ONLY
// ============================================
const CLIENT_PHONE = "1800202257";
const CLIENT_PHONE_DISPLAY = "1800-202-257";
const CLIENT_WHATSAPP = "6366949496";
// ============================================

export const metadata = {
  title: "Thank You",
  description:
    "Thank you for your enquiry. Our appliance service team will contact you shortly to schedule your repair.",
  robots: {
    index: false,
    follow: true,
  },
};

const nextSteps = [
  {
    icon: <Clock3 size={22} />,
    title: "We review your request",
    text: "Our support team checks your appliance, brand and location details right away.",
  },
  {
    icon: <PhoneCall size={22} />,
    title: "We call you back",
    text: "Expect a confirmation call shortly to understand the issue and confirm a visit slot.",
  },
  {
    icon: <Wrench size={22} />,
    title: "Technician visits you",
    text: "A trained technician reaches your doorstep with the right tools and spare parts.",
  },
];

const popularServices = [
  { label: "Washing Machine Repair", href: "/washing-machine/lg" },
  { label: "Refrigerator Repair", href: "/refrigerator/samsung" },
  { label: "Television Repair", href: "/tv/sony" },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fdf2f4_0%,_#ffffff_50%,_#eef4ff_100%)]">
      <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl rounded-[36px] border border-slate-200/80 bg-white/80 p-8 text-center shadow-2xl shadow-slate-200/70 backdrop-blur md:p-12">
          {/* Success badge */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 size={44} />
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-[#FFF5F6] px-4 py-2 text-sm font-semibold text-[#B81F30]">
            <Sparkles size={16} />
            Enquiry Received
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl">
            Thank you for reaching{" "}
            <span className="text-[#E0293D]">out!</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Your service request has been submitted successfully. Our team will
            contact you shortly on the phone number you shared to confirm your
            appointment.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${CLIENT_PHONE}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E0293D] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B81F30] sm:w-auto"
            >
              <PhoneCall size={18} />
              Call {CLIENT_PHONE_DISPLAY}
            </a>

            <a
              href={`https://wa.me/91${CLIENT_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-[#0B1A2E] transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* What happens next */}
        <div className="container mx-auto mt-10 max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-[#0B1A2E]">
            What happens next?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF5F6] text-[#E0293D]">
                    {step.icon}
                  </span>
                  <span className="text-sm font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0B1A2E]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Explore more */}
          <div className="mt-10 rounded-[28px] border border-slate-200 bg-[#0B1A2E] p-8 text-white md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  While you wait, explore our services
                </h2>
                <p className="mt-2 text-slate-300">
                  We repair washing machines, refrigerators and televisions of
                  all major brands.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {popularServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#E0293D] hover:bg-[#E0293D]"
                    >
                      {service.label}
                      <ArrowRight size={15} />
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E0293D] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B81F30]"
              >
                <Home size={18} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
