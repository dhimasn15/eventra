'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ChevronRight,
  User,
  Users,
  ArrowLeft,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const registerSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter'),
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak cocok",
  path: ["confirmPassword"],
})

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState<'participant' | 'admin'>('participant')
  const [isLoading, setIsLoading] = useState(false)
  const [registerError, setRegisterError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleGoogleRegister = () => {
    signIn('google', { callbackUrl: '/' })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true)
    setRegisterError(null)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.toLowerCase(),
          password: data.password,
          role: selectedRole,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        setRegisterError(result.message || 'Registrasi gagal')
        return
      }

      // Auto login setelah registrasi
      const loginResult = await signIn('credentials', {
        email: data.email.toLowerCase(),
        password: data.password,
        redirect: false,
      })

      if (loginResult?.ok) {
        setSuccessMessage('Registrasi berhasil! Redirecting...')
        setTimeout(() => {
          router.replace('/')
        }, 800)
      } else {
        setRegisterError('Login otomatis gagal, silakan login manual')
        setTimeout(() => {
          router.replace('/login?success=registered')
        }, 1500)
      }
    } catch (error) {
      console.error('Register error:', error)
      setRegisterError('Terjadi kesalahan saat registrasi')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20">

      {/* Toast Notification */}
      {successMessage && (
        <div className="fixed top-4 left-4 right-4 max-w-md mx-auto z-[999] animate-slide-down">
          <div className="backdrop-blur-xl bg-green-500/20 border border-green-500/50 rounded-xl p-4 flex items-center gap-3 shadow-xl">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-sm text-green-200">{successMessage}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="w-full max-w-md z-10 mb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Kembali</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
            {/* Form Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Daftar ke Eventra</h2>
              <p className="text-gray-400">
                Buat akun untuk mulai berpartisipasi di event
              </p>
              {registerError && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {registerError}
                </div>
              )}
            </div>

            {/* Google Register Button */}
            <button
              onClick={handleGoogleRegister}
              className="w-full mb-6 group flex items-center justify-center gap-3 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
              type="button"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Lanjutkan dengan Google</span>
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-transparent text-gray-500">atau daftar dengan email</span>
              </div>
            </div>

            {/* Role Selection */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-3">Daftar sebagai:</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedRole('participant')}
                  className={`py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                    selectedRole === 'participant'
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-white'
                      : 'backdrop-blur-sm bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span className="font-medium">Peserta / Tim</span>
                </button>
                <button
                  onClick={() => setSelectedRole('admin')}
                  className={`py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                    selectedRole === 'admin'
                      ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 text-white'
                      : 'backdrop-blur-sm bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span className="font-medium">Admin / Panitia</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 text-sm backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                  </div>
                </div>
                {errors.name && (
                  <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-4 py-3 text-sm backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                  </div>
                </div>
                {errors.email && (
                  <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('password')}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className="w-full pl-10 pr-12 py-3 text-sm backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Konfirmasi Password
                </label>
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('confirmPassword')}
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className="w-full pl-10 pr-12 py-3 text-sm backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded accent-purple-500 cursor-pointer"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-400 group-hover:text-gray-300">Saya setuju dengan Syarat Layanan</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full group flex items-center justify-center gap-3 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Mendaftar...</span>
                  </>
                ) : (
                  <>
                    <span>Daftar ke Eventra</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-gray-400 text-sm mt-6">
              Sudah punya akun?{' '}
              <Link
                href="/login"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors group inline-flex items-center gap-1"
              >
                Login sekarang
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </div>
        </div>

        {/* Terms Notice */}
        <p className="text-center text-gray-500 text-xs mt-6">
          Dengan mendaftar, Anda menyetujui{' '}
          <Link href="/terms" className="text-gray-400 hover:text-gray-300">
            Syarat Layanan
          </Link>{' '}
          dan{' '}
          <Link href="/privacy" className="text-gray-400 hover:text-gray-300">
            Kebijakan Privasi
          </Link>
        </p>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes slide-down {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}