import { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce a ASEMAT, empresa líder en servicios de Mantenibilidad, Confiabilidad y Cadena de Suministros para la industria minera e industrial.',
};

const values = [
  {
    icon: Target,
    title: 'Excelencia',
    description:
      'Comprometidos con entregar servicios de la más alta calidad, superando las expectativas de nuestros clientes.',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description:
      'Trabajamos junto a nuestros clientes como socios estratégicos para alcanzar objetivos comunes.',
  },
  {
    icon: TrendingUp,
    title: 'Innovación',
    description:
      'Desarrollamos constantemente nuevas herramientas y metodologías para mejorar nuestros servicios.',
  },
  {
    icon: Heart,
    title: 'Integridad',
    description:
      'Actuamos con honestidad y transparencia en todas nuestras relaciones profesionales.',
  },
];

const timeline = [
  {
    year: '2007',
    title: 'Fundación',
    description: 'Inicio de operaciones enfocados en consultoría de mantenimiento.',
  },
  {
    year: '2012',
    title: 'Expansión de Servicios',
    description:
      'Incorporación de servicios de Cadena de Suministros y gestión de inventarios.',
  },
  {
    year: '2017',
    title: 'Grandes Proyectos',
    description:
      'Inicio de colaboración con uno de los mayores productores de cobre del mundo.',
  },
  {
    year: '2020',
    title: 'Desarrollo Tecnológico',
    description: 'Lanzamiento de la plataforma Neurotek con inteligencia artificial.',
  },
  {
    year: '2024',
    title: 'Consolidación Regional',
    description:
      'Presencia consolidada en Chile y expansión hacia Latinoamérica.',
  },
];

const achievements = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+50', label: 'Proyectos exitosos' },
  { value: '$3.2B+', label: 'USD gestionados' },
  { value: '+100', label: 'Profesionales capacitados' },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="gradient-text">ASEMAT</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ingeniería que integra proyectos con las operaciones. Más de 15 años
              aportando valor a la industria minera e industrial de Chile y
              Latinoamérica.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Quiénes Somos?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  En <strong className="text-gray-900">ASEMAT</strong> ayudamos a que
                  los activos y sistemas de proyectos de inversión lleguen al comienzo
                  de su operación con información técnica estructurada, validada y
                  lista para ser usada en los módulos de mantenimiento y materiales de
                  su ERP.
                </p>
                <p>
                  A lo largo del ciclo de vida del activo, desde su diseño hasta su
                  operación, cobran relevancia lecciones aprendidas producto de
                  experiencias y comportamientos históricos. Nuestro objetivo es
                  transformar esa data en información que permita elaborar estrategias
                  con acento en la optimización de recursos y la mejora continua.
                </p>
                <p>
                  Combinamos la ingeniería especializada en Mantenibilidad y
                  Confiabilidad con herramientas basadas en inteligencia artificial,
                  que agilizan la gestión documental y la integración de datos.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center card-hover"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-600 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Garantizar que los proyectos industriales y mineros alcancen la
                operación estable con entregables de Mantenibilidad y Confiabilidad
                completos, aplicables y trazables, aportando valor real a través de
                soluciones integrales y tecnología de vanguardia.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestra Visión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser el referente latinoamericano en servicios de ingeniería para la
                gestión de activos y cadena de suministros, reconocidos por nuestra
                excelencia técnica, innovación tecnológica y el impacto positivo en
                la operación de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían nuestro trabajo diario y nuestras relaciones
              con clientes y colaboradores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nuestra Trayectoria
            </h2>
            <p className="text-xl text-gray-400">
              Más de 15 años de crecimiento continuo y evolución en el mercado.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden lg:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8`}
                >
                  <div
                    className={`w-full lg:w-1/2 ${
                      index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                    }`}
                  >
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="text-primary-400 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-primary-600 rounded-full z-10" />
                  <div className="hidden lg:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Por Qué Elegirnos?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Visión Completa</h4>
                    <p className="text-gray-600 text-sm">
                      Entendemos el ciclo de vida completo del activo, desde diseño
                      hasta operación.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Retroalimentación Continua
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Aportamos estudios e información alineados con las políticas de
                      gestión de activos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Información Histórica
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Todos nuestros servicios están sustentados por datos históricos
                      disponibles digitalmente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Traspaso Armónico
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Nos insertamos entre proyectos y operaciones para lograr
                      transiciones efectivas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-10 text-white">
              <Globe className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Presencia Regional</h3>
              <p className="text-white/90 mb-6">
                Con sede en Valparaíso, Chile, hemos participado en los más grandes
                proyectos y operaciones mineras de Chile y Latinoamérica.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3" />
                  <span>Principales mineras de cobre</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3" />
                  <span>Industrias manufactureras</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3" />
                  <span>Sector energético</span>
                </div>
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
              ¿Quiere Conocer Más Sobre Nosotros?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos listos para conversar sobre cómo podemos ayudar a su
              organización.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
