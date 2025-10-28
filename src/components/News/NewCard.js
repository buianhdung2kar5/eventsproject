// EventCard.jsx
import React from 'react'
function formatDateIsoToVN(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

export default function NewsCard({ item }) {
  return (
    <article className="w-full bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-md transition-all duration-200 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] mt-">
      {/* Image */}

      <img
        src={item.image}
        alt={item.title}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* optional tag */}
        {item.tag && (
          <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full w-max">
            {item.tag}
          </span>
        )}

        <h3 className="text-[16px] font-semibold text-gray-900 leading-snug">
          {item.title}
        </h3>

        <p className="text-[14px] text-gray-500 leading-snug line-clamp-2">
          {item.description}
        </p>

        {/* meta */}
        <div className="flex items-center gap-4 text-[13px] text-gray-500 mt-2">
          <div className="flex items-center gap-1">
            {/* calendar icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{formatDateIsoToVN(item.date)}</span>
          </div>

          <div className="flex items-center gap-1">
            {/* user icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0zM4.5 21a7.5 7.5 0 0115 0"
              />
            </svg>
            <span>{item.author}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
