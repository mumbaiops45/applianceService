// components/layout/Navbar.jsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown, Sparkles, RefreshCw, Droplet, Tv } from 'lucide-react';
import { SiLg, SiSamsung, SiBosch, SiWipro, SiSony, SiVultr } from 'react-icons/si';
import { serviceCategories } from '../data/services';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  const inverted = isHome && !scroll;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scroll
          ? 'border-b border-slate-200/80 bg-white/90 shadow-[0_12px_40px_rgba(7,17,32,0.08)] backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E0293D] to-[#B81F30] text-white shadow-lg shadow-red-200/70">
            <Sparkles size={18} />
          </div>
          <div className="leading-none">
            <div className="text-lg font-black tracking-tight text-[#E0293D] sm:text-xl">ApplianceCare</div>
            <div className={`text-[11px] uppercase tracking-[0.28em] ${inverted ? 'text-white/70' : 'text-slate-500'}`}>
              Premium Repair Service
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Skills', '/skills'],
            ['Features', '/features'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-semibold transition-all duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#E0293D] after:transition-all after:duration-300 hover:after:w-full ${
                inverted ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-[#E0293D]'
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="group relative">
            <button
              className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    inverted ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-[#E0293D]'
              }`}
            >
              Services
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full mt-4 w-[780px] -translate-x-1/2 rounded-[28px] border border-slate-200/80 bg-white/95 p-6 opacity-0 shadow-[0_25px_80px_rgba(7,17,32,0.16)] backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="grid gap-5 md:grid-cols-3">
                {serviceCategories.map((cat) => {
                  const Icon = cat.slug === 'washing-machine' ? RefreshCw : cat.slug === 'refrigerator' ? Droplet : Tv;
                  const brandIcons = {
                    lg: SiLg,
                    samsung: SiSamsung,
                    bosch: SiBosch,
                    whirlpool: SiWipro,
                    sony: SiSony,
                    vu: SiVultr,
                  };
                  const brandColors = {
                    lg: '#A50034',
                    samsung: '#1428A0',
                    bosch: '#E60012',
                    whirlpool: '#0057B8',
                    sony: '#000000',
                    ifb: '#0ea5a4',
                    godrej: '#1b5e20',
                    vu: '#ff7f00',
                  };
                  return (
                    <div key={cat.slug} className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 hover:shadow-md transition-shadow">
                      <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#E0293D]">
                        <Icon size={16} />{cat.label}
                      </h4>
                      <div className="mt-3 space-y-2.5">
                        {cat.brands.map((brand) => {
                          const color = brandColors[brand.slug] || '#64748b';
                          const BrandIcon = brandIcons[brand.slug];
                          const isSamsung = brand.slug === 'samsung';
                          return (
                            <Link
                              key={brand.slug}
                              href={`/${cat.slug}/${brand.slug}`}
                              className="group flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-[#E0293D] hover:shadow-sm"
                            >
                              {BrandIcon ? (
                                <BrandIcon 
                                  className={`${isSamsung ? 'h-8 w-8' : 'h-6 w-6'} transition-transform group-hover:scale-110`} 
                                  style={{ color }} 
                                />
                              ) : (
                                <span 
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-white transition-transform group-hover:scale-110" 
                                  style={{ backgroundColor: color }}
                                >
                                  {brand.label.slice(0,2).toUpperCase()}
                                </span>
                              )}
                              <span className="group-hover:text-[#E0293D]">{brand.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex">
          <a
            href="tel:+91 xxxxx xxxxx"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-[#E0293D] to-[#B81F30] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-200/50 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} className={inverted ? 'text-white' : 'text-[#0B1A2E]'} />
          ) : (
            <Menu size={24} className={inverted ? 'text-white' : 'text-[#0B1A2E]'} />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#071120]/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full flex-col overflow-y-auto p-6">
            <button onClick={closeMenu} className="mb-4 self-end rounded-full p-2 hover:bg-[#E0293D]/10" aria-label="Close menu">
              <X size={22} className="text-[#0B1A2E]" />
            </button>
            <div className="flex flex-col gap-4">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Skills', '/skills'],
                ['Features', '/features'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="border-b border-slate-100 py-2 text-lg font-semibold text-slate-700 transition hover:text-[#E0293D]" onClick={closeMenu}>
                  {label}
                </Link>
              ))}
              <div>
                <button onClick={() => setServiceOpen(!serviceOpen)} className="flex w-full items-center justify-between border-b border-slate-100 py-2 text-left text-lg font-semibold text-slate-700">
                  <span>Services</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${serviceOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${serviceOpen ? 'mt-2 max-h-[800px]' : 'max-h-0'}`}>
                  {serviceCategories.map((cat) => {
                    const Icon = cat.slug === 'washing-machine' ? RefreshCw : cat.slug === 'refrigerator' ? Droplet : Tv;
                    const brandIcons = {
                      lg: SiLg,
                      samsung: SiSamsung,
                      bosch: SiBosch,
                      whirlpool: SiWipro,
                      sony: SiSony,
                      vu: SiVultr,
                    };
                    const brandColors = {
                      lg: '#A50034',
                      samsung: '#1428A0',
                      bosch: '#E60012',
                      whirlpool: '#0057B8',
                      sony: '#000000',
                      ifb: '#0ea5a4',
                      godrej: '#1b5e20',
                      vu: '#ff7f00',
                    };
                    return (
                      <div key={cat.slug} className="mb-3 rounded-2xl bg-slate-50 p-4">
                        <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#E0293D]">
                          <Icon size={14} />{cat.label}
                        </h4>
                        {cat.brands.map((brand) => {
                          const color = brandColors[brand.slug] || '#64748b';
                          const BrandIcon = brandIcons[brand.slug];
                          const isSamsung = brand.slug === 'samsung';
                          return (
                            <Link 
                              key={brand.slug} 
                              href={`/${cat.slug}/${brand.slug}`} 
                              className="flex items-center gap-3 py-2 pl-1 text-sm text-slate-600 transition hover:text-[#E0293D]" 
                              onClick={closeMenu}
                            >
                              {BrandIcon ? (
                                <BrandIcon 
                                  className={`${isSamsung ? 'h-10 w-10' : 'h-7 w-7'}`} 
                                  style={{ color }} 
                                />
                              ) : (
                                <span 
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold text-white" 
                                  style={{ backgroundColor: color }}
                                >
                                  {brand.label.slice(0,2).toUpperCase()}
                                </span>
                              )}
                              <span>{brand.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <a href="tel:+91 xxxxx xxxxx" className="mt-4 rounded-full bg-gradient-to-r from-[#E0293D] to-[#B81F30] px-5 py-3 text-center font-semibold text-white shadow-lg" onClick={closeMenu}>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}