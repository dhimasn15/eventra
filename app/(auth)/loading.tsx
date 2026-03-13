'use client'

import { Skeleton } from "@/components/ui/skeleton"
import { Shield, ArrowLeft, Trophy } from "lucide-react"

export default function AuthLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation Skeleton */}
      <div className="w-full max-w-md z-10 mb-8">
        <div className="flex items-center justify-between">
          <div className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-gray-300">
            <ArrowLeft className="w-4 h-4" />
            <Skeleton className="h-4 w-16 bg-white/10" />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/50 to-cyan-500/50 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-white/50" />
            </div>
            <Skeleton className="h-6 w-20 bg-white/10" />
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="w-full max-w-md z-10">
        <div className="relative group">
          <div className="relative glass-card rounded-2xl p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white/20" />
              </div>
              <Skeleton className="h-8 w-48 mx-auto mb-2 bg-white/10" />
              <Skeleton className="h-4 w-64 mx-auto bg-white/5" />
            </div>

            {/* Google Button Skeleton */}
            <Skeleton className="h-12 w-full mb-6 rounded-xl bg-white/5" />

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-transparent text-gray-500/50">atau</span>
              </div>
            </div>

            {/* Role Nav Skeleton */}
            <div className="grid grid-cols-2 gap-3 mb-6">
               <Skeleton className="h-12 rounded-xl bg-white/5 border border-white/10" />
               <Skeleton className="h-12 rounded-xl bg-white/5" />
            </div>

            {/* Form Skeleton */}
            <div className="space-y-4">
              <div>
                <Skeleton className="h-4 w-12 mb-2 bg-white/10" />
                <Skeleton className="h-12 w-full rounded-xl bg-white/5" />
              </div>
              <div>
                 <div className="flex justify-between mb-2">
                   <Skeleton className="h-4 w-16 bg-white/10" />
                   <Skeleton className="h-4 w-24 bg-white/10" />
                 </div>
                <Skeleton className="h-12 w-full rounded-xl bg-white/5" />
              </div>

               <Skeleton className="h-4 w-32 mt-2 bg-white/5" />
               <Skeleton className="h-12 w-full rounded-xl mt-4 bg-white/10" />
            </div>

            <Skeleton className="h-4 w-48 mx-auto mt-6 bg-white/5" />
          </div>
        </div>

        <Skeleton className="h-4 w-64 mx-auto mt-6 bg-white/5" />
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(12px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.15;
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
