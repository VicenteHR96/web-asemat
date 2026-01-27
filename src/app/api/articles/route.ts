import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Article from '@/models/Article';
import { auth } from '@/lib/auth';

// GET - Obtener todos los artículos
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const published = searchParams.get('published');
    const limit = searchParams.get('limit');

    const query: Record<string, unknown> = {};

    if (category) {
      query.category = category;
    }

    if (published === 'true') {
      query.published = true;
    }

    let articlesQuery = Article.find(query).sort({ createdAt: -1 });

    if (limit) {
      articlesQuery = articlesQuery.limit(parseInt(limit));
    }

    const articles = await articlesQuery;

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Error al obtener artículos' },
      { status: 500 }
    );
  }
}

// POST - Crear nuevo artículo
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    await dbConnect();

    const data = await request.json();

    // Generar slug si no existe
    if (!data.slug) {
      data.slug = data.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    const article = await Article.create(data);

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Error al crear artículo' },
      { status: 500 }
    );
  }
}
