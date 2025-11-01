// src/components/RankingInAccount.jsx

import React from 'react'
// 1. Import icon từ react-icons
import { MdTrendingUp } from 'react-icons/md'
import { PATH } from '../../routes/path'
import { useNavigate } from 'react-router-dom'
const RankingInAccount = ({
  points = 450,
  rank = 'Top 15%',
  level = 'Lv.4',
  currentProgress = 450,
  maxProgress = 500,
}) => {
  const progressPercent = (currentProgress / maxProgress) * 100
  const pointsNeeded = maxProgress - currentProgress
  const navigate = useNavigate()

  return (
    <div className="w-full mx-auto p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg font-sans">
      {/* Title */}
      <div className="flex items-center text-xl font-semibold mb-5">
        {/* 2. Sử dụng icon đã import */}
        <MdTrendingUp size={24} className="mr-2" />
        Xếp hạng của bạn
      </div>

      {/* Stats Grid */}
      <div className="flex justify-between mb-6">
        {/* Accumulated Points */}
        <div>
          <div className="text-sm opacity-90">Điểm tích lũy</div>
          <div className="text-3xl font-bold">{points}</div>
          <div className="text-sm opacity-90">điểm</div>
        </div>

        {/* Rank */}
        <div>
          <div className="text-sm opacity-90">Thứ hạng</div>
          <div className="text-3xl font-bold">{rank}</div>
          <div className="text-sm opacity-90">sinh viên</div>
        </div>

        {/* Level */}
        <div>
          <div className="text-sm opacity-90">Cấp độ</div>
          <div className="text-3xl font-bold">{level}</div>
          <div className="text-sm opacity-90">hoạt động</div>
        </div>
      </div>

      {/* Progress Section */}
      <div>
        {/* Header Row */}
        <div className="flex justify-between items-center mb-2 relative">
          <span className="text-sm font-medium">Tiến độ lên cấp</span>
          <span className="flex absolute left-28 bg-purple-100 text-[14px] border rounded-full px-2 text-purple-700">
            <img
              src={
                process.env.PUBLIC_URL +
                '/image/rankingPage/badgeIconlv2Small.svg'
              }
            />
            <p>Thợ săn</p>
          </span>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium">
              {currentProgress}/{maxProgress} điểm
            </span>
            <button
              onClick={() => navigate(PATH.RANKING)}
              className="bg-white/90 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-white transition-all"
            >
              Xem bảng xếp hạng
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/30 rounded-full h-2.5">
          <div
            className="bg-white h-2.5 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Footer Text */}
        <div className="text-sm opacity-90 mt-2">
          Bạn cần thêm {pointsNeeded} điểm để đạt mục tiêu
        </div>
      </div>
    </div>
  )
}

export default RankingInAccount
