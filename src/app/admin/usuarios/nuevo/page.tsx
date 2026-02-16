'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  User,
  Mail,
  Lock,
  Shield,
  ShieldCheck,
  UserIcon,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const roles = [
  {
    value: 'superadmin',
    label: 'Superadministrador',
    description: 'Acceso completo a todas las funciones, incluyendo gestión de usuarios',
    icon: ShieldCheck,
    gradient: 'from-purple-500 to-violet-500',
    border: 'border-purple-200 hover:border-purple-300',
    selected: 'border-purple-500 bg-purple-50',
  },
  {
    value: 'admin',
    label: 'Administrador',
    description: 'Acceso completo excepto creación de usuarios',
    icon: Shield,
    gradient: 'from-blue-500 to-cyan-500',
    border: 'border-blue-200 hover:border-blue-300',
    selected: 'border-blue-500 bg-blue-50',
  },
  {
    value: 'colaborador',
    label: 'Colaborador',
    description: 'Solo puede crear y editar artículos',
    icon: UserIcon,
    gradient: 'from-gray-500 to-slate-500',
    border: 'border-gray-200 hover:border-gray-300',
    selected: 'border-gray-500 bg-gray-50',
  },
];

export default function NewUserPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'colaborador',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear usuario');
      }

      router.push('/admin/usuarios');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear usuario');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/admin/usuarios"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a usuarios
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Nuevo Usuario
        </h1>
        <p className="text-gray-500 mt-1">
          Crea una nueva cuenta de usuario para el panel de administración
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error message */}
        {error && (
          <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Basic info card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Información Básica
          </h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Nombre completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="usuario@asemat.cl"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Password card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Contraseña
          </h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Mínimo 6 caracteres</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
                Confirmar contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Role selection card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Rol del Usuario
          </h2>

          <div className="space-y-3">
            {roles.map((role) => (
              <label
                key={role.value}
                className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.role === role.value
                    ? role.selected
                    : `border-gray-100 ${role.border}`
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value={role.value}
                  checked={formData.role === role.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${role.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <role.icon className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{role.label}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{role.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Submit buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link href="/admin/usuarios" className="flex-1">
            <button
              type="button"
              className="w-full px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
          </Link>
          <Button type="submit" size="lg" isLoading={isLoading} className="flex-1">
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Creando...
              </>
            ) : (
              'Crear Usuario'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
