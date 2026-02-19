"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Package,
  BookOpen,
  Cog,
  BarChart3,
  Layers,
  Database,
  ClipboardList,
  Target,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "catalogacion",
    icon: BookOpen,
    title: "Catalogación Industrial",
    subtitle: "Datos maestros de materiales",
    description:
      "Construimos y depuramos su maestro de materiales con criterio de ingeniería. Cada ítem queda descrito con atributos normalizados, clasificación estándar y sin duplicados — listo para que compras, bodega y mantenimiento hablen el mismo idioma.",
    deliverables: [
      "Descripción corta y larga normalizada (ISO 8601 / UNSPSC)",
      "Clasificación por familia, clase y commodity",
      "Detección y consolidación de duplicados",
      "Enriquecimiento de atributos técnicos",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "ingenieria",
    icon: Cog,
    title: "Ingeniería de Materiales",
    subtitle: "Vinculación técnica equipo-repuesto",
    description:
      "Establecemos la relación técnica entre cada equipo y sus materiales asociados: repuestos, consumibles, lubricantes y componentes intercambiables. El resultado es una lista de materiales (BOM) confiable que permite planificar, comprar y mantener con precisión.",
    deliverables: [
      "Bill of Materials (BOM) por equipo y sistema",
      "Intercambiabilidad y equivalencias técnicas",
      "Vinculación repuesto-plan de mantenimiento",
      "Identificación de materiales críticos y estratégicos",
    ],
    gradient: "from-teal-500 to-green-500",
  },
  {
    id: "inventario",
    icon: BarChart3,
    title: "Optimización de Inventario",
    subtitle: "Nivel de servicio con capital óptimo",
    description:
      "Determinamos cuánto tener de cada material, dónde almacenarlo y cuándo reponerlo. El objetivo es claro: que el repuesto esté disponible cuando se necesite, sin enterrar capital en bodega.",
    deliverables: [
      "Política de inventario por categoría (Min/Max, ROP, EOQ)",
      "Análisis de obsolescencia y slow-movers",
      "Redistribución entre bodegas y plantas",
      "Dimensionamiento de stock de seguridad basado en criticidad",
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "categorias",
    icon: Layers,
    title: "Gestión de Categorías",
    subtitle: "Estrategia de abastecimiento por commodity",
    description:
      "Segmentamos su universo de materiales en categorías estratégicas y definimos la mejor estrategia de abastecimiento para cada una — considerando criticidad operacional, concentración de mercado y volumen de gasto.",
    deliverables: [
      "Segmentación estratégica de categorías (Kraljic)",
      "Análisis de gasto y concentración de proveedores",
      "Estrategia de abastecimiento por commodity",
      "Identificación de oportunidades de consolidación",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "migracion",
    icon: Database,
    title: "Limpieza y Migración de Datos",
    subtitle: "ERP & Sistemas de gestión",
    description:
      "Cuando cambia el sistema, los datos deben llegar limpios. Nos encargamos de depurar, normalizar y migrar su maestro de materiales para que el nuevo ERP arranque con información confiable desde el primer día.",
    deliverables: [
      "Diagnóstico de calidad de datos actuales",
      "Reglas de limpieza y normalización",
      "Mapeo y transformación entre sistemas",
      "Validación cruzada post-migración",
    ],
    gradient: "from-emerald-500 to-cyan-500",
  },
];

const painPoints = [
  {
    pain: "Maestro de materiales contaminado con duplicados y descripciones inconsistentes",
    solution:
      "Catalogación industrial con criterio de ingeniería: normalización, deduplicación y enriquecimiento de atributos técnicos",
  },
  {
    pain: "Capital enterrado en inventario de baja rotación y materiales obsoletos",
    solution:
      "Optimización de inventario basada en criticidad, consumo real y nivel de servicio objetivo",
  },
  {
    pain: "Repuestos críticos que no están cuando se necesitan",
    solution:
      "Ingeniería de materiales que vincula cada repuesto a su equipo y a su plan de mantenimiento",
  },
  {
    pain: "Compras sin visibilidad de lo que realmente importa ni cuánto cuesta cada categoría",
    solution:
      "Gestión de categorías con segmentación estratégica que alinea el gasto con las prioridades operacionales",
  },
];

const stats = [
  {
    value: "+800K",
    label: "Ítems catalogados en operaciones mineras e industriales",
  },
  {
    value: "35%",
    label: "Reducción promedio de duplicados en maestros de materiales",
  },
  {
    value: "+20",
    label: "Proyectos de optimización de inventario entregados",
  },
  {
    value: "99%",
    label: "Tasa de conformidad en migraciones de datos maestros",
  },
];

const methodology = [
  {
    step: "01",
    title: "Levantamiento",
    desc: "Diagnosticamos el estado actual de su maestro de materiales, inventario y procesos de abastecimiento. Medimos la brecha entre lo que existe y lo que se necesita.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Estructuración",
    desc: "Definimos reglas de catalogación, políticas de inventario y estrategias de categorías alineadas a su contexto operacional y objetivos de negocio.",
    icon: Cog,
  },
  {
    step: "03",
    title: "Ejecución",
    desc: "Catalogamos, depuramos, vinculamos y cargamos. Nuestros equipos procesan volúmenes masivos de datos con herramientas de IA propias, sin sacrificar calidad.",
    icon: Target,
  },
  {
    step: "04",
    title: "Sostenibilidad",
    desc: "Entregamos procesos y criterios para que su equipo mantenga la calidad de datos en el tiempo. No creamos dependencia — creamos capacidad.",
    icon: CheckCircle,
  },
];

const beforeAfter = [
  {
    dimension: "Descripciones de materiales",
    before: "Texto libre, inconsistente",
    after: "Normalizado, con atributos técnicos",
  },
  {
    dimension: "Duplicados en maestro",
    before: "15-40% del catálogo",
    after: "< 2% con reglas de prevención",
  },
  {
    dimension: "Vinculación equipo-repuesto",
    before: "Parcial o inexistente",
    after: "BOM completa y trazable",
  },
  {
    dimension: "Política de inventario",
    before: "Genérica o por intuición",
    after: "Por criticidad y nivel de servicio",
  },
  {
    dimension: "Visibilidad de gasto",
    before: "Por proveedor, sin contexto",
    after: "Por categoría estratégica",
  },
];

const sections = [
  { id: "desafio", label: "El desafío" },
  { id: "servicios", label: "Servicios" },
  { id: "impacto", label: "Impacto" },
  { id: "metodologia", label: "Cómo trabajamos" },
  { id: "modalidades", label: "Modalidades" },
];

export default function SupplyChainPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showNav, setShowNav] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowNav(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroEl) heroObserver.observe(heroEl);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sectionEls.forEach((el) => observerRef.current!.observe(el));

    return () => {
      heroObserver.disconnect();
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Section Navigation */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 transition-all duration-500 ${
          showNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 py-3 overflow-x-auto max-w-6xl mx-auto">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-sm font-medium whitespace-nowrap transition-colors duration-500 ${
                    activeSection === s.id
                      ? "text-emerald-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white">
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/30 to-teal-400/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/30 to-green-400/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-emerald-200 mb-8 mr-3 hover:bg-white transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180 text-emerald-600" />
              <span className="text-sm font-medium text-gray-600">
                Volver al inicio
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 mb-8">
              <Package className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Línea de Negocio
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Gestión de{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Materiales
              </span>
            </h1>

            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-6">
              Cadena de Suministros · Catalogación · Inventario
            </p>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Repuestos disponibles sin capital enterrado. Soluciones End-to-End
              para optimizar su cadena de suministros, asegurando el nivel de
              servicio con el inventario óptimo.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#servicios"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
              >
                Explorar servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-emerald-200 text-gray-700 font-semibold rounded-xl hover:bg-white transition-all duration-300"
              >
                Conversemos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain → Solution Section */}
      <section id="desafio" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              El desafío
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Lo que enfrenta un Gerente de{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Abastecimiento
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Fill rate, valor de inventario, días de stock — conocemos sus KPIs
              porque hemos trabajado con ellos.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                >
                  <div>
                    <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">
                      Problema
                    </p>
                    <p className="text-sm font-medium text-gray-900 leading-relaxed mb-5">
                      {item.pain}
                    </p>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-emerald-200 to-transparent mb-5" />
                  <div>
                    <p className="text-xs font-medium text-teal-600 tracking-widest uppercase mb-3">
                      Nuestra respuesta
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section — Accordion */}
      <section
        id="servicios"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              Servicios especializados
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Qué hacemos en{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Gestión de Materiales
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Desde la catalogación del primer ítem hasta la estrategia de
              abastecimiento por categoría. Cubrimos toda la cadena de valor de
              los materiales con criterio de ingeniería.
            </p>

            <div className="flex flex-col gap-4">
              {services.map((svc) => {
                const isOpen = activeService === svc.id;
                return (
                  <div
                    key={svc.id}
                    className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? "border-emerald-200 shadow-lg"
                        : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                    }`}
                    onClick={() =>
                      setActiveService(isOpen ? null : svc.id)
                    }
                  >
                    <div className="flex items-center gap-5 p-6 sm:p-8">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 ${
                          isOpen ? "scale-110" : ""
                        }`}
                      >
                        <svc.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900">
                          {svc.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            isOpen ? "text-teal-600" : "text-gray-400"
                          } font-medium transition-colors`}
                        >
                          {svc.subtitle}
                        </p>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        isOpen
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 sm:px-8 pb-8 grid md:grid-cols-2 gap-8">
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {svc.description}
                        </p>
                        <div>
                          <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
                            Entregables
                          </p>
                          <div className="space-y-3">
                            {svc.deliverables.map((d, j) => (
                              <div
                                key={j}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600">
                                  {d}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section id="impacto" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              Impacto tangible
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Antes y después de una{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                intervención
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Resultados típicos que observamos en nuestros proyectos de gestión
              de materiales.
            </p>

            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Table Header */}
              <div className="grid grid-cols-[2fr_1.5fr_1.5fr] bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4">
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">
                  Dimensión
                </span>
                <span className="text-xs font-semibold text-white/60 tracking-widest uppercase">
                  Antes
                </span>
                <span className="text-xs font-semibold text-white tracking-widest uppercase">
                  Después
                </span>
              </div>
              {/* Table Rows */}
              {beforeAfter.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[2fr_1.5fr_1.5fr] px-8 py-5 items-center ${
                    i < beforeAfter.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  } ${i % 2 === 0 ? "bg-emerald-50/30" : "bg-white"} hover:bg-emerald-50/50 transition-colors`}
                >
                  <span className="text-sm font-medium text-gray-900">
                    {row.dimension}
                  </span>
                  <span className="text-sm text-gray-400">
                    {row.before}
                  </span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-emerald-700 font-medium">
                      {row.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section
        id="metodologia"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              Cómo trabajamos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-14 leading-tight">
              Nuestro enfoque de{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                intervención
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((m) => (
                <div
                  key={m.step}
                  className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-gray-200 tracking-tight block mb-4">
                    {m.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5 shadow-lg">
                    <m.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 tracking-tight">
                  {s.value}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-10" />
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed mb-6">
              Un maestro de materiales limpio no es un proyecto de TI.
              <br />
              Es la base para que{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">
                compras compre bien, bodega almacene bien, y mantenimiento
                ejecute bien
              </span>
              .
            </blockquote>
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
              — Principio de intervención, Gestión de Materiales ASEMAT
            </p>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section id="modalidades" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              Modalidades
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Dos formas de trabajar con nosotros
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Ya sea como equipo integrado a su operación o mediante
              intervenciones con alcance definido, el rigor técnico y el
              compromiso con los resultados es el mismo.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-medium text-white tracking-widest uppercase mb-6">
                    Capacidad integrada
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Backoffice de Materiales
                  </h3>
                  <p className="text-sm text-white leading-relaxed mb-8">
                    Equipos de catalogación e ingeniería de materiales integrados
                    a su operación. Procesamos altas, modificaciones y depuración
                    continua de su maestro con la calidad de un área
                    especializada y la escala que necesita.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Catalogación industrial continua",
                      "Ingeniería de materiales integrada",
                      "Gestión de altas y modificaciones",
                      "Control de calidad de datos maestros",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-white"
                      >
                        <ArrowRight className="h-4 w-4 mr-3 mt-0.5 text-white/70 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10">
                <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-6">
                  Alcance definido
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Proyectos Específicos
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Intervenciones acotadas que resuelven problemas concretos de su
                  cadena de suministros. Inicio, plazo, entregable y resultado
                  medible.
                </p>
                <ul className="space-y-3">
                  {[
                    "Optimización integral de inventario",
                    "Limpieza y migración de datos maestros",
                    "Desarrollo de estrategia por categorías",
                    "Construcción de BOMs por planta o área",
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Evalúe el estado de su maestro de materiales
            </h2>
            <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ya sea que necesite depurar su catálogo, optimizar su inventario o
              integrar un backoffice de materiales a su operación — tenemos la
              capacidad y la experiencia para hacerlo.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center px-10 py-5 bg-white text-emerald-600 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Contactar ahora
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
