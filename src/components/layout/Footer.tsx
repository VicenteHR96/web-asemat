import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const footerLinks = {
  servicios: [
    { name: 'Gestión de Activos', href: '/servicios#gestion-activos' },
    { name: 'Cadena de Suministros', href: '/servicios#cadena-suministros' },
    { name: 'Tecnología Neurotek', href: '/servicios#neurotek' },
    { name: 'Consultoría', href: '/servicios#consultoria' },
  ],
  empresa: [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Casos de Éxito', href: '/casos-exito' },
    { name: 'Contacto', href: '/contacto' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/asemat_logo_blanco.png"
                alt="ASEMAT"
                width={160}
                height={45}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ingeniería que integra proyectos con las operaciones. Especialistas
              en Mantenibilidad, Confiabilidad y Cadena de Suministros.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/asemat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>(+56) (32) 2179065</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contacto@asemat.cl"
                  className="hover:text-primary-400 transition-colors"
                >
                  contacto@asemat.cl
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Valparaíso, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ASEMAT. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Ingeniería para Operar desde el Primer Día
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
