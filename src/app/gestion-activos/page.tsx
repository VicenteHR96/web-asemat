"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Settings,
  CheckCircle,
  ArrowRight,
  Target,
  Shield,
  Wrench,
  BarChart3,
  ClipboardList,
  Cog,
  ChevronDown,
  Cpu,
} from "lucide-react";

const services = [
  {
    id: "ram",
    icon: BarChart3,
    title: "Análisis RAM",
    subtitle: "Confiabilidad, Disponibilidad y Mantenibilidad",
    description:
      "Modelamos el comportamiento de sus sistemas productivos para predecir disponibilidad real, identificar cuellos de botella y dimensionar redundancias con criterio técnico-económico. No es un ejercicio académico — es la base para tomar decisiones de diseño y operación con evidencia.",
    deliverables: [
      "Modelo RAM del sistema productivo completo",
      "Análisis de sensibilidad y escenarios",
      "Identificación de equipos críticos y cuellos de botella",
      "Recomendaciones de redundancia y configuración óptima",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "rcm",
    icon: Wrench,
    title: "Planes de Mantenimiento RCM",
    subtitle: "Estrategias basadas en confiabilidad",
    description:
      "Desarrollamos estrategias de mantenimiento que responden a la criticidad real de cada equipo, no a intervalos genéricos del fabricante. Cada tarea tiene justificación técnica, frecuencia optimizada y un responsable definido.",
    deliverables: [
      "Análisis FMECA por sistema funcional",
      "Planes de mantenimiento optimizados por criticidad",
      "Definición de tareas, frecuencias y recursos",
      "Hojas de ruta cargables en SAP PM / EAM",
    ],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: "erp",
    icon: Cog,
    title: "Implementación ERP de Mantenimiento",
    subtitle: "Datos maestros estructurados y validados",
    description:
      "La calidad de su ERP de mantenimiento depende de la calidad de los datos que se cargan. Nos aseguramos de que la taxonomía, las listas de materiales, los planes y las hojas de ruta estén estructurados correctamente antes de que el sistema entre en productivo.",
    deliverables: [
      "Taxonomía de equipos y ubicaciones técnicas",
      "Listas de materiales (BOM) por equipo",
      "Carga de planes y hojas de ruta en SAP PM",
      "Validación cruzada de datos maestros",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "confiabilidad",
    icon: Shield,
    title: "Ingeniería de Confiabilidad",
    subtitle: "Análisis especializado para la mejora continua",
    description:
      "Cuando los equipos fallan de forma recurrente o el rendimiento no alcanza las metas, aplicamos herramientas de confiabilidad para encontrar la causa raíz y proponer soluciones que se sostengan en el tiempo. No parchamos — resolvemos.",
    deliverables: [
      "Análisis de causa raíz (RCA / RCFA)",
      "Estudios de vida útil y tasas de falla",
      "Análisis de Jack Knife y Pareto de pérdidas",
      "Plan de acción con impacto cuantificado",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "neurotek",
    icon: Cpu,
    title: "Neurotek Platform",
    subtitle: "Inteligencia artificial aplicada a activos",
    description:
      "Herramientas de IA desarrolladas internamente para acelerar y estandarizar los procesos de ingeniería de mantenimiento. Desde FMECA automático hasta catalogación inteligente de repuestos — consistencia y velocidad en cada entregable.",
    deliverables: [
      "Generación automática de análisis FMECA",
      "Catalogación inteligente de materiales",
      "Agente conversacional técnico especializado",
      "Procesamiento masivo de documentación técnica",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
];

const painPoints = [
  {
    pain: "Retrabajos en la implementación del ERP porque los datos maestros llegan incompletos o inconsistentes",
    solution:
      "Estructuración y validación rigurosa de taxonomía, BOM y planes antes de la carga — eliminando el retrabajo desde la fuente",
  },
  {
    pain: "Estrategias de mantenimiento genéricas que no reflejan la criticidad real de los equipos",
    solution:
      "Planes RCM desarrollados equipo por equipo, con FMECA, criticidad operacional y frecuencias optimizadas con criterio técnico-económico",
  },
  {
    pain: "Proyectos que llegan a operación sin documentación de mantenimiento lista para usar",
    solution:
      "Intervención desde las fases tempranas del proyecto para asegurar que los entregables de mantenimiento estén completos antes del traspaso",
  },
  {
    pain: "Fallas recurrentes que se reparan una y otra vez sin resolver la causa de fondo",
    solution:
      "Análisis de causa raíz sistemático con plan de acción cuantificado y seguimiento hasta el cierre efectivo",
  },
];

const stats = [
  { value: "+30", label: "Años de experiencia en gestión de activos industriales" },
  { value: "+200", label: "Estudios RAM y RCM completados en operaciones mineras" },
  { value: "20-40%", label: "Reducción promedio de retrabajos en implementaciones ERP" },
  { value: "<48h", label: "Tiempo de respuesta en análisis de criticidad con IA" },
];

const methodology = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Evaluamos el estado actual de sus activos, datos maestros y procesos de mantenimiento. Establecemos la línea base y el gap respecto al estándar requerido.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Ingeniería",
    desc: "Desarrollamos los entregables técnicos: análisis RAM, FMECA, planes de mantenimiento, taxonomías y listas de materiales con herramientas especializadas e IA.",
    icon: Cog,
  },
  {
    step: "03",
    title: "Implementación",
    desc: "Cargamos y validamos los datos en el sistema ERP. Verificamos la integridad cruzada entre módulos y aseguramos que todo funcione en productivo.",
    icon: Target,
  },
  {
    step: "04",
    title: "Transferencia",
    desc: "Entregamos la documentación completa, capacitamos al equipo de operación y brindamos soporte durante la estabilización del sistema.",
    icon: CheckCircle,
  },
];

const lifecycle = [
  {
    phase: "Diseño",
    docs: "Análisis RAM, especificaciones de mantenibilidad, FMECA de diseño",
    role: "Asegurar que las decisiones de diseño consideren la operación y el mantenimiento",
  },
  {
    phase: "Procura",
    docs: "Datasheets, manuales de vendor, repuestos recomendados",
    role: "Validación técnica y estructuración de información de equipos",
  },
  {
    phase: "Construcción",
    docs: "As-built, taxonomía de equipos, listas de materiales",
    role: "Desarrollo de datos maestros y planes de mantenimiento",
  },
  {
    phase: "Comisionamiento",
    docs: "Planes de mantenimiento, hojas de ruta, parámetros de operación",
    role: "Carga y validación en ERP, preparación para operación",
  },
  {
    phase: "Operación",
    docs: "Estrategias RCM, análisis de confiabilidad, mejora continua",
    role: "Optimización de estrategias y soporte en ingeniería de confiabilidad",
  },
];

const sections = [
  { id: "desafio", label: "El desafío" },
  { id: "servicios", label: "Servicios" },
  { id: "ciclo-vida", label: "Ciclo de vida" },
  { id: "metodologia", label: "Cómo trabajamos" },
  { id: "modalidades", label: "Modalidades" },
];

export default function GestionActivosPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showNav, setShowNav] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

    // Show/hide nav based on hero visibility
    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowNav(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroEl) heroObserver.observe(heroEl);

    // Track active section
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
                      ? "text-blue-600"
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
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image — grayscale, low opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center grayscale opacity-[.18]"
          style={{ backgroundImage: "url('/images/activos.jpg')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-cyan-50/50 to-white/65">
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-cyan-400/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/30 to-teal-400/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-200 mb-8 mr-3 hover:bg-white transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Volver al inicio</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 mb-8">
              <Settings className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Línea de Negocio</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Gestión de{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Activos
              </span>
            </h1>

            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-6">
              Mantenibilidad · Confiabilidad
            </p>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Ingeniería especializada para garantizar la Mantenibilidad y Confiabilidad de sus activos
              a lo largo de todo su ciclo de vida. Que los equipos lleguen a operación con información
              técnica estructurada, validada y lista para ser usada.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#servicios"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                Explorar servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-blue-200 text-gray-700 font-semibold rounded-xl hover:bg-white transition-all duration-300"
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
              Lo que enfrenta una Gerencia de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Mantenimiento y Confiabilidad
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Disponibilidad, confiabilidad, costos de mantenimiento — sabemos lo que está en juego cuando
              la gestión de activos no tiene la base técnica que necesita.
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
                  <div className="w-full h-px bg-gradient-to-r from-blue-200 to-transparent mb-5" />
                  <div>
                    <p className="text-xs font-medium text-cyan-600 tracking-widest uppercase mb-3">
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
      <section id="servicios" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              Servicios especializados
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Qué hacemos en{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Gestión de Activos
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Ingeniería de mantenimiento y confiabilidad aplicada a cada fase del ciclo de vida.
              El objetivo: que sus activos operen con la disponibilidad que el negocio necesita.
            </p>

            <div className="flex flex-col gap-4">
              {services.map((svc) => {
                const isOpen = activeService === svc.id;
                return (
                  <div
                    key={svc.id}
                    className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? "border-blue-200 shadow-lg"
                        : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                    }`}
                    onClick={() => setActiveService(isOpen ? null : svc.id)}
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
                        <p className={`text-sm ${isOpen ? "text-cyan-600" : "text-gray-400"} font-medium transition-colors`}>
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
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
                              <div key={j} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600">{d}</span>
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

      {/* Asset Lifecycle Section */}
      <section id="ciclo-vida" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              Cobertura completa
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Presentes en cada fase del{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                ciclo de vida
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              La gestión de activos no empieza cuando el equipo falla. Acompañamos al activo desde el
              diseño hasta la operación estable.
            </p>

            <div className="flex flex-col">
              {lifecycle.map((item, i) => (
                <div
                  key={i}
                  className={`grid md:grid-cols-[160px_1fr_1fr] gap-6 py-6 ${
                    i < lifecycle.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        i === lifecycle.length - 1
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-blue-500/30"
                          : "bg-blue-200"
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold ${
                        i === lifecycle.length - 1
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                          : "text-gray-700"
                      }`}
                    >
                      {item.phase}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.docs}
                  </p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              Cómo trabajamos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-14 leading-tight">
              Nuestro enfoque de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg">
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
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 tracking-tight">
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
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-10" />
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed mb-6">
              Un activo no está listo para operar cuando se enciende por primera vez.
              <br />
              Está listo cuando{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                mantenimiento puede sostenerlo
              </span>
              .
            </blockquote>
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
              — Principio de intervención, Gestión de Activos ASEMAT
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
              Ya sea como equipo integrado a su proyecto o mediante intervenciones con alcance definido,
              el rigor técnico y el compromiso con los resultados es el mismo.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-medium text-white tracking-widest uppercase mb-6">
                    Capacidad integrada
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Equipo de Ingeniería en Proyecto
                  </h3>
                  <p className="text-sm text-white leading-relaxed mb-8">
                    Un equipo de ingeniería de mantenimiento y confiabilidad dedicado que se integra a su
                    proyecto como parte de su organización. Gestionamos los entregables técnicos con el
                    rigor que la operación va a exigir.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Ingeniero de confiabilidad dedicado al proyecto",
                      "Desarrollo continuo de entregables de mantenimiento",
                      "Soporte en carga y validación de ERP",
                      "Reportes de avance y coordinación con el cliente",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-white">
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
                  Intervenciones acotadas para resolver desafíos puntuales de ingeniería de mantenimiento.
                  Inicio, plazo y entregable definido — resultados concretos con precisión.
                </p>
                <ul className="space-y-3">
                  {[
                    "Estudios RAM y análisis de criticidad",
                    "Desarrollo de planes de mantenimiento RCM",
                    "Implementación de datos maestros en SAP PM",
                    "Análisis de causa raíz y mejora de confiabilidad",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-500">
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Sus activos están listos para operar?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ya sea que necesite estructurar los datos maestros de un proyecto nuevo, optimizar las
              estrategias de mantenimiento existentes o implementar un ERP de clase mundial — conversemos.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
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
