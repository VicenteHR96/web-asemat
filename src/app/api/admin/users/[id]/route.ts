import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

// GET - Get a specific user
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session || !['superadmin', 'admin'].includes(session.user.role ?? '')) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    await dbConnect();

    const { id } = await params;
    const user = await User.findById(id).select('-password');

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Error al obtener usuario' },
      { status: 500 }
    );
  }
}

// PUT - Update a user
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    // Only superadmin can update users
    if (!session || session.user.role !== 'superadmin') {
      return NextResponse.json(
        { error: 'No autorizado. Solo superadministradores pueden editar usuarios.' },
        { status: 401 }
      );
    }

    await dbConnect();

    const { id } = await params;
    const body = await request.json();
    const { email, password, name, role } = body;

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Check if email is being changed and if it's already in use
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json(
          { error: 'Ya existe un usuario con este email' },
          { status: 400 }
        );
      }
      user.email = email;
    }

    if (name) user.name = name;
    if (role) user.role = role;
    if (password) user.password = password;

    await user.save();

    // Return user without password
    const userResponse = {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return NextResponse.json(userResponse);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Error al actualizar usuario' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a user
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    // Only superadmin can delete users
    if (!session || session.user.role !== 'superadmin') {
      return NextResponse.json(
        { error: 'No autorizado. Solo superadministradores pueden eliminar usuarios.' },
        { status: 401 }
      );
    }

    await dbConnect();

    const { id } = await params;

    // Prevent deleting yourself
    if (id === session.user.id) {
      return NextResponse.json(
        { error: 'No puedes eliminar tu propia cuenta' },
        { status: 400 }
      );
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Error al eliminar usuario' },
      { status: 500 }
    );
  }
}
