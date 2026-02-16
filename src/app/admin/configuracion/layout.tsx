import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function ConfigLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  // Solo superadmin y admin pueden acceder a configuración
  if (session.user.role === 'colaborador') {
    redirect('/admin/articulos');
  }

  return <>{children}</>;
}
