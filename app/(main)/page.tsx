'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { 
  Trophy, 
  Users, 
  Calendar, 
  Shield, 
  TrendingUp, 
  Smartphone,
  ChevronRight,
  Sparkles,
  Zap,
  Target,
  Award,
  Gamepad2,
  Goal,
  User,
  CheckCircle,
  X as CloseIcon
} from 'lucide-react'

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const { data: session } = useSession()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (session && searchParams.get('login') === 'success') {
      setSuccessMessage(`Selamat datang kembali, ${session.user?.name}!`)
      
      // Clean up URL without refresh
      const newUrl = window.location.pathname
      window.history.replaceState({}, '', newUrl)

      const timer = setTimeout(() => setSuccessMessage(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [session, searchParams])

  const featuredEvents = [
    {
      id: 1,
      title: 'Ceritanya Lomba 2025',
      description: 'Olimpiade game dan olahraga kampus terbesar tahun ini',
      category: 'Multi-event',
      participants: 250,
      date: '15-20 Des 2025',
      status: 'open' as const,
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Mobile Legends Campus Cup',
      description: 'Turnamen Mobile Legends antar kampus se-Indonesia',
      category: 'E-Sports',
      participants: 128,
      date: '10-12 Jan 2026',
      status: 'upcoming' as const,
      icon: <Gamepad2 className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'FIFA Tournament',
      description: 'Kompetisi FIFA untuk pecinta sepakbola virtual',
      category: 'E-Sports',
      participants: 64,
      date: '5-7 Feb 2026',
      status: 'upcoming' as const,
      icon: <Goal className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-gray-900 ">
      {/* Toast Notification */}
      {/* Toast Notification */}
      {successMessage && (
        <div className="fixed top-6 right-6 z-[999] animate-slide-left">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30"></div>
            <div className="relative p-4 flex items-center gap-4 min-w-[320px]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm">Login Berhasil!</h4>
                <p className="text-green-200 text-xs mt-0.5">{successMessage}</p>
              </div>
              <button
                onClick={() => setSuccessMessage(null)}
                className="p-1 rounded-lg hover:bg-white/10 text-green-200 hover:text-white transition-colors"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 animate-progress"></div>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-sm text-gray-300">Platform Event #1 di Indonesia</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Eventra
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Platform terpadu untuk mengelola pendaftaran acara, kompetisi, dan bracket
              berbagai lomba.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {!session ? (
                <>
                  <Link
                    href="/register"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  >
                    <span>Mulai Sekarang</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/events"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Lihat Event</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/events"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  >
                    <span>Jelajahi Event</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={session.user?.role === 'admin' ? '/admin' : '/my-events'}
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300"
                  >
                    <User className="w-5 h-5" />
                    <span>{session.user?.role === 'admin' ? 'Dashboard' : 'My Events'}</span>
                  </Link>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: '50+', label: 'Event Sukses', icon: <Trophy className="w-5 h-5" /> },
                { value: '5,000+', label: 'Peserta Aktif', icon: <Users className="w-5 h-5" /> },
                { value: '200+', label: 'Tim Terdaftar', icon: <Target className="w-5 h-5" /> },
                { value: '24/7', label: 'Support', icon: <Zap className="w-5 h-5" /> }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 mb-4">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Fitur Unggulan</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Eventra</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Platform lengkap dengan semua fitur yang Anda butuhkan untuk mengelola
              event dan kompetisi kampus secara profesional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Trophy className="w-8 h-8" />,
                title: 'Multiple Competitions',
                description: 'Kelola berbagai jenis lomba dalam satu platform',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Team Management',
                description: 'Buat dan kelola tim dengan sistem invite yang mudah',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Bracket System',
                description: 'Generate bracket otomatis dengan sistem eliminasi',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Payment Verification',
                description: 'Sistem verifikasi pembayaran yang aman dan transparan',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Live Updates',
                description: 'Update skor dan hasil pertandingan secara real-time',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Responsive Design',
                description: 'Akses dari desktop maupun mobile dengan pengalaman optimal',
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Glass Card */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 h-full group-hover:border-white/20 transition-all duration-300">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 mb-4">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Event Terbaru</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Jelajahi <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Event</span> Menarik
              </h2>
              <p className="text-gray-400">
                Temukan dan ikuti event menarik yang tersedia
              </p>
            </div>
            <Link
              href="/events"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300"
            >
              <span>Lihat Semua</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-30`}></div>
                
                {/* Glass Card */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 h-full">
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      event.status === 'open' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {event.status === 'open' ? 'Buka Pendaftaran' : 'Segera'}
                    </span>
                  </div>
                  
                  {/* Event Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20">
                    {event.icon}
                  </div>
                  
                  {/* Category */}
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm text-gray-300 mb-4 border border-white/10">
                    {event.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Event Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-5 h-5 mr-3 text-gray-400" />
                      <span>{event.participants} Peserta</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/events/${event.id}`}
                      className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-center transition-all duration-300"
                    >
                      Detail
                    </Link>
                    <Link
                      href={`/events/${event.id}/register`}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white text-center transition-all duration-300 border border-white/20"
                    >
                      Daftar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20"></div>
            
            {/* Glass Container */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <Award className="w-16 h-16 text-white mx-auto mb-6" />
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Siap Mengelola Event <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Anda</span>?
                </h2>
                
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Bergabung dengan ratusan panitia dan peserta yang sudah menggunakan
                  Eventra untuk mengelola kompetisi kampus mereka.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/register?role=admin"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300"
                  >
                    <Users className="w-5 h-5" />
                    <span>Daftar sebagai Panitia</span>
                  </Link>
                  <Link
                    href="/register?role=participant"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300"
                  >
                    <User className="w-5 h-5" />
                    <span>Daftar sebagai Peserta</span>
                  </Link>
                </div>

                <p className="text-gray-400 text-sm mt-8">
                  Gratis untuk event pertama. Tidak ada biaya tersembunyi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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