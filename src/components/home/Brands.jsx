"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const brands = [
  {
    id: 1,
    name: "LG",
    image: "/lg.jpg",
    href: "/washing-machine/lg",
    appliances: ["Washing Machine", "Refrigerator", "Smart TV"],
  },
  {
    id: 2,
    name: "Samsung",
    image: "/samsung.jpg",
    href: "/washing-machine/samsung",
    appliances: ["Washing Machine", "Refrigerator", "Smart TV"],
  },
  {
    id: 3,
    name: "Bosch",
    image: "/bosch.jpg",
    href: "/washing-machine/bosch",
    appliances: ["Washing Machine", "Dishwasher", "Dryer"],
  },
  {
    id: 4,
    name: "Whirlpool",
    image: "/whirlpool.jpg",
    href: "/refrigerator/whirlpool",
    appliances: ["Refrigerator", "Deep Freezer", "Side By Side"],
  },
  {
    id: 5,
    name: "Sony",
    image: "/sony.jpg",
    href: "/tv/sony",
    appliances: ["LED TV", "OLED TV", "Smart TV"],
  },
];

export default function Brands() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-white py-24">

      {/* Background Blur */}
      <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-red-100/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#E0293D]/10 px-5 py-2 text-sm font-semibold text-[#E0293D]">

            BRANDS WE SERVICE

          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0B1A2E] md:text-5xl">

            Expert Service for
            <span className="text-[#E0293D]">
              {" "}Leading Appliance Brands
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

Our experienced technicians provide professional Home Appliance Repair Service for Washing Machines, Refrigerators, Televisions, and other major appliances from leading brands. We use genuine spare parts and advanced diagnostic tools to deliver reliable, long-lasting repairs with a focus on quality and customer satisfaction.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group flex min-h-115 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#E0293D]/30 hover:shadow-2xl"
            >
              {/* Top Gradient */}
              <div className="h-2 w-full bg-linear-to-r from-[#E0293D] via-[#ff6b7c] to-[#0B1A2E]" />

              {/* Logo panel */}
              <div className="flex h-44 items-center justify-center bg-slate-50 px-6 py-4">
                <div className="relative flex h-28 w-full max-w-45 items-center justify-center rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm transition duration-500 group-hover:shadow-lg">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">

                <h3 className="text-center text-2xl font-bold text-[#0B1A2E]">
                  {brand.name}
                </h3>

                <p className="mt-3 text-center text-sm leading-6 text-slate-600">
                  Certified technicians for all major {brand.name} home
                  appliances with genuine spare parts and doorstep service.
                </p>

                {/* Supported Appliances */}
                <div className="mt-6 flex-1 space-y-3">
                  {brand.appliances.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-green-600 shrink-0"
                      />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href={brand.href}
                  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#0B1A2E] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#E0293D]"
                >
                  View 

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

     

      </div>

    </section>
  );
}