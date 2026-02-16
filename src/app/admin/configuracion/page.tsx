import { Settings, Bell, Globe, Palette, Database } from 'lucide-react';

export default function ConfigPage() {
  const configSections = [
    {
      title: 'General',
      description: 'Configuración general del sitio',
      icon: Settings,
      gradient: 'from-gray-500 to-slate-500',
      items: ['Nombre del sitio', 'Logo', 'Favicon'],
    },
    {
      title: 'Notificaciones',
      description: 'Gestiona las notificaciones del sistema',
      icon: Bell,
      gradient: 'from-blue-500 to-cyan-500',
      items: ['Email de contacto', 'Alertas de sistema'],
    },
    {
      title: 'SEO',
      description: 'Optimización para motores de búsqueda',
      icon: Globe,
      gradient: 'from-emerald-500 to-teal-500',
      items: ['Meta tags', 'Sitemap', 'Robots.txt'],
    },
    {
      title: 'Apariencia',
      description: 'Personaliza el aspecto del sitio',
      icon: Palette,
      gradient: 'from-violet-500 to-purple-500',
      items: ['Colores', 'Tipografía', 'Layout'],
    },
    {
      title: 'Base de Datos',
      description: 'Administración de datos',
      icon: Database,
      gradient: 'from-orange-500 to-amber-500',
      items: ['Backup', 'Restaurar', 'Limpiar caché'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Configuración
        </h1>
        <p className="text-gray-500 mt-1">
          Administra la configuración del sistema
        </p>
      </div>

      {/* Coming soon notice */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Sección en desarrollo</h3>
            <p className="text-sm text-gray-500">
              Estamos trabajando en nuevas funcionalidades de configuración. Próximamente disponibles.
            </p>
          </div>
        </div>
      </div>

      {/* Config sections grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {configSections.map((section) => (
          <div
            key={section.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 opacity-60 cursor-not-allowed"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <section.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
                <p className="text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-400 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
