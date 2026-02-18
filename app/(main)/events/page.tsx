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
  TrendingUp,
  Gamepad2,
  DollarSign,
  Star,
  Filter,
  Clock
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
    maxParticipants: 500,
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
    maxParticipants: 128,
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
    participants: 48,
    maxParticipants: 64,
    date: '5-7 Feb 2026',
    status: 'upcoming' as const,
    icon: Trophy,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Badminton Championship',
    description: 'Kejuaraan badminton tingkat kampus',
    category: 'Olahraga',
    participants: 32,
    maxParticipants: 48,
    date: '20-22 Mar 2026',
    status: 'open' as const,
    icon: Target,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    title: 'Billiard Competition',
    description: 'Turnamen biliar untuk mahasiswa',
    category: 'Olahraga',
    participants: 24,
    maxParticipants: 32,
    date: '1-3 Apr 2026',
    status: 'open' as const,
    icon: Target,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 6,
    title: 'Coding Olympiad',
    description: 'Kompetisi pemrograman tahunan',
    category: 'Teknologi',
    participants: 75,
    maxParticipants: 100,
    date: '25-27 Mei 2026',
    status: 'upcoming' as const,
    icon: Trophy,
    color: 'from-gray-700 to-gray-900'
  }
]

export default function EventsPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('terbaru')

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
    { value: '12', label: 'Event Aktif', icon: <Calendar className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { value: '1,248', label: 'Total Peserta', icon: <Users className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { value: '8', label: 'Kompetisi', icon: <Trophy className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
    { value: '98%', label: 'Kepuasan', icon: <Star className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' }
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Cepat & Mudah',
      description: 'Buat event dalam hitungan menit dengan template siap pakai'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Target Peserta',
      description: 'Jangkau ribuan peserta potensial di seluruh Indonesia'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Analytics Lengkap',
      description: 'Pantau perkembangan event secara real-time dengan dashboard'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
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
            <span className="text-blue-400 font-medium">Events</span>
          </nav>
        </div>

        {/* Header Section */}
        <div className="glass-card rounded-3xl p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-gray-300">Temukan & Ikuti</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Explore <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Events</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Temukan dan ikuti berbagai event menarik di kampus Anda. 
                Bergabunglah dengan komunitas event terbesar di Indonesia.
              </p>
            </div>
            
            <button
              onClick={handleCreateEvent}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl glass-button"
            >
              <Plus className="w-5 h-5" />
              <span>Buat Event Baru</span>
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari event..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
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
                      ? 'glass-card-active text-white'
                      : 'glass-card hover:border-white/30 text-gray-300 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl glass-card text-gray-300 border-none focus:outline-none focus:ring-1 focus:ring-blue-500/50 cursor-pointer"
            >
              <option value="terbaru" className="bg-gray-900">Terbaru</option>
              <option value="populer" className="bg-gray-900">Populer</option>
              <option value="segara" className="bg-gray-900">Segera</option>
            </select>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
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
              className="group flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
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
                <div className="glass-card p-6 hover:border-white/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-white/10">
                    <div className="text-blue-400">
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
                <span className="text-blue-400 font-semibold">{filteredEvents.length}</span> event ditemukan
              </p>
            </div>
            <button className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
              <span className="text-sm">Lihat Semua</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="glass-card rounded-3xl p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full glass-card flex items-center justify-center">
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
              {filteredEvents.map((event) => {
                const Icon = event.icon
                const progress = (event.participants / event.maxParticipants) * 100
                
                return (
                  <div
                    key={event.id}
                    className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Glass Card */}
                    <div className="relative glass-card p-6 h-full group-hover:border-white/30 transition-all duration-300">
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
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Category */}
                      <div className="mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium glass-card">
                          {event.category}
                        </span>
                      </div>
                      
                      {/* Event Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {event.title}
                      </h3>
                      
                      {/* Event Description */}
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                      
                      {/* Event Details */}
                      <div className="space-y-3 mb-4">
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
                          <span className="text-white text-sm">{event.participants}/{event.maxParticipants}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${event.color} rounded-full transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleViewEvent(event.id)}
                          className="flex-1 py-3 rounded-xl glass-card hover:border-white/30 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                        >
                          Detail
                        </button>
                        <button
                          onClick={() => handleRegisterEvent(event.id)}
                          className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                            event.status === 'open'
                              ? 'glass-button'
                              : 'glass-card opacity-50 cursor-not-allowed text-gray-500'
                          }`}
                          disabled={event.status !== 'open'}
                        >
                          {event.status === 'open' ? 'Daftar' : 'Segera'}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="glass-card rounded-3xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Plus className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Mengadakan Event?
            </h2>
            <p className="text-gray-300 mb-8">
              Buat event Anda sendiri dan kelola dengan sistem yang profesional. 
              Eventra menyediakan semua tools yang Anda butuhkan untuk kesuksesan event.
            </p>
            <button
              onClick={handleCreateEvent}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl glass-button text-lg"
            >
              <Plus className="w-5 h-5" />
              <span>Buat Event Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Gratis untuk event pertama. Tidak ada biaya tersembunyi. 🌱
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(12px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        
        .glass-card-active {
          backdrop-filter: blur(12px);
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 8px 32px 0 rgba(59, 130, 246, 0.2);
          color: white;
        }
        
        .glass-button {
          backdrop-filter: blur(12px);
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.2));
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: white;
          transition: all 0.3s ease;
        }
        
        .glass-button:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.3));
          border-color: rgba(59, 130, 246, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px 0 rgba(59, 130, 246, 0.3);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.15;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}