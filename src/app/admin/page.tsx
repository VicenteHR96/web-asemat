import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { FileText, Users, Eye, TrendingUp, Plus } from 'lucide-react';

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  const stats = [
    {
      name: 'Artículos Publicados',
      value: '12',
      icon: FileText,
      color: 'bg-primary-100 text-primary-600',
      href: '/admin/articulos',
    },
    {
      name: 'Casos de Éxito',
      value: '5',
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600',
      href: '/admin/articulos?category=caso-exito',
    },
    {
      name: 'Visitas del Mes',
      value: '2.4k',
      icon: Eye,
      color: 'bg-purple-100 text-purple-600',
      href: '#',
    },
    {
      name: 'Usuarios',
      value: '3',
      icon: Users,
      color: 'bg-orange-100 text-orange-600',
      href: '/admin/usuarios',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Bienvenido de vuelta, {session.user.name || 'Admin'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="space-y-3">
            <Link
              href="/admin/articulos/nuevo"
              className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                <Plus className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Crear Nuevo Artículo</p>
                <p className="text-sm text-gray-600">
                  Publica un artículo o caso de éxito
                </p>
              </div>
            </Link>
            <Link
              href="/admin/articulos"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Gestionar Artículos</p>
                <p className="text-sm text-gray-600">
                  Edita o elimina artículos existentes
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
              <div>
                <p className="text-gray-900">Artículo publicado</p>
                <p className="text-sm text-gray-500">
                  "Caso de Éxito: Minería del Cobre" - hace 2 días
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3" />
              <div>
                <p className="text-gray-900">Artículo editado</p>
                <p className="text-sm text-gray-500">
                  "Servicios de Gestión de Activos" - hace 5 días
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
              <div>
                <p className="text-gray-900">Usuario creado</p>
                <p className="text-sm text-gray-500">
                  editor@asemat.cl - hace 1 semana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Website Link */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Ver Sitio Web</h3>
            <p className="text-white/80 mt-1">
              Visita el sitio público de ASEMAT
            </p>
          </div>
          <Link
            href="/"
            target="_blank"
            className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Abrir Sitio
          </Link>
        </div>
      </div>
    </div>
  );
}
