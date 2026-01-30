'use client'

import { useState } from 'react'
import { 
  Trophy, 
  Users, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  Share2,
  RefreshCw,
  Zap,
  Crown
} from 'lucide-react'

const initialBrackets = {
  round16: [
    { id: 1, team1: 'Team Alpha', score1: 2, team2: 'Team Beta', score2: 1, winner: 1 },
    { id: 2, team1: 'Team Gamma', score1: 0, team2: 'Team Delta', score2: 2, winner: 2 },
    { id: 3, team1: 'Team Epsilon', score1: 2, team2: 'Team Zeta', score2: 0, winner: 1 },
    { id: 4, team1: 'Team Eta', score1: 1, team2: 'Team Theta', score2: 2, winner: 2 },
    { id: 5, team1: 'Team Iota', score1: 2, team2: 'Team Kappa', score2: 1, winner: 1 },
    { id: 6, team1: 'Team Lambda', score1: 0, team2: 'Team Mu', score2: 2, winner: 2 },
    { id: 7, team1: 'Team Nu', score1: 2, team2: 'Team Xi', score2: 0, winner: 1 },
    { id: 8, team1: 'Team Omicron', score1: 1, team2: 'Team Pi', score2: 2, winner: 2 },
  ],
  quarterfinals: [
    { id: 1, team1: 'Team Alpha', score1: 2, team2: 'Team Delta', score2: 1, winner: 1 },
    { id: 2, team1: 'Team Epsilon', score1: 1, team2: 'Team Theta', score2: 2, winner: 2 },
    { id: 3, team1: 'Team Iota', score1: 2, team2: 'Team Mu', score2: 0, winner: 1 },
    { id: 4, team1: 'Team Nu', score1: 1, team2: 'Team Pi', score2: 2, winner: 2 },
  ],
  semifinals: [
    { id: 1, team1: 'Team Alpha', score1: 2, team2: 'Team Theta', score2: 1, winner: 1 },
    { id: 2, team1: 'Team Iota', score1: 0, team2: 'Team Pi', score2: 2, winner: 2 },
  ],
  final: [
    { id: 1, team1: 'Team Alpha', score1: 3, team2: 'Team Pi', score2: 2, winner: 1 }
  ],
  winner: 'Team Alpha'
}

export default function BracketsPage() {
  const [selectedRound, setSelectedRound] = useState<'round16' | 'quarterfinals' | 'semifinals' | 'final'>('round16')
  const [selectedCompetition, setSelectedCompetition] = useState('Mobile Legends')
  const [brackets, setBrackets] = useState(initialBrackets)

  const competitions = ['Mobile Legends', 'FIFA', 'Badminton', 'Billiard']
  const rounds = [
    { id: 'round16', name: '16 Besar' },
    { id: 'quarterfinals', name: 'Perempat Final' },
    { id: 'semifinals', name: 'Semifinal' },
    { id: 'final', name: 'Final' }
  ]

  const renderMatch = (match: any, isWinner = false) => (
    <div 
      className={`glass-card p-4 rounded-2xl min-w-[280px] ${
        isWinner ? 'border-2 border-yellow-500/50' : ''
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          match.winner === 1 
            ? 'bg-green-500/20 text-green-300' 
            : 'bg-red-500/20 text-red-300'
        }`}>
          {match.score1} - {match.score2}
        </div>
        {isWinner && (
          <Crown className="w-5 h-5 text-yellow-400" />
        )}
      </div>
      
      <div className="space-y-3">
        <div className={`flex justify-between items-center p-3 rounded-xl ${
          match.winner === 1 
            ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/10' 
            : 'bg-white/5'
        }`}>
          <span className="font-medium text-white">{match.team1}</span>
          <span className={`font-bold ${
            match.winner === 1 ? 'text-green-300' : 'text-gray-400'
          }`}>{match.score1}</span>
        </div>
        
        <div className={`flex justify-between items-center p-3 rounded-xl ${
          match.winner === 2 
            ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/10' 
            : 'bg-white/5'
        }`}>
          <span className="font-medium text-white">{match.team2}</span>
          <span className={`font-bold ${
            match.winner === 2 ? 'text-green-300' : 'text-gray-400'
          }`}>{match.score2}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Match ID: {match.id}</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Tournament <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Brackets</span>
            </h1>
            <p className="text-gray-300">
              Pantau perkembangan turnamen dan hasil pertandingan secara real-time
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button className="glass-button flex items-center gap-2 px-4 py-3 rounded-xl">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button className="glass-button flex items-center gap-2 px-4 py-3 rounded-xl">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="glass-button flex items-center gap-2 px-4 py-3 rounded-xl">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Competition Selector */}
        <div className="glass-card p-6 rounded-3xl mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Pilih Kompetisi</h2>
              <p className="text-gray-400">Lihat bracket dari berbagai kompetisi yang tersedia</p>
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-2">
              {competitions.map((comp) => (
                <button
                  key={comp}
                  onClick={() => setSelectedCompetition(comp)}
                  className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                    selectedCompetition === comp
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {comp}
                </button>
              ))}
            </div>
          </div>

          {/* Competition Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Status</p>
              <div className="inline-flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold">Live</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Total Tim</p>
              <p className="text-2xl font-bold text-white">16</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Round Saat Ini</p>
              <p className="text-2xl font-bold text-white">Semifinal</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Juara Saat Ini</p>
              <p className="text-2xl font-bold text-yellow-300">Team Alpha</p>
            </div>
          </div>
        </div>

        {/* Round Navigation */}
        <div className="glass-card p-4 rounded-3xl mb-8">
          <div className="flex justify-between items-center">
            <button className="glass-button p-3 rounded-xl">
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2 overflow-x-auto">
              {rounds.map((round) => (
                <button
                  key={round.id}
                  onClick={() => setSelectedRound(round.id as any)}
                  className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                    selectedRound === round.id
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {round.name}
                </button>
              ))}
            </div>
            
            <button className="glass-button p-3 rounded-xl">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bracket Display */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {rounds.find(r => r.id === selectedRound)?.name}
            </h2>
            <div className="flex items-center gap-2 text-gray-400">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Live Updates</span>
            </div>
          </div>

          {/* Bracket Grid */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" style={{ minHeight: '400px' }}>
                {/* Add SVG lines here for bracket connections */}
                <path 
                  d="M280,80 L400,80 L400,120 L520,120" 
                  stroke="rgba(99, 102, 241, 0.3)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="4"
                />
              </svg>
            </div>

            {/* Matches */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(brackets as any)[selectedRound].map((match: any) => (
                <div key={match.id} className="relative">
                  {renderMatch(match, selectedRound === 'final' && match.winner)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tournament Progress */}
        <div className="glass-card p-8 rounded-3xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Progress <span className="text-cyan-300">Turnamen</span>
          </h2>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 transform -translate-y-1/2 z-0"></div>
            
            <div className="relative flex justify-between z-10">
              {[
                { stage: '16 Besar', status: 'completed', matches: 8 },
                { stage: '8 Besar', status: 'completed', matches: 4 },
                { stage: 'Semifinal', status: 'current', matches: 2 },
                { stage: 'Final', status: 'upcoming', matches: 1 }
              ].map((stage, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    stage.status === 'completed'
                      ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                      : stage.status === 'current'
                      ? 'bg-gradient-to-br from-yellow-500 to-orange-500 animate-pulse'
                      : 'bg-white/10'
                  }`}>
                    {stage.status === 'completed' ? (
                      <Trophy className="w-6 h-6 text-white" />
                    ) : stage.status === 'current' ? (
                      <Zap className="w-6 h-6 text-white" />
                    ) : (
                      <Calendar className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <span className="text-white font-medium mb-1">{stage.stage}</span>
                  <span className="text-gray-400 text-sm">{stage.matches} Match</span>
                  <span className={`text-xs mt-2 px-3 py-1 rounded-full ${
                    stage.status === 'completed'
                      ? 'bg-green-500/20 text-green-300'
                      : stage.status === 'current'
                      ? 'bg-yellow-500/20 text-yellow-300'
                      : 'bg-gray-500/20 text-gray-300'
                  }`}>
                    {stage.status === 'completed' ? 'Selesai' : 
                     stage.status === 'current' ? 'Berlangsung' : 'Menunggu'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Winner Announcement */}
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full"></div>
          
          <div className="relative z-10 text-center">
            <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Juara <span className="text-yellow-300">Saat Ini</span>
            </h2>
            <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-8 py-6 rounded-2xl mb-6">
              <p className="text-4xl font-bold text-yellow-300">{brackets.winner}</p>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Team {brackets.winner} saat ini memimpin turnamen dengan performa yang luar biasa. 
              Siapa yang akan menjadi juara akhir? Pantau terus perkembangan pertandingan!
            </p>
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
        
        .glass-card {
          backdrop-filter: blur(16px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
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
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
        }
      `}</style>
    </div>
  )
}