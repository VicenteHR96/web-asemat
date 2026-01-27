import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Article from '@/models/Article';

export async function GET() {
  try {
    await dbConnect();

    // Crear usuario admin si no existe
    const existingAdmin = await User.findOne({ email: 'admin@asemat.cl' });

    if (!existingAdmin) {
      await User.create({
        email: 'admin@asemat.cl',
        password: 'admin123',
        name: 'Administrador',
        role: 'admin',
      });
    }

    // Crear artículos de ejemplo si no existen
    const articleCount = await Article.countDocuments();

    if (articleCount === 0) {
      const sampleArticles = [
        {
          title: 'Implementación Exitosa en Minería del Cobre',
          slug: 'implementacion-exitosa-mineria-cobre',
          excerpt:
            'Descubre cómo ayudamos a una de las mayores mineras de cobre a optimizar sus procesos de mantenimiento.',
          content: `# Implementación Exitosa en Minería del Cobre\n\nDesde 2017, ASEMAT ha acompañado a uno de los tres mayores productores de cobre del mundo en la preparación y transferencia de entregables de Mantenibilidad y Confiabilidad.`,
          category: 'caso-exito',
          tags: ['minería', 'cobre', 'SAP', 'mantenimiento'],
          published: true,
        },
        {
          title: 'La Importancia del RCM en la Industria Moderna',
          slug: 'importancia-rcm-industria-moderna',
          excerpt:
            'El Mantenimiento Centrado en la Confiabilidad (RCM) es una metodología clave para optimizar las estrategias de mantenimiento.',
          content: `# La Importancia del RCM en la Industria Moderna\n\nEl Mantenimiento Centrado en la Confiabilidad (RCM) es una metodología sistemática para determinar qué se debe hacer para asegurar que cualquier activo físico continúe haciendo lo que sus usuarios quieren que haga.`,
          category: 'articulo',
          tags: ['RCM', 'confiabilidad', 'mantenimiento', 'metodología'],
          published: true,
        },
        {
          title: 'Neurotek: IA para la Gestión de Activos',
          slug: 'neurotek-ia-gestion-activos',
          excerpt:
            'Presentamos Neurotek, nuestra plataforma de inteligencia artificial que revoluciona la gestión documental técnica.',
          content: `# Neurotek: IA para la Gestión de Activos\n\nNeurotek es una plataforma desarrollada por ASEMAT que integra inteligencia artificial para automatizar la transferencia de proyectos industriales a operaciones.`,
          category: 'articulo',
          tags: ['Neurotek', 'IA', 'tecnología', 'gestión documental'],
          published: true,
        },
      ];

      await Article.insertMany(sampleArticles);
    }

    return NextResponse.json({
      message: 'Base de datos inicializada correctamente',
      admin: {
        email: 'admin@asemat.cl',
        password: 'admin123',
      },
    });
  } catch (error) {
    console.error('Error en seed:', error);
    return NextResponse.json(
      { error: 'Error al inicializar la base de datos' },
      { status: 500 }
    );
  }
}
