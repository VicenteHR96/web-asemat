import dbConnect from './mongodb';
import User from '@/models/User';
import Article from '@/models/Article';

async function seed() {
  await dbConnect();

  // Crear usuario admin si no existe
  const existingAdmin = await User.findOne({ email: 'admin@asemat.cl' });

  if (!existingAdmin) {
    await User.create({
      email: 'admin@asemat.cl',
      password: 'admin123', // Cambiar en producción
      name: 'Administrador',
      role: 'admin',
    });
    console.log('Usuario admin creado: admin@asemat.cl / admin123');
  } else {
    console.log('Usuario admin ya existe');
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
        content: `# Implementación Exitosa en Minería del Cobre

## Contexto

Desde 2017, ASEMAT ha acompañado a uno de los tres mayores productores de cobre del mundo en la preparación y transferencia de entregables de Mantenibilidad y Confiabilidad.

## Desafío

El cliente enfrentaba múltiples desafíos:
- Brechas de información en la implementación del ERP
- Deficiente diseño de estrategias de mantenimiento
- Identificación incompleta de equipos y repuestos críticos

## Solución

Implementamos una metodología integral que incluye:
1. Análisis de Mantenibilidad y Confiabilidad
2. Implementación del módulo de mantenimiento del ERP
3. Creación de biblioteca documental integral

## Resultados

- Reducción del 30% en retrabajos
- Implementación exitosa de 15,000+ equipos
- Más de 2,000 planes de mantenimiento creados
`,
        category: 'caso-exito',
        tags: ['minería', 'cobre', 'SAP', 'mantenimiento'],
        published: true,
      },
      {
        title: 'La Importancia del RCM en la Industria Moderna',
        slug: 'importancia-rcm-industria-moderna',
        excerpt:
          'El Mantenimiento Centrado en la Confiabilidad (RCM) es una metodología clave para optimizar las estrategias de mantenimiento.',
        content: `# La Importancia del RCM en la Industria Moderna

## ¿Qué es el RCM?

El Mantenimiento Centrado en la Confiabilidad (RCM) es una metodología sistemática para determinar qué se debe hacer para asegurar que cualquier activo físico continúe haciendo lo que sus usuarios quieren que haga.

## Beneficios del RCM

1. **Optimización de recursos**: Enfoca los esfuerzos en los equipos más críticos
2. **Reducción de costos**: Minimiza intervenciones innecesarias
3. **Mejora de disponibilidad**: Aumenta el tiempo productivo de los activos
4. **Seguridad**: Identifica y mitiga riesgos potenciales

## Implementación

La implementación exitosa del RCM requiere:
- Compromiso de la alta dirección
- Equipos multidisciplinarios
- Datos confiables de fallas
- Herramientas adecuadas de análisis
`,
        category: 'articulo',
        tags: ['RCM', 'confiabilidad', 'mantenimiento', 'metodología'],
        published: true,
      },
      {
        title: 'Neurotek: IA para la Gestión de Activos',
        slug: 'neurotek-ia-gestion-activos',
        excerpt:
          'Presentamos Neurotek, nuestra plataforma de inteligencia artificial que revoluciona la gestión documental técnica.',
        content: `# Neurotek: IA para la Gestión de Activos

## Introducción

Neurotek es una plataforma desarrollada por ASEMAT que integra inteligencia artificial para automatizar la transferencia de proyectos industriales a operaciones.

## Módulos

### Neurotek Gestor Documental
IA para recepción, clasificación y búsqueda de documentación técnica.

### Neurotek Control Documental
Seguimiento automatizado de entregables y dashboards de avance.

### Neurotek Reliplan
Generación automática de análisis FMECA y pautas de mantenimiento.

## Beneficios

- Reducción del tiempo de análisis de semanas a días
- Estandarización y trazabilidad total
- Agente conversacional para consultas técnicas 24/7
`,
        category: 'articulo',
        tags: ['Neurotek', 'IA', 'tecnología', 'gestión documental'],
        published: true,
      },
    ];

    await Article.insertMany(sampleArticles);
    console.log('Artículos de ejemplo creados');
  } else {
    console.log('Ya existen artículos en la base de datos');
  }

  console.log('Seed completado');
}

export default seed;
