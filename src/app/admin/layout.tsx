import { auth } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export const metadata = {
  title: 'Admin | ASEMAT',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Allow access to login page without session
  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <AdminSidebar user={session.user} />
      <div className="lg:pl-64">
        {/* Mobile top padding for fixed header */}
        <div className="lg:hidden h-14" />
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
