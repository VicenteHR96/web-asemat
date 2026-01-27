import Link from 'next/link';
import {
  Package,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Truck,
  Warehouse,
  BarChart3,
  ClipboardList,
  Layers,
  Search,
  FileSpreadsheet,
  Database,
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Gestión de Categorías',
    description:
      'Clasificación y análisis de categorías de materiales para optimizar decisiones de compra y almacenamiento.',
    features: [
      'Análisis de gasto',
      'Estrategias por categoría',
      'Negociación con proveedores',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Search,
    title: 'Ingeniería de Materiales',
    description:
      'Identificación y especificación técnica de materiales para asegurar disponibilidad operacional.',
    features: [
      'Especificaciones técnicas',
      'Criticidad de repuestos',
      'Análisis de obsolescencia',
    ],
    gradient: 'from-teal-500 to-green-500',
    bgGradient: 'from-teal-50 to-green-50',
  },
  {
    icon: Database,
    title: 'Catalogación Industrial',
    description:
      'Estandarización y depuración de maestros de materiales según mejores prácticas.',
    features: [
      'Estándares UNSPSC/ISO',
      'Depuración de duplicados',
      'Enriquecimiento de datos',
    ],
    gradient: 'from-green-500 to-lime-500',
    bgGradient: 'from-green-50 to-lime-50',
  },
  {
    icon: Warehouse,
    title: 'Gestión de Bodegas',
    description:
      'Optimización de procesos de almacenamiento, layout y control de inventarios.',
    features: [
      'Diseño de layout',
      'Control de inventario',
      'Procesos operativos',
    ],
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
  },
  {
    icon: FileSpreadsheet,
    title: 'Carga de Datos ERP',
    description:
      'Preparación y carga de datos maestros de materiales en sistemas ERP.',
    features: [
      'Migración de datos',
      'Validación de calidad',
      'Integración con MM',
    ],
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    icon: BarChart3,
    title: 'Inventario Óptimo',
    description:
      'Determinación de niveles óptimos de stock basados en criticidad y demanda.',
    features: [
      'Análisis de demanda',
      'Puntos de reorden',
      'Stock de seguridad',
    ],
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
  },
];

const stats = [
  { value: '+15', label: 'Años de experiencia', icon: Award },
  { value: '30%+', label: 'Reducción inventario', icon: Package },
  { value: '95%+', label: 'Nivel de servicio', icon: Zap },
  { value: '+50', label: 'Proyectos exitosos', icon: CheckCircle },
];

const challenges = [
  'Exceso de inventario y capital inmovilizado',
  'Falta de estandarización en maestros de materiales',
  'Duplicidad de códigos y descripciones inconsistentes',
  'Desabastecimiento de repuestos críticos',
  'Baja rotación y materiales obsoletos',
  'Procesos manuales e ineficientes en bodegas',
];

const methodology = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Análisis del estado actual de inventarios, procesos y datos maestros.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Planificación',
    description: 'Definición de estrategia, alcance y plan de trabajo.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Ejecución',
    description: 'Implementación de mejoras, catalogación y optimización.',
    icon: Package,
  },
  {
    number: '04',
    title: 'Sostenibilidad',
    description: 'Transferencia, capacitación y soporte continuo.',
    icon: CheckCircle,
  },
];

const solutions = [
  {
    title: 'Solución End-to-End',
    description: 'Desde el análisis inicial hasta la operación optimizada',
    icon: Truck,
  },
  {
    title: 'BPO Abastecimiento',
    description: 'Externalización de procesos de gestión de materiales',
    icon: Users,
  },
  {
    title: 'Consultoría Especializada',
    description: 'Asesoría experta en gestión de cadena de suministros',
    icon: Target,
  },
];

export default function SupplyChainPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background - Green Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white">
          {/* Animated Blobs */}
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/30 to-teal-400/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/30 to-green-400/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-[80px] animate-blob animation-delay-4000" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Back to Home */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-emerald-200 mb-8 hover:bg-white transition-colors"
            >
              <ArrowRight className="h-4 w-4 rotate-180 text-emerald-600" />
              <span className="text-sm font-medium text-gray-600">Volver al inicio</span>
            </Link>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 mb-8">
              <Package className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Supply Chain
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Cadena de{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Suministros
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Soluciones End-to-End para optimizar su gestión de materiales,
              asegurando el nivel de servicio con inventario óptimo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
              >
                Solicitar Consultoría
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-emerald-200 text-gray-700 font-semibold rounded-xl hover:bg-white transition-all duration-300"
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
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-emerald-100">{solution.description}</p>
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
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones integrales para optimizar su cadena de suministros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
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
                        <CheckCircle className={`h-4 w-4 mr-2 text-emerald-500`} />
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Desafíos que{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Resolvemos
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Optimizamos su cadena de suministros para reducir costos,
                mejorar el nivel de servicio y liberar capital de trabajo.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="group flex items-start p-5 bg-emerald-50/50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl flex items-center justify-center font-bold text-sm mr-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-gray-700 font-medium">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-500 to-green-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Resultados Esperados
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <Package className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-xl mb-1">
                          30%+ Reducción de inventario
                        </div>
                        <p className="text-gray-400">
                          Liberación de capital de trabajo
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-xl mb-1">
                          95%+ Nivel de servicio
                        </div>
                        <p className="text-gray-400">
                          Disponibilidad de repuestos críticos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-xl mb-1">
                          Datos maestros limpios
                        </div>
                        <p className="text-gray-400">
                          Catalogación estandarizada y sin duplicados
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
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nuestra{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Metodología
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Un enfoque probado para optimizar su cadena de suministros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="relative">
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-xl border border-emerald-100 mb-6">
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                    <step.icon className="h-12 w-12 text-emerald-600" />
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
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Elegirnos
              </span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Enfoque End-to-End', description: 'Cubrimos toda la cadena de suministros.', gradient: 'from-emerald-500 to-teal-500' },
              { icon: Database, title: 'Expertise en Datos', description: 'Especialistas en catalogación y maestros.', gradient: 'from-violet-500 to-purple-500' },
              { icon: Users, title: 'Equipo Experto', description: 'Profesionales con experiencia industrial.', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Track Record', description: 'Proyectos exitosos en minería e industria.', gradient: 'from-amber-500 to-orange-500' },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 hover:shadow-xl transition-all duration-300"
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              ¿Listo para Optimizar su Supply Chain?
            </h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Contáctenos para una consultoría personalizada y descubra cómo podemos
              ayudarle a reducir costos y mejorar el nivel de servicio.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center px-10 py-5 bg-white text-emerald-600 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
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
