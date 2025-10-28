// src/components/HeaderSection.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
const HeaderSection = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center mb-6 mt-8">
      <div>
        <h1 className="text-2xl font-medium text-[#5FA9F0]">Quản lý Hồ sơ</h1>
        <p className="text-[16px] text-[#6B7280] mt-1 w-[80%]">
          Tạo và quản lý các hồ sơ hoạt động của bạn để chia sẻ với nhà tuyển
          dụng hoặc nộp học bổng
        </p>
      </div>
      <button
        className="flex text-[14px] items-center px-2 py-1 bg-[#5FA9F0] text-white rounded-lg shadow hover:bg-blue-700 transition-colors my-auto"
        onClick={() => navigate(PATH.ACCOUNT)}
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        Tạo hồ sơ mới
      </button>
    </div>
  )
}

export default HeaderSection
