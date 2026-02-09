'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Calendar, 
  Users, 
  Trophy, 
  MapPin, 
  DollarSign, 
  FileText, 
  Image as ImageIcon,
  Upload,
  X,
  ChevronLeft,
  Sparkles,
  Clock,
  Globe,
  Lock,
  AlertCircle
} from 'lucide-react'

export default function CreateEventPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    // Step 1
    title: '',
    category: '',
    description: '',
    
    // Step 2
    startDate: '',
    endDate: '',
    location: '',
    maxParticipants: '',
    isOnline: false,
    
    // Step 3
    registrationFee: '',
    prizePool: '',
    registrationDeadline: '',
    
    // Step 4
    rules: '',
    requirements: '',
    contactInfo: '',
    bannerImage: null as File | null
  })

  const categories = [
    'E-Sports',
    'Olahraga',
    'Akademik',
    'Seni & Musik',
    'Teknologi',
    'Multi-event'
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleInputChange('bannerImage', file)
    }
  }

  const removeImage = () => {
    handleInputChange('bannerImage', null)
  }

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Event created:', formData)
    setIsSubmitting(false)
    router.push('/events')
  }

  const steps = [
    { number: 1, title: 'Informasi Dasar', icon: <FileText className="w-4 h-4" /> },
    { number: 2, title: 'Waktu & Tempat', icon: <Calendar className="w-4 h-4" /> },
    { number: 3, title: 'Biaya & Hadiah', icon: <DollarSign className="w-4 h-4" /> },
    { number: 4, title: 'Detail Lainnya', icon: <AlertCircle className="w-4 h-4" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-20 px-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-40 -left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronLeft className="w-4 h-4 rotate-180" />
            <Link href="/events" className="hover:text-white transition-colors">
              Events
            </Link>
            <ChevronLeft className="w-4 h-4 rotate-180" />
            <span className="text-purple-300">Buat Event</span>
          </nav>
        </div>

        {/* Header */}
        <div className="glass-card p-8 rounded-3xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-purple-300" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Buat Event Baru
              </h1>
              <p className="text-gray-300">
                Isi form berikut untuk membuat event baru di Eventra
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div
                key={s.number}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  step === s.number
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                    : step > s.number
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-white/5 border border-white/10 opacity-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  step >= s.number
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-gray-400'
                }`}>
                  {s.number}
                </div>
                <div>
                  <p className="text-xs text-gray-400">Step {s.number}</p>
                  <p className={`text-sm font-medium ${
                    step >= s.number ? 'text-white' : 'text-gray-400'
                  }`}>
                    {s.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl">
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Event
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                  placeholder="Contoh: Mobile Legends Campus Cup 2025"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kategori
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all"
                  required
                >
                  <option value="" className="bg-gray-800">Pilih Kategori</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-gray-800">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Deskripsi Event
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                  placeholder="Jelaskan detail event, tujuan, dan manfaat bagi peserta..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Banner Event
                </label>
                <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-colors">
                  {formData.bannerImage ? (
                    <div className="relative">
                      <img
                        src={URL.createObjectURL(formData.bannerImage)}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-2 bg-red-500/20 backdrop-blur-sm rounded-full hover:bg-red-500/30 transition-colors"
                      >
                        <X className="w-4 h-4 text-red-300" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 mb-2">Upload banner event</p>
                      <p className="text-sm text-gray-500 mb-4">
                        Rekomendasi: 1200x400px, format JPG/PNG
                      </p>
                      <label className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl cursor-pointer hover:from-purple-500/30 hover:to-pink-500/30 transition-all">
                        <Upload className="w-4 h-4" />
                        <span>Pilih File</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Time & Place */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tanggal Mulai
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tanggal Selesai
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Tipe Event
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange('isOnline', false)}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      !formData.isOnline
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <MapPin className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-medium">Offline</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('isOnline', true)}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      formData.isOnline
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Globe className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-medium">Online</p>
                  </button>
                </div>
              </div>

              {!formData.isOnline && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Lokasi
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                    placeholder="Contoh: Gedung Serba Guna Kampus"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Maksimal Peserta
                </label>
                <input
                  type="number"
                  value={formData.maxParticipants}
                  onChange={(e) => handleInputChange('maxParticipants', e.target.value)}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                  placeholder="Contoh: 128"
                  min="1"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Fees & Prizes */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Biaya Pendaftaran
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.registrationFee}
                      onChange={(e) => handleInputChange('registrationFee', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                      placeholder="0 (gratis)"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Kosongkan atau isi 0 untuk event gratis
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Total Hadiah
                  </label>
                  <div className="relative">
                    <Trophy className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.prizePool}
                      onChange={(e) => handleInputChange('prizePool', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                      placeholder="Contoh: 10000000"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Batas Pendaftaran
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="datetime-local"
                    value={formData.registrationDeadline}
                    onChange={(e) => handleInputChange('registrationDeadline', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Details */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Aturan dan Ketentuan
                </label>
                <textarea
                  value={formData.rules}
                  onChange={(e) => handleInputChange('rules', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                  placeholder="Tulis aturan lengkap kompetisi..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Persyaratan Peserta
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                  placeholder="Contoh: Minimal semester 3, memiliki KTM aktif..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kontak Panitia
                </label>
                <input
                  type="text"
                  value={formData.contactInfo}
                  onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                  placeholder="Contoh: WhatsApp: 081234567890"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 mt-8 border-t border-white/10">
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Kembali
                </button>
              )}
            </div>
            
            <div className="flex gap-4">
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Lanjut
                  <ChevronLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Membuat Event...</span>
                    </>
                  ) : (
                    <>
                      <Trophy className="w-5 h-5" />
                      <span>Buat Event</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
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
        
        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
}