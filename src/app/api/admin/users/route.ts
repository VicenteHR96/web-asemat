import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

// GET - List all users
export async function GET() {
  try {
    const session = await auth();

    if (!session || !['superadmin', 'admin'].includes(session.user.role ?? '')) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    await dbConnect();

    const users = await User.find({})
      .select('-password')
      .sort({ createdAt: -1 });

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Error al obtener usuarios' },
      { status: 500 }
    );
  }
}

// POST - Create a new user
export async function POST(request: Request) {
  try {
    const session = await auth();

    // Only superadmin can create users
    if (!session || session.user.role !== 'superadmin') {
      return NextResponse.json(
        { error: 'No autorizado. Solo superadministradores pueden crear usuarios.' },
        { status: 401 }
      );
    }

    await dbConnect();

    const body = await request.json();
    const { email, password, name, role } = body;

    // Validate required fields
    if (!email || !password || !name || !role) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Ya existe un usuario con este email' },
        { status: 400 }
      );
    }

    // Create user
    const user = await User.create({
      email,
      password,
      name,
      role,
    });

    // Return user without password
    const userResponse = {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
    };

    return NextResponse.json(userResponse, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    );
  }
}
