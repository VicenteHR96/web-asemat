"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FileText,
  FileCheck,
  Users,
  Shield,
  RefreshCw,
  Monitor,
  ClipboardList,
  Cog,
  Target,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "control",
    icon: FileCheck,
    title: "Control Documental de Proyectos",
    subtitle: "Gestión del ciclo completo de documentos",
    description:
      "Administramos el flujo documental de su proyecto de principio a fin. Desde la emisión inicial hasta la aprobación final, cada documento queda registrado, versionado y trazable — sin documentos perdidos entre correos, carpetas o sistemas.",
    deliverables: [
      "Master Document List (MDL) estructurada y actualizada",
      "Flujo de revisión, aprobación y distribución controlado",
      "Reportes de avance y estatus documental",
      "Administración de plataformas documentales (Aconex, Procore, SharePoint)",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "vendors",
    icon: Users,
    title: "Gestión de Entregables de Vendors",
    subtitle: "Seguimiento y control de proveedores",
    description:
      "Los vendors no siempre entregan a tiempo, ni con la calidad requerida. Nosotros hacemos el seguimiento sistemático de cada entregable comprometido, presionamos donde hay que presionar y escalamos antes de que el retraso se vuelva crítico.",
    deliverables: [
      "Vendor Document Register (VDR) por contrato",
      "Seguimiento de plazos y versiones pendientes",
      "Gestión de comentarios y ciclos de revisión",
      "Reportes de cumplimiento por vendor",
    ],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: "conformidad",
    icon: Shield,
    title: "Verificación de Conformidad Técnica",
    subtitle: "Calidad documental como requisito operacional",
    description:
      "Verificamos que cada documento cumpla los estándares de contenido, formato y normativa del proyecto. No se trata solo de que el documento exista — se trata de que sirva para operar y mantener lo que se construyó.",
    deliverables: [
      "Checklist de conformidad por tipo de documento",
      "Revisión técnica de planos, datasheets y manuales",
      "Validación cruzada contra estándares del proyecto",
      "Informe de brechas con recomendaciones de cierre",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "traspaso",
    icon: RefreshCw,
    title: "Traspaso Operacional Estructurado",
    subtitle: "De proyecto a operación, sin deuda documental",
    description:
      "El momento más crítico es cuando el proyecto termina y operaciones recibe los activos. Nos aseguramos de que toda la documentación técnica esté completa, verificada y organizada para que el equipo de operación y mantenimiento pueda trabajar desde el primer día.",
    deliverables: [
      "Dossier de cierre por sistema o área",
      "Paquetes de información para operación y mantenimiento",
      "As-Built verificados y organizados",
      "Acta de traspaso con índice de completitud",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "digitalizacion",
    icon: Monitor,
    title: "Digitalización y Estructuración de Bibliotecas",
    subtitle: "Información técnica accesible y utilizable",
    description:
      "Documentación que existe pero no se encuentra es documentación que no sirve. Digitalizamos, indexamos y estructuramos bibliotecas técnicas para que la información esté disponible cuando y donde se necesite.",
    deliverables: [
      "Digitalización de documentación física y legacy",
      "Indexación con metadatos técnicos y operacionales",
      "Estructura de biblioteca técnica por planta o proyecto",
      "Migración a plataformas de gestión documental",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
];

const painPoints = [
  {
    pain: "Vendors que no entregan a tiempo y documentación que llega incompleta",
    solution:
      "Seguimiento sistemático con VDR por contrato, ciclos de revisión controlados y escalamiento temprano",
  },
  {
    pain: "Presión por cerrar el proyecto sin tener los documentos listos para operar",
    solution:
      "Verificación de conformidad técnica y dossier de cierre que garantiza completitud antes del traspaso",
  },
  {
    pain: "Deuda documental que hereda operaciones y que nadie quiere resolver",
    solution:
      "Traspaso operacional estructurado con paquetes de información listos para mantenimiento desde el día uno",
  },
  {
    pain: "Documentación dispersa entre correos, carpetas compartidas y sistemas sin control de versiones",
    solution:
      "Control documental centralizado con trazabilidad completa, versionamiento y reportes de estatus en tiempo real",
  },
];

const stats = [
  { value: "+40", label: "Proyectos con gestión documental controlada" },
  { value: "+500K", label: "Documentos gestionados en nuestras operaciones" },
  {
    value: "97%",
    label: "Índice de completitud promedio en traspasos operacionales",
  },
  {
    value: "<72h",
    label: "Tiempo de respuesta en ciclos de revisión documental",
  },
];

const methodology = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Evaluamos el estado de la documentación del proyecto: qué existe, qué falta, qué no cumple. Establecemos la línea base de completitud.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Estructuración",
    desc: "Definimos el MDL, los flujos de revisión, las matrices de responsabilidad y los estándares de conformidad aplicables al proyecto.",
    icon: Cog,
  },
  {
    step: "03",
    title: "Control",
    desc: "Administramos el ciclo documental completo: recepción, revisión, distribución, seguimiento a vendors y reporting de avance.",
    icon: Target,
  },
  {
    step: "04",
    title: "Traspaso",
    desc: "Preparamos y verificamos los paquetes de cierre. Nos aseguramos de que operaciones reciba documentación completa, útil y organizada.",
    icon: CheckCircle,
  },
];

const lifecycle = [
  {
    phase: "Ingeniería",
    docs: "Planos, cálculos, especificaciones, datasheets",
    role: "Estructuración y control de entregables de diseño",
  },
  {
    phase: "Procura",
    docs: "Documentos de vendors, certificados, manuales",
    role: "Seguimiento, revisión técnica y gestión de VDR",
  },
  {
    phase: "Construcción",
    docs: "Procedimientos, registros de calidad, protocolos",
    role: "Control de documentación de obra y as-built",
  },
  {
    phase: "Comisionamiento",
    docs: "Dossiers, protocolos de prueba, punch lists",
    role: "Verificación de completitud y conformidad",
  },
  {
    phase: "Operación",
    docs: "Manuales O&M, planos as-built, bibliotecas técnicas",
    role: "Traspaso y estructuración para el ciclo de vida",
  },
];

const sections = [
  { id: "desafio", label: "El desafío" },
  { id: "servicios", label: "Servicios" },
  { id: "ciclo-proyecto", label: "Ciclo del proyecto" },
  { id: "metodologia", label: "Cómo trabajamos" },
  { id: "modalidades", label: "Modalidades" },
];

export default function GestionDocumentalPage() {
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
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
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
              <span className="text-sm font-medium text-gray-600">
                Volver al inicio
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 mb-8">
              <FileText className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Línea de Negocio
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Gestión{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Documental
              </span>
            </h1>

            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-6">
              Documentación · Control de Proyectos · Traspaso Operacional
            </p>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Cerrar el proyecto sin heredar problemas. Control documental que
              asegura la completitud, conformidad y trazabilidad de cada
              entregable técnico para un traspaso operacional limpio.
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
              Lo que enfrenta un Gerente de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Control Documental
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Completitud, conformidad, cumplimiento de plazos — sabemos lo que
              está en juego cuando la documentación falla.
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
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Gestión Documental
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              Controlamos la documentación técnica de proyectos industriales en
              todas sus fases. El objetivo es uno: que operaciones reciba todo lo
              que necesita para trabajar desde el primer día.
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
                            isOpen ? "text-cyan-600" : "text-gray-400"
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
                                <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
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

      {/* Project Lifecycle Section */}
      <section id="ciclo-proyecto" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">
              Cobertura completa
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Presentes en cada fase del{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                proyecto
              </span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
              La gestión documental no empieza en el cierre. Acompañamos el
              proyecto desde la ingeniería hasta el traspaso a operaciones.
            </p>

            <div className="flex flex-col">
              {lifecycle.map((item, i) => (
                <div
                  key={i}
                  className={`grid md:grid-cols-[160px_1fr_1fr] gap-6 py-6 ${
                    i < lifecycle.length - 1
                      ? "border-b border-gray-100"
                      : ""
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
              Un proyecto no está cerrado cuando se firma el acta.
              <br />
              Está cerrado cuando{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                operaciones puede trabajar con lo que recibió
              </span>
              .
            </blockquote>
            <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
              — Principio de intervención, Gestión Documental ASEMAT
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
              Ya sea como equipo integrado a su proyecto o mediante
              intervenciones con alcance definido, el rigor técnico y el
              compromiso con los resultados es el mismo.
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
                    Equipo Documental en Proyecto
                  </h3>
                  <p className="text-sm text-white leading-relaxed mb-8">
                    Un equipo de control documental dedicado que se integra a su
                    proyecto como si fuera parte de su organización. Gestionamos
                    el día a día documental con el rigor y la consistencia que el
                    proyecto exige.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Document controller dedicado al proyecto",
                      "Gestión de plataforma documental",
                      "Seguimiento continuo a vendors",
                      "Reportes de avance periódicos",
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
                  Proyectos de Cierre y Traspaso
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Intervenciones acotadas para resolver la deuda documental
                  acumulada, preparar el traspaso a operaciones o estructurar
                  bibliotecas técnicas existentes.
                </p>
                <ul className="space-y-3">
                  {[
                    "Cierre documental de proyectos atrasados",
                    "Verificación de conformidad de entregables",
                    "Estructuración de dossiers de traspaso",
                    "Digitalización de bibliotecas técnicas legacy",
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Tiene un proyecto con deuda documental?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ya sea que necesite controlar la documentación de un proyecto en
              curso, preparar un traspaso operacional o cerrar la brecha
              documental acumulada — conversemos.
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
