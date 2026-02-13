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
  ArrowRight
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
      color: 'from-emerald-500 to-teal-500',
      gradient: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20'
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
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
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
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20'
    }
  ]


  const benefits = [
    {
      title: 'Pengalaman 5+ Tahun',
      description: 'Sudah melayani lebih dari 100 kampus di Indonesia sejak 2019',
      icon: '🎯',
      color: 'from-emerald-500 to-teal-500'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/30">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200 dark:bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Toast Notification */}
      {successMessage && (
        <div className="fixed top-6 right-6 z-[999] animate-slide-left">
          <div className="relative backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
            <div className="relative p-4 flex items-center gap-4 min-w-[320px]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-emerald-800 dark:text-emerald-300 font-semibold text-sm">Login Berhasil!</h4>
                <p className="text-emerald-600 dark:text-emerald-400 text-xs mt-0.5">{successMessage}</p>
              </div>
              <button
                onClick={() => setSuccessMessage(null)}
                className="p-1 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 animate-progress"></div>
          </div>
        </div>
      )}

      <div className="relative container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200/50 dark:border-emerald-500/20 rounded-3xl p-8 md:p-12 mb-8 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30 mb-8">
              <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">Platform Event #1 di Indonesia</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Eventra
              </span>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
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
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-md transition-all duration-300 shadow-sm"
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
                    className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-md transition-all duration-300 shadow-sm"
                  >
                    <User className="w-5 h-5" />
                    <span>{session.user?.role === 'admin' ? 'Dashboard' : 'My Events'}</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30 mb-4">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">Fitur Unggulan</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Eventra</span>?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 dark:opacity-20`}></div>
                <div className="relative backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl p-8 h-full hover:border-emerald-300 dark:hover:border-emerald-400/40 transition-all duration-300 shadow-sm overflow-hidden">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-500 transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Events */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30 mb-4">
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">Event Terbaru</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Jelajahi <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Event</span> Menarik
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Temukan dan ikuti event menarik yang tersedia
              </p>
            </div>
            <Link
              href="/events"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-md transition-all duration-300 shadow-sm"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 dark:opacity-20`}></div>
                
                {/* Glass Effect Card */}
                <div className="relative backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-emerald-200 dark:border-emerald-500/30 rounded-3xl p-6 h-full shadow-sm">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                      event.status === 'open' 
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                        : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
                    }`}>
                      {event.status === 'open' ? 'Buka Pendaftaran' : 'Segera'}
                    </span>
                  </div>
                  
                  {/* Event Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-6 shadow-md`}>
                    <div className="text-white">
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Category */}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-emerald-200 dark:border-emerald-500/30 ${event.gradient} text-emerald-700 dark:text-emerald-300 mb-4 inline-block`}>
                    {event.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-500 transition-all duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Event Details */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-slate-700 dark:text-slate-300">
                      <Calendar className="w-4 h-4 mr-3 text-emerald-500" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-slate-700 dark:text-slate-300">
                      <Users className="w-4 h-4 mr-3 text-emerald-500" />
                      <span className="text-sm">{event.participants} Peserta</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/events/${event.id}`}
                      className="flex-1 py-3 rounded-xl backdrop-blur-sm bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all duration-300 text-sm font-medium text-center"
                    >
                      Detail
                    </Link>
                    <Link
                      href={`/events/${event.id}/register`}
                      className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-center ${
                        event.status === 'open'
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border border-emerald-500/30 text-white hover:from-emerald-600 hover:to-teal-600 shadow-sm'
                          : 'bg-gradient-to-r from-slate-200 dark:from-slate-700/20 to-slate-300 dark:to-slate-900/20 border border-slate-300 dark:border-slate-700/30 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {event.status === 'open' ? 'Daftar' : 'Segera'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30 mb-4">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">Keuntungan Bergabung</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Mengapa Ribuan Kampus Memilih <span className="text-emerald-600 dark:text-emerald-400">Eventra</span>?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Platform yang terbukti membantu kampus di seluruh Indonesia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10 dark:opacity-20`}></div>
                <div className="relative backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 shadow-sm">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-emerald-200 dark:border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
              <Award className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Siap Mengelola Event <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Anda</span>?
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Bergabung dengan ratusan panitia dan peserta yang sudah menggunakan
              Eventra untuk mengelola kompetisi kampus mereka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register?role=admin"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-md transition-all duration-300 shadow-sm"
              >
                <Users className="w-5 h-5" />
                <span>Daftar sebagai Panitia</span>
              </Link>
              <Link
                href="/register?role=participant"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl backdrop-blur-sm bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-md transition-all duration-300 shadow-sm"
              >
                <User className="w-5 h-5" />
                <span>Daftar sebagai Peserta</span>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-200 dark:border-emerald-500/20">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Gratis untuk event pertama. Tidak ada biaya tersembunyi. 🌱
              </p>
            </div>
          </div>
        </section>
      </div>

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

        .animation-delay-4000 {
          animation-delay: 4s;
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