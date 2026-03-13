'use client'

import { Skeleton } from "@/components/ui/skeleton"

export default function MainLoading() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Hero Skeleton */}
        <section className="glass-card rounded-3xl p-12 md:p-16 mb-12 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 rounded-3xl mb-8" />
            <Skeleton className="h-16 w-3/4 md:w-1/2 mb-6 bg-white/10" />
            <Skeleton className="h-5 w-full max-w-2xl mb-2 bg-white/5" />
            <Skeleton className="h-5 w-3/4 max-w-xl mb-10 bg-white/5" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full max-w-md">
              <Skeleton className="h-14 w-full rounded-xl bg-white/10" />
              <Skeleton className="h-14 w-full rounded-xl bg-white/5" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/5 w-full">
              {[1,2,3,4].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Skeleton className="h-3 w-20 bg-white/5" />
                  <Skeleton className="h-8 w-24 bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Skeleton */}
        <section className="mb-12">
          <div className="text-center mb-12 flex flex-col items-center gap-3">
            <Skeleton className="h-8 w-32 rounded-full bg-white/5" />
            <Skeleton className="h-10 w-2/3 md:w-1/3 bg-white/10" />
            <Skeleton className="h-5 w-3/4 md:w-1/2 bg-white/5" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="glass-card p-8 rounded-3xl">
                <div className="w-16 h-16 bg-white/5 rounded-2xl mb-6" />
                <Skeleton className="h-6 w-3/4 mb-4 bg-white/10" />
                <Skeleton className="h-4 w-full mb-2 bg-white/5" />
                <Skeleton className="h-4 w-5/6 bg-white/5" />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Events Skeleton */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex flex-col gap-3">
              <Skeleton className="h-8 w-28 rounded-full bg-white/5" />
              <Skeleton className="h-10 w-64 bg-white/10" />
              <Skeleton className="h-4 w-48 bg-white/5" />
            </div>
            <Skeleton className="h-11 w-32 rounded-xl bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="glass-card p-6 rounded-3xl">
                <div className="w-16 h-16 bg-white/5 rounded-2xl mb-6" />
                <Skeleton className="h-4 w-20 rounded-full mb-4 bg-white/5" />
                <Skeleton className="h-7 w-3/4 mb-3 bg-white/10" />
                <Skeleton className="h-4 w-full mb-2 bg-white/5" />
                <Skeleton className="h-4 w-5/6 mb-6 bg-white/5" />
                <div className="space-y-3 mb-8">
                  <Skeleton className="h-4 w-full bg-white/5" />
                  <Skeleton className="h-4 w-full bg-white/5" />
                  <Skeleton className="h-2 w-full rounded-full bg-white/5" />
                </div>
                <div className="flex gap-3">
                  <Skeleton className="h-11 flex-1 rounded-xl bg-white/10" />
                  <Skeleton className="h-11 flex-1 rounded-xl bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tournament Structure Skeleton */}
        <section className="glass-card p-8 rounded-3xl mb-12">
          <Skeleton className="h-9 w-64 mx-auto mb-8 bg-white/10" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-white/5 rounded-2xl" />
                <Skeleton className="h-6 w-28 bg-white/10" />
                <Skeleton className="h-4 w-20 bg-white/5" />
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Skeleton */}
        <section className="mb-12">
          <div className="text-center mb-12 flex flex-col items-center gap-3">
            <Skeleton className="h-8 w-40 rounded-full bg-white/5" />
            <Skeleton className="h-10 w-2/3 md:w-1/2 bg-white/10" />
            <Skeleton className="h-4 w-1/2 bg-white/5" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="glass-card p-8 rounded-3xl flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white/5 rounded-2xl" />
                <Skeleton className="h-6 w-40 bg-white/10" />
                <Skeleton className="h-4 w-full bg-white/5" />
                <Skeleton className="h-4 w-4/5 bg-white/5" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Skeleton */}
        <section className="glass-card p-8 rounded-3xl mb-12">
          <Skeleton className="h-9 w-48 mx-auto mb-8 bg-white/10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 flex flex-col gap-3">
                <Skeleton className="h-5 w-3/4 bg-white/10" />
                <Skeleton className="h-4 w-full bg-white/5" />
                <Skeleton className="h-4 w-5/6 bg-white/5" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Skeleton */}
        <section className="glass-card p-12 rounded-3xl flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-white/5 rounded-xl mb-2" />
          <Skeleton className="h-12 w-3/4 md:w-1/2 bg-white/10" />
          <Skeleton className="h-5 w-full max-w-xl bg-white/5" />
          <Skeleton className="h-5 w-3/4 max-w-lg bg-white/5" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 w-full max-w-md">
            <Skeleton className="h-14 w-full rounded-xl bg-white/10" />
            <Skeleton className="h-14 w-full rounded-xl bg-white/5" />
          </div>
        </section>
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(12px);
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  )
}
