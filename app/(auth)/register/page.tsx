'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  UserPlus, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Phone, 
  Sparkles,
  Trophy,
  Users,
  Calendar,
  Shield,
  ChevronRight,
  ArrowLeft,
  Gamepad2,
  Target,
  Badge,
  Zap
} from 'lucide-react'

const registerSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  confirmPassword: z.string(),
  role: z.enum(['participant', 'team_leader']),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password tidak cocok',
  path: ['confirmPassword'],
})

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState<'participant' | 'team_leader'>('participant')
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'participant',
    },
  })

  const password = watch('password')

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true)
    console.log('Register data:', data)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    // Handle registration logic here
    setIsLoading(false)
  }

  const features = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Kompetisi Lengkap',
      description: 'Akses berbagai event dan lomba kampus terbaik'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Sistem Tim',
      description: 'Kelola tim dengan sistem invite yang mudah'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Jadwal Real-time',
      description: 'Pantau bracket dan jadwal pertandingan'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Keamanan Data',
      description: 'Data Anda terlindungi dengan enkripsi terbaik'
    }
  ]

  const passwordStrength = {
    length: password?.length >= 6,
    uppercase: /[A-Z]/.test(password || ''),
    lowercase: /[a-z]/.test(password || ''),
    number: /[0-9]/.test(password || ''),
  }

  const getPasswordStrength = () => {
    const score = Object.values(passwordStrength).filter(Boolean).length
    return (score / 4) * 100
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20">

      {/* Back to Home */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-10 group"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Kembali</span>
        </div>
      </Link>

      <div className="w-full max-w-6xl z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Brand & Features */}
          <div className="hidden lg:block">
            <div className="max-w-lg">
              <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Eventra
                  </h2>
                  <p className="text-sm text-gray-400">Event Management & Competition System</p>
                </div>
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Bergabung dengan{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Komunitas Eventra
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Daftar sekarang untuk mulai berpartisipasi dalam berbagai event dan kompetisi
                menarik di kampus Anda. Bergabunglah dengan ribuan peserta lainnya!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-5 mb-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-3 border border-white/10">
                        <div className="text-purple-300">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Event Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">5,000+</div>
                  <div className="text-sm text-gray-400">Peserta</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">Kepuasan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Register Form */}
          <div className="flex mt-17 justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
              {/* Glass Form Container */}
              <div className="relative group">
                {/* Gradient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Glass Form */}
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/20">
                        <UserPlus className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Daftar Eventra</h2>
                    <p className="text-gray-400">
                      Buat akun untuk mulai berpartisipasi dalam event
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name and Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Nama Lengkap
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              {...register('name')}
                              type="text"
                              placeholder="John Doe"
                              className="w-full pl-10 pr-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                          </div>
                        </div>
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Nomor Telepon
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              {...register('phone')}
                              type="tel"
                              placeholder="081234567890"
                              className="w-full pl-10 pr-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                          </div>
                        </div>
                        {errors.phone && (
                          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <div className="relative group/input">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="email@example.com"
                            className="w-full pl-10 pr-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                          />
                        </div>
                      </div>
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-400"></span>
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Password
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              {...register('password')}
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="w-full pl-10 pr-12 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                              {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                              ) : (
                                <Eye className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>
                        {errors.password && (
                          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            {errors.password.message}
                          </p>
                        )}

                        {/* Password Strength Meter */}
                        {password && (
                          <div className="mt-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-400">Kekuatan password:</span>
                              <span className="text-xs text-gray-400">
                                {getPasswordStrength() >= 75 ? 'Kuat' : 
                                 getPasswordStrength() >= 50 ? 'Cukup' : 'Lemah'}
                              </span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                              <div 
                                className={`h-full transition-all duration-300 ${
                                  getPasswordStrength() >= 75 ? 'bg-green-500' :
                                  getPasswordStrength() >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${getPasswordStrength()}%` }}
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-1 mt-2">
                              <div className={`text-xs flex items-center gap-1 ${passwordStrength.length ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${passwordStrength.length ? 'bg-green-400' : 'bg-gray-600'}`} />
                                Minimal 6 karakter
                              </div>
                              <div className={`text-xs flex items-center gap-1 ${passwordStrength.uppercase ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${passwordStrength.uppercase ? 'bg-green-400' : 'bg-gray-600'}`} />
                                Huruf besar
                              </div>
                              <div className={`text-xs flex items-center gap-1 ${passwordStrength.lowercase ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${passwordStrength.lowercase ? 'bg-green-400' : 'bg-gray-600'}`} />
                                Huruf kecil
                              </div>
                              <div className={`text-xs flex items-center gap-1 ${passwordStrength.number ? 'text-green-400' : 'text-gray-500'}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${passwordStrength.number ? 'bg-green-400' : 'bg-gray-600'}`} />
                                Angka
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Konfirmasi Password
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              {...register('confirmPassword')}
                              type={showConfirmPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="w-full pl-10 pr-12 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="w-5 h-5" />
                              ) : (
                                <Eye className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>
                        {errors.confirmPassword && (
                          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            {errors.confirmPassword.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Role Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Daftar sebagai:
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedRole('participant')
                            setValue('role', 'participant')
                          }}
                          className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center justify-center ${
                            selectedRole === 'participant'
                              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-white'
                              : 'backdrop-blur-sm bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <User className="w-6 h-6 mb-2" />
                          <p className="font-medium">Peserta Individu</p>
                          <p className="text-sm mt-1 text-gray-400">Untuk lomba individu</p>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedRole('team_leader')
                            setValue('role', 'team_leader')
                          }}
                          className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center justify-center ${
                            selectedRole === 'team_leader'
                              ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 text-white'
                              : 'backdrop-blur-sm bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <Users className="w-6 h-6 mb-2" />
                          <p className="font-medium">Ketua Tim</p>
                          <p className="text-sm mt-1 text-gray-400">Untuk lomba tim</p>
                        </button>
                      </div>
                      <input type="hidden" {...register('role')} />
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start">
                      <label className="flex items-start cursor-pointer">
                        <div className="relative mt-1">
                          <input
                            type="checkbox"
                            required
                            className="sr-only"
                          />
                          <div className="w-5 h-5 backdrop-blur-sm bg-white/5 border border-white/20 rounded flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-purple-400 opacity-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-2 text-sm text-gray-400">
                          Saya setuju dengan{' '}
                          <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                            Syarat Layanan
                          </Link>{' '}
                          dan{' '}
                          <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                            Kebijakan Privasi
                          </Link>
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Membuat akun...</span>
                        </>
                      ) : (
                        <>
                          <span>Daftar Sekarang</span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Login Link */}
                  <p className="text-center text-gray-400 mt-8">
                    Sudah punya akun?{' '}
                    <Link
                      href="/login"
                      className="text-purple-400 hover:text-purple-300 font-semibold transition-colors group inline-flex items-center gap-1"
                    >
                      Login disini
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
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
      `}</style>
    </div>
  )
}