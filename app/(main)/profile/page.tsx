'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  User, 
  Mail, 
  Shield, 
  Calendar,
  Edit2,
  Camera,
  CheckCircle,
  AlertCircle,
  Loader2,
  Trophy,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Award,
  Clock,
  Star
} from 'lucide-react'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login?callbackUrl=/profile')
    }
  }, [status, router])

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name)
    }
  }, [session])

  // Loading state
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
          <p className="text-gray-300">Memuat profil...</p>
        </div>
      </div>
    )
  }

  // Not authenticated
  if (!session) {
    return null
  }

  const handleSave = async () => {
    setIsSaving(true)
    setMessage(null)
    
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim() }),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Profil berhasil diperbarui!' })
        setIsEditing(false)
        // Refresh session to get updated data
        router.refresh()
      } else {
        const data = await response.json()
        setMessage({ type: 'error', text: data.message || 'Gagal memperbarui profil' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan' })
    } finally {
      setIsSaving(false)
      setTimeout(() => setMessage(null), 3000)
    }
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'from-blue-500 to-cyan-500'
      case 'participant':
      default:
        return 'from-purple-500 to-pink-500'
    }
  }

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Admin / Panitia'
      case 'participant':
      default:
        return 'Peserta / Tim'
    }
  }

  const stats = [
    { label: 'Event Diikuti', value: '12', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { label: 'Tim Bergabung', value: '3', icon: Users, color: 'from-green-500 to-emerald-500' },
    { label: 'Kemenangan', value: '5', icon: Trophy, color: 'from-orange-500 to-red-500' },
    { label: 'Poin', value: '2,450', icon: Star, color: 'from-yellow-500 to-amber-500' }
  ]

  return (
    <div className="min-h-screen pt-28 pb-12 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Toast Notification */}
      {message && (
        <div className="fixed top-24 left-4 right-4 max-w-md mx-auto z-[999] animate-slide-down">
          <div className={`glass-card rounded-xl p-4 flex items-center gap-3 shadow-xl ${
            message.type === 'success' 
              ? 'border-green-500/30' 
              : 'border-red-500/30'
          }`}>
            <div className={`w-8 h-8 rounded-lg ${
              message.type === 'success'
                ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                : 'bg-gradient-to-br from-red-500 to-pink-500'
            } flex items-center justify-center`}>
              {message.type === 'success' ? (
                <CheckCircle className="w-4 h-4 text-white" />
              ) : (
                <AlertCircle className="w-4 h-4 text-white" />
              )}
            </div>
            <span className={`text-sm ${message.type === 'success' ? 'text-green-200' : 'text-red-200'}`}>
              {message.text}
            </span>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Profil <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Saya</span>
          </h1>
          <p className="text-gray-300">Kelola informasi akun Anda</p>
        </div>

        {/* Profile Card */}
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative glass-card rounded-2xl overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-blue-600/40 via-cyan-600/40 to-purple-600/40 relative">
              <button className="absolute bottom-3 right-3 p-2 rounded-lg glass-card hover:border-white/30 text-white transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Avatar */}
            <div className="relative px-6">
              <div className="absolute -top-12 left-6">
                <div className="relative">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${getRoleBadgeColor(session.user?.role || 'participant')} flex items-center justify-center border-4 border-gray-900 shadow-xl`}>
                    {session.user?.image ? (
                      <img 
                        src={session.user.image} 
                        alt={session.user.name || 'Profile'} 
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <button className="absolute bottom-0 right-0 p-1.5 rounded-full glass-button">
                    <Camera className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="pt-16 pb-6 px-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    {isEditing ? (
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-2xl font-bold bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white focus:outline-none focus:border-blue-500"
                        autoFocus
                      />
                    ) : (
                      <h2 className="text-2xl font-bold text-white">{session.user?.name}</h2>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium glass-card border ${getRoleBadgeColor(session.user?.role || 'participant')}`}>
                      {getRoleLabel(session.user?.role || 'participant')}
                    </span>
                  </div>
                  <p className="text-gray-400">{session.user?.email}</p>
                </div>
                
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => {
                          setIsEditing(false)
                          setName(session.user?.name || '')
                        }}
                        className="px-4 py-2 rounded-lg glass-card hover:border-white/30 text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={isSaving || !name.trim()}
                        className="px-4 py-2 rounded-lg glass-button text-sm disabled:opacity-50 flex items-center gap-2"
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Menyimpan...
                          </>
                        ) : (
                          'Simpan'
                        )}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-white/30 text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit Profil
                    </button>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="glass-card p-4 rounded-xl text-center">
                      <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">Email</span>
                  </div>
                  <p className="text-white font-medium">{session.user?.email}</p>
                </div>

                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">Role</span>
                  </div>
                  <p className="text-white font-medium capitalize">{getRoleLabel(session.user?.role || 'participant')}</p>
                </div>

                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <User className="w-4 h-4 text-green-400" />
                    <span className="text-sm">User ID</span>
                  </div>
                  <p className="text-white font-medium font-mono text-sm">{session.user?.id || '-'}</p>
                </div>

                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span className="text-sm">Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <p className="text-white font-medium">Aktif</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link href="/my-events" className="group">
            <div className="glass-card p-6 rounded-xl hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-white font-semibold mb-1">Event Saya</h3>
              <p className="text-sm text-gray-400">Lihat event yang Anda ikuti</p>
            </div>
          </Link>

          <Link href="/settings" className="group">
            <div className="glass-card p-6 rounded-xl hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-white font-semibold mb-1">Keamanan</h3>
              <p className="text-sm text-gray-400">Ubah password akun Anda</p>
            </div>
          </Link>

          <Link href="/my-teams" className="group">
            <div className="glass-card p-6 rounded-xl hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-white font-semibold mb-1">Tim Saya</h3>
              <p className="text-sm text-gray-400">Kelola tim kompetisi Anda</p>
            </div>
          </Link>
        </div>

        {/* Danger Zone */}
        <div className="glass-card p-6 rounded-xl border border-red-500/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            Zona Berbahaya
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-4 py-2 rounded-lg glass-card border-red-500/30 hover:bg-red-500/10 text-red-300 hover:text-red-200 transition-colors text-sm">
              Hapus Akun
            </button>
            <button className="px-4 py-2 rounded-lg glass-card border-red-500/30 hover:bg-red-500/10 text-red-300 hover:text-red-200 transition-colors text-sm flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout dari Semua Perangkat
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Tindakan ini tidak dapat dibatalkan. Harap berhati-hati.
          </p>
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
      `}</style>
    </div>
  )
}