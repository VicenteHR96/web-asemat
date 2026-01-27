import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Article from '@/models/Article';
import { auth } from '@/lib/auth';

// GET - Obtener un artículo por ID o slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    // Buscar por ID o por slug
    const article = await Article.findOne({
      $or: [{ _id: id }, { slug: id }],
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Artículo no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { error: 'Error al obtener artículo' },
      { status: 500 }
    );
  }
}

// PUT - Actualizar un artículo
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    await dbConnect();

    const { id } = await params;
    const data = await request.json();

    const article = await Article.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Artículo no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { error: 'Error al actualizar artículo' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar un artículo
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    await dbConnect();

    const { id } = await params;

    const article = await Article.findByIdAndDelete(id);

    if (!article) {
      return NextResponse.json(
        { error: 'Artículo no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Artículo eliminado exitosamente' });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { error: 'Error al eliminar artículo' },
      { status: 500 }
    );
  }
}
