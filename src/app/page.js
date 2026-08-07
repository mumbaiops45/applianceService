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
  verification: {
    google: "v8V8u0O26Xs7LqUOMKgCP2WzL1nEOh5KFtM59qqozlg",
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