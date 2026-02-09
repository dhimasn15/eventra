'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Search, 
  Calendar, 
  Users, 
  Trophy, 
  ChevronRight, 
  Plus, 
  ChevronLeft,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react'

const categories = [
  'Semua',
  'E-Sports',
  'Olahraga',
  'Akademik',
  'Seni & Musik',
  'Teknologi',
  'Multi-event'
]

const events = [
  {
    id: 1,
    title: 'Forcalympic 2025',
    description: 'Olimpiade game dan olahraga kampus terbesar tahun ini',
    category: 'Multi-event',
    participants: 250,
    date: '15-20 Des 2025',
    status: 'open' as const,
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
  },
  {
    id: 2,
    title: 'Mobile Legends Campus Cup',
    description: 'Turnamen Mobile Legends antar kampus se-Indonesia',
    category: 'E-Sports',
    participants: 128,
    date: '10-12 Jan 2026',
    status: 'upcoming' as const,
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
    color: 'from-green-500 to-emerald-500',
    gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20'
  },
  {
    id: 4,
    title: 'Badminton Championship',
    description: 'Kejuaraan badminton tingkat kampus',
    category: 'Olahraga',
    participants: 48,
    date: '20-22 Mar 2026',
    status: 'open' as const,
    color: 'from-orange-500 to-red-500',
    gradient: 'bg-gradient-to-br from-orange-500/20 to-red-500/20'
  },
  {
    id: 5,
    title: 'Billiard Competition',
    description: 'Turnamen biliar untuk mahasiswa',
    category: 'Olahraga',
    participants: 32,
    date: '1-3 Apr 2026',
    status: 'open' as const,
    color: 'from-indigo-500 to-purple-500',
    gradient: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20'
  },
  {
    id: 6,
    title: 'Coding Olympiad',
    description: 'Kompetisi pemrograman tahunan',
    category: 'Teknologi',
    participants: 96,
    date: '25-27 Mei 2026',
    status: 'upcoming' as const,
    color: 'from-gray-700 to-gray-900',
    gradient: 'bg-gradient-to-br from-gray-700/20 to-gray-900/20'
  }
]

export default function EventsPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'Semua' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCreateEvent = () => {
    router.push('/events/create')
  }

  const handleViewEvent = (id: number) => {
    router.push(`/events/${id}`)
  }

  const handleRegisterEvent = (id: number) => {
    router.push(`/events/${id}/register`)
  }

  const stats = [
    { value: '12', label: 'Event Aktif', icon: <Calendar className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { value: '1,248', label: 'Total Peserta', icon: <Users className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { value: '8', label: 'Kompetisi', icon: <Trophy className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { value: '98%', label: 'Kepuasan', icon: <Sparkles className="w-6 h-6" />, color: 'from-orange-500 to-yellow-500' }
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Cepat & Mudah',
      description: 'Buat event dalam hitungan menit'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Target Peserta',
      description: 'Jangkau ribuan peserta potensial'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Analytics Lengkap',
      description: 'Pantau perkembangan event secara real-time'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/30">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-40 -left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
            >
              <ChevronLeft className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span>Beranda</span>
            </Link>
            <ChevronLeft className="w-4 h-4 rotate-180 text-gray-600" />
            <span className="text-purple-300 font-medium">Events</span>
          </nav>
        </div>

        {/* Header Section */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 mb-4">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span className="text-sm text-gray-300">Temukan & Ikuti</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Explore <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Events</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Temukan dan ikuti berbagai event menarik di kampus Anda. 
                Bergabunglah dengan komunitas event terbesar di Indonesia.
              </p>
            </div>
            
            <button
              onClick={handleCreateEvent}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <Plus className="w-5 h-5" />
              <span>Buat Event Baru</span>
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari event..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                />
              </div>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'backdrop-blur-sm bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-30`}></div>
              <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center border border-white/10`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Kenapa Buat Event di Eventra?
              </h2>
              <p className="text-gray-400">
                Platform terlengkap untuk mengelola event kampus
              </p>
            </div>
            <Link
              href="/events/create"
              className="group flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
            >
              <span>Pelajari lebih lanjut</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 border border-white/10">
                    <div className="text-purple-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Event Terbaru
              </h2>
              <p className="text-gray-400">
                <span className="text-purple-300 font-semibold">{filteredEvents.length}</span> event ditemukan
              </p>
            </div>
            <button className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
              <span className="text-sm">Lihat Semua</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700/20 to-gray-900/20 flex items-center justify-center border border-white/10">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Event Tidak Ditemukan</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Tidak ada event yang cocok dengan pencarian Anda. 
                Coba gunakan kata kunci lain atau pilih kategori berbeda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10`}></div>
                  
                  {/* Glass Effect Card */}
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-6 h-full">
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                        event.status === 'open' 
                          ? 'bg-green-500/20 text-green-300 border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                      }`}>
                        {event.status === 'open' ? 'Buka Pendaftaran' : 'Segera'}
                      </span>
                    </div>
                    
                    {/* Category */}
                    <div className="mb-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10 ${event.gradient} text-white`}>
                        {event.category}
                      </span>
                    </div>
                    
                    {/* Event Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {event.title}
                    </h3>
                    
                    {/* Event Description */}
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Event Details */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-3 text-gray-400" />
                        <span className="text-sm">{event.participants} Peserta</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleViewEvent(event.id)}
                        className="flex-1 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => handleRegisterEvent(event.id)}
                        className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          event.status === 'open'
                            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white hover:from-purple-500/30 hover:to-pink-500/30'
                            : 'bg-gradient-to-r from-gray-700/20 to-gray-900/20 border border-gray-700/30 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={event.status !== 'open'}
                      >
                        {event.status === 'open' ? 'Daftar' : 'Segera'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Siap Mengadakan Event?
            </h2>
            <p className="text-gray-300 mb-8">
              Buat event Anda sendiri dan kelola dengan sistem yang profesional. 
              Eventra menyediakan semua tools yang Anda butuhkan untuk kesuksesan event.
            </p>
            <button
              onClick={handleCreateEvent}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <Plus className="w-5 h-5" />
              <span>Buat Event Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Gratis untuk event pertama. Tidak ada biaya tersembunyi.
              </p>
            </div>
          </div>
        </div>
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
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      g                                                                                                                                                                                                                                            )
}