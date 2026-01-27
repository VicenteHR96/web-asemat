import { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  FileText,
  Database,
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
  impact:
    'Este servicio ha sido fundamental para asegurar la continuidad operacional y la integración efectiva entre ingeniería y mantenimiento en una cartera de proyectos industriales.',
  achievements: [
    'Implementación del módulo de mantenimiento del ERP, incluyendo maestros, planes y listas de repuestos',
    'Estandarización de entregables de mantenibilidad y confiabilidad para múltiples proyectos',
    'Creación de una biblioteca documental integral que facilita la gestión del mantenimiento operativo',
    'Reducción de riesgos y retrabajos en la transición desde la fase de inversión a la operación',
  ],
  benefits: [
    'Mitigación de riesgos de continuidad operacional',
    'Minimización de la variabilidad de los procesos de mantenimiento',
    'Integración de módulos de mantenimiento y materiales del ERP',
    'Entregables de M&C útiles para operaciones',
    'Recepción efectiva del proyecto por la operación',
  ],
};

const additionalCases = [
  {
    icon: Database,
    industry: 'Minería',
    title: 'Implementación ERP Mantenimiento',
    description:
      'Implementación completa del módulo de mantenimiento para una operación minera de gran escala.',
    results: [
      '15,000+ equipos registrados',
      '2,000+ planes de mantenimiento',
      '50,000+ repuestos catalogados',
    ],
  },
  {
    icon: FileText,
    industry: 'Industria',
    title: 'Biblioteca Técnica Digital',
    description:
      'Digitalización y organización de toda la documentación técnica de una planta industrial.',
    results: [
      '100,000+ documentos procesados',
      'Búsqueda en segundos vs horas',
      'Trazabilidad completa',
    ],
  },
  {
    icon: TrendingUp,
    industry: 'Energía',
    title: 'Optimización Cadena de Suministros',
    description:
      'Rediseño del proceso de abastecimiento para una empresa del sector energético.',
    results: [
      '25% reducción de inventario',
      '40% mejora en nivel de servicio',
      'ROI en 8 meses',
    ],
  },
];

const industries = [
  { name: 'Minería del Cobre', projects: '+30 proyectos' },
  { name: 'Minería del Litio', projects: '+5 proyectos' },
  { name: 'Sector Industrial', projects: '+10 proyectos' },
  { name: 'Sector Energético', projects: '+5 proyectos' },
];

export default function CasosExitoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Casos de <span className="gradient-text">Éxito</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubra cómo hemos ayudado a empresas líderes a optimizar sus
              operaciones y alcanzar la excelencia operacional.
            </p>
          </div>
        </div>
      </section>

      {/* Main Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Award className="h-10 w-10 text-primary-600" />
              <div>
                <div className="text-sm text-primary-600 font-medium">
                  Caso Destacado
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {mainCaseStudy.title}
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg text-gray-600">{mainCaseStudy.description}</p>
                <p className="text-gray-600">{mainCaseStudy.impact}</p>

                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-primary-50 rounded-full">
                    <span className="text-sm text-primary-700 font-medium">
                      {mainCaseStudy.period}
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-green-50 rounded-full">
                    <span className="text-sm text-green-700 font-medium">
                      Inversión: {mainCaseStudy.investment}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Resultado</h3>
                <p className="text-gray-300 text-sm">
                  Un proceso de traspaso ágil, trazable y sostenible que garantiza la
                  operación eficiente de los activos desde el primer día.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-bold text-xl text-gray-900 mb-6">
                  Principales Logros
                </h3>
                <div className="space-y-4">
                  {mainCaseStudy.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white">
                <h3 className="font-bold text-xl mb-6">Beneficios Obtenidos</h3>
                <div className="space-y-4">
                  {mainCaseStudy.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Más Proyectos Exitosos
            </h2>
            <p className="text-xl text-gray-600">
              Una selección de proyectos que demuestran nuestro impacto en diferentes
              industrias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalCases.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <caseStudy.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                <div className="space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Industrias Atendidas
            </h2>
            <p className="text-xl text-gray-400">
              Experiencia comprobada en diversos sectores de la industria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700"
              >
                <Users className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                <p className="text-primary-400 font-medium">{industry.projects}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 flex-wrap justify-center">
              <div>
                <div className="text-4xl font-bold text-primary-400">+50</div>
                <div className="text-gray-400">Proyectos completados</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden md:block" />
              <div>
                <div className="text-4xl font-bold text-primary-400">$3.2B+</div>
                <div className="text-gray-400">USD en proyectos gestionados</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden md:block" />
              <div>
                <div className="text-4xl font-bold text-primary-400">+15</div>
                <div className="text-gray-400">Años de experiencia</div>
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
              ¿Quiere Ser Nuestro Próximo Caso de Éxito?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Conversemos sobre cómo podemos ayudar a su organización a alcanzar sus
              objetivos operacionales.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              Contáctenos Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
