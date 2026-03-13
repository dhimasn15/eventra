import { supabase } from "@/lib/supabase"
import bcrypt from "bcryptjs"
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

    // Cek email sudah terdaftar
    const { data: existingUser } = await supabase
      .from('users')
      .select('email')
      .eq('email', email.toLowerCase())
      .single()

    if (existingUser) {
      return NextResponse.json(
        { message: "Email sudah terdaftar" },
        { status: 409 }
      )
    }

    // Buat user baru
    const hashedPassword = await bcrypt.hash(password, 10)
    const { data: user, error: insertError } = await supabase
      .from('users')
      .insert({
        name: name.trim(),
        email: email.toLowerCase(),
        password: hashedPassword,
        role,
      })
      .select('*')
      .single()

    if (insertError || !user) {
      throw insertError || new Error("Failed to create user")
    }

    return NextResponse.json(
      {
        message: "Registrasi berhasil",
        user: {
          id: user.id,
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
