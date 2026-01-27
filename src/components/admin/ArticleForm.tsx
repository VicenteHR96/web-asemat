'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Link from 'next/link';

interface ArticleFormProps {
  initialData?: {
    _id?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: 'caso-exito' | 'articulo';
    image: string;
    tags: string[];
    published: boolean;
  };
  isEditing?: boolean;
}

export default function ArticleForm({
  initialData,
  isEditing = false,
}: ArticleFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    category: initialData?.category || 'articulo',
    image: initialData?.image || '',
    tags: initialData?.tags?.join(', ') || '',
    published: initialData?.published || false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Auto-generar slug desde el título
    if (name === 'title' && !isEditing) {
      const slug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const payload = {
        ...formData,
        tags: formData.tags
          .split(',')
          .map((t) => t.trim())
          .filter((t) => t),
      };

      const url = isEditing
        ? `/api/articles/${initialData?._id}`
        : '/api/articles';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Error al guardar el artículo');
      }

      router.push('/admin/articulos');
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error al guardar el artículo'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/articulos"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {isEditing ? 'Editar Artículo' : 'Nuevo Artículo'}
            </h1>
            <p className="text-gray-600 text-sm">
              {isEditing
                ? 'Modifica los campos que desees actualizar'
                : 'Completa los campos para crear un nuevo artículo'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, published: !prev.published }))
            }
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              formData.published
                ? 'border-green-200 bg-green-50 text-green-700'
                : 'border-gray-200 bg-gray-50 text-gray-600'
            }`}
          >
            {formData.published ? (
              <>
                <Eye className="h-4 w-4" />
                Publicado
              </>
            ) : (
              <>
                <EyeOff className="h-4 w-4" />
                Borrador
              </>
            )}
          </button>
          <Button type="submit" isLoading={isSubmitting}>
            <Save className="h-5 w-5 mr-2" />
            Guardar
          </Button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {/* Main Content */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Contenido Principal
          </h2>
          <div className="space-y-4">
            <Input
              label="Título"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Título del artículo"
            />
            <Input
              label="Slug (URL)"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              placeholder="titulo-del-articulo"
              helperText="Se genera automáticamente desde el título"
            />
            <Textarea
              label="Extracto"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              placeholder="Breve descripción del artículo (máx. 500 caracteres)"
              className="min-h-[100px]"
            />
            <Textarea
              label="Contenido"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              placeholder="Contenido completo del artículo (soporta Markdown)"
              className="min-h-[300px]"
            />
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Configuración
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="articulo">Artículo</option>
                <option value="caso-exito">Caso de Éxito</option>
              </select>
            </div>
            <Input
              label="URL de Imagen"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            <div className="md:col-span-2">
              <Input
                label="Etiquetas"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="minería, mantenimiento, SAP (separadas por coma)"
                helperText="Separa las etiquetas con comas"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
