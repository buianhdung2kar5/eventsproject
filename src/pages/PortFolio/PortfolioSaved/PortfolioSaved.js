import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaFileAlt, FaUsers, FaChartLine } from 'react-icons/fa'

const mockHighlights = [
  {
    id: 1,
    name: 'Nguyễn Văn A – Marketing Internship 2025',
    activities: 10,
    views: 145,
  },
  {
    id: 2,
    name: 'Trần Thị B – Design Portfolio 2024',
    activities: 8,
    views: 120,
  },
]

export default function PortfolioSaved() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(' Searching for:', searchValue)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-0 w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Search Box */}
        <form
          onSubmit={handleSearch}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="VD: nguyen-van-a-marketing-2025 hoặc https://events.com/p/..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              <CiSearch className="text-lg" />
              Tra cứu
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Bạn có thể nhập mã hồ sơ (slug) hoặc dán toàn bộ link hồ sơ được
            chia sẻ
          </p>
        </form>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center">
            <FaFileAlt className="text-blue-500 text-3xl mb-2" />
            <p className="text-2xl font-semibold text-gray-800">2+</p>
            <p className="text-gray-500 text-sm">Hồ sơ đã xuất bản</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center">
            <FaUsers className="text-green-500 text-3xl mb-2" />
            <p className="text-2xl font-semibold text-gray-800">143+</p>
            <p className="text-gray-500 text-sm">Lượt xem duy nhất</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center">
            <FaChartLine className="text-orange-500 text-3xl mb-2" />
            <p className="text-2xl font-semibold text-gray-800">10+</p>
            <p className="text-gray-500 text-sm">Hoạt động được chia sẻ</p>
          </div>
        </div>

        {/* Featured Portfolios */}
        <div className="mb-12 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Hồ sơ nổi bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {mockHighlights.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Hoạt động: {item.activities}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    Lượt xem: {item.views}
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition">
                  Xem hồ sơ
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Cách tra cứu hồ sơ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2">
                1
              </div>
              <p className="font-medium text-gray-800">Nhập thông tin</p>
              <p className="text-sm text-gray-500 text-center mt-1">
                Dán link hồ sơ hoặc nhập mã hồ sơ bạn nhận được
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2">
                2
              </div>
              <p className="font-medium text-gray-800">Tra cứu</p>
              <p className="text-sm text-gray-500 text-center mt-1">
                Hệ thống kiểm tra và tải dữ liệu hồ sơ
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2">
                3
              </div>
              <p className="font-medium text-gray-800">Xem kết quả</p>
              <p className="text-sm text-gray-500 text-center mt-1">
                Xem chi tiết hoặc tải PDF nếu cần
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
