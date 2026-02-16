import { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Building2,
  Zap,
  Database,
  FileText,
  Pickaxe,
  Factory,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Casos de Éxito',
  description:
    'Conoce los proyectos exitosos de ASEMAT en la industria minera e industrial de Chile y Latinoamérica.',
};

const mainCaseStudy = {
  title: 'Productor de Cobre de Clase Mundial',
  subtitle: 'Uno de los tres mayores productores de cobre del mundo',
  period: 'Desde 2017',
  investment: 'US$ 3.200 millones+',
  description:
    'ASEMAT ha acompañado en la preparación y transferencia de entregables de Mantenibilidad y Confiabilidad desde los proyectos de inversión hacia la operación.',
  achievements: [
    'Implementación del módulo de mantenimiento del ERP, incluyendo maestros, planes y listas de repuestos',
    'Estandarización de entregables de mantenibilidad y confiabilidad para múltiples proyectos',
    'Creación de una biblioteca documental integral que facilita la gestión del mantenimiento operativo',
    'Reducción de riesgos y retrabajos en la transición desde la fase de inversión a la operación',
  ],
  metrics: [
    { value: '15,000+', label: 'Equipos registrados' },
    { value: '2,000+', label: 'Planes de mantenimiento' },
    { value: '50,000+', label: 'Repuestos catalogados' },
  ],
};

const additionalCases = [
  {
    icon: Database,
    gradient: 'from-blue-500 to-cyan-500',
    industry: 'Minería',
    title: 'Implementación ERP Mantenimiento',
    description:
      'Implementación completa del módulo de mantenimiento para una operación minera de gran escala, integrando todos los procesos de gestión de activos.',
    highlight: '100% de activos integrados',
  },
  {
    icon: FileText,
    gradient: 'from-emerald-500 to-teal-500',
    industry: 'Industria',
    title: 'Biblioteca Técnica Digital',
    description:
      'Digitalización y organización de toda la documentación técnica de una planta industrial, reduciendo tiempos de búsqueda de horas a segundos.',
    highlight: '100,000+ documentos procesados',
  },
  {
    icon: TrendingUp,
    gradient: 'from-violet-500 to-purple-500',
    industry: 'Energía',
    title: 'Optimización Cadena de Suministros',
    description:
      'Rediseño del proceso de abastecimiento para una empresa del sector energético, logrando mejoras significativas en eficiencia y costos.',
    highlight: 'ROI en 8 meses',
  },
];

const industries = [
  { name: 'Minería del Cobre', projects: '+30', icon: Pickaxe, color: 'from-orange-500 to-amber-500' },
  { name: 'Minería del Litio', projects: '+5', icon: Zap, color: 'from-green-500 to-emerald-500' },
  { name: 'Sector Industrial', projects: '+10', icon: Factory, color: 'from-blue-500 to-cyan-500' },
  { name: 'Sector Energético', projects: '+5', icon: Building2, color: 'from-violet-500 to-purple-500' },
];

const stats = [
  { value: '+50', label: 'Proyectos completados' },
  { value: '$3.2B+', label: 'USD en proyectos' },
  { value: '+15', label: 'Años de experiencia' },
  { value: '98%', label: 'Satisfacción cliente' },
];

export default function CasosExitoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-8">
              <Award className="h-4 w-4" />
              Proyectos de alto impacto
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Casos de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Éxito
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Descubra cómo hemos ayudado a empresas líderes a optimizar sus
              operaciones y alcanzar la excelencia operacional desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Case Study */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4">
                  <Award className="h-5 w-5" />
                  Caso Destacado
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {mainCaseStudy.title}
                </h2>
                <p className="text-gray-500 mt-2">{mainCaseStudy.subtitle}</p>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {mainCaseStudy.period}
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  {mainCaseStudy.investment}
                </span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left - Description & Achievements */}
              <div className="lg:col-span-3 space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {mainCaseStudy.description}
                </p>

                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-6">
                    Principales Logros
                  </h3>
                  <div className="space-y-4">
                    {mainCaseStudy.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Metrics & Quote */}
              <div className="lg:col-span-2 space-y-6">
                {/* Metrics */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                  <h3 className="font-bold text-lg mb-6">Resultados Clave</h3>
                  <div className="space-y-6">
                    {mainCaseStudy.metrics.map((metric, index) => (
                      <div key={index}>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          {metric.value}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 h-16 w-16 text-white/10" />
                  <p className="text-white/90 italic leading-relaxed relative z-10">
                    &ldquo;Un proceso de traspaso ágil, trazable y sostenible que garantiza la
                    operación eficiente de los activos desde el primer día.&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="font-semibold">Objetivo del Proyecto</div>
                    <div className="text-white/70 text-sm">Transferencia efectiva a operaciones</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Cases */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Más Proyectos Exitosos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Una selección de proyectos que demuestran nuestro impacto en diferentes industrias.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {additionalCases.map((caseStudy, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${caseStudy.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <caseStudy.icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${caseStudy.gradient} bg-opacity-10 rounded-full`}>
                    <TrendingUp className="h-4 w-4 text-gray-700" />
                    <span className="text-sm font-semibold text-gray-800">
                      {caseStudy.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Industrias Atendidas
              </h2>
              <p className="text-xl text-gray-600">
                Experiencia comprobada en diversos sectores industriales
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {industry.projects}
                  </div>
                  <div className="text-gray-500 text-sm">proyectos</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Quiere Ser Nuestro Próximo Caso de Éxito?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Conversemos sobre cómo podemos ayudar a su organización a alcanzar
              sus objetivos operacionales.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Contáctenos Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
