import React, { useState } from 'react'
// Import icons từ thư viện React Icons
import {
  FaEye,
  FaLink,
  FaChartBar,
  FaEdit,
  FaTrash, // Nút chức năng
  FaShareAlt,
  FaCopy,
  FaCheck, // Chia sẻ
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUniversity, // Chi tiết hoạt động
  FaUserFriends,
  FaCompass, // Tags hoạt động
  FaRegFileAlt,
  FaLockOpen,
  FaRegClock,
  FaDownload, // Thông tin tóm tắt
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../routes/path'
const mockData = {
  title: 'Nguyễn Văn A – Sự kiện công nghệ 2025',
  description:
    'Hồ sơ tổng hợp các hoạt động và sự kiện tham gia liên quan đến Công nghệ',
  summary: [
    { icon: FaRegFileAlt, value: 2, label: 'hoạt động' },
    { icon: FaCalendarAlt, value: '20/10/2025', label: 'Ngày cập nhật' },
    { icon: FaEye, value: 6, label: 'lượt xem' },
    { icon: FaDownload, value: 3, label: 'tải xuống' },
  ],
  status: 'Đã xuất bản',
  visibility: 'Công khai',
  shareLink:
    'https://7c6c8f71-5601-4288-9b28-30eead0c11a0c-figmaiframepreview.figma.site/p/nguyen-van-a-marketing-2025',
  activities: [
    {
      id: 1,
      name: 'Hội thảo Công nghệ AI 2025',
      completedDate: '5/12/2025',
      tags: [
        {
          label: 'Chứng chỉ SV 5 tốt',
          color: 'bg-yellow-100 text-yellow-800',
          icon: FaCheck,
        },
        {
          label: 'Diễn giả',
          color: 'bg-blue-100 text-blue-800',
          icon: FaUserFriends,
        },
        {
          label: 'Khởi nghiệp',
          color: 'bg-green-100 text-green-800',
          icon: FaCompass,
        },
      ],
      details: [
        { icon: FaMapMarkerAlt, text: 'Trung tâm Khởi nghiệp HCMUT' },
        { icon: FaUniversity, text: 'ĐH Bách Khooa TP.HCM' },
      ],
      description:
        'Diễn giả chia sẻ về AI Startup. Diễn giả chia sẻ kinh nghiệm startup',
    },
    {
      id: 2,
      name: 'Định hướng ngành nghề',
      completedDate: '28/11/2025',
      tags: [
        {
          label: 'Chứng chỉ SV 5 tốt',
          color: 'bg-yellow-100 text-yellow-800',
          icon: FaCheck,
        },
        {
          label: 'Người tham gia',
          color: 'bg-pink-100 text-pink-800',
          icon: FaUserFriends,
        },
        {
          label: 'Định hướng nghề nghiệp',
          color: 'bg-indigo-100 text-indigo-800',
          icon: FaCompass,
        },
      ],
      details: [
        { icon: FaMapMarkerAlt, text: 'Phòng Quan hệ Doanh nghiệp' },
        { icon: FaUniversity, text: 'ĐH Ngoại thương' },
      ],
      description: null,
    },
  ],
}

// --- Component Card Chi tiết hoạt động ---
const ActivityCard = ({ activity }) => (
  <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-md mb-4 hover:shadow-lg transition duration-300">
    <div className="flex items-start mb-3">
      <FaCheckCircle className="text-green-500 text-xl mr-3 mt-1 flex-shrink-0" />
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{activity.name}</h3>
        <p className="text-sm text-gray-500">
          Hoàn thành: {activity.completedDate}
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {activity.tags.map((tag, i) => (
        <span
          key={i}
          className={`flex items-center text-xs font-semibold px-3 py-1 rounded-full ${tag.color}`}
        >
          {tag.icon && <tag.icon className="w-3 h-3 mr-1" />}
          {tag.label}
        </span>
      ))}
    </div>

    <div className="space-y-2 mb-4 text-sm text-gray-600 border-l-2 border-gray-200 pl-4">
      {activity.details.map((detail, i) => (
        <p key={i} className="flex items-center">
          <detail.icon className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" />
          {detail.text}
        </p>
      ))}
    </div>

    {activity.description && (
      <p className="text-sm text-gray-700 mt-3 border-t pt-3">
        {activity.description}
      </p>
    )}
  </div>
)

// --- Component Chính: EditPortfolio ---
export default function EditPortfolio({ portfolioData = mockData }) {
  const navigate = useNavigate()
  const [isCopied, setIsCopied] = useState(false)
  const dataLocalStorage = localStorage.getItem('CombinedPortfolio')
    ? JSON.parse(localStorage.getItem('CombinedPortfolio'))
    : []

  // LOGIC TÍCH HỢP SAO CHÉP LINK
  const HandleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.shareLink)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Không thể sao chép liên kết:', err)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header và Tóm tắt */}
      <div className="w-[60%] mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <header className="mb-6">
          <button
            className="text-blue-600 font-medium flex items-center mb-4"
            onClick={() => navigate(PATH.PORTFOLIO)}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Quay về Quản lý Hồ sơ
          </button>

          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {portfolioData.title}
            </h1>
            <div className="flex space-x-2">
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center">
                <FaCheck className="w-3 h-3 mr-1" />
                {portfolioData.status}
              </span>
              <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center">
                <FaLockOpen className="w-3 h-3 mr-1" />
                {portfolioData.visibility}
              </span>
            </div>
          </div>
          <p className="text-gray-500 mt-1">{portfolioData.description}</p>
        </header>

        {/* Summary Bar */}
        <div className="flex flex-wrap justify-between items-center py-4 border-y border-dashed mb-6">
          {portfolioData.summary.map((item, index) => (
            <div key={index} className="flex items-center text-sm p-2">
              <item.icon className="w-4 h-4 mr-2 text-blue-500" />
              <span className="font-semibold text-gray-800 mr-1">
                {item.value}
              </span>
              <span className="text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Function Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            <FaEye className="w-4 h-4 mr-2" /> Xem
          </button>
          <button
            onClick={HandleCopyLink} // SỬ DỤNG HÀM SAO CHÉP TÍCH HỢP
            className={`flex items-center px-4 py-2 text-gray-700 border rounded-lg transition ${
              isCopied
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {isCopied ? (
              <>
                <FaCheck className="w-4 h-4 mr-2" /> Đã sao chép!
              </>
            ) : (
              <>
                <FaLink className="w-4 h-4 mr-2" /> Sao chép link
              </>
            )}
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 border rounded-lg hover:bg-gray-200 transition">
            <FaChartBar className="w-4 h-4 mr-2" /> Thống kê
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 border rounded-lg hover:bg-gray-200 transition">
            <FaEdit className="w-4 h-4 mr-2" /> Chỉnh sửa
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-100 text-red-600 border rounded-lg hover:bg-red-50 transition">
            <FaTrash className="w-4 h-4 mr-2" /> Xóa
          </button>
        </div>
      </div>

      {/* Danh sách các hoạt động đã tham gia */}
      <div className="w-[60%] mx-auto mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Các hoạt động đã tham gia
        </h2>
        {portfolioData.activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>

      {/* Phần Chia sẻ */}
      <div className="w-[60%] mx-auto mt-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-start">
          <FaShareAlt className="w-5 h-5 mr-4 text-blue-500 flex-shrink-0 mt-1" />
          <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Chia sẻ hồ sơ của bạn
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Link chia sẻ công khai của hồ sơ này. Bất kỳ ai có link này đều có
              thể xem hồ sơ.
            </p>

            <div className="w-[90%] flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="block p-3 flex-grow text-sm text-gray-700 bg-gray-50 truncate">
                {portfolioData.shareLink}
              </span>

              <button
                onClick={HandleCopyLink}
                className={`flex items-center justify-center p-3 text-sm font-medium rounded-none transition-colors duration-200 ${
                  isCopied
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                disabled={isCopied}
              >
                {isCopied ? (
                  <FaCheck className="w-4 h-4" />
                ) : (
                  <FaCopy className="w-4 h-4" />
                )}
                <span className="ml-2 hidden sm:inline">
                  {isCopied ? 'Đã sao chép' : 'Sao chép'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
