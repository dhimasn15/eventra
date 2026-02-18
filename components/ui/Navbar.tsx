'use client'

import { useState, useEffect } from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { 
  Menu, 
  X, 
  User,
  Calendar,
  Home,
  Users,
  LogIn,
  UserPlus,
  LogOut,
  Bell,
  Settings,
  ChevronDown,
  DollarSign,
  TrendingUp,
  Trophy,
  Sparkles,
  Search,
  Plus,
  Target,
  Sun,
  Moon,
  Gamepad2,
  Shield
} from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Events', href: '/events', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Competitions', href: '/competitions', icon: <Trophy className="w-5 h-5" /> },
    { name: 'Teams', href: '/teams', icon: <Users className="w-5 h-5" /> },
    { name: 'Payments', href: '/payments', icon: <DollarSign className="w-5 h-5" /> },
  ]

  const userMenuItems = [
    { name: 'Profile', href: '/profile', icon: <User className="w-4 h-4" /> },
    { name: 'My Teams', href: '/teams', icon: <Users className="w-4 h-4" /> },
    { name: 'My Events', href: '/my-events', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Settings', href: '/settings', icon: <Settings className="w-4 h-4" /> },
  ]

  const adminMenuItems = [
    { name: 'Dashboard', href: '/admin', icon: <Home className="w-4 h-4" /> },
    { name: 'Manage Events', href: '/admin/events', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Verify Payments', href: '/admin/payments', icon: <DollarSign className="w-4 h-4" /> },
    { name: 'Manage Users', href: '/admin/users', icon: <Users className="w-4 h-4" /> },
  ]

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' })
    setIsUserMenuOpen(false)
  }

  const getNavLinkClass = (href: string) => {
    const isActive = pathname === href
    return `flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
      isActive    
        ? 'glass-card-active text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30' 
        : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
    }`
  }

  const isAdmin = session?.user?.role === 'admin'

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-colors">
        <div className="container mx-auto">
          <div className="glass-card rounded-2xl">
            <div className="px-6">
              <div className="flex justify-between items-center py-3">
                {/* Logo */}
                <Link 
                  href="/" 
                  className="flex items-center gap-3 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Eventra</span>
                    <span className="text-xs text-gray-400 hidden md:block">Event Management System</span>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={getNavLinkClass(link.href)}
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="hidden lg:flex items-center gap-2">
                  {/* Quick Actions */}
                  {session && isAdmin && (
                    <Link
                      href="/events/create"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass-button"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create Event</span>
                    </Link>
                  )}

                  {session && (
                    <button className="p-2.5 rounded-lg glass-card hover:border-white/30 transition-all relative">
                      <Bell className="w-5 h-5 text-gray-300" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center shadow-lg">
                        3
                      </span>
                    </button>
                  )}

                  {/* Theme Toggle & Auth/User Section */}
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2.5 rounded-lg glass-card hover:border-white/30 transition-all"
                    aria-label="Toggle theme"
                  >
                    {mounted && (theme === 'dark' ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-300" />)}
                  </button>

                  {session ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg glass-card hover:border-white/30 transition-all"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-white">{session.user?.name}</p>
                          <p className="text-xs text-blue-300 capitalize">{session.user?.role}</p>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-300 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* User Dropdown Menu */}
                      {isUserMenuOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsUserMenuOpen(false)}
                          />
                          <div className="absolute right-0 mt-2 w-56 glass-card rounded-xl overflow-hidden z-50 animate-slide-up">
                            <div className="p-3 border-b border-white/10">
                              <p className="text-xs text-gray-400">Signed in as</p>
                              <p className="text-sm font-semibold text-white">{session.user?.email}</p>
                            </div>
                            
                            <div className="p-1">
                              {(isAdmin ? adminMenuItems : userMenuItems).map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white text-sm"
                                  onClick={() => setIsUserMenuOpen(false)}
                                >
                                  {item.icon}
                                  <span>{item.name}</span>
                                </Link>
                              ))}
                            </div>
                            
                            <div className="p-1 border-t border-white/10">
                              <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-300 hover:text-red-200 transition-colors text-sm"
                              >
                                <LogOut className="w-4 h-4" />
                                <span>Logout</span>
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Link
                        href="/login"
                        className="px-4 py-2.5 rounded-lg glass-card hover:border-white/30 transition-all text-sm text-gray-300 hover:text-white"
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="px-4 py-2.5 rounded-lg glass-button"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2.5 rounded-lg glass-card hover:border-white/30 transition-all"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5 text-gray-300" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="fixed top-4 right-4 w-72 glass-card rounded-2xl z-50 lg:hidden animate-slide-left overflow-hidden shadow-2xl">
              <div className="p-5 max-h-[calc(100vh-2rem)] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Eventra</span>
                      <p className="text-xs text-gray-400">Event Management</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="p-2 rounded-lg glass-card hover:border-white/30 transition-all"
                    >
                      {mounted && (theme === 'dark' ? <Sun className="w-4 h-4 text-gray-300" /> : <Moon className="w-4 h-4 text-gray-300" />)}
                    </button>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg glass-card hover:border-white/30 transition-all"
                    >
                      <X className="w-4 h-4 text-gray-300" />
                    </button>
                  </div>
                </div>

                {/* User Info Section */}
                {session ? (
                  <div className="mb-6 p-4 rounded-xl glass-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{session.user?.name}</p>
                        <p className="text-xs text-blue-300 capitalize">{session.user?.role}</p>
                        <p className="text-xs text-gray-400 mt-1">{session.user?.email}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="/profile"
                        className="flex-1 px-3 py-2 rounded-lg glass-card hover:border-white/30 text-white text-sm text-center transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="flex-1 px-3 py-2 rounded-lg glass-card hover:border-red-500/30 text-red-300 hover:text-red-200 text-sm transition-all"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 flex flex-col gap-2">
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass-card hover:border-white/30 text-gray-300 hover:text-white transition-all text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </Link>
                    <Link
                      href="/register"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass-button"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Register</span>
                    </Link>
                  </div>
                )}

                {/* Navigation Links */}
                <div className="space-y-1 mb-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 px-2">Navigation</p>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all text-sm ${
                        pathname === link.href
                          ? 'glass-card-active text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Quick Actions */}
                {session && (
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 px-2">Quick Actions</p>
                    {isAdmin && (
                      <Link
                        href="/events/create"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg glass-card hover:border-white/30 text-gray-300 hover:text-white text-sm transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Plus className="w-4 h-4" />
                        <span>Create Event</span>
                      </Link>
                    )}
                    <button className="flex items-center gap-3 w-full px-3 py-3 rounded-lg glass-card hover:border-white/30 text-gray-300 hover:text-white text-sm transition-all">
                      <Bell className="w-4 h-4" />
                      <span>Notifications</span>
                      <span className="ml-auto bg-gradient-to-r from-red-500 to-pink-500 text-xs px-2 py-0.5 rounded-full text-white">3</span>
                    </button>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-3 py-3 rounded-lg glass-card hover:border-white/30 text-gray-300 hover:text-white text-sm transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div></div>

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

        @keyframes slide-up {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slide-left {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.2s ease-out;
        }
        
        .animate-slide-left {
          animation: slide-left 0.2s ease-out;
        }
      `}</style>
    </>
  )
}

export default Navbar