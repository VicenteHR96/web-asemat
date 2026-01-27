'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Credenciales inválidas. Por favor, intente nuevamente.');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch {
      setError('Ocurrió un error. Por favor, intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <svg
              viewBox="0 0 40 40"
              className="h-16 w-16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5L35 15V30L20 35L5 30V15L20 5Z"
                stroke="#0EA5E9"
                strokeWidth="2"
                fill="none"
              />
              <path d="M12 20L18 26L28 14" stroke="#10B981" strokeWidth="2.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Panel de Administración</h2>
          <p className="mt-2 text-gray-600">Ingrese sus credenciales para continuar</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                {error}
              </div>
            )}

            <Button type="submit" size="lg" isLoading={isLoading} className="w-full">
              Iniciar Sesión
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          ¿Olvidó su contraseña?{' '}
          <a href="mailto:contacto@asemat.cl" className="text-primary-600 hover:text-primary-700">
            Contacte al administrador
          </a>
        </p>
      </div>
    </div>
  );
}
