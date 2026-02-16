'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import {
  Users,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  User as UserIcon,
  Edit,
  Trash2,
  Mail,
  Calendar,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface User {
  _id: string;
  email: string;
  name: string;
  role: 'superadmin' | 'admin' | 'colaborador';
  createdAt: string;
}

const roleConfig = {
  superadmin: {
    label: 'Superadmin',
    icon: ShieldCheck,
    color: 'bg-purple-100 text-purple-700 border-purple-200',
    gradient: 'from-purple-500 to-violet-500',
  },
  admin: {
    label: 'Administrador',
    icon: Shield,
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    gradient: 'from-blue-500 to-cyan-500',
  },
  colaborador: {
    label: 'Colaborador',
    icon: UserIcon,
    color: 'bg-gray-100 text-gray-700 border-gray-200',
    gradient: 'from-gray-500 to-slate-500',
  },
};

export default function UsersPage() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; user: User | null }>({
    open: false,
    user: null,
  });
  const [isDeleting, setIsDeleting] = useState(false);

  const isSuperadmin = session?.user?.role === 'superadmin';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/admin/users');

      if (!response.ok) {
        throw new Error('Error al obtener usuarios');
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteModal.user) return;

    try {
      setIsDeleting(true);
      const response = await fetch(`/api/admin/users/${deleteModal.user._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al eliminar usuario');
      }

      setUsers(users.filter((u) => u._id !== deleteModal.user?._id));
      setDeleteModal({ open: false, user: null });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar usuario');
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CL', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Usuarios</h1>
          <p className="text-gray-500 mt-1">
            Gestiona los usuarios del sistema
          </p>
        </div>
        {isSuperadmin && (
          <Link href="/admin/usuarios/nuevo">
            <Button size="lg">
              <Plus className="h-5 w-5 mr-2" />
              Nuevo Usuario
            </Button>
          </Link>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-6 flex items-center p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
          {error}
          <button
            onClick={() => setError('')}
            className="ml-auto text-red-400 hover:text-red-600"
          >
            ×
          </button>
        </div>
      )}

      {/* Search and filters */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users className="h-4 w-4" />
            {filteredUsers.length} usuario{filteredUsers.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Role legend */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.entries(roleConfig).map(([key, config]) => (
          <div
            key={key}
            className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-sm ${config.color}`}
          >
            <config.icon className="h-4 w-4 mr-1.5" />
            {config.label}
          </div>
        ))}
      </div>

      {/* Users list */}
      {filteredUsers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
          <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {searchTerm ? 'No se encontraron usuarios' : 'Sin usuarios'}
          </h3>
          <p className="text-gray-500 mb-6">
            {searchTerm
              ? 'Intenta con otros términos de búsqueda'
              : 'Comienza creando el primer usuario del sistema'}
          </p>
          {isSuperadmin && !searchTerm && (
            <Link href="/admin/usuarios/nuevo">
              <Button>
                <Plus className="h-5 w-5 mr-2" />
                Crear Usuario
              </Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredUsers.map((user) => {
            const config = roleConfig[user.role];
            return (
              <div
                key={user._id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${config.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <span className="text-white font-bold text-lg">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-semibold text-gray-900">{user.name}</h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-lg border text-xs font-medium ${config.color}`}
                        >
                          <config.icon className="h-3 w-3 mr-1" />
                          {config.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1.5 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Mail className="h-4 w-4 mr-1.5" />
                          {user.email}
                        </span>
                        <span className="hidden sm:flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          {formatDate(user.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  {isSuperadmin && (
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Link href={`/admin/usuarios/${user._id}/editar`}>
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="h-5 w-5" />
                        </button>
                      </Link>
                      <button
                        onClick={() => setDeleteModal({ open: true, user })}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        disabled={user._id === session?.user?.id}
                        title={
                          user._id === session?.user?.id
                            ? 'No puedes eliminar tu propia cuenta'
                            : 'Eliminar usuario'
                        }
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Delete confirmation modal */}
      {deleteModal.open && deleteModal.user && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            onClick={() => setDeleteModal({ open: false, user: null })}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mx-auto mb-4">
              <Trash2 className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
              Eliminar Usuario
            </h3>
            <p className="text-gray-500 text-center mb-6">
              ¿Estás seguro de que deseas eliminar a{' '}
              <span className="font-semibold text-gray-900">
                {deleteModal.user.name}
              </span>
              ? Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModal({ open: false, user: null })}
                className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isDeleting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Eliminar'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
