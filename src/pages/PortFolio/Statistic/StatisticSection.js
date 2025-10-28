import React from 'react'
import StatisticCard from './StatisticCard'

// Import Icons từ thư viện React Icons
import { FaEye, FaUser, FaDownload } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa6' // Ví dụ dùng FaChartLine từ fa6

const StatisticSection = ({ data }) => {
  const stats = [
    {
      icon: FaEye,
      title: 'Tổng lượt xem',
      value: data.totalViews,
      color: 'text-blue-600',
    },
    {
      icon: FaUser,
      title: 'Người xem duy nhất',
      value: data.uniqueViewers,
      color: 'text-green-600',
    },
    {
      icon: FaDownload,
      title: 'Tải PDF',
      value: data.pdfDownloads,
      color: 'text-purple-600',
    },
    {
      icon: FaChartLine,
      title: 'Tỷ lệ tải PDF',
      value: data.pdfRate,
      unit: '%',
      color: 'text-red-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <StatisticCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          unit={stat.unit}
          color={stat.color}
        />
      ))}
    </div>
  )
}

export default StatisticSection
