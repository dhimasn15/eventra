import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password, role } = body

    // Validasi input
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { message: "Semua field diperlukan" },
        { status: 400 }
      )
    }

    // Validasi format email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Format email tidak valid" },
        { status: 400 }
      )
    }

    // Validasi password length
    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password minimal 6 karakter" },
        { status: 400 }
      )
    }

    // Validasi role
    if (!["participant", "admin"].includes(role)) {
      return NextResponse.json(
        { message: "Role tidak valid" },
        { status: 400 }
      )
    }

    await connectDB()

    // Cek email sudah terdaftar
    const existingUser = await User.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      return NextResponse.json(
        { message: "Email sudah terdaftar" },
        { status: 409 }
      )
    }

    // Buat user baru
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase(),
      password,
      role,
    })

    return NextResponse.json(
      {
        message: "Registrasi berhasil",
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Register error:", error)

    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Terjadi kesalahan saat registrasi" },
      { status: 500 }
    )
  }
}
