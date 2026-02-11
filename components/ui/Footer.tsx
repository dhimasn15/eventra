'use client'

import Link from 'next/link'
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  Heart,
  Sparkles,
  MessageCircle,
  Calendar,
  Users,
  Trophy,
  ChevronRight,
  Leaf,
  Download,
  Apple,
  Play
} from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
    alert('Terima kasih telah berlangganan newsletter kami!')
  }

  const quickLinks = [
    { name: 'Event', href: '/events', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Kompetisi', href: '/competitions', icon: <Trophy className="w-4 h-4" /> },
    { name: 'Tim', href: '/teams', icon: <Users className="w-4 h-4" /> },
    { name: 'Bracket', href: '/brackets', icon: <Sparkles className="w-4 h-4" /> },
  ]

  const resources = [
    { name: 'Dokumentasi', href: '/docs' },
    { name: 'Panduan Panitia', href: '/guides/organizer' },
    { name: 'Panduan Peserta', href: '/guides/participant' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ]

  const company = [
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Karir', href: '/careers' },
    { name: 'Partner', href: '/partners' },
    { name: 'Kontak', href: '/contact' },
    { name: 'Press Kit', href: '/press' },
  ]

  const legal = [
    { name: 'Kebijakan Privasi', href: '/privacy' },
    { name: 'Syarat Layanan', href: '/terms' },
    { name: 'Kebijakan Cookie', href: '/cookies' },
    { name: 'Kode Etik', href: '/code-of-conduct' },
  ]

  const socialLinks = [
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com/eventra', 
      label: 'Twitter',
      color: 'text-emerald-600 hover:text-emerald-700'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://instagram.com/eventra', 
      label: 'Instagram',
      color: 'text-emerald-600 hover:text-emerald-700'
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      href: 'https://youtube.com/eventra', 
      label: 'YouTube',
      color: 'text-emerald-600 hover:text-emerald-700'
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      href: 'https://discord.gg/eventra', 
      label: 'Discord',
      color: 'text-emerald-600 hover:text-emerald-700'
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 border-t border-emerald-100">
      {/* Natural Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      </div>

      <div className="relative px-4 pt-16 pb-8">
        <div className="container mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Brand & Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Eventra
                  </h2>
                  <p className="text-sm text-emerald-700 font-medium">Event Management & Competition System</p>
                </div>
              </div>
              <p className="text-slate-600 mb-8 max-w-xl leading-relaxed">
                Platform terpadu untuk mengelola pendaftaran acara, kompetisi, dan bracket
                berbagai lomba kampus di seluruh Indonesia. Bergabung dengan komunitas
                event organizer dan peserta terbesar di Indonesia.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl bg-white/80 border border-emerald-200 hover:border-emerald-300 transition-all duration-300 ${social.color} shadow-sm`}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Tetap Update</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Dapatkan informasi terbaru tentang event, tips, dan promo eksklusif
                langsung ke email Anda.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Anda"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-emerald-200 rounded-xl text-slate-800 placeholder-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl shadow-emerald-500/25 hover:scale-[1.02]"
                >
                  <span>Berlangganan</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-4">
                Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-slate-800 font-bold mb-6 text-lg flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                Tautan Cepat
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 group-hover:bg-emerald-100 border border-emerald-200 transition-all">
                        <div className="text-emerald-500">
                          {link.icon}
                        </div>
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-slate-800 font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-emerald-600 transition-colors text-sm flex items-center gap-2 group hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-slate-800 font-bold mb-6 text-lg">Perusahaan</h4>
              <ul className="space-y-3">
                {company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-emerald-600 transition-colors text-sm flex items-center gap-2 group hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-slate-800 font-bold mb-6 text-lg">Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">
                    Jl. Teknologi No. 123, Digital District<br />
                    Jakarta Selatan, Indonesia 12345
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">hello@eventra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">+62 812 3456 7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-slate-600 text-sm">
                <span>© {currentYear} Eventra. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                {legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs text-slate-500 hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* App Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center sm:text-right">
                <p className="text-sm text-slate-600 mb-2">Download Aplikasi Mobile</p>
                <div className="flex gap-3">
                  <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-emerald-200 text-emerald-700 hover:bg-white hover:shadow-md transition-all duration-300 shadow-sm">
                    <Apple className="w-4 h-4" />
                    <span className="text-sm">App Store</span>
                  </button>
                  <button className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-emerald-200 text-emerald-700 hover:bg-white hover:shadow-md transition-all duration-300 shadow-sm">
                    <Play className="w-4 h-4" />
                    <span className="text-sm">Google Play</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
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
      `}</style>
    </footer>
  )
}