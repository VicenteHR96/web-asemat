'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Settings,
  Package,
  Wrench,
  Route,
  Zap,
  Briefcase,
  GitBranch,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Business lines data with their own specific links
const businessLines: {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  iconBg: string;
  textColor: string;
  links: { name: string; href: string; icon: LucideIcon; color: string }[];
}[] = [
  {
    id: 'gestion-activos',
    title: 'Gestión de Activos',
    subtitle: 'Mantenimiento & Confiabilidad',
    href: '/gestion-activos',
    icon: Settings,
    iconBg: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-600',
    links: [
      { name: 'Servicios', href: '/gestion-activos#servicios', icon: Wrench, color: 'from-blue-500 to-cyan-500' },
      { name: 'Metodología', href: '/gestion-activos#metodologia', icon: Route, color: 'from-cyan-500 to-teal-500' },
      { name: 'Desafíos', href: '/gestion-activos#desafios', icon: Zap, color: 'from-teal-500 to-blue-500' },
    ],
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain',
    subtitle: 'Cadena de Suministros',
    href: '/supply-chain',
    icon: Package,
    iconBg: 'from-emerald-500 to-teal-500',
    textColor: 'text-emerald-600',
    links: [
      { name: 'Servicios', href: '/supply-chain#servicios', icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
      { name: 'Metodología', href: '/supply-chain#metodologia', icon: GitBranch, color: 'from-teal-500 to-green-500' },
      { name: 'Desafíos', href: '/supply-chain#desafios', icon: ShieldCheck, color: 'from-green-500 to-emerald-500' },
    ],
  },
];

// Unified navigation
const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Líneas de Negocio', href: '#lineas', megaDropdown: true },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Casos de Éxito', href: '/casos-exito' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaDropdownOpen, setMegaDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaDropdownOpen(false);
    setMobileAccordionOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const isBusinessLineActive =
    pathname?.startsWith('/gestion-activos') ||
    pathname?.startsWith('/supply-chain') ||
    pathname?.startsWith('/servicios');

  // Detect current business line for the area indicator
  const currentLine = businessLines.find((line) => pathname?.startsWith(line.href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-gray-900/5 border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/asemat_logo1.png"
              alt="ASEMAT"
              width={140}
              height={40}
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            {currentLine && (
              <div className="ml-3 border-l border-gray-300 pl-3">
                <div className={`text-sm font-semibold ${currentLine.textColor}`}>
                  {currentLine.title}
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.megaDropdown && setMegaDropdownOpen(true)}
                onMouseLeave={() => item.megaDropdown && setMegaDropdownOpen(false)}
              >
                {item.megaDropdown ? (
                  <button
                    type="button"
                    className={`flex items-center px-4 py-2 font-medium transition-all duration-200 rounded-xl ${
                      isBusinessLineActive
                        ? 'text-blue-600'
                        : scrolled
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          : 'text-gray-800 hover:text-blue-600 hover:bg-white/50'
                    }`}
                    aria-expanded={megaDropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        megaDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 font-medium transition-all duration-200 rounded-xl ${
                      isActive(item.href)
                        ? 'text-blue-600'
                        : scrolled
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          : 'text-gray-800 hover:text-blue-600 hover:bg-white/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mega Dropdown */}
                {item.megaDropdown && megaDropdownOpen && (
                  <div className="absolute top-full -left-64 w-[680px] pt-2">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-6 px-6 animate-fade-in-down">
                    <div className="grid grid-cols-2 gap-6">
                      {businessLines.map((line, idx) => (
                        <div
                          key={line.id}
                          className={`${idx === 0 ? 'border-r border-gray-100 pr-6' : 'pl-2'}`}
                        >
                          {/* Business line header */}
                          <Link
                            href={line.href}
                            className="group flex items-center mb-4"
                          >
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${line.iconBg} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg`}
                            >
                              <line.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                {line.title}
                              </div>
                              <div className={`text-xs font-medium ${line.textColor}`}>
                                {line.subtitle}
                              </div>
                            </div>
                          </Link>

                          {/* Separator */}
                          <div className="border-t border-gray-100 mb-3" />

                          {/* Section links */}
                          <div className="space-y-1">
                            {line.links.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="group/item flex items-center px-2 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                              >
                                <div
                                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform`}
                                >
                                  <link.icon className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-sm text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors">
                                  {link.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="group inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300"
            >
              Contáctanos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-700 hover:bg-white/50'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-lg rounded-b-2xl animate-fade-in">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.megaDropdown ? (
                    <>
                      {/* Accordion trigger */}
                      <button
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-50 rounded-xl mx-2 transition-colors"
                        style={{ width: 'calc(100% - 16px)' }}
                        onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileAccordionOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Accordion content */}
                      {mobileAccordionOpen && (
                        <div className="mt-1 mx-2 space-y-4 animate-fade-in">
                          {businessLines.map((line) => (
                            <div key={line.id} className="pl-2">
                              {/* Business line header */}
                              <Link
                                href={line.href}
                                className="group flex items-center px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div
                                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${line.iconBg} flex items-center justify-center mr-3 shadow-md`}
                                >
                                  <line.icon className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900 text-sm">
                                    {line.title}
                                  </div>
                                  <div className={`text-xs ${line.textColor}`}>
                                    {line.subtitle}
                                  </div>
                                </div>
                              </Link>

                              {/* Section sub-links */}
                              <div className="pl-4 mt-1 space-y-0.5">
                                {line.links.map((link) => (
                                  <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center px-3 py-2 text-gray-500 hover:text-blue-600 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div
                                      className={`w-7 h-7 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mr-2.5`}
                                    >
                                      <link.icon className="h-3.5 w-3.5 text-white" />
                                    </div>
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 font-medium rounded-xl mx-2 transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 px-4">
              <Link
                href="/contacto"
                className="flex items-center justify-center w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contáctanos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
