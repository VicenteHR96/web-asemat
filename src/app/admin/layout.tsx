import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Si no hay sesión y no estamos en la página de login, redirigir
  const isLoginPage =
    typeof window !== 'undefined' && window.location.pathname === '/admin/login';

  if (!session && !isLoginPage) {
    // Permitir acceso a la página de login sin sesión
    return <>{children}</>;
  }

  if (!session) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar user={session.user} />
      <div className="lg:pl-64">
        <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
