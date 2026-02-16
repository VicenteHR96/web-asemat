'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Settings,
  Package,
  Wrench,
  Route,
  Zap,
  Briefcase,
  GitBranch,
  ShieldCheck,
  FileText,
  FolderOpen,
  FileSearch,
  FileCheck,
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
    id: 'gestion-materiales',
    title: 'Gestión de Materiales',
    subtitle: 'Cadena de Suministros',
    href: '/gestion-materiales',
    icon: Package,
    iconBg: 'from-emerald-500 to-teal-500',
    textColor: 'text-emerald-600',
    links: [
      { name: 'Servicios', href: '/gestion-materiales#servicios', icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
      { name: 'Metodología', href: '/gestion-materiales#metodologia', icon: GitBranch, color: 'from-teal-500 to-green-500' },
      { name: 'Desafíos', href: '/gestion-materiales#desafios', icon: ShieldCheck, color: 'from-green-500 to-emerald-500' },
    ],
  },
  {
    id: 'gestion-documental',
    title: 'Gestión Documental',
    subtitle: 'Documentación & Control',
    href: '/gestion-documental',
    icon: FileText,
    iconBg: 'from-violet-500 to-purple-500',
    textColor: 'text-violet-600',
    links: [
      { name: 'Servicios', href: '/gestion-documental#servicios', icon: FolderOpen, color: 'from-violet-500 to-purple-500' },
      { name: 'Metodología', href: '/gestion-documental#metodologia', icon: FileSearch, color: 'from-purple-500 to-fuchsia-500' },
      { name: 'Desafíos', href: '/gestion-documental#desafios', icon: FileCheck, color: 'from-fuchsia-500 to-violet-500' },
    ],
  },
];

// Unified navigation
const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Líneas de Negocio', href: '#lineas', megaDropdown: true },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Casos de Éxito', href: '/casos-exito' },
  { name: 'Noticias', href: '/noticias' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaDropdownOpen, setMegaDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const [expandedLines, setExpandedLines] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaDropdownOpen(false);
    setMobileAccordionOpen(false);
    setExpandedLines([]);
  }, [pathname]);

  const toggleLineExpanded = useCallback((lineId: string) => {
    setExpandedLines((prev) =>
      prev.includes(lineId)
        ? prev.filter((id) => id !== lineId)
        : [...prev, lineId]
    );
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const isBusinessLineActive =
    pathname?.startsWith('/gestion-activos') ||
    pathname?.startsWith('/gestion-materiales') ||
    pathname?.startsWith('/gestion-documental') ||
    pathname?.startsWith('/servicios');

  // Detect current business line for the area indicator
  const currentLine = businessLines.find((line) => pathname?.startsWith(line.href));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
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
          <div className="hidden lg:flex items-center space-x-0 xl:space-x-1">
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
                    className={`flex items-center px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 rounded-xl ${
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
                    className={`flex items-center px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 rounded-xl ${
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
                  <div className="absolute top-full -left-64 w-[900px] pt-2">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-6 px-6 animate-fade-in-down">
                    <div className="grid grid-cols-3 gap-6">
                      {businessLines.map((line, idx) => (
                        <div
                          key={line.id}
                          className={`${idx < businessLines.length - 1 ? 'border-r border-gray-100 pr-6' : ''}`}
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
              className="group inline-flex items-center px-4 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm xl:text-base font-medium rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300"
            >
              Contáctanos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2.5 rounded-xl transition-colors z-50 ${
              mobileMenuOpen
                ? 'text-gray-600 bg-gray-100'
                : scrolled
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-gray-700 hover:bg-white/50'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile Navigation Overlay - Completely outside header for proper z-index */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-[60] bg-white overflow-hidden shadow-xl">
          <div className="h-full overflow-y-auto overscroll-contain">
            <div className="py-4 px-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.megaDropdown ? (
                      <>
                        {/* Main Accordion trigger for "Líneas de Negocio" */}
                        <button
                          type="button"
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-50 rounded-xl transition-colors"
                          onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              mobileAccordionOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Business Lines Accordion content */}
                        {mobileAccordionOpen && (
                          <div className="mt-2 space-y-2 animate-fade-in">
                            {businessLines.map((line) => {
                              const isExpanded = expandedLines.includes(line.id);
                              return (
                                <div
                                  key={line.id}
                                  className="bg-gray-50 rounded-xl overflow-hidden"
                                >
                                  {/* Business line header with expand button */}
                                  <div className="flex items-center">
                                    <Link
                                      href={line.href}
                                      className="flex-1 flex items-center px-4 py-3"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <div
                                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${line.iconBg} flex items-center justify-center mr-3 shadow-md`}
                                      >
                                        <line.icon className="h-5 w-5 text-white" />
                                      </div>
                                      <div>
                                        <div className="font-semibold text-gray-900">
                                          {line.title}
                                        </div>
                                        <div className={`text-xs ${line.textColor}`}>
                                          {line.subtitle}
                                        </div>
                                      </div>
                                    </Link>

                                    {/* Expand/Collapse button */}
                                    <button
                                      type="button"
                                      onClick={() => toggleLineExpanded(line.id)}
                                      className="p-3 mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-xl transition-colors"
                                      aria-label={isExpanded ? 'Colapsar' : 'Expandir'}
                                    >
                                      <ChevronDown
                                        className={`h-5 w-5 transition-transform duration-200 ${
                                          isExpanded ? 'rotate-180' : ''
                                        }`}
                                      />
                                    </button>
                                  </div>

                                  {/* Sub-links accordion */}
                                  {isExpanded && (
                                    <div className="px-4 pb-3 pt-1 border-t border-gray-200 animate-fade-in">
                                      <div className="space-y-1">
                                        {line.links.map((link) => (
                                          <Link
                                            key={link.name}
                                            href={link.href}
                                            className="flex items-center px-3 py-2.5 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-white transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                          >
                                            <div
                                              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mr-3`}
                                            >
                                              <link.icon className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="font-medium">{link.name}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 font-medium rounded-xl transition-colors ${
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

              {/* CTA Button */}
              <div className="mt-6">
                <Link
                  href="/contacto"
                  className="flex items-center justify-center w-full px-5 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contáctanos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
