'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  Shield,
  User as UserIcon,
} from 'lucide-react';

type UserRole = 'superadmin' | 'admin' | 'colaborador';

interface AdminSidebarProps {
  user: {
    name?: string | null;
    email?: string | null;
    role?: string;
  };
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: UserRole[];
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, roles: ['superadmin', 'admin'] },
  { name: 'Artículos', href: '/admin/articulos', icon: FileText, roles: ['superadmin', 'admin', 'colaborador'] },
  { name: 'Usuarios', href: '/admin/usuarios', icon: Users, roles: ['superadmin', 'admin'] },
  { name: 'Configuración', href: '/admin/configuracion', icon: Settings, roles: ['superadmin', 'admin'] },
];

const roleConfig: Record<UserRole, { label: string; icon: React.ComponentType<{ className?: string }>; color: string }> = {
  superadmin: { label: 'Superadmin', icon: ShieldCheck, color: 'text-purple-600 bg-purple-100' },
  admin: { label: 'Admin', icon: Shield, color: 'text-blue-600 bg-blue-100' },
  colaborador: { label: 'Colaborador', icon: UserIcon, color: 'text-gray-600 bg-gray-100' },
};

export default function AdminSidebar({ user }: AdminSidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const userRole = (user.role as UserRole) || 'colaborador';
  const roleInfo = roleConfig[userRole];

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  // Filter navigation items based on user role
  const filteredNavigation = navigation.filter((item) =>
    item.roles.includes(userRole)
  );

  const NavContent = () => (
    <>
      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Menú
        </p>
        {filteredNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive(item.href)
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <item.icon className={`h-5 w-5 mr-3 ${isActive(item.href) ? 'text-white' : 'text-gray-400'}`} />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* View site link */}
      <div className="px-3 py-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
        >
          <ExternalLink className="h-5 w-5 mr-3 text-gray-400" />
          Ver Sitio Web
        </Link>
      </div>

      {/* User section */}
      <div className="p-4 border-t border-gray-200 bg-gray-50/50">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-sm">
              {user.name?.charAt(0).toUpperCase() || 'A'}
            </span>
          </div>
          <div className="ml-3 flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {user.name || 'Admin'}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${roleInfo.color}`}>
                <roleInfo.icon className="h-3 w-3 mr-1" />
                {roleInfo.label}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Cerrar Sesión
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/admin" className="flex items-center space-x-3">
            <Image
              src="/asemat_logo1.png"
              alt="ASEMAT"
              width={100}
              height={28}
              className="h-7 w-auto"
            />
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
              Admin
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-gray-900/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between h-14 px-4 border-b border-gray-200">
              <Link href="/admin" className="flex items-center space-x-2">
                <Image
                  src="/asemat_logo1.png"
                  alt="ASEMAT"
                  width={100}
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-gray-600 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:fixed lg:inset-y-0 lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 bg-white border-r border-gray-200">
          {/* Logo */}
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <Link href="/admin" className="flex items-center space-x-3">
              <Image
                src="/asemat_logo1.png"
                alt="ASEMAT"
                width={120}
                height={34}
                className="h-8 w-auto"
              />
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                Admin
              </span>
            </Link>
          </div>
          <NavContent />
        </div>
      </div>
    </>
  );
}
