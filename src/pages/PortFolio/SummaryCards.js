// src/components/SummaryCards.jsx
import React from 'react'

const SummaryCard = ({ icon, title, value, bgColorClass, textColorClass }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div
        className={`p-2 rounded-full ${bgColorClass} ${textColorClass} mr-4`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  )
}

const SummaryCards = () => {
  const totalResult = localStorage.getItem('CombinedPortfolio')
    ? JSON.parse(localStorage.getItem('CombinedPortfolio')).length
    : 0
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <SummaryCard
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        }
        title="Tổng hồ sơ"
        value={totalResult}
        bgColorClass="bg-blue-100"
        textColorClass="text-blue-600"
      />
      <SummaryCard
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h7m-9-4h10a2 2 0 012 2v2a2 2 0 002 2H9a2 2 0 01-2-2v-2a2 2 0 00-2-2z"
            ></path>
          </svg>
        }
        title="Đã xuất bản"
        value="2"
        bgColorClass="bg-green-100"
        textColorClass="text-green-600"
      />
      <SummaryCard
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
        }
        title="Bản nháp"
        value="1"
        bgColorClass="bg-orange-100"
        textColorClass="text-orange-600"
      />
      <SummaryCard
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        }
        title="Tổng lượt xem"
        value="12"
        bgColorClass="bg-indigo-100"
        textColorClass="text-indigo-600"
      />
    </div>
  )
}

export default SummaryCards
