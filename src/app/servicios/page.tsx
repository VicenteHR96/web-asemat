import { Metadata } from 'next';
import Link from 'next/link';
import {
  Settings,
  Package,
  Cpu,
  CheckCircle,
  ArrowRight,
  FileText,
  Database,
  Wrench,
  BarChart3,
  Boxes,
  ClipboardList,
  Bot,
  Search,
  LineChart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios especializados en Gestión de Activos, Cadena de Suministros y Tecnología Neurotek para la industria minera e industrial.',
};

const gestionActivosServices = [
  {
    icon: BarChart3,
    title: 'Análisis RAM y RCM',
    description:
      'Análisis de Mantenibilidad y Confiabilidad, modelamiento de disponibilidad y confiabilidad.',
  },
  {
    icon: FileText,
    title: 'FMECA',
    description:
      'Análisis Modal de Falla y Efecto para identificación de modos de falla críticos.',
  },
  {
    icon: Database,
    title: 'Implementación ERP',
    description:
      'Registro de equipos, ubicaciones técnicas, planes de mantenimiento y repuestos.',
  },
  {
    icon: ClipboardList,
    title: 'Planes de Mantenimiento',
    description:
      'Elaboración, revisión u optimización de planes de mantenimiento para activos.',
  },
  {
    icon: Wrench,
    title: 'Estudio de Repuestos',
    description:
      'Identificación y sugerencias de compra de repuestos críticos y operacionales.',
  },
  {
    icon: FileText,
    title: 'Biblioteca Documental',
    description:
      'Gestión de manuales IOM, data sheets, dossiers e ingenierías del proyecto.',
  },
];

const cadenaServices = [
  {
    icon: Boxes,
    title: 'Gestión de Categorías',
    description: 'Clasificación y gestión estratégica de categorías de compra.',
  },
  {
    icon: Search,
    title: 'Catalogación',
    description: 'Estandarización y mejoramiento continuo del maestro de materiales.',
  },
  {
    icon: Settings,
    title: 'Ingeniería de Materiales',
    description: 'Análisis técnico y optimización de especificaciones de materiales.',
  },
  {
    icon: Package,
    title: 'Gestión de Bodegas',
    description: 'Optimización de inventarios y gestión de almacenamiento.',
  },
  {
    icon: ClipboardList,
    title: 'Activación de Compras',
    description: 'Gestión eficiente del proceso de compras y licitaciones.',
  },
  {
    icon: BarChart3,
    title: 'Análisis de Inmovilizados',
    description: 'Identificación y gestión de inventario sin rotación.',
  },
];

const neurotekModules = [
  {
    icon: FileText,
    title: 'Neurotek Gestor Documental',
    description:
      'IA para recepción, clasificación y búsqueda de documentación técnica.',
    features: [
      'Clasificación automática de documentos',
      'Búsqueda inteligente por contenido',
      'Extracción de datos técnicos',
    ],
  },
  {
    icon: LineChart,
    title: 'Neurotek Control Documental',
    description: 'Seguimiento automatizado de entregables y dashboards de avance.',
    features: [
      'Tracking de entregables en tiempo real',
      'Alertas automáticas de vencimientos',
      'Reportes de cumplimiento',
    ],
  },
  {
    icon: Bot,
    title: 'Neurotek Reliplan',
    description: 'Generación automática de análisis FMECA y pautas de mantenimiento.',
    features: [
      'Análisis FMECA automatizado',
      'Generación de planes de mantenimiento',
      'Agente conversacional técnico',
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="gradient-text">Servicios</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Soluciones integrales para la gestión de activos y cadena de
              suministros, respaldadas por tecnología de inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Gestión de Activos Section */}
      <section id="gestion-activos" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
              <Settings className="h-7 w-7 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Gestión de Activos
              </h2>
              <p className="text-gray-600">
                Mantenibilidad y Confiabilidad a lo largo del ciclo de vida
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gestionActivosServices.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-4">
              Fases del Servicio de Gestión de Activos
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  1
                </div>
                <div className="font-medium">Fase de Proyecto</div>
                <p className="text-sm text-white/80 mt-1">
                  Apoyo en normas M&C, análisis RAM/RCM
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  2
                </div>
                <div className="font-medium">Traspaso a Operaciones</div>
                <p className="text-sm text-white/80 mt-1">
                  Desarrollo de estrategias e implementación ERP
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  3
                </div>
                <div className="font-medium">M&C en Operaciones</div>
                <p className="text-sm text-white/80 mt-1">
                  Optimización de planes y consultorías
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  4
                </div>
                <div className="font-medium">Mejora Continua</div>
                <p className="text-sm text-white/80 mt-1">
                  Auditorías y actualización de estrategias
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cadena de Suministros Section */}
      <section id="cadena-suministros" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <Package className="h-7 w-7 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Cadena de Suministros
              </h2>
              <p className="text-gray-600">
                Soluciones End-to-End para optimizar su abastecimiento
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cadenaServices.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm card-hover"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">
                Soluciones en Procesos
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Servicios de Apoyo BPO
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Análisis de inmovilizados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Análisis TCO
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">
                Soluciones en Objetivos
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Auditorías a procesos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Desarrollo de políticas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Capacitaciones
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">
                Desarrollos Digitales
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Plataformas digitales
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Gemelo digital
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mantenimiento predictivo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neurotek Section */}
      <section id="neurotek" className="py-20 bg-gray-900 text-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center">
              <Cpu className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Tecnología Neurotek</h2>
              <p className="text-gray-400">
                Plataforma de IA para automatizar la transferencia de proyectos
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {neurotekModules.map((module, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <module.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                <p className="text-gray-400 mb-6">{module.description}</p>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary-400 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">Semanas → Días</div>
                <p className="text-white/80">
                  Reducción del tiempo de análisis de confiabilidad
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-white/80">
                  Estandarización y trazabilidad total
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="text-white/80">
                  Agente conversacional para consultas técnicas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              ¿Necesita una Solución Personalizada?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contáctenos para analizar sus necesidades específicas y diseñar una
              solución a medida.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              Solicitar Información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
