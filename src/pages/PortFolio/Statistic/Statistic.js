import React from 'react'
import StatisticSection from './StatisticSection'
// Giả định bạn có một component biểu đồ riêng, ví dụ: <LineChart data={...} />

const Statistic = ({ profileData, chartData }) => {
  // Dữ liệu giả định dựa trên hình ảnh
  const defaultData = {
    totalViews: 6,
    uniqueViewers: 5,
    pdfDownloads: 3,
    pdfRate: 50,
    publishDate: '20/10/2025',
    lastView: '15:15:00 27/10/2025',
    returnRate: '32.4',
    averageDaily: 2.9,
    title: 'Nguyễn Văn A – Sự kiện công nghệ',
    status: 'Đã xuất bản',
  }

  const data = profileData || defaultData

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 w-[60%] mx-auto">
      {/* Header */}
      <header className="mb-6">
        <div className="flex justify-between items-center">
          <button className="text-blue-600 font-medium flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Quay lại
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-150">
            Xem hồ sơ
          </button>
        </div>
        <h1 className="text-xl font-bold mt-4 text-gray-800">
          {data.title}
          <span className="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {data.status}
          </span>
        </h1>
        <p className="text-gray-500 mt-1">
          Thống kê và phân tích hiệu suất hồ sơ
        </p>
      </header>

      {/* Thẻ thống kê chính */}
      <StatisticSection data={data} />

      {/* Biểu đồ Lượt xem theo thời gian */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Lượt xem theo thời gian
        </h2>
        {/* Placeholder cho biểu đồ đường */}
        <div className="h-64 flex items-center justify-center text-gray-400 border border-dashed border-gray-300 rounded-lg">
          <img
            className="bg-white w-full h-full"
            src={process.env.PUBLIC_URL + '/image/Statistic/BieuDo.png'}
          />
        </div>
      </div>

      {/* Thông tin chi tiết */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Thông tin chi tiết
        </h2>
        <div className="space-y-3 text-gray-600">
          <div className="flex justify-between border-b border-dashed py-1">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              Ngày xuất bản
            </span>
            <span className="font-medium text-gray-800">
              {data.publishDate}
            </span>
          </div>
          <div className="flex justify-between border-b border-dashed py-1">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
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
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              Lần xem gần nhất
            </span>
            <span className="font-medium text-gray-800">{data.lastView}</span>
          </div>
          <div className="flex justify-between border-b border-dashed py-1">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Tỷ lệ quay lại
            </span>
            <span className="font-medium text-gray-800">
              {data.returnRate}%
            </span>
          </div>
          <div className="flex justify-between py-1">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Trung bình tải/ngày
            </span>
            <span className="font-medium text-gray-800">
              {data.averageDaily}
            </span>
          </div>
        </div>
      </div>

      {/* Thông tin hữu ích (nếu cần) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Thông tin hữu ích
        </h2>
        <p className="text-gray-600 border rounded-lg px-4 py-2 bg-[#E9D4FF] text-[#59168B]">
          Hồ sơ của bạn đang được nhiều người quan tâm...
        </p>
      </div>
    </div>
  )
}

export default Statistic
