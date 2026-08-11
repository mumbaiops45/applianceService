// import Navbar from "../components/layout/Navbar";      // should be default
import Hero from "../components/home/Hero";            // should be default (already)
import Services from "../components/home/Services";    // need default
import Brands from "../components/home/Brands";        // need default
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";
import About from "../components/home/About";
export const metadata = {
  title: "Home Appliance Repair Service | Fast & Reliable Repairs",

  description:
    "Get reliable Home Appliance Repair Service from certified technicians. Book same-day doorstep repair for washing machines, refrigerators, TVs and major brands today.",

  keywords: [
    "Home Appliance Repair Service",
    "Appliance Repair Services",
    "Doorstep Appliance Repair",
    "Same Day Appliance Repair",
    "Washing Machine Repair",
    "Refrigerator Repair",
    "TV Repair",
  ],

  alternates: {
    canonical: "https://customercare247.support/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Brands />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      {/* <Footer /> */}
    </>
  );
}