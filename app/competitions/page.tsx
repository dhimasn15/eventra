'use client'

import { useState } from 'react'
import { 
  Trophy, 
  Users, 
  Calendar, 
  DollarSign,
  Gamepad2,
  Music,
  Cpu,
  ChevronRight,
  PlayCircle,
  Badge,
  Target,
  Sparkles,
  Zap
} from 'lucide-react'

const competitions = [
  {
    id: 1,
    name: 'Mobile Legends',
    type: 'Team',
    category: 'E-Sports',
    participants: 32,
    maxParticipants: 32,
    fee: 75000,
    status: 'open',
    icon: Gamepad2,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    name: 'FIFA 25',
    type: 'Individual',
    category: 'E-Sports',
    participants: 48,
    maxParticipants: 64,
    fee: 50000,
    status: 'open',
    icon: Trophy,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    name: 'Badminton',
    type: 'Team',
    category: 'Olahraga',
    participants: 24,
    maxParticipants: 32,
    fee: 100000,
    status: 'open',
    icon: Target,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    name: 'Billiard',
    type: 'Individual',
    category: 'Olahraga',
    participants: 16,
    maxParticipants: 32,
    fee: 75000,
    status: 'open',
    icon: Trophy,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    name: 'Battle of Bands',
    type: 'Team',
    category: 'Seni',
    participants: 8,
    maxParticipants: 16,
    fee: 150000,
    status: 'upcoming',
    icon: Music,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 6,
    name: 'Coding Challenge',
    type: 'Individual',
    category: 'Teknologi',
    participants: 40,
    maxParticipants: 50,
    fee: 0,
    status: 'open',
    icon: Cpu,
    color: 'from-gray-700 to-gray-900'
  }
]

export default function CompetitionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'E-Sports', 'Olahraga', 'Seni', 'Teknologi']

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl mb-8">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Kompetisi <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Eventra</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ikuti berbagai kompetisi menarik dan tunjukkan bakat Anda. 
            Dari e-sports hingga olahraga tradisional, semua ada di sini.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl backdrop-blur-sm border transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-blue-500/50 text-white'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Total Kompetisi</p>
              <p className="text-3xl font-bold text-white">24</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Peserta Aktif</p>
              <p className="text-3xl font-bold text-white">1,248</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Team Terdaftar</p>
              <p className="text-3xl font-bold text-white">312</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Hadiah Total</p>
              <p className="text-3xl font-bold text-white">Rp 250M</p>
            </div>
          </div>
        </div>

        {/* Competitions Grid */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Kompetisi <span className="text-blue-300">Tersedia</span>
            </h2>
            <button className="text-gray-300 hover:text-white flex items-center gap-2">
              Semua Kompetisi
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((comp) => {
              const Icon = comp.icon
              const progress = (comp.participants / comp.maxParticipants) * 100
              
              return (
                <div
                  key={comp.id}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Glass Card */}
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full group-hover:border-white/20 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${comp.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        comp.status === 'open'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {comp.status === 'open' ? 'Buka Pendaftaran' : 'Segera'}
                      </span>
                    </div>
                    
                    {/* Title and Category */}
                    <h3 className="text-2xl font-bold text-white mb-2">{comp.name}</h3>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                        {comp.type}
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                        {comp.category}
                      </span>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-between text-gray-300">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>Peserta</span>
                        </div>
                        <span className="text-white">{comp.participants}/{comp.maxParticipants}</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${comp.color} rounded-full`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between text-gray-300">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>Biaya</span>
                        </div>
                        <span className="text-white">
                          {comp.fee === 0 ? 'Gratis' : `Rp ${comp.fee.toLocaleString()}`}
                        </span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                        <PlayCircle className="w-5 h-5" />
                        Detail
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-white/30 to-white/10 hover:from-white/40 hover:to-white/20 text-white py-3 rounded-xl font-medium transition-all">
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tournament Structure */}
        <div className="glass-card p-8 rounded-3xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Struktur <span className="text-cyan-300">Turnamen</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stage: 'Pendaftaran', desc: 'Registrasi tim/peserta', icon: Badge },
              { stage: 'Babak Penyisihan', desc: '32/16 besar', icon: Target },
              { stage: 'Semifinal', desc: '4 tim terbaik', icon: Sparkles },
              { stage: 'Grand Final', desc: 'Pertandingan puncak', icon: Trophy }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.stage}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="glass-card p-8 rounded-3xl">
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
        </div>
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
      `}</style>
    </div>
  )
}