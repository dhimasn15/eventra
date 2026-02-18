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
  Check,
  Star,
  ArrowRight,
  PlayCircle,
  Badge,
  Music,
  Cpu,
  DollarSign
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
      icon: Trophy,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      title: 'Mobile Legends Campus Cup',
      description: 'Turnamen Mobile Legends antar kampus se-Indonesia',
      category: 'E-Sports',
      participants: 128,
      date: '10-12 Jan 2026',
      status: 'upcoming' as const,
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'FIFA Tournament',
      description: 'Kompetisi FIFA untuk pecinta sepakbola virtual',
      category: 'E-Sports',
      participants: 64,
      date: '5-7 Feb 2026',
      status: 'upcoming' as const,
      icon: Goal,
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const benefits = [
    {
      title: 'Pengalaman 5+ Tahun',
      description: 'Sudah melayani lebih dari 100 kampus di Indonesia sejak 2019',
      icon: '🎯',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Dukungan 24/7',
      description: 'Tim support siap membantu Anda kapan saja, dari mana saja',
      icon: '🛡️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Integrasi Mudah',
      description: 'Terintegrasi dengan sistem kampus dan metode pembayaran populer',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 "></div>
      </div>

      {/* Toast Notification */}
      {successMessage && (
        <div className="fixed top-6 right-6 z-[999] animate-slide-left">
          <div className="glass-card p-4 rounded-2xl overflow-hidden min-w-[320px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm">Login Berhasil!</h4>
                <p className="text-gray-300 text-xs mt-0.5">{successMessage}</p>
              </div>
              <button
                onClick={() => setSuccessMessage(null)}
                className="p-1 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 animate-progress"></div>
          </div>
        </div>
      )}

      <div className="relative container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="glass-card rounded-3xl p-12 md:p-16 mb-12 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl mb-8 mx-auto">
              <Trophy className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Eventra
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Platform terpadu untuk mengelola pendaftaran acara, kompetisi, dan bracket
              berbagai lomba dengan pendekatan yang berkelanjutan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {!session ? (
                <>
                  <Link
                    href="/register"
                    className="group glass-button px-8 py-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>Mulai Sekarang</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/events"
                    className="group glass-button px-8 py-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Lihat Event</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/events"
                    className="group glass-button px-8 py-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>Jelajahi Event</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={session.user?.role === 'admin' ? '/admin' : '/my-events'}
                    className="group glass-button px-8 py-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <User className="w-5 h-5" />
                    <span>{session.user?.role === 'admin' ? 'Dashboard' : 'My Events'}</span>
                  </Link>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Total Event</p>
                <p className="text-3xl font-bold text-white">150+</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Peserta Aktif</p>
                <p className="text-3xl font-bold text-white">5,248</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Kampus</p>
                <p className="text-3xl font-bold text-white">100+</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Hadiah Total</p>
                <p className="text-3xl font-bold text-white">Rp 500M+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-gray-300 font-medium">Fitur Unggulan</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Eventra</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Platform lengkap dengan semua fitur yang Anda butuhkan untuk mengelola
              event dan kompetisi kampus secara profesional dan berkelanjutan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Trophy,
                title: 'Multiple Competitions',
                description: 'Kelola berbagai jenis lomba dalam satu platform',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: Users,
                title: 'Team Management',
                description: 'Buat dan kelola tim dengan sistem invite yang mudah',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Calendar,
                title: 'Bracket System',
                description: 'Generate bracket otomatis dengan sistem eliminasi',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: Shield,
                title: 'Payment Verification',
                description: 'Sistem verifikasi pembayaran yang aman dan transparan',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: TrendingUp,
                title: 'Live Updates',
                description: 'Update skor dan hasil pertandingan secara real-time',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Akses dari desktop maupun mobile dengan pengalaman optimal',
                gradient: 'from-gray-700 to-gray-900'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative glass-card p-8 h-full group-hover:border-white/20 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Featured Events */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
                <Calendar className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-gray-300 font-medium">Event Terbaru</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Jelajahi <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Event</span> Menarik
              </h2>
              <p className="text-gray-300">
                Temukan dan ikuti event menarik yang tersedia
              </p>
            </div>
            <Link
              href="/events"
              className="group glass-button px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => {
              const Icon = event.icon
              const progress = (event.participants / (event.id === 1 ? 500 : event.id === 2 ? 128 : 64)) * 100
              
              return (
                <div
                  key={event.id}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative glass-card p-6 h-full group-hover:border-white/20 transition-all duration-300">
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === 'open' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {event.status === 'open' ? 'Buka Pendaftaran' : 'Segera'}
                      </span>
                    </div>
                    
                    {/* Event Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Category */}
                    <span className="px-3 py-1 rounded-full text-xs font-medium glass-card mb-4 inline-block">
                      {event.category}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Event Details */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center justify-between text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">Tanggal</span>
                        </div>
                        <span className="text-white text-sm">{event.date}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-gray-300">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">Peserta</span>
                        </div>
                        <span className="text-white text-sm">{event.participants} Peserta</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${event.color} rounded-full`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/events/${event.id}`}
                        className="flex-1 glass-button py-3 rounded-xl text-sm font-medium text-center"
                      >
                        Detail
                      </Link>
                      <Link
                        href={`/events/${event.id}/register`}
                        className={`flex-1 py-3 rounded-xl text-sm font-medium text-center transition-all ${
                          event.status === 'open'
                            ? 'glass-button bg-gradient-to-r from-white/30 to-white/10 hover:from-white/40 hover:to-white/20'
                            : 'glass-card opacity-50 cursor-not-allowed'
                        }`}
                      >
                        {event.status === 'open' ? 'Daftar' : 'Segera'}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Tournament Structure */}
        <section className="glass-card p-8 rounded-3xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Struktur <span className="text-cyan-300">Turnamen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stage: 'Pendaftaran', desc: 'Registrasi tim/peserta', icon: Badge, color: 'from-blue-500 to-cyan-500' },
              { stage: 'Babak Penyisihan', desc: '32/16 besar', icon: Target, color: 'from-green-500 to-emerald-500' },
              { stage: 'Semifinal', desc: '4 tim terbaik', icon: Sparkles, color: 'from-orange-500 to-red-500' },
              { stage: 'Grand Final', desc: 'Pertandingan puncak', icon: Trophy, color: 'from-purple-500 to-pink-500' }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.stage}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <Check className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-gray-300 font-medium">Keuntungan Bergabung</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mengapa Ribuan Kampus Memilih <span className="text-cyan-300">Eventra</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Platform yang terbukti membantu kampus di seluruh Indonesia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative glass-card p-8 text-center group-hover:border-white/20 transition-all duration-300">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="glass-card p-8 rounded-3xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Pertanyaan <span className="text-purple-300">Umum</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Bagaimana cara mendaftar kompetisi?',
                a: 'Login ke akun Eventra, pilih kompetisi yang diinginkan, dan klik tombol "Daftar".'
              },
              {
                q: 'Apakah bisa mendaftar sebagai tim?',
                a: 'Ya, untuk kompetisi team-based, ketua tim bisa membuat tim dan mengundang anggota.'
              },
              {
                q: 'Bagaimana sistem pembayaran?',
                a: 'Pembayaran via transfer bank, kemudian upload bukti pembayaran untuk diverifikasi admin.'
              },
              {
                q: 'Kapan jadwal pertandingan?',
                a: 'Jadwal akan diumumkan setelah pendaftaran ditutup dan bracket dibuat.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="glass-card p-12 rounded-3xl text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Mengelola Event <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Anda</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Bergabung dengan ratusan panitia dan peserta yang sudah menggunakan
              Eventra untuk mengelola kompetisi kampus mereka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register?role=admin"
                className="group glass-button px-8 py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Daftar sebagai Panitia</span>
              </Link>
              <Link
                href="/register?role=participant"
                className="group glass-button px-8 py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <User className="w-5 h-5" />
                <span>Daftar sebagai Peserta</span>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Gratis untuk event pertama. Tidak ada biaya tersembunyi. 🌱
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(12px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        
        .glass-button {
          backdrop-filter: blur(12px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          transition: all 0.3s ease;
        }
        
        .glass-button:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
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

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}