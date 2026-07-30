import Link from "next/link";
import {
  ArrowLeft,
  FileCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | ApplianceCare",
  description:
    "Read the Terms & Conditions for using ApplianceCare repair services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">

      {/* ================= Hero ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-500">

        {/* Background */}

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 ">

          {/* Back Button */}

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white hover:text-red-600"
          >
            <ArrowLeft size={18} />

            Back to Home

          </Link>

          {/* Breadcrumb */}

          <div className="mt-6 flex items-center gap-2 text-sm text-red-100">

            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-semibold text-white">
              Terms & Conditions
            </span>

          </div>


          {/* Heading */}

          <h1 className="mt-6 text-center text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">

            Terms & Conditions

          </h1>

          <p className="mt-5 max-w-2xl text-center text-base leading-8 text-red-100 sm:text-lg">

            Please read these Terms & Conditions carefully before using
            ApplianceCare services. By booking a repair service or using
            our website, you agree to comply with these terms.

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

                <FileText
                  className="text-red-600"
                  size={22}
                />

                <div>

                  <p className="font-semibold text-slate-900">

                    Terms & Conditions

                  </p>

                  <p className="text-sm text-slate-500">

                    Last Updated: July 2026

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">

                <ShieldCheck size={16} />

                Verified Policy

              </div>

            </div>

            <div className="space-y-12">

              {/* ================= Section 1 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  1. Acceptance of Terms

                </h2>

                <p className="leading-8 text-gray-700">

                  By accessing our website or booking a repair service,
                  you agree to be bound by these Terms & Conditions.
                  If you do not agree, please discontinue the use of
                  our services.

                </p>

              </div>

              {/* ================= Section 2 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  2. Services

                </h2>

                <p className="leading-8 text-gray-700">

                  ApplianceCare provides repair and maintenance
                  services for Washing Machines, Refrigerators,
                  Televisions, Dishwashers, Microwaves,
                  Chimneys and other household appliances.

                </p>

              </div>

                            {/* ================= Section 3 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  3. Booking & Appointments

                </h2>

                <p className="leading-8 text-gray-700">

                  Customers are responsible for providing accurate
                  contact information, service address and appliance
                  details while booking a repair request.

                  Incorrect or incomplete information may delay
                  or prevent service delivery.

                </p>

                <div className="mt-6 rounded-2xl bg-red-50 p-6">

                  <h3 className="mb-3 text-lg font-semibold text-red-600">

                    Booking Guidelines

                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    <li>• Provide a valid phone number.</li>

                    <li>• Provide the correct service address.</li>

                    <li>• Select the correct appliance.</li>

                    <li>• Mention the issue clearly.</li>

                  </ul>

                </div>

              </div>

              {/* ================= Section 4 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  4. Pricing & Charges

                </h2>

                <p className="leading-8 text-gray-700">

                  Inspection charges, labour charges,
                  spare part costs and applicable taxes
                  will be clearly communicated before
                  any repair work begins.

                </p>

                <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">

                  <h3 className="mb-3 text-lg font-semibold text-yellow-700">

                    Important

                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    <li>✔ No hidden charges.</li>

                    <li>✔ Customer approval before repair.</li>

                    <li>✔ Genuine spare parts whenever available.</li>

                    <li>✔ GST will be charged wherever applicable.</li>

                  </ul>

                </div>

              </div>

              {/* ================= Section 5 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  5. Payments

                </h2>

                <p className="leading-8 text-gray-700">

                  Payment must be completed after the
                  service has been provided unless
                  otherwise agreed.

                  ApplianceCare accepts Cash, UPI,
                  Bank Transfer and other approved
                  payment methods.

                </p>

              </div>

              {/* ================= Section 6 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  6. Warranty

                </h2>

                <p className="leading-8 text-gray-700">

                  Warranty applies only to repairs and
                  spare parts specifically mentioned on
                  the service invoice.

                  Physical damage, misuse,
                  water damage or electrical fluctuations
                  are not covered under warranty.

                </p>

                <div className="mt-6 rounded-2xl bg-green-50 p-6">

                  <h3 className="mb-3 text-lg font-semibold text-green-700">

                    Warranty Coverage

                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    <li>✔ Genuine spare parts.</li>

                    <li>✔ Selected repair services.</li>

                    <li>✔ Subject to invoice terms.</li>

                    <li>✔ Warranty period varies by repair.</li>

                  </ul>

                </div>

              </div>

              {/* ================= Section 7 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  7. Service Availability

                </h2>

                <p className="leading-8 text-gray-700">

                  Our repair services are available only
                  in selected cities and serviceable
                  locations.

                  Appointment availability depends upon
                  technician schedules, spare part
                  availability and customer location.

                </p>

              </div>
                            {/* ================= Section 8 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  8. Cancellation & Rescheduling

                </h2>

                <p className="leading-8 text-gray-700">

                  Customers may cancel or reschedule their
                  service appointment before the technician
                  has been dispatched.

                  If the technician has already arrived at
                  the service location, a visit charge may
                  apply depending on the circumstances.

                </p>

                <div className="mt-6 rounded-2xl bg-blue-50 p-6">

                  <h3 className="mb-3 text-lg font-semibold text-blue-700">

                    Cancellation Policy

                  </h3>

                  <ul className="space-y-2 text-gray-700">

                    <li>✔ Cancel before technician dispatch.</li>

                    <li>✔ Reschedule anytime subject to availability.</li>

                    <li>✔ Visit charges may apply after arrival.</li>

                    <li>✔ Emergency services may not be refundable.</li>

                  </ul>

                </div>

              </div>

              {/* ================= Section 9 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  9. Customer Responsibilities

                </h2>

                <p className="leading-8 text-gray-700">

                  Customers must ensure safe access to the
                  appliance and provide accurate information
                  regarding the issue.

                  ApplianceCare shall not be responsible
                  for delays caused by incorrect addresses,
                  unavailable customers or unsafe working
                  environments.

                </p>

              </div>

              {/* ================= Section 10 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  10. Limitation of Liability

                </h2>

                <p className="leading-8 text-gray-700">

                  ApplianceCare shall not be liable for any
                  indirect, incidental or consequential
                  damages arising from the use of our
                  services.

                  Our total liability shall never exceed
                  the amount paid for the specific repair
                  service.

                </p>

              </div>

              {/* ================= Section 11 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  11. Changes to Terms

                </h2>

                <p className="leading-8 text-gray-700">

                  ApplianceCare reserves the right to
                  update these Terms & Conditions at
                  any time without prior notice.

                  Updated versions will always be
                  available on this page with the
                  latest revision date.

                </p>

              </div>

              {/* ================= Section 12 ================= */}

              <div>

                <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">

                  <span className="h-3 w-3 rounded-full bg-red-600"></span>

                  12. Contact Information

                </h2>

                <p className="leading-8 text-gray-700">

                  If you have any questions regarding these
                  Terms & Conditions, warranty, pricing or
                  our repair services, please contact our
                  support team.

                </p>

              </div>

                            {/* ================= Contact Card ================= */}

              <div className="rounded-3xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 p-8 text-white shadow-2xl">

                <h3 className="text-3xl font-bold">

                  Need Assistance?

                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-red-100">

                  If you have any questions regarding these Terms &
                  Conditions, bookings, warranties or payments,
                  our customer support team is always happy to help.

                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  {/* Phone */}

                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                    <h4 className="text-lg font-semibold">

                      📞 Phone Support

                    </h4>

                    <p className="mt-3 text-red-100">

                      +91 xxxxx xxxxx

                    </p>

                  </div>

                  {/* Email */}

                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                    <h4 className="text-lg font-semibold">

                      📧 Email Support

                    </h4>

                    <p className="mt-3 break-all text-red-100">

                      support@appliancecare.com

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

                  Book a trusted doorstep appliance repair service
                  today. Our certified technicians repair Washing
                  Machines, Refrigerators, TVs, Dishwashers,
                  Microwaves, Chimneys and other home appliances.

                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                  <Link
                    href="/contact"
                    className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
                  >
                    Book Service
                  </Link>

                  <Link
                    href="/"
                    className="rounded-xl border-2 border-red-600 px-8 py-4 font-semibold text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
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