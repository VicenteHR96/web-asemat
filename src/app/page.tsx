"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Settings,
  Package,
  ArrowRight,
  CheckCircle,
  FileText,
  Calendar,
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
    id: "gestion-materiales",
    icon: Package,
    title: "Gestión de Materiales",
    subtitle: "Cadena de Suministros",
    description:
      "Soluciones End-to-End para optimizar su cadena de suministros, asegurando el nivel de servicio con inventario óptimo.",
    features: [
      "Gestión de Categorías",
      "Ingeniería de Materiales",
      "Catalogación Industrial",
      "Optimización de Inventario",
    ],
    href: "/gestion-materiales",
    gradient: "from-emerald-500 via-teal-500 to-green-500",
    bgGlow: "bg-emerald-500/10",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-400",
    shadowColor: "hover:shadow-emerald-500/20",
  },
  {
    id: "gestion-documental",
    icon: FileText,
    title: "Gestión Documental",
    subtitle: "Documentación & Control",
    description:
      "Control documental de proyectos industriales. Aseguramos la completitud, conformidad y trazabilidad de entregables técnicos para un traspaso operacional limpio.",
    features: [
      "Control Documental de Proyectos",
      "Gestión de Entregables de Vendors",
      "Verificación de Conformidad Técnica",
      "Traspaso Operacional Estructurado",
    ],
    href: "/gestion-documental",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGlow: "bg-violet-500/10",
    borderColor: "border-violet-200",
    hoverBorder: "hover:border-violet-400",
    shadowColor: "hover:shadow-violet-500/20",
  },
];

const clients = [
  { name: "Codelco", logo: "/clients/codelco.png" },
  { name: "Anglo American", logo: "/clients/anglo-american.png" },
  { name: "Antofagasta Minerals", logo: "/clients/amsa.png" },
  { name: "Collahuasi", logo: "/clients/COLLAHUASI.png" },
  { name: "Glencore", logo: "/clients/glencore.png" },
];

const news = [
  {
    id: 1,
    title: "ASEMAT participa en EXPOMIN 2025",
    excerpt:
      "Nuestra empresa estará presente en la feria minera más importante de Latinoamérica presentando nuestras soluciones de gestión de activos.",
    date: "15 Ene 2025",
    category: "Eventos",
  },
  {
    id: 2,
    title: "Nuevo proyecto con Codelco División El Teniente",
    excerpt:
      "Iniciamos un nuevo proyecto de implementación de gestión de materiales para optimizar la cadena de suministros.",
    date: "10 Ene 2025",
    category: "Proyectos",
  },
  {
    id: 3,
    title: "Lanzamiento de Neurotek 2.0",
    excerpt:
      "Presentamos la nueva versión de nuestra plataforma de inteligencia artificial para la gestión de activos industriales.",
    date: "5 Ene 2025",
    category: "Tecnología",
  },
];

export default function HomePage() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-blue-50/30">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/8 to-transparent rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 flex flex-col">
          <div className="flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200 mb-10">
                <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                  Gestión de Activos · Materiales · Documentación
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-8 leading-[1.15]">
                Capacidad técnica especializada para{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  operaciones que no se detienen
                </span>
              </h1>

              <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto">
                Nos integramos a las operaciones más exigentes de la industria minera e industrial. Aportamos conocimiento profundo, metodología probada y la capacidad de dejar cada proceso mejor de lo que lo encontramos.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="#lineas"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Conozca nuestras prácticas
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>

          {/* Key Figures */}
          <div className="max-w-4xl mx-auto mt-14 grid grid-cols-3 divide-x divide-gray-200">
            {[
              { number: "+30", label: "Años de experiencia" },
              { number: "+50", label: "Proyectos entregados" },
              { number: "+100", label: "Profesionales en planta" },
            ].map((figure, index) => (
              <div key={index} className="text-center px-6">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 tracking-tight">
                  {figure.number}
                </div>
                <div className="text-gray-400 text-sm">{figure.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section
        id="lineas"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Líneas de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Negocio
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Tres áreas especializadas para cubrir todas sus necesidades de
              ingeniería industrial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                    hoveredArea === area.id
                      ? "opacity-100 scale-105"
                      : "opacity-0"
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
                      <div
                        key={idx}
                        className="flex items-center text-gray-700 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 mr-2 text-gray-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`inline-flex items-center font-semibold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}
                  >
                    Conocer más
                    <ArrowRight className="ml-2 h-5 w-5 text-gray-400 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis / Value Prop Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-stone-50">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr] items-stretch max-w-6xl mx-auto">
            {/* Left — blue bg bleeding to left edge */}
            <div className="relative py-20 lg:py-24 pr-10 lg:pr-12 flex flex-col justify-center">
              {/* Background that extends to the left edge of the page */}
              <div className="absolute inset-y-0 right-0 -left-[100vw] bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-r-[2.5rem]">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-xs font-medium text-white/70 tracking-widest uppercase mb-5">
                  Nuestra perspectiva
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Por qué las organizaciones trabajan con nosotros
                </h2>
              </div>
            </div>

            {/* Right — light background with pillars */}
            <div className="py-20 lg:py-24 lg:pl-16">
              <div className="divide-y divide-gray-200">
                {[
                  {
                    number: "01",
                    title: "Dominio técnico real",
                    description:
                      "Nuestros equipos provienen de la industria. Entienden los problemas de negocio sin necesitar explicación — RAM, FMECA, RCM, catalogación, inventarios y control documental son su lenguaje diario.",
                  },
                  {
                    number: "02",
                    title: "Metodología y tecnología propia",
                    description:
                      "Herramientas de inteligencia artificial desarrolladas internamente para capturar, estructurar y analizar información técnica a escala. Consistencia en cada entregable.",
                  },
                  {
                    number: "03",
                    title: "Orientación a la mejora",
                    description:
                      "No ejecutamos procesos tal como están. Cada intervención incluye un diagnóstico de oportunidades y una propuesta para elevar el estándar operacional existente.",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.number}
                    className="group grid grid-cols-[56px_1fr] gap-6 py-8 first:pt-0 last:pb-0 cursor-default"
                  >
                    <span className="text-3xl font-bold text-gray-300 tracking-tight group-hover:text-cyan-600 transition-colors duration-500">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciador Section */}
      <section className="py-24 bg-stone-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-5">
                Nuestro enfoque
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                No somos un proveedor de outsourcing convencional
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
                La diferencia radica en la profundidad técnica y la orientación
                a resultados. Aportamos criterio, no solo capacidad de
                ejecución.
              </p>
            </div>
            {/* Comparison Table */}
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-2">
                <div className="px-8 py-5 text-xs font-medium text-gray-400 tracking-widest uppercase">
                  Outsourcing típico
                </div>
                <div className="px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-xs font-medium text-white tracking-widest uppercase">
                  ASEMAT
                </div>
              </div>
              {/* Rows */}
              {[
                [
                  "Ejecuta las tareas asignadas",
                  "Ejecuta y mejora el proceso completo",
                ],
                [
                  "Replica el procedimiento vigente",
                  "Diagnostica, optimiza y propone",
                ],
                [
                  "Requiere especificaciones detalladas",
                  "Comprende el problema de negocio",
                ],
                [
                  "Capacidad operativa externa",
                  "Inteligencia técnica con capacidad de ejecución",
                ],
              ].map(([bpo, asemat], index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 border-t border-gray-100"
                >
                  <div className="px-8 py-5 text-sm text-gray-400 flex items-center">
                    {bpo}
                  </div>
                  <div className="px-8 py-5 bg-blue-50/40 flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-900">
                      {asemat}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-14 text-center">
              <blockquote className="text-lg text-gray-900 leading-relaxed max-w-2xl mx-auto">
                &ldquo;No somos capacidad adicional. Somos criterio adicional
                con la capacidad de llevarlo a la práctica.&rdquo;
              </blockquote>
              <cite className="block mt-3 text-xs font-medium text-gray-400 tracking-widest uppercase not-italic">
                — Principio operacional ASEMAT
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-5">
              Modalidades de servicio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Dos formas de trabajar con nosotros
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Ya sea como capacidad integrada a su operación o mediante
              proyectos con alcance definido, el estándar técnico y el
              compromiso con los resultados es el mismo.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Servicios Continuos */}
              <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-medium text-white/70 tracking-widest uppercase mb-6">
                    Capacidad integrada
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Servicios Continuos
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-8">
                    Equipos especializados que se integran a la operación del
                    cliente de forma permanente o semi-permanente, funcionando
                    como una extensión natural de la organización.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Backoffice de catalogación industrial",
                      "Ingeniería de materiales integrada",
                      "Gestión documental de proyectos en curso",
                      "Soporte continuo de confiabilidad operacional",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-white/70"
                      >
                        <ArrowRight className="h-4 w-4 mr-3 mt-0.5 text-white/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Proyectos Específicos */}
              <div className="bg-stone-50 border border-gray-200 rounded-3xl p-10">
                <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-6">
                  Alcance definido
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Proyectos Específicos
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Intervenciones puntuales con inicio, plazo y entregable
                  definido. Resultados concretos que resuelven desafíos técnicos
                  acotados con precisión.
                </p>
                <ul className="space-y-3">
                  {[
                    "Estudios RAM y análisis de criticidad",
                    "Optimización integral de inventario",
                    "Desarrollo de planes de mantenimiento",
                    "Limpieza y migración de datos maestros",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-500"
                    >
                      <ArrowRight className="h-4 w-4 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        id="clientes"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Clientes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con las principales empresas del sector minero e
              industrial.
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

      {/* News Section */}
      <section id="noticias" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Últimas{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Noticias
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Mantente informado sobre nuestros proyectos, eventos y novedades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.map((item) => (
              <Link
                key={item.id}
                href="/noticias"
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full">
                      {item.category}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center text-blue-600 font-semibold">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/noticias"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300"
            >
              Ver Todas las Noticias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
              Contáctenos para una consultoría personalizada y descubra cómo
              podemos ayudarle a alcanzar la excelencia operacional.
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
