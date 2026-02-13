'use client'

import { useState } from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
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
  Target
} from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

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
        ? 'text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-sm' 
        : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50 border border-transparent'
    }`
  }

  const isAdmin = session?.user?.role === 'admin'

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="container mx-auto">
          <div className="bg-white border border-emerald-100 rounded-2xl shadow-lg shadow-emerald-500/5">
            <div className="px-6">
              <div className="flex justify-between items-center py-3">
                {/* Logo */}
                <Link 
                  href="/" 
                  className="flex items-center gap-3 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Eventra</span>
                    <span className="text-xs text-slate-600 hidden md:block">Event Management System</span>
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
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white transition-all shadow-md hover:shadow-lg text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create Event</span>
                    </Link>
                  )}

                  {session && (
                    <button className="p-2 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all relative">
                      <Bell className="w-5 h-5" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        3
                      </span>
                    </button>
                  )}

                  {/* Auth/User Section */}
                  {session ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-all border border-emerald-200"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-slate-800">{session.user?.name}</p>
                          <p className="text-xs text-emerald-600 capitalize">{session.user?.role}</p>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* User Dropdown Menu */}
                      {isUserMenuOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsUserMenuOpen(false)}
                          />
                          <div className="absolute right-0 mt-2 w-56 bg-white border border-emerald-200 rounded-xl overflow-hidden z-50 animate-slide-up shadow-xl">
                            <div className="p-3 border-b border-emerald-200">
                              <p className="text-xs text-slate-600">Signed in as</p>
                              <p className="text-sm font-semibold text-slate-800">{session.user?.email}</p>
                            </div>
                            
                            <div className="p-1">
                              {(isAdmin ? adminMenuItems : userMenuItems).map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-emerald-50 transition-colors text-slate-700 hover:text-emerald-600 text-sm"
                                  onClick={() => setIsUserMenuOpen(false)}
                                >
                                  {item.icon}
                                  <span>{item.name}</span>
                                </Link>
                              ))}
                            </div>
                            
                            <div className="p-1 border-t border-emerald-200">
                              <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 w-full px-3 py-2 rounded hover:bg-red-50 text-red-600 hover:text-red-700 transition-colors text-sm"
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
                        className="px-4 py-2.5 rounded-lg text-slate-700 hover:bg-emerald-50 transition-all text-sm border border-emerald-200"
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white transition-all shadow-md hover:shadow-lg text-sm"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-emerald-50 transition-all border border-emerald-200"
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
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="fixed top-4 right-4 w-72 bg-white border border-emerald-200 rounded-2xl z-50 lg:hidden animate-slide-left overflow-y-auto shadow-2xl">
              <div className="p-5">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Eventra</span>
                      <p className="text-xs text-slate-600">Event Management</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-emerald-50 text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* User Info Section */}
                {session ? (
                  <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{session.user?.name}</p>
                        <p className="text-xs text-emerald-600 capitalize">{session.user?.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="/profile"
                        className="flex-1 px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-sm text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-sm"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 flex flex-col gap-2">
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-slate-700 hover:bg-emerald-50 transition-all text-sm border border-emerald-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </Link>
                    <Link
                      href="/register"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white transition-all text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Register</span>
                    </Link>
                  </div>
                )}

                {/* Navigation Links */}
                <div className="space-y-1 mb-6">
                  <p className="text-xs text-slate-600 uppercase tracking-wider mb-3 px-2">Navigation</p>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm ${
                        pathname === link.href
                          ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                          : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
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
                    <p className="text-xs text-slate-600 uppercase tracking-wider mb-3 px-2">Quick Actions</p>
                    {isAdmin && (
                      <Link
                        href="/events/create"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Plus className="w-4 h-4" />
                        <span>Create Event</span>
                      </Link>
                    )}
                    <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 text-sm">
                      <Bell className="w-4 h-4" />
                      <span>Notifications</span>
                      <span className="ml-auto bg-red-500 text-xs px-1.5 py-0.5 rounded-full text-white">3</span>
                    </button>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 text-sm"
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