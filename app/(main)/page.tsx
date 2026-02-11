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
  X as CloseIcon,
  Leaf,
  Check,
  Star
} from 'lucide-react'

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const { data: session } = useSession()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (session && searchParams.get('login') === 'success') {
      setSuccessMessage(`Selamat datang kembali, ${session.user?.name}!`)
      
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
      gradient: 'from-emerald-500 to-teal-500'
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
    <div className="min-h-screen mt-0 bg-gradient-to-b from-white via-emerald-50 to-white">
      {/* Toast Notification */}
      {successMessage && (
        <div className="fixed top-6 right-6 z-[999] animate-slide-left">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-emerald-200">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50"></div>
            <div className="relative p-4 flex items-center gap-4 min-w-[320px]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-emerald-800 font-semibold text-sm">Login Berhasil!</h4>
                <p className="text-emerald-600 text-xs mt-0.5">{successMessage}</p>
              </div>
              <button
                onClick={() => setSuccessMessage(null)}
                className="p-1 rounded-lg hover:bg-emerald-100 text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 animate-progress"></div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative pt-25 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-8">
              <Star className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-700 font-medium">Platform Event #1 di Indonesia</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Eventra
              </span>
            </h1>
            
            <p className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Platform terpadu untuk mengelola pendaftaran acara, kompetisi, dan bracket
              berbagai lomba dengan pendekatan yang berkelanjutan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {!session ? (
                <>
                  <Link
                    href="/register"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] shadow-emerald-500/25"
                  >
                    <span>Mulai Sekarang</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/events"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:shadow-md transition-all duration-300 shadow-sm"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Lihat Event</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/events"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] shadow-emerald-500/25"
                  >
                    <span>Jelajahi Event</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={session.user?.role === 'admin' ? '/admin' : '/my-events'}
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:shadow-md transition-all duration-300 shadow-sm"
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
                  className="bg-white border border-emerald-100 rounded-xl p-4 text-center hover:bg-emerald-50 hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-emerald-600">
                      {stat.icon}
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</span>
                  </div>
                  <p className="text-sm text-slate-600">{stat.label}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-700 font-medium">Fitur Unggulan</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Eventra</span>?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Platform lengkap dengan semua fitur yang Anda butuhkan untuk mengelola
              event dan kompetisi kampus secara profesional dan berkelanjutan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Trophy className="w-8 h-8" />,
                title: 'Multiple Competitions',
                description: 'Kelola berbagai jenis lomba dalam satu platform',
                gradient: 'from-emerald-500 to-teal-500'
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
                gradient: 'from-amber-500 to-orange-500'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Live Updates',
                description: 'Update skor dan hasil pertandingan secara real-time',
                gradient: 'from-sky-500 to-blue-500'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Responsive Design',
                description: 'Akses dari desktop maupun mobile dengan pengalaman optimal',
                gradient: 'from-violet-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500"
              >
                <div className="relative bg-white border border-emerald-100 rounded-2xl p-8 h-full group-hover:border-emerald-200 group-hover:shadow-lg transition-all duration-300 shadow-sm overflow-hidden">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-500 group-hover:bg-clip-text transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-emerald-700 font-medium">Event Terbaru</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-2">
                Jelajahi <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Event</span> Menarik
              </h2>
              <p className="text-slate-600">
                Temukan dan ikuti event menarik yang tersedia
              </p>
            </div>
            <Link
              href="/events"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:shadow-md transition-all duration-300 shadow-sm"
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
                <div className="relative bg-white border border-emerald-100 rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.status === 'open' 
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-100 text-amber-700 border border-amber-200'
                    }`}>
                      {event.status === 'open' ? 'Buka Pendaftaran' : 'Segera'}
                    </span>
                  </div>
                  
                  {/* Event Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.gradient} flex items-center justify-center mb-6 shadow-md`}>
                    <div className="text-white">
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Category */}
                  <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-br ${event.gradient} bg-opacity-10 text-emerald-700 border border-emerald-200 text-sm mb-4`}>
                    {event.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-500 group-hover:bg-clip-text transition-all">
                    {event.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Event Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-slate-700">
                      <Calendar className="w-5 h-5 mr-3 text-emerald-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <Users className="w-5 h-5 mr-3 text-emerald-500" />
                      <span>{event.participants} Peserta</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/events/${event.id}`}
                      className="flex-1 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-center border border-emerald-200 transition-all duration-300 font-medium"
                    >
                      Detail
                    </Link>
                    <Link
                      href={`/events/${event.id}/register`}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-center transition-all duration-300 font-medium shadow-sm"
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
            {/* Natural gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50"></div>
            
            {/* Container */}
            <div className="relative bg-white border border-emerald-200 rounded-3xl p-12 text-center shadow-sm">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
                  <Award className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  Siap Mengelola Event <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Anda</span>?
                </h2>
                
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Bergabung dengan ratusan panitia dan peserta yang sudah menggunakan
                  Eventra untuk mengelola kompetisi kampus mereka.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/register?role=admin"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:shadow-md transition-all duration-300 shadow-sm"
                  >
                    <Users className="w-5 h-5" />
                    <span>Daftar sebagai Panitia</span>
                  </Link>
                  <Link
                    href="/register?role=participant"
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:shadow-md transition-all duration-300 shadow-sm"
                  >
                    <User className="w-5 h-5" />
                    <span>Daftar sebagai Peserta</span>
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-emerald-200">
                  <p className="text-slate-500 text-sm">
                    Gratis untuk event pertama. Tidak ada biaya tersembunyi. 🌱
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-700 font-medium">Keuntungan Bergabung</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Mengapa Ribuan Kampus Memilih <span className="text-emerald-600">Eventra</span>?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Platform yang terbukti membantu kampus di seluruh Indonesia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pengalaman 5+ Tahun',
                description: 'Sudah melayani lebih dari 100 kampus di Indonesia sejak 2019',
                icon: '🎯'
              },
              {
                title: 'Dukungan 24/7',
                description: 'Tim support siap membantu Anda kapan saja, dari mana saja',
                icon: '🛡️'
              },
              {
                title: 'Integrasi Mudah',
                description: 'Terintegrasi dengan sistem kampus dan metode pembayaran populer',
                icon: '⚡'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-emerald-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
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

        @keyframes slide-left {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-left {
          animation: slide-left 0.3s ease-out;
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .animate-progress {
          animation: progress 5s linear forwards;
        }
      `}</style>
    </div>
  )
}