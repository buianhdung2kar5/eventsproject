import { useState } from 'react'
import RankingCard from '../../components/Ranking/RankingCard'
import LevelCard from '../../components/Ranking/LevelCard'
import AchievementItem from '../../components/Ranking/AchievementItem'
import StatRow from '../../components/Ranking/StatRow'
import {
  levelSystemData,
  achievementData,
  rankingsData,
  userRankingStats,
  tabsData,
} from '../../data/ranking/rankingData'

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState('all')

  const getFilteredRankings = () => {
    let filtered = rankingsData
    
    switch (activeTab) {
      case 'linhMoi':
        filtered = rankingsData.filter((r) => r.badge === 'Lính mới')
        break
      case 'thoSan':
        filtered = rankingsData.filter((r) => r.badge === 'Thợ săn')
        break
      case 'chienThan':
        filtered = rankingsData.filter((r) => r.badge === 'Chiến thần')
        break
      default:
        filtered = rankingsData
    }
    
    return filtered.sort((a, b) => b.points - a.points).slice(0, 10)
  }

  const progressPercent = (userRankingStats.progressPoints / userRankingStats.totalProgress) * 100

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <img src={process.env.PUBLIC_URL+ "/image/rankingPage/rankingIcon.svg"} alt="rankingIcon" className="w-10 h-10 mr-2 ml-2"/>
          <h1 className="text-2xl font-bold text-gray-900">Bảng xếp hạng</h1>
        </div>
        <p className="text-gray-600 text-sm">Theo dõi xếp hạng và cạnh tranh với các sinh viên khác</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-2 border-purple-200 rounded-2xl p-6 bg-white">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
                N
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-bold text-gray-900">Nguyễn Văn A</h2>
                <span className="text-gray-600 text-sm">⋮</span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Đại học Bách Khoa Hà Nội</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                  <img
                    src={process.env.PUBLIC_URL + "/image/rankingPage/badgeIconlv2Small.svg"}
                    alt="Thợ săn"
                    className="w-4 h-4"
                  />
                  Thợ săn
                </span>
                <span className="text-xs text-gray-700 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm">
                  #15 trong 60 sinh viên
                </span>

              </div>

              
            </div>
            

            {/* Stats */}
            <div className="flex gap-8 flex-shrink-0">
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <img
                    src={process.env.PUBLIC_URL + "/image/rankingPage/pointIcon.svg"}
                    alt="pointIcon"
                    className="w-6 h-6"
                  />
                  <p className="text-xs text-gray-600">Điểm</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">{userRankingStats.events}</p>
                
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <img src={process.env.PUBLIC_URL+"/image/rankingPage/levelIcon.svg"} alt="levelIcon" className="w-6 h-6"/>
                  <p className="text-xs text-gray-600">Cấp độ</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">{userRankingStats.level}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <img src={process.env.PUBLIC_URL+"/image/rankingPage/rankingIcon.svg"} alt="rankingIcon" className="w-6 h-6"/>
                  <p className="text-xs text-gray-600">Hạng</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">{userRankingStats.rank}</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
              <div className=" mt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 text-bm font-medium">Tiến độ đến Chiến thần</span>
                  <span className="text-gray-600 text-xs">
                    {userRankingStats.progressPoints}/{userRankingStats.totalProgress} điểm
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#5FA9F0] h-2 rounded-full transition-all"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Cần thêm {userRankingStats.totalProgress - userRankingStats.progressPoints} điểm để lên hạng
                </p>
              </div>
        </div>
      </div>
      

      {/* Navigation Tabs */}
      <div className="w-full bg-white sticky top-[60px] z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-4 text-sm font-medium rounded-t-lg transition-all whitespace-nowrap ${
                  tab.id === activeTab
                    ? 'bg-gray-50 text-[#5FA9F0] font-semibold border-b-2 border-[#5FA9F0]'
                    : 'text-gray-600 hover:text-gray-800 border-b-2 border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <div className="mb-5">
              <div className="flex items-center gap-2">
                <img
                  src={process.env.PUBLIC_URL + "/image/rankingPage/rankingIcon.svg"}
                  alt="lỗi"
                  className="w-6 h-6"
                />
                <h2 className="text-2xl font-bold text-gray-900">
                  Top 10 Bảng xếp hạng
                </h2>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                Những sinh viên hoạt động tích cực nhất
              </p>
            </div>


            {/* Rankings Cards */}
            <div className="space-y-2.5">
              {getFilteredRankings().map((rank, idx) => (
                <RankingCard key={rank.id} rank={rank} index={idx} isHighlighted={false} />
              ))}
            </div>
          </div>
        </div>

        {/* Levels System Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Hệ thống cấp bậc</h2>
            <p className="text-gray-600 text-sm">Các cấp độ hoạt động</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {levelSystemData.map((levelItem) => (
              <LevelCard
                key={levelItem.id}
                level={levelItem.level}
                points={levelItem.points}
                description={levelItem.description}
                bgColor={levelItem.bgColor}
                icon={levelItem.icon}
              />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-6">
          <div className="mb-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cách tích điểm</h2>
            <p className="text-gray-600 text-sm">Các hoạt động được tính điểm</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            {achievementData.map((achievement) => (
              <AchievementItem
                key={achievement.id}
                icon={achievement.icon}
                title={achievement.title}
                points={achievement.points}
              />
            ))}
          </div>
        </div>

        {/* User Stats Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thống kê của bạn</h2>
            <p className="text-gray-600 text-sm">Thông tin cá nhân</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <StatRow label="Sự kiện đã tham gia" value={userRankingStats.participatedEvents} />
            <StatRow label="Cấp độ hiện tại" value={userRankingStats.level} />
            <StatRow label="Xếp hạng" value={userRankingStats.rank} />
          </div>
        </div>


      </div>

      
    </div>
  )
}
