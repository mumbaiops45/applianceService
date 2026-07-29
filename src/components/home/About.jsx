'use client';

import { Tv, Wind, RotateCw } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import ImageWithFallback from "../common/ImageWithFallback";

export default function AboutUs() {
  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#10202E]">About <span className="text-[#E0293D]">us</span></h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="w-10 h-[2px] bg-[#10202E]/70" />
            <span className="text-lg md:text-xl font-semibold text-[#E0293D]">who we are</span>
            <span className="w-10 h-[2px] bg-[#10202E]/70" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-12 items-center">
          <div className="relative h-[420px] sm:h-[480px] md:h-[520px] max-w-md mx-auto md:mx-0 w-full">
            <ImageWithFallback
              src="/service1.jpg"
              alt="Technician repairing a smart TV"
              icon={Tv}
              rounded="rounded-xl"
              className="absolute top-0 left-0 w-[68%] h-[46%] shadow-xl z-10"
            />
            <ImageWithFallback
              src="/service2.jpg"
              alt="Technician servicing a split AC unit"
              icon={Wind}
              rounded="rounded-xl"
              className="absolute top-[38%] right-0 w-[55%] h-[38%] shadow-xl z-20 border-4 border-white"
            />
            <ImageWithFallback
              src="/service3.jpg"
              alt="Technician repairing a front-load washing machine"
              icon={RotateCw}
              rounded="rounded-xl"
              className="absolute bottom-0 left-[6%] w-[78%] h-[46%] shadow-xl z-10"
            />
          </div>

          {/* Copy – unchanged */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#10202E] leading-snug">
              One-Stop Solution For{" "}
              <span className="text-[#E0293D]">
                <Typewriter
                  words={["Customers", "All Brands", "Bangalore City"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                />
              </span>
            </h3>
            <p className="mt-6 text-[#55636C] text-base md:text-lg leading-relaxed text-justify">
              We provide complete clarity on repairing all Brands Appliances,
              of all time. And, we do it with perfection along with service
              warranty.
            </p>
            <p className="mt-4 text-[#55636C] text-base md:text-lg leading-relaxed text-justify">
              Perfection and good quality repairing service to the customers
              of Bangalore city. In today's Indian market, every manufacturer
              offers a 1 year warranty after which they charge more than the
              customer's expectation. Because of this, customers find private
              home services more affordable. Thus, our services is
              established to provide a direct service from our service
              center to our customers doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}