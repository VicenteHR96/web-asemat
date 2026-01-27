'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  MoreVertical,
  FileText,
  Award,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'caso-exito' | 'articulo';
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function ArticulosPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'articulo' | 'caso-exito'>('all');
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/articles');
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Está seguro de eliminar este artículo?')) return;

    try {
      await fetch(`/api/articles/${id}`, { method: 'DELETE' });
      setArticles(articles.filter((a) => a._id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleTogglePublish = async (article: Article) => {
    try {
      const res = await fetch(`/api/articles/${article._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !article.published }),
      });
      const updated = await res.json();
      setArticles(articles.map((a) => (a._id === article._id ? updated : a)));
    } catch (error) {
      console.error('Error toggling publish:', error);
    }
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || article.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Artículos</h1>
          <p className="text-gray-600 mt-1">Gestiona los artículos y casos de éxito</p>
        </div>
        <Link href="/admin/articulos/nuevo">
          <Button>
            <Plus className="h-5 w-5 mr-2" />
            Nuevo Artículo
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar artículos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('articulo')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'articulo'
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Artículos
            </button>
            <button
              onClick={() => setFilter('caso-exito')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'caso-exito'
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Casos de Éxito
            </button>
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-600">Cargando artículos...</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="p-12 text-center">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No hay artículos
            </h3>
            <p className="text-gray-600 mb-4">
              {search || filter !== 'all'
                ? 'No se encontraron artículos con los filtros aplicados.'
                : 'Comienza creando tu primer artículo.'}
            </p>
            {!search && filter === 'all' && (
              <Link href="/admin/articulos/nuevo">
                <Button>
                  <Plus className="h-5 w-5 mr-2" />
                  Crear Artículo
                </Button>
              </Link>
            )}
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredArticles.map((article) => (
              <div
                key={article._id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          article.category === 'caso-exito'
                            ? 'bg-green-100'
                            : 'bg-primary-100'
                        }`}
                      >
                        {article.category === 'caso-exito' ? (
                          <Award className="h-4 w-4 text-green-600" />
                        ) : (
                          <FileText className="h-4 w-4 text-primary-600" />
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900 truncate">
                        {article.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          article.published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {article.published ? 'Publicado' : 'Borrador'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {article.excerpt}
                    </p>
                    <p className="text-xs text-gray-400">
                      Actualizado:{' '}
                      {new Date(article.updatedAt).toLocaleDateString('es-CL', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === article._id ? null : article._id)
                      }
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <MoreVertical className="h-5 w-5 text-gray-400" />
                    </button>
                    {openMenu === article._id && (
                      <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                        <Link
                          href={`/admin/articulos/${article._id}`}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setOpenMenu(null)}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Editar
                        </Link>
                        <button
                          onClick={() => {
                            handleTogglePublish(article);
                            setOpenMenu(null);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {article.published ? (
                            <>
                              <EyeOff className="h-4 w-4 mr-2" />
                              Despublicar
                            </>
                          ) : (
                            <>
                              <Eye className="h-4 w-4 mr-2" />
                              Publicar
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(article._id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
