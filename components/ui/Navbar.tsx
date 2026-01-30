'use client'

import { useState } from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Trophy, 
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
  TrendingUp
} from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()

  // Mock user data
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<'admin' | 'participant'>('participant')

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Events', href: '/events', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Competitions', href: '/competitions', icon: <Trophy className="w-5 h-5" /> },
    { name: 'Brackets', href: '/brackets', icon: <TrendingUp className="w-5 h-5" /> },
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

  const handleLogout = () => {
    setIsLoggedIn(false)
    setIsUserMenuOpen(false)
  }

  const getNavLinkClass = (href: string) => {
    const isActive = pathname === href
    return `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
      isActive 
        ? 'text-white bg-white/20 backdrop-blur-sm' 
        : 'text-gray-300 hover:text-white hover:bg-white/10'
    }`
  }

  return (
    <>
      {/* Navbar Transparan dengan Liquid Glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="container mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl">
            <div className="px-6">
              <div className="flex justify-between items-center py-3">
                {/* Logo */}
                <Link 
                  href="/" 
                  className="flex items-center gap-3 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white">Eventra</span>
                    <span className="text-xs text-gray-400 hidden md:block">Event Management</span>
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

                {/* Right Side - Auth/User Menu */}
                <div className="hidden lg:flex items-center gap-2">
                  {/* Notifications */}
                  <button className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                    <Bell className="w-5 h-5" />
                  </button>

                  {/* Auth/User Section */}
                  {isLoggedIn ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-white">John Doe</p>
                          <p className="text-xs text-gray-300 capitalize">{userRole}</p>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* User Dropdown Menu */}
                      {isUserMenuOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsUserMenuOpen(false)}
                          />
                          <div className="absolute right-0 mt-2 w-56 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl overflow-hidden z-50 animate-slide-up shadow-xl">
                            <div className="p-3 border-b border-white/10">
                              <p className="text-xs text-gray-400">Signed in as</p>
                              <p className="text-sm font-semibold text-white">john@example.com</p>
                            </div>
                            
                            <div className="p-1">
                              {(userRole === 'admin' ? adminMenuItems : userMenuItems).map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors text-gray-300 hover:text-white text-sm"
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
                                className="flex items-center gap-3 w-full px-3 py-2 rounded hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors text-sm"
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
                        className="px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-all text-sm"
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all shadow-md hover:shadow-lg text-sm"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="fixed top-4 right-4 w-72 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl z-50 lg:hidden animate-slide-left overflow-y-auto shadow-2xl">
              <div className="p-5">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Eventra</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* User Info Section */}
                {isLoggedIn ? (
                  <div className="mb-6 p-3 rounded-xl bg-white/10 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">John Doe</p>
                        <p className="text-xs text-gray-300 capitalize">{userRole}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm">
                        Profile
                      </button>
                      <button 
                        onClick={handleLogout}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 text-sm"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 flex flex-col gap-2">
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white hover:bg-white/10 transition-all text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </Link>
                    <Link
                      href="/register"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all text-sm"
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
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm ${
                        pathname === link.href
                          ? 'text-white bg-white/20'
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
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 px-2">Quick Actions</p>
                  <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white text-sm">
                    <Bell className="w-4 h-4" />
                    <span>Notifications</span>
                    <span className="ml-auto bg-red-500 text-xs px-1.5 py-0.5 rounded-full text-white">3</span>
                  </button>
                  <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white text-sm">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      <style jsx global>{`
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