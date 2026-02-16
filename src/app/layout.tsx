import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import SessionProvider from '@/components/providers/SessionProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ASEMAT | Ingeniería para Operar desde el Primer Día',
    template: '%s | ASEMAT',
  },
  description:
    'Especialistas en Mantenibilidad, Confiabilidad y Cadena de Suministros. Ayudamos a que los proyectos industriales y mineros alcancen la operación estable.',
  keywords: [
    'mantenimiento',
    'confiabilidad',
    'gestión de activos',
    'cadena de suministros',
    'minería',
    'industria',
    'ERP',
    'Chile',
  ],
  authors: [{ name: 'ASEMAT' }],
  creator: 'ASEMAT',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'ASEMAT',
    title: 'ASEMAT | Ingeniería para Operar desde el Primer Día',
    description:
      'Especialistas en Mantenibilidad, Confiabilidad y Cadena de Suministros.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.className}>
      <body className="antialiased min-h-screen flex flex-col">
        <SessionProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
