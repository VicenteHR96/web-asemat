'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, Settings, Package, Cpu, Home } from 'lucide-react';

// Navigation for Asset Management area
const gestionActivosNav = [
  { name: 'Inicio', href: '/gestion-activos' },
  {
    name: 'Servicios',
    href: '/servicios',
    children: [
      { name: 'Análisis RAM', href: '/servicios#ram', icon: Settings, color: 'from-blue-500 to-cyan-500' },
      { name: 'Planes de Mantenimiento', href: '/servicios#mantenimiento', icon: Settings, color: 'from-cyan-500 to-teal-500' },
      { name: 'Tecnología Neurotek', href: '/servicios#neurotek', icon: Cpu, color: 'from-violet-500 to-purple-500' },
    ],
  },
  { name: 'Casos de Éxito', href: '/casos-exito' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
];

// Navigation for Supply Chain area
const supplyChainNav = [
  { name: 'Inicio', href: '/supply-chain' },
  {
    name: 'Servicios',
    href: '/servicios',
    children: [
      { name: 'Gestión de Categorías', href: '/servicios#categorias', icon: Package, color: 'from-emerald-500 to-teal-500' },
      { name: 'Ingeniería de Materiales', href: '/servicios#materiales', icon: Package, color: 'from-teal-500 to-green-500' },
      { name: 'Catalogación Industrial', href: '/servicios#catalogacion', icon: Package, color: 'from-green-500 to-lime-500' },
    ],
  },
  { name: 'Casos de Éxito', href: '/casos-exito' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Determine which area we're in based on the pathname
  const isSupplyChain = pathname?.startsWith('/supply-chain');
  const isGestionActivos = pathname?.startsWith('/gestion-activos');
  const isLanding = pathname === '/';

  // Select appropriate navigation based on area
  const navigation = isSupplyChain ? supplyChainNav : gestionActivosNav;

  // Theme colors based on area
  const themeColors = isSupplyChain
    ? {
        gradient: 'from-emerald-600 to-teal-600',
        text: 'text-emerald-600',
        bg: 'bg-emerald-600',
        hover: 'hover:text-emerald-600',
        shadow: 'shadow-emerald-500/25',
      }
    : {
        gradient: 'from-blue-600 to-cyan-600',
        text: 'text-blue-600',
        bg: 'bg-blue-600',
        hover: 'hover:text-blue-600',
        shadow: 'shadow-blue-500/25',
      };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show header on landing page
  if (isLanding) {
    return null;
  }

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
            <div className="flex items-center">
              <Image
                src="/asemat_logo1.png"
                alt="ASEMAT"
                width={140}
                height={40}
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="ml-3 border-l border-gray-300 pl-3">
                {/* Area indicator */}
                <div className={`text-sm font-semibold ${themeColors.text}`}>
                  {isSupplyChain ? 'Supply Chain' : 'Gestión de Activos'}
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 font-medium transition-all duration-200 rounded-xl ${
                    scrolled
                      ? `text-gray-700 ${themeColors.hover} hover:bg-gray-50`
                      : `text-gray-800 ${themeColors.hover} hover:bg-white/50`
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 mt-2 animate-fade-in-down">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="group flex items-center px-4 py-3 mx-2 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${child.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                          <child.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900">
                          {child.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Switch Area Button */}
            <Link
              href="/"
              className="flex items-center px-3 py-2 ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              title="Cambiar área"
            >
              <Home className="h-4 w-4" />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className={`group inline-flex items-center px-6 py-2.5 bg-gradient-to-r ${themeColors.gradient} text-white font-medium rounded-xl shadow-lg ${themeColors.shadow} hover:shadow-xl transition-all duration-300`}
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
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-lg rounded-b-2xl animate-fade-in">
            <div className="space-y-1">
              {/* Home Link */}
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-gray-500 hover:text-gray-700 font-medium hover:bg-gray-50 rounded-xl mx-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4 mr-2" />
                Cambiar área
              </Link>

              <div className="border-t border-gray-100 my-2" />

              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-primary-600 font-medium hover:bg-gray-50 rounded-xl mx-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center px-4 py-2.5 text-gray-500 hover:text-primary-600 text-sm rounded-xl mx-2 hover:bg-gray-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${child.color} flex items-center justify-center mr-3`}>
                            <child.icon className="h-4 w-4 text-white" />
                          </div>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 px-4">
              <Link
                href="/contacto"
                className={`flex items-center justify-center w-full px-5 py-3 bg-gradient-to-r ${themeColors.gradient} text-white font-medium rounded-xl shadow-lg`}
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
