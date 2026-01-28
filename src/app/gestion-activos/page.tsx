import Link from 'next/link';
import {
  Settings,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  Zap,
  Shield,
  Cpu,
  FileCheck,
  Wrench,
  BarChart3,
  ClipboardList,
  Cog,
} from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Análisis RAM',
    description:
      'Estudios de Confiabilidad, Disponibilidad y Mantenibilidad para optimizar el diseño y operación de sus activos.',
    features: [
      'Modelamiento de sistemas',
      'Análisis de criticidad',
      'Optimización de redundancias',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Wrench,
    title: 'Planes de Mantenimiento',
    description:
      'Desarrollo de estrategias de mantenimiento basadas en confiabilidad (RCM) y mejores prácticas.',
    features: [
      'Análisis FMECA',
      'Definición de tareas',
      'Optimización de intervalos',
    ],
    gradient: 'from-cyan-500 to-teal-500',
    bgGradient: 'from-cyan-50 to-teal-50',
  },
  {
    icon: Cog,
    title: 'Implementación ERP',
    description:
      'Carga y estructuración de datos maestros de mantenimiento en sistemas ERP como SAP PM.',
    features: [
      'Taxonomía de equipos',
      'Listas de materiales',
      'Planes de mantenimiento',
    ],
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    icon: FileCheck,
    title: 'Gestión Documental',
    description:
      'Revisión, validación y estructuración de documentación técnica de proyectos.',
    features: [
      'Control de entregables',
      'Trazabilidad documental',
      'Validación técnica',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: BarChart3,
    title: 'Ingeniería de Confiabilidad',
    description:
      'Análisis especializados para mejorar la confiabilidad operacional de sus activos.',
    features: [
      'Análisis de fallas',
      'Estudios de vida útil',
      'Optimización de activos',
    ],
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
  },
  {
    icon: Cpu,
    title: 'Neurotek Platform',
    description:
      'Plataforma de IA para automatizar la gestión documental y análisis FMECA.',
    features: [
      'Gestor documental IA',
      'FMECA automático',
      'Agente conversacional',
    ],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
];

const stats = [
  { value: '+15', label: 'Años de experiencia', icon: Award },
  { value: '$3.2B+', label: 'USD en proyectos', icon: TrendingUp },
  { value: '20-40%', label: 'Reducción retrabajos', icon: Zap },
  { value: '+50', label: 'Proyectos exitosos', icon: CheckCircle },
];

const challenges = [
  'Brechas de información y retrabajos en la implementación del ERP',
  'Deficiente diseño de estrategias de mantenimiento',
  'Identificación incompleta de equipos y repuestos críticos',
  'Baja integración entre módulos de materiales y mantenimiento',
  'Falta de integración entre etapas del proyecto y operación',
  'Inexistencia de documentación de mantenimiento',
];

const methodology = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Evaluación inicial del estado actual de los entregables y procesos.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Planificación',
    description: 'Definición de alcance, recursos y cronograma del proyecto.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Ejecución',
    description: 'Desarrollo de entregables con herramientas especializadas e IA.',
    icon: Cog,
  },
  {
    number: '04',
    title: 'Transferencia',
    description: 'Entrega, capacitación y soporte para la operación.',
    icon: CheckCircle,
  },
];

export default function GestionActivosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background - Blue Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
          {/* Animated Blobs */}
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-cyan-400/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/30 to-teal-400/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-violet-400/20 to-blue-400/20 rounded-full blur-[80px] animate-blob animation-delay-4000" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Back to Home */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-200 mb-8 mr-3 hover:bg-white transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Volver al inicio</span>
            </Link>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 mb-8">
              <Settings className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Gestión de Activos
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Mantenibilidad y{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Confiabilidad
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Ingeniería especializada para garantizar que sus activos lleguen a la operación
              con información técnica estructurada, validada y lista para ser usada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                Solicitar Consultoría
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-blue-200 text-gray-700 font-semibold rounded-xl hover:bg-white transition-all duration-300"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nuestros{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones integrales de ingeniería para la gestión del ciclo de vida de sus activos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient} shadow-lg`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className={`h-4 w-4 mr-2 text-blue-500`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="desafios" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Desafíos que{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Resolvemos
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Garantizamos que los proyectos industriales y mineros alcancen la
                operación estable con entregables de Mantenibilidad y Confiabilidad
                completos, aplicables y trazables.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="group flex items-start p-5 bg-blue-50/50 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center font-bold text-sm mr-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-gray-700 font-medium">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Resultados Esperados
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-xl mb-1">
                          20-40% Reducción en retrabajos
                        </div>
                        <p className="text-gray-400">
                          Optimización de procesos y documentación
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <Target className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-xl mb-1">
                          Tiempos de carga ERP reducidos
                        </div>
                        <p className="text-gray-400">
                          Datos estructurados y validados
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-xl mb-1">
                          Entregables trazables end-to-end
                        </div>
                        <p className="text-gray-400">
                          Documentación auditable y completa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nuestra{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Metodología
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Un enfoque estructurado para garantizar resultados exitosos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="relative">
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-xl border border-blue-100 mb-6">
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                    <step.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              ¿Por Qué{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Elegirnos
              </span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Visión Completa', description: 'Entendemos el ciclo de vida completo del activo.', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Cpu, title: 'Tecnología IA', description: 'Herramientas propias basadas en inteligencia artificial.', gradient: 'from-violet-500 to-purple-500' },
              { icon: Users, title: 'Equipo Experto', description: 'Profesionales con amplia experiencia industrial.', gradient: 'from-emerald-500 to-teal-500' },
              { icon: Shield, title: 'Track Record', description: 'Proyectos exitosos con empresas líderes.', gradient: 'from-amber-500 to-orange-500' },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              ¿Listo para Optimizar sus Activos?
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
