import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | ApplianceCare",
  description:
    "Read the Privacy Policy for ApplianceCare and understand how we collect, use, store and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">

      {/* ================= Hero ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-500">

        {/* Background Decoration */}

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 flex flex-col items-center text-center">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white hover:text-red-600"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-red-100">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-white">Privacy Policy</span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-red-100">
            Your privacy is important to ApplianceCare.
            This Privacy Policy explains how we collect,
            use, protect and manage your personal information
            whenever you visit our website or book our repair services.
          </p>
        </div>

      </section>

      {/* ================= Content ================= */}

      <section className="py-16">

        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 lg:p-12">

            {/* Last Updated */}

            <div className="mb-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-red-50 p-5">

              <div className="flex items-center gap-3">

                <FileText className="text-red-600" size={22} />

                <div>

                  <p className="font-semibold text-slate-900">
                    Privacy Policy
                  </p>

                  <p className="text-sm text-slate-500">
                    Last Updated: July 2026
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">

                <Lock size={16} />

                Secure Website

              </div>

            </div>

            <div className="space-y-12">

              {/* ================= Section 1 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  1. Information We Collect

                </h2>

                <p className="leading-8 text-gray-700">

                  ApplianceCare may collect personal information
                  including your name, mobile number, email address,
                  service address, city, PIN code, appliance details,
                  and any information you provide while booking
                  a repair service or contacting our support team.

                </p>

              </div>

              {/* ================= Section 2 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  2. How We Use Your Information

                </h2>

                <ul className="space-y-3 pl-6 text-gray-700">

                  <li>• Schedule and manage repair appointments.</li>

                  <li>• Contact you regarding service updates.</li>

                  <li>• Respond to enquiries and support requests.</li>

                  <li>• Improve our customer experience.</li>

                  <li>• Send booking confirmations.</li>

                  <li>• Maintain internal service records.</li>

                </ul>

              </div>

              {/* ================= Section 3 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  3. Information Sharing

                </h2>

                <p className="leading-8 text-gray-700">

                  ApplianceCare respects your privacy.
                  We never sell, rent or trade your personal
                  information to third parties.

                  Your information is shared only with our
                  authorized service engineers or trusted
                  partners when it is necessary to complete
                  your requested repair service.

                </p>

              </div>

              {/* ================= Section 4 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  4. Data Security

                </h2>

                <p className="leading-8 text-gray-700">

                  We implement appropriate technical,
                  administrative and physical security
                  measures to safeguard your personal
                  information against unauthorized access,
                  disclosure, misuse or alteration.

                </p>

                <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">

                  <h3 className="mb-3 text-lg font-semibold text-green-700">

                    Your Information is Protected

                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    <li>✔ Secure data storage</li>

                    <li>✔ Restricted employee access</li>

                    <li>✔ Safe communication channels</li>

                    <li>✔ Regular security monitoring</li>

                  </ul>

                </div>

              </div>

              {/* ================= Section 5 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  5. Cookies & Tracking

                </h2>

                <p className="leading-8 text-gray-700">

                  Our website may use cookies and similar
                  technologies to improve website
                  functionality, analyze visitor traffic,
                  remember user preferences and enhance
                  your browsing experience.

                </p>

                <div className="mt-6 rounded-2xl bg-gray-100 p-6">

                  <h3 className="font-semibold text-slate-900">

                    Cookies help us to:

                  </h3>

                  <ul className="mt-4 space-y-3 text-gray-700">

                    <li>• Improve website performance</li>

                    <li>• Remember your preferences</li>

                    <li>• Analyze website traffic</li>

                    <li>• Deliver a better browsing experience</li>

                  </ul>

                </div>

              </div>

              {/* ================= Section 6 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  6. Third-Party Services

                </h2>

                <p className="leading-8 text-gray-700">

                  We may use trusted third-party services
                  such as payment gateways, Google Maps,
                  analytics tools and customer communication
                  platforms to provide a better service
                  experience.

                  These providers have their own privacy
                  policies governing the information they
                  collect.

                </p>

              </div>


              {/* ================= Section 7 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  7. Your Rights

                </h2>

                <p className="leading-8 text-gray-700">

                  You have the right to access, update or request
                  deletion of your personal information whenever
                  applicable. You may also contact us if you have
                  any concerns regarding the way your information
                  is handled.

                </p>

              </div>

              {/* ================= Section 8 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  8. Changes to this Privacy Policy

                </h2>

                <p className="leading-8 text-gray-700">

                  ApplianceCare reserves the right to update or
                  modify this Privacy Policy whenever necessary.
                  Any updates will be published on this page with
                  the latest revision date.

                </p>

              </div>

              {/* ================= Section 9 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  9. Contact Us

                </h2>

                <p className="leading-8 text-gray-700">

                  If you have any questions regarding this Privacy
                  Policy or your personal information, please
                  contact us using the details below.

                </p>

              </div>

              {/* ================= Contact Card ================= */}

              <div className="rounded-3xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 p-8 text-white shadow-xl">

                <h3 className="text-3xl font-bold">

                  Need Help?

                </h3>

                <p className="mt-4 leading-8 text-red-100">

                  Our customer support team is always available to
                  answer your privacy or service-related questions.

                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

                    <h4 className="font-semibold">

                      📞 Phone

                    </h4>

                    <p className="mt-2 text-red-100">

                      +91 1800202257

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

                    <h4 className="font-semibold">

                      📧 Email

                    </h4>

                    <p className="mt-2 break-all text-red-100">

                      buildsmart0@gmail.com

                    </p>

                  </div>

                </div>

              </div>

              {/* ================= CTA ================= */}

              <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">

                <h3 className="text-3xl font-bold text-slate-900">

                  Need Appliance Repair?

                </h3>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-700">

                  Book a doorstep appliance repair service today.
                  Our experienced technicians are available for
                  Washing Machines, Refrigerators, Televisions,
                  Microwaves, Dishwashers and more.

                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                  <Link
                    href="/contact"
                    className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
                  >
                    Book Service
                  </Link>

                  <Link
                    href="/"
                    className="rounded-xl border-2 border-red-600 px-8 py-4 font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
                  >
                    Back to Home
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}