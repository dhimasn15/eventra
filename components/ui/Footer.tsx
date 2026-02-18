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
  Play,
  Github,
  Twitch,
  Linkedin
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
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/eventra', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://linkedin.com/company/eventra', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative px-4 pt-16 pb-8">
        <div className="container mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Brand & Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Eventra
                  </h2>
                  <p className="text-sm text-blue-300 font-medium">Event Management & Competition System</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-xl leading-relaxed">
                Platform terpadu untuk mengelola pendaftaran acara, kompetisi, dan bracket
                berbagai lomba kampus di seluruh Indonesia. Bergabung dengan komunitas
                event organizer dan peserta terbesar di Indonesia.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl glass-card hover:border-white/30 transition-all duration-300 text-gray-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Tetap Update</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Dapatkan informasi terbaru tentang event, tips, dan promo eksklusif
                langsung ke email Anda.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Anda"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-button"
                >
                  <span>Berlangganan</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                Tautan Cepat
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 border border-white/10 transition-all">
                        <div className="text-blue-400">
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
              <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group hover:translate-x-1 transition-transform"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Jl. Teknologi No. 123, Digital District<br />
                    Jakarta Selatan, Indonesia 12345
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">hello@eventra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+62 812 3456 7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Eventra. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> in Indonesia
                </span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                {legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* App Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center sm:text-right">
                <p className="text-sm text-gray-300 mb-2">Download Aplikasi Mobile</p>
                <div className="flex gap-3">
                  <button className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-card hover:border-white/30 transition-all duration-300">
                    <Apple className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">App Store</span>
                  </button>
                  <button className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-card hover:border-white/30 transition-all duration-300">
                    <Play className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">Google Play</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  )
}