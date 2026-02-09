import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions as any)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { name } = await request.json()

    if (!name || name.trim().length < 3) {
      return NextResponse.json(
        { message: 'Nama minimal 3 karakter' },
        { status: 400 }
      )
    }

    await connectDB()
    
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email.toLowerCase() },
      { name: name.trim() },
      { new: true }
    )

    if (!updatedUser) {
      return NextResponse.json(
        { message: 'User tidak ditemukan' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: 'Profil berhasil diperbarui',
      user: {
        id: updatedUser._id.toString(),
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      }
    })
  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions as any)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    await connectDB()
    
    const user = await User.findOne({ 
      email: session.user.email.toLowerCase() 
    }).select('-password')

    if (!user) {
      return NextResponse.json(
        { message: 'User tidak ditemukan' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        image: user.image,
        provider: user.provider,
        createdAt: user.createdAt,
      }
    })
  } catch (error) {
    console.error('Get profile error:', error)
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}
