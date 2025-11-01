// src/components/PortfolioItem.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
import { CertificateModal } from '../../components/Certificate/CertificateModal'
import { useState } from 'react'
import { DetailEvents } from '../../data/events/DetailEvents'
const PortfolioItem = ({
  id,
  title,
  description,
  status,
  activities,
  date,
  views,
  downloads,
  item,
  handleDelete,
}) => {
  const navigate = useNavigate()
  console.log('tem', item)

  const [viewCertificate, setViewCertificate] = useState(false)
  const statusClass =
    status === 'Đã xuất bản'
      ? 'bg-blue-100 text-blue-800'
      : 'bg-orange-100 text-orange-800'
  const handleSeeCertificate = () => {
    setViewCertificate(true)
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
      <div className="flex justify-between items-start mb-2 flex-wrap">
        <h2 className="text-lg font-semibold text-gray-800 break-words pr-2">
          {title}
        </h2>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0 flex-shrink-0">
          <span
            className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${statusClass}`}
          >
            {status}
          </span>
          <span className="flex items-center text-gray-500 text-xs">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              ></path>
            </svg>
            Công khai
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-4 text-xs text-gray-500 mb-4">
        <div className="flex items-center">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17v2m-3-4v4m-3-6v6m9-2v2m3-4v4m3-6v6M3 10h18M3 6h18a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2z"
            ></path>
          </svg>
          {activities} hoạt động
        </div>
        <div className="flex items-center">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h.01M7 16h.01M17 16h.01M9 16h.01M17 12h.01M14 16h.01M12 18h.01M7 12h.01M12 3v18"
            ></path>
          </svg>
          {date}
        </div>
        <div className="flex items-center">
          <svg
            className="w-3 h-3 mr-1"
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
          {views} lượt xem
        </div>
        <div className="flex items-center">
          <svg
            className="w-3 h-3 mr-1"
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
          {downloads} tải xuống
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <button
          key={item.id}
          className="flex items-center px-3 py-1 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
          onClick={handleSeeCertificate}
        >
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
          Xem
        </button>
        <button
          className="flex items-center px-3 py-1 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => console.log(`Sao chép link ${title}`)}
        >
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
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h6a2 2 0 002-2v-8a2 2 0 00-2-2h-6a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
          Sao chép link
        </button>
        <button
          className="flex items-center px-3 py-1 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => navigate(PATH.STATISTICPORTFOLIO)}
        >
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
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            ></path>
          </svg>
          Thống kê
        </button>
        <button
          className="flex items-center px-3 py-1 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => navigate(PATH.EDITPORTFOLIO.replace(':id', id))}
        >
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
          Chỉnh sửa
        </button>
        <button
          type="button"
          className="flex items-center px-3 py-1 bg-gray-50 text-red-600 rounded-md hover:bg-gray-100 transition-colors"
          onClick={handleDelete}
        >
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>
      {viewCertificate && (
        <CertificateModal
          certificate={item?.items}
          onClose={() => {
            setViewCertificate(false)
          }}
        />
      )}
    </div>
  )
}

export default PortfolioItem
