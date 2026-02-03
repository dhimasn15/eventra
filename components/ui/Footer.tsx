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
  ChevronRight
} from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed with email:', email)
    setEmail('')
    // Show success message
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
      color: 'hover:text-blue-400'
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://instagram.com/eventra', 
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      href: 'https://youtube.com/eventra', 
      label: 'YouTube',
      color: 'hover:text-red-400'
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      href: 'https://discord.gg/eventra', 
      label: 'Discord',
      color: 'hover:text-indigo-400'
    },
  ]

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent -z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />

      <div className="relative px-4 pt-16 pb-8 border-t border-white/10">
        <div className="container mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Brand & Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Eventra
                  </h2>
                  <p className="text-sm text-gray-400">Event Management & Competition System</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-xl leading-relaxed">
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
                    className={`group relative p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative text-gray-400 group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Tetap Update</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Dapatkan informasi terbaru tentang event, tips, dan promo eksklusif
                langsung ke email Anda.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Anda"
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Berlangganan</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                Tautan Cepat
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-purple-500/20 transition-all">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Perusahaan</h4>
              <ul className="space-y-3">
                {company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1 h-1 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Jl. Teknologi No. 123, Digital District<br />
                    Jakarta Selatan, Indonesia 12345
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">hello@eventra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+62 812 3456 7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Eventra. All rights reserved.</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                {legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* App Badges */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-2">Download Aplikasi Mobile</p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm transition-all duration-300">
                    App Store
                  </button>
                  <button className="px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm transition-all duration-300">
                    Google Play
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