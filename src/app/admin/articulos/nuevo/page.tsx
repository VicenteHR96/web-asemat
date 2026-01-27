import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import ArticleForm from '@/components/admin/ArticleForm';

export default async function NuevoArticuloPage() {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return <ArticleForm />;
}
