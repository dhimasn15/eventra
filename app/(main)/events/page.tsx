'use client'

import { useState } from 'react'
import { Search, Filter, Calendar, Users, Trophy, ChevronRight, Plus } from 'lucide-react'
import EventCard from '@/components/events/EventCard'

const categories = [
  'Semua',
  'E-Sports',
  'Olahraga',
  'Akademik',
  'Seni & Musik',
  'Teknologi'
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
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Mobile Legends Campus Cup',
    description: 'Turnamen Mobile Legends antar kampus se-Indonesia',
    category: 'E-Sports',
    participants: 128,
    date: '10-12 Jan 2026',
    status: 'upcoming' as const,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'FIFA Tournament',
    description: 'Kompetisi FIFA untuk pecinta sepakbola virtual',
    category: 'E-Sports',
    participants: 64,
    date: '5-7 Feb 2026',
    status: 'upcoming' as const,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Badminton Championship',
    description: 'Kejuaraan badminton tingkat kampus',
    category: 'Olahraga',
    participants: 48,
    date: '20-22 Mar 2026',
    status: 'open' as const,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Billiard Competition',
    description: 'Turnamen biliar untuk mahasiswa',
    category: 'Olahraga',
    participants: 32,
    date: '1-3 Apr 2026',
    status: 'open' as const,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Coding Olympiad',
    description: 'Kompetisi pemrograman tahunan',
    category: 'Teknologi',
    participants: 96,
    date: '25-27 Mei 2026',
    status: 'upcoming' as const,
    color: 'from-gray-700 to-gray-900'
  }
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'Semua' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Glassmorphism Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-40 -left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="glass-card mb-12 p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Explore <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Events</span>
              </h1>
              <p className="text-gray-300 text-lg">
                Temukan dan ikuti berbagai event menarik di kampus Anda
              </p>
            </div>
            <button className="glass-button group flex items-center gap-2 px-6 py-3 rounded-xl">
              <Plus className="w-5 h-5" />
              <span>Buat Event Baru</span>
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari event..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Event Aktif</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Peserta</p>
                <p className="text-2xl font-bold text-white">1,248</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Kompetisi</p>
                <p className="text-2xl font-bold text-white">8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Event Terbaru <span className="text-purple-300">({filteredEvents.length})</span>
            </h2>
            <button className="text-gray-300 hover:text-white flex items-center gap-2">
              Lihat Semua
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="glass-card p-12 rounded-3xl text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-700/20 to-gray-900/20 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Event Tidak Ditemukan</h3>
              <p className="text-gray-400">Coba kata kunci atau kategori lain</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-80`}></div>
                  
                  {/* Glass Effect */}
                  <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 h-full">
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === 'open' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : event.status === 'upcoming'
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          : 'bg-red-500/20 text-red-300 border border-red-500/30'
                      }`}>
                        {event.status === 'open' ? 'Buka' : 'Segera'}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                        {event.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-3" />
                        <span>{event.participants} Peserta</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-medium transition-all">
                        Detail
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-white/30 to-white/10 hover:from-white/40 hover:to-white/20 text-white py-3 rounded-xl font-medium transition-all">
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="glass-card p-8 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ingin Mengadakan Event?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Buat event Anda sendiri dan kelola dengan sistem yang profesional.
            Eventra menyediakan semua tools yang Anda butuhkan.
          </p>
          <button className="glass-button px-8 py-3 rounded-xl text-lg font-semibold">
            Buat Event Sekarang
          </button>
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
      `}</style>
    </div>
  )
}

