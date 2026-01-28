"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Settings,
  Package,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Building2,
  Cpu,
  Target,
} from "lucide-react";

const businessAreas = [
  {
    id: "gestion-activos",
    icon: Settings,
    title: "Gestión de Activos",
    subtitle: "Mantenimiento & Confiabilidad",
    description:
      "Ingeniería especializada para garantizar la Mantenibilidad y Confiabilidad de sus activos a lo largo de todo su ciclo de vida.",
    features: [
      "Análisis RAM y RCM",
      "Implementación ERP",
      "Planes de Mantenimiento",
      "Ingeniería de Confiabilidad",
    ],
    href: "/gestion-activos",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGlow: "bg-blue-500/10",
    borderColor: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
    shadowColor: "hover:shadow-blue-500/20",
  },
  {
    id: "supply-chain",
    icon: Package,
    title: "Supply Chain",
    subtitle: "Cadena de Suministros",
    description:
      "Soluciones End-to-End para optimizar su cadena de suministros, asegurando el nivel de servicio con inventario óptimo.",
    features: [
      "Gestión de Categorías",
      "Ingeniería de Materiales",
      "Catalogación Industrial",
      "Gestión de Bodegas",
    ],
    href: "/supply-chain",
    gradient: "from-emerald-500 via-teal-500 to-green-500",
    bgGlow: "bg-emerald-500/10",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-400",
    shadowColor: "hover:shadow-emerald-500/20",
  },
];

const stats = [
  { value: "+30", label: "Años de experiencia", icon: Award },
  { value: "$3.2B+", label: "USD en proyectos", icon: TrendingUp },
  { value: "+50", label: "Proyectos exitosos", icon: CheckCircle },
  { value: "+100", label: "Profesionales", icon: Users },
];

const clients = [
  { name: "Codelco", logo: "/clients/codelco.png" },
  { name: "Anglo American", logo: "/clients/anglo-american.png" },
  { name: "Antofagasta Minerals", logo: "/clients/amsa.png" },
  { name: "Collahuasi", logo: "/clients/COLLAHUASI.png" },
  { name: "Glencore", logo: "/clients/glencore.png" },
];

const whyUs = [
  {
    icon: Target,
    title: "Visión Integral",
    description: "Entendemos el ciclo de vida completo del activo y la cadena de suministros.",
  },
  {
    icon: Cpu,
    title: "Tecnología e IA",
    description: "Herramientas propias basadas en inteligencia artificial para automatizar procesos.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales con amplia experiencia en minería e industria.",
  },
  {
    icon: Building2,
    title: "Track Record",
    description: "Proyectos exitosos con las principales empresas del sector.",
  },
];

export default function HomePage() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/15 to-transparent rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ingeniería para{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Operar desde el Primer Día
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Especialistas en Mantenibilidad, Confiabilidad y Cadena de Suministros.
              Ayudamos a que los proyectos industriales y mineros alcancen la operación estable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#lineas"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                Explorar Servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section id="lineas" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Líneas de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Negocio
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Dos áreas especializadas para cubrir todas sus necesidades de ingeniería industrial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {businessAreas.map((area) => (
              <Link
                key={area.id}
                href={area.href}
                className="group relative"
                onMouseEnter={() => setHoveredArea(area.id)}
                onMouseLeave={() => setHoveredArea(null)}
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute -inset-1 rounded-3xl ${area.bgGlow} blur-xl transition-all duration-500 ${
                    hoveredArea === area.id ? "opacity-100 scale-105" : "opacity-0"
                  }`}
                />

                {/* Card */}
                <div
                  className={`relative h-full bg-white border ${area.borderColor} ${area.hoverBorder} rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl ${area.shadowColor} hover:transform hover:scale-[1.02]`}
                >
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <area.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p
                    className={`text-lg font-medium bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent mb-4`}
                  >
                    {area.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {area.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-gray-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`inline-flex items-center font-semibold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}
                  >
                    Explorar
                    <ArrowRight className="ml-2 h-5 w-5 text-gray-400 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Por Qué{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Elegirnos
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600">
              Más de 30 años de experiencia nos respaldan en proyectos industriales y mineros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Clientes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con las principales empresas del sector minero e industrial.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Contáctenos para una consultoría personalizada y descubra cómo podemos
              ayudarle a alcanzar la excelencia operacional.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Contactar Ahora
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
