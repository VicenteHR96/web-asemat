import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { FileText, Users, Eye, TrendingUp, Plus, ArrowRight, Newspaper } from 'lucide-react';

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  // Colaboradores solo pueden acceder a artículos
  if (session.user.role === 'colaborador') {
    redirect('/admin/articulos');
  }

  const stats = [
    {
      name: 'Artículos',
      value: '12',
      description: 'Publicados',
      icon: FileText,
      gradient: 'from-blue-500 to-cyan-500',
      href: '/admin/articulos',
    },
    {
      name: 'Casos de Éxito',
      value: '5',
      description: 'Activos',
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-teal-500',
      href: '/admin/articulos?category=caso-exito',
    },
    {
      name: 'Visitas',
      value: '2.4k',
      description: 'Este mes',
      icon: Eye,
      gradient: 'from-violet-500 to-purple-500',
      href: '#',
    },
    {
      name: 'Usuarios',
      value: '3',
      description: 'Registrados',
      icon: Users,
      gradient: 'from-orange-500 to-amber-500',
      href: '/admin/usuarios',
    },
  ];

  const recentActivity = [
    {
      title: 'Artículo publicado',
      description: '"Caso de Éxito: Minería del Cobre"',
      time: 'hace 2 días',
      color: 'bg-emerald-500',
    },
    {
      title: 'Artículo editado',
      description: '"Servicios de Gestión de Activos"',
      time: 'hace 5 días',
      color: 'bg-blue-500',
    },
    {
      title: 'Usuario creado',
      description: 'editor@asemat.cl',
      time: 'hace 1 semana',
      color: 'bg-violet-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Bienvenido, {session.user.name || 'Admin'}
        </h1>
        <p className="text-gray-500 mt-1">
          Panel de administración de ASEMAT
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-gray-400 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-medium text-gray-700">{stat.name}</span> {stat.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/admin/articulos/nuevo"
              className="group flex items-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Nuevo Artículo</p>
                <p className="text-sm text-gray-500">Crear publicación</p>
              </div>
            </Link>
            <Link
              href="/admin/articulos"
              className="group flex items-center p-4 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Gestionar Artículos</p>
                <p className="text-sm text-gray-500">Editar o eliminar</p>
              </div>
            </Link>
            <Link
              href="/admin/articulos/nuevo?category=caso-exito"
              className="group flex items-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Caso de Éxito</p>
                <p className="text-sm text-gray-500">Nuevo caso</p>
              </div>
            </Link>
            <Link
              href="/noticias"
              target="_blank"
              className="group flex items-center p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-100 hover:border-violet-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                <Newspaper className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Ver Noticias</p>
                <p className="text-sm text-gray-500">Sitio público</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className={`w-2 h-2 ${activity.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500 truncate">{activity.description}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Website Link Banner */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl text-white shadow-xl shadow-blue-500/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Visitar Sitio Web</h3>
            <p className="text-white/80 mt-1 text-sm">
              Ver el sitio público de ASEMAT
            </p>
          </div>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            Abrir Sitio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
