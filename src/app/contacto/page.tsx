'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: '(+56) (32) 2179065',
    href: 'tel:+56322179065',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contacto@asemat.cl',
    href: 'mailto:contacto@asemat.cl',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: 'Valparaíso, Chile',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Horario',
    value: 'Lun - Vie: 9:00 - 18:00',
    href: '#',
  },
];

const services = [
  'Gestión de Activos',
  'Cadena de Suministros',
  'Implementación ERP',
  'Tecnología Neurotek',
  'Consultoría',
  'Otro',
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch {
      setError('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Contáctenos</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Estamos listos para ayudarle a optimizar sus operaciones. Complete el
              formulario y nos pondremos en contacto a la brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{info.title}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl text-white">
                <h3 className="font-bold text-lg mb-3">¿Necesita una Cotización?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Describa su proyecto y le enviaremos una propuesta personalizada en
                  menos de 48 horas hábiles.
                </p>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Respuesta garantizada</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envíenos un Mensaje
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Gracias por contactarnos. Nos pondremos en contacto con usted a
                      la brevedad.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Nombre completo"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Juan Pérez"
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="juan@empresa.cl"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Empresa"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de su empresa"
                      />
                      <Input
                        label="Teléfono"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+56 9 1234 5678"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Servicio de interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Seleccione un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Textarea
                      label="Mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describa su consulta o proyecto..."
                      className="min-h-[150px]"
                    />

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-gray-600">
              Ubicados en Valparaíso, Chile, con alcance en toda Latinoamérica.
            </p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Valparaíso, Región de Valparaíso, Chile
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
