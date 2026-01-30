'use client'

import { useState } from 'react'
import { 
  CreditCard, 
  CheckCircle, 
  XCircle, 
  Clock,
  Upload,
  Download,
  Filter,
  Search,
  DollarSign,
  Shield,
  RefreshCw,
  Eye,
  MoreVertical,
  AlertCircle
} from 'lucide-react'

const payments = [
  {
    id: 'INV-2025-001',
    event: 'Mobile Legends Campus Cup',
    team: 'Team Alpha',
    amount: 75000,
    date: '15 Des 2025',
    status: 'verified',
    method: 'Bank Transfer'
  },
  {
    id: 'INV-2025-002',
    event: 'FIFA Tournament',
    team: 'John Doe',
    amount: 50000,
    date: '16 Des 2025',
    status: 'pending',
    method: 'E-Wallet'
  },
  {
    id: 'INV-2025-003',
    event: 'Badminton Championship',
    team: 'Team Gamma',
    amount: 100000,
    date: '17 Des 2025',
    status: 'rejected',
    method: 'Bank Transfer'
  },
  {
    id: 'INV-2025-004',
    event: 'Billiard Competition',
    team: 'Mike Johnson',
    amount: 75000,
    date: '18 Des 2025',
    status: 'verified',
    method: 'Bank Transfer'
  },
  {
    id: 'INV-2025-005',
    event: 'Coding Challenge',
    team: 'Tech Wizards',
    amount: 0,
    date: '19 Des 2025',
    status: 'verified',
    method: 'Free'
  },
  {
    id: 'INV-2025-006',
    event: 'Battle of Bands',
    team: 'Rock Stars',
    amount: 150000,
    date: '20 Des 2025',
    status: 'pending',
    method: 'Bank Transfer'
  }
]

const stats = {
  total: 450000,
  verified: 225000,
  pending: 150000,
  rejected: 75000
}

export default function PaymentsPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)

  const statusOptions = [
    { id: 'all', label: 'Semua', icon: CreditCard, color: 'text-gray-400' },
    { id: 'verified', label: 'Verified', icon: CheckCircle, color: 'text-green-400' },
    { id: 'pending', label: 'Pending', icon: Clock, color: 'text-yellow-400' },
    { id: 'rejected', label: 'Rejected', icon: XCircle, color: 'text-red-400' }
  ]

  const filteredPayments = payments.filter(payment => {
    const matchesStatus = selectedStatus === 'all' || payment.status === selectedStatus
    const matchesSearch = payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.event.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
            <CheckCircle className="w-3 h-3" />
            Verified
          </span>
        )
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        )
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">
            <XCircle className="w-3 h-3" />
            Rejected
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Payment <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Management</span>
            </h1>
            <p className="text-gray-300">
              Kelola dan verifikasi pembayaran dari peserta kompetisi
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button className="glass-button flex items-center gap-2 px-6 py-3 rounded-xl">
              <Upload className="w-4 h-4" />
              Upload Bukti
            </button>
            <button className="glass-button flex items-center gap-2 px-6 py-3 rounded-xl">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Transaksi</p>
                <p className="text-2xl font-bold text-white">
                  Rp {stats.total.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Verified</p>
                <p className="text-2xl font-bold text-white">
                  Rp {stats.verified.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Pending</p>
                <p className="text-2xl font-bold text-white">
                  Rp {stats.pending.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-300" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Rejected</p>
                <p className="text-2xl font-bold text-white">
                  Rp {stats.rejected.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="glass-card rounded-3xl overflow-hidden mb-12">
          {/* Header with Search and Filters */}
          <div className="p-6 border-b border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cari invoice, tim, atau event..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setSelectedStatus(status.id)}
                      className={`p-3 rounded-xl transition-all ${
                        selectedStatus === status.id
                          ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30'
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                      title={status.label}
                    >
                      <status.icon className={`w-5 h-5 ${status.color}`} />
                    </button>
                  ))}
                </div>
                
                <button className="glass-button p-3 rounded-xl">
                  <Filter className="w-5 h-5" />
                </button>
                <button className="glass-button p-3 rounded-xl">
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Payments Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Invoice ID</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Event</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Tim/Peserta</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Amount</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Date</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Status</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => (
                  <tr 
                    key={payment.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                    onClick={() => setSelectedPayment(payment.id)}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-green-300" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{payment.id}</p>
                          <p className="text-gray-400 text-sm">{payment.method}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-white">{payment.event}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-white">{payment.team}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-300" />
                        <span className={`font-bold ${
                          payment.amount === 0 ? 'text-gray-300' : 'text-white'
                        }`}>
                          {payment.amount === 0 ? 'Free' : `Rp ${payment.amount.toLocaleString()}`}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-gray-300">{payment.date}</p>
                    </td>
                    <td className="py-4 px-6">
                      {getStatusBadge(payment.status)}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button 
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          onClick={(e) => {
                            e.stopPropagation()
                            // View details
                          }}
                        >
                          <Eye className="w-4 h-4 text-gray-400" />
                        </button>
                        {payment.status === 'pending' && (
                          <>
                            <button 
                              className="p-2 hover:bg-green-500/20 rounded-lg transition-colors"
                              onClick={(e) => {
                                e.stopPropagation()
                                // Verify payment
                              }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            </button>
                            <button 
                              className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                              onClick={(e) => {
                                e.stopPropagation()
                                // Reject payment
                              }}
                            >
                              <XCircle className="w-4 h-4 text-red-400" />
                            </button>
                          </>
                        )}
                        <button 
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredPayments.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-700/20 to-gray-900/20 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Tidak Ada Data</h3>
              <p className="text-gray-400">Coba filter atau kata kunci lain</p>
            </div>
          )}

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">
                Menampilkan <span className="text-white">{filteredPayments.length}</span> dari{' '}
                <span className="text-white">{payments.length}</span> pembayaran
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Upload Section */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Upload className="w-6 h-6 text-green-300" />
              Upload Bukti Bayar
            </h3>
            
            <div className="space-y-4">
              <div className="p-6 border-2 border-dashed border-white/20 rounded-2xl text-center hover:border-green-500/50 transition-colors cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-green-300" />
                </div>
                <p className="text-white font-medium mb-2">Upload File</p>
                <p className="text-gray-400 text-sm">
                  PNG, JPG, PDF (max. 5MB)
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Pastikan foto bukti transfer jelas</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Format: Nama_Event_NamaTim</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Tunggu verifikasi admin (1-2 jam)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Information */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-300" />
              Informasi Rekening
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Bank</span>
                  <span className="text-white font-bold">BCA</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Nomor Rekening</span>
                  <span className="text-white font-mono font-bold">1234-5678-9012</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Atas Nama</span>
                  <span className="text-white font-bold">EVENTRA INDONESIA</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    Harap transfer sesuai jumlah yang tertera. Pembayaran manual diverifikasi dalam 1-2 jam.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    Simpan bukti transfer untuk konfirmasi jika diperlukan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Legend */}
        <div className="glass-card p-6 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-6">Status Pembayaran</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-2xl">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-white font-medium">Verified</p>
                <p className="text-gray-400 text-sm">Pembayaran telah diverifikasi</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-yellow-500/10 rounded-2xl">
              <Clock className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-white font-medium">Pending</p>
                <p className="text-gray-400 text-sm">Menunggu verifikasi admin</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-red-500/10 rounded-2xl">
              <XCircle className="w-8 h-8 text-red-400" />
              <div>
                <p className="text-white font-medium">Rejected</p>
                <p className="text-gray-400 text-sm">Bukti pembayaran ditolak</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .glass-card {
          backdrop-filter: blur(20px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        }
        
        .glass-button {
          backdrop-filter: blur(12px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          transition: all 0.3s ease;
        }
        
        .glass-button:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.3);
        }
      `}</style>
    </div>
  )
}

