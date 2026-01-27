import { redirect, notFound } from 'next/navigation';
import { auth } from '@/lib/auth';
import dbConnect from '@/lib/mongodb';
import Article from '@/models/Article';
import ArticleForm from '@/components/admin/ArticleForm';

interface EditArticlePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  const { id } = await params;

  await dbConnect();

  const article = await Article.findById(id).lean();

  if (!article) {
    notFound();
  }

  const articleData = {
    _id: article._id.toString(),
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    content: article.content,
    category: article.category as 'caso-exito' | 'articulo',
    image: article.image || '',
    tags: article.tags || [],
    published: article.published,
  };

  return <ArticleForm initialData={articleData} isEditing />;
}
