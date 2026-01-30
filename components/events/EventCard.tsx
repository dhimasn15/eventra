import { Calendar, Users, Trophy } from 'lucide-react'
import Link from 'next/link'

interface EventCardProps {
  event: {
    id: number
    title: string
    description: string
    category: string
    participants: number
    date: string
    status: 'open' | 'closed' | 'upcoming'
  }
}

const EventCard = ({ event }: EventCardProps) => {
  const statusColors = {
    open: 'bg-green-100 text-green-800',
    closed: 'bg-red-100 text-red-800',
    upcoming: 'bg-yellow-100 text-yellow-800'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            {event.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[event.status]}`}>
            {event.status === 'open' ? 'Pendaftaran Dibuka' : 
             event.status === 'upcoming' ? 'Segera Dibuka' : 'Ditutup'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {event.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-5 h-5 mr-3 text-gray-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Users className="w-5 h-5 mr-3 text-gray-400" />
            <span>{event.participants} Peserta</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Trophy className="w-5 h-5 mr-3 text-gray-400" />
            <span>Single Elimination</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <Link
            href={`/events/${event.id}`}
            className="flex-1 bg-purple-600 text-white text-center py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Detail Event
          </Link>
          <Link
            href={`/events/${event.id}/register`}
            className="flex-1 border border-purple-600 text-purple-600 text-center py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventCard