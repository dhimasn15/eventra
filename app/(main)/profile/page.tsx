'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { 
  User, 
  Mail, 
  Shield, 
  Calendar,
  Edit2,
  Camera,
  CheckCircle,
  AlertCircle,
  Loader2
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
          <p className="text-gray-400">Memuat profil...</p>
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
        return 'from-blue-500/20 to-cyan-500/20 border-blue-500/50 text-blue-300'
      case 'participant':
      default:
        return 'from-purple-500/20 to-pink-500/20 border-purple-500/50 text-purple-300'
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

  return (
    <div className="min-h-screen pt-28 pb-12 px-4 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20">
      {/* Toast Notification */}
      {message && (
        <div className="fixed top-24 left-4 right-4 max-w-md mx-auto z-[999] animate-slide-down">
          <div className={`backdrop-blur-xl ${
            message.type === 'success' 
              ? 'bg-green-500/20 border-green-500/50' 
              : 'bg-red-500/20 border-red-500/50'
          } border rounded-xl p-4 flex items-center gap-3 shadow-xl`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            )}
            <span className={`text-sm ${message.type === 'success' ? 'text-green-200' : 'text-red-200'}`}>
              {message.text}
            </span>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Profil Saya</h1>
          <p className="text-gray-400">Kelola informasi akun Anda</p>
        </div>

        {/* Profile Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-purple-600/40 to-pink-600/40 relative">
              <button className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/30 hover:bg-black/50 text-white transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Avatar */}
            <div className="relative px-6">
              <div className="absolute -top-12 left-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-4 border-gray-900 shadow-xl">
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
                  <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-purple-500 hover:bg-purple-600 text-white transition-colors shadow-lg">
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
                        className="text-2xl font-bold bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white focus:outline-none focus:border-purple-500"
                        autoFocus
                      />
                    ) : (
                      <h2 className="text-2xl font-bold text-white">{session.user?.name}</h2>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border ${getRoleBadgeColor(session.user?.role || 'participant')}`}>
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
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={isSaving || !name.trim()}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm transition-colors disabled:opacity-50 flex items-center gap-2"
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
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit Profil
                    </button>
                  )}
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </div>
                  <p className="text-white font-medium">{session.user?.email}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Role</span>
                  </div>
                  <p className="text-white font-medium capitalize">{getRoleLabel(session.user?.role || 'participant')}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">User ID</span>
                  </div>
                  <p className="text-white font-medium font-mono text-sm">{session.user?.id || '-'}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <p className="text-white font-medium">Aktif</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <button className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-white font-medium">Event Saya</span>
            </div>
            <p className="text-sm text-gray-400">Lihat event yang Anda ikuti</p>
          </button>

          <button className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-white font-medium">Keamanan</span>
            </div>
            <p className="text-sm text-gray-400">Ubah password akun Anda</p>
          </button>

          <button className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                <User className="w-5 h-5" />
              </div>
              <span className="text-white font-medium">Tim Saya</span>
            </div>
            <p className="text-sm text-gray-400">Kelola tim kompetisi Anda</p>
          </button>
        </div>
      </div>

      <style jsx global>{`
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
