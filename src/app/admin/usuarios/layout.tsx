import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  // Solo superadmin y admin pueden ver la sección de usuarios
  if (session.user.role === 'colaborador') {
    redirect('/admin/articulos');
  }

  return <>{children}</>;
}
