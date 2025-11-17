import React from 'react'

// Giả sử bạn sử dụng thư viện React Icons
// Ví dụ: import { FaEye, FaUser, FaDownload, FaChartLine } from 'react-icons/fa';

const StatisticCard = ({ icon: Icon, title, value, unit, color }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 w-[200px] h-[70px]">
      <div className={`p-3 rounded-full ${color} bg-opacity-10 mr-4`}>
        <Icon className={`text-2xl ${color}`} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-800">
          {value}
          {unit && <span className="text-sm ml-1">{unit}</span>}
        </p>
      </div>
    </div>
  )
}

export default StatisticCard
