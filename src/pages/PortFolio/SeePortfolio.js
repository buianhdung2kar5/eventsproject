import React from 'react'
// Import icons từ thư viện React Icons
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUniversity,
  FaDownload,
  FaPrint,
} from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6' // Sử dụng icon PDF

// Component nhỏ hiển thị một chi tiết sự kiện
const EventDetailCard = ({ icon: Icon, date, location, organization }) => (
  <div className="flex flex-col items-center p-4 text-center">
    <Icon className="text-xl text-[#5FA9F0] mb-2" />
    <div className="text-sm font-semibold text-gray-800">{date}</div>
    <div className="text-xs text-gray-600 mt-1">{location}</div>
    <div className="text-xs text-gray-400">{organization}</div>
  </div>
)

// Component chính
export default function SeePortfolio({ portfolioData }) {
  // Dữ liệu mẫu dựa trên hình ảnh
  const data = portfolioData || {
    studentName: 'Nguyễn Văn A',
    studentInfo: 'MSSV: EV002001 - Đại học Khoa học Hà Nội',
    eventName: 'Hội thảo Công nghệ AI 2025',
    mainEvent: {
      date: 'Ngày tổ chức: 15/03/2025',
      location: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
      organization: 'Bộ Khoa học và Công nghệ',
    },
    subEvent: {
      date: 'Đã tham gia sự kiện:',
      location: 'Workshop Công nghệ',
    },
    details: [
      {
        icon: FaCalendarAlt,
        title: 'Ngày tổ chức',
        date: '05/06/2025',
        location: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
        organization: 'Bộ Khoa học và Công nghệ',
      },
      {
        icon: FaMapMarkerAlt,
        title: 'Địa điểm',
        date: '05/06/2025',
        location: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
        organization: 'Bộ Khoa học và Công nghệ',
      },
      {
        icon: FaUniversity,
        title: 'Đơn vị tổ chức',
        date: '05/06/2025',
        location: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
        organization: 'Bộ Khoa học và Công nghệ',
      },
    ],
    registrationDate: 'Ngày nộp: 05/05/2025',
    trackingCode: 'Mã chứng nhận: EVN050525-0841-2825',
  }

  return (
    <div className="p-4 sm:p-8 min-h-screen flex justify-center items-start w-[60%] mx-auto">
      <div className="w-[70%] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        {/* Phần nội dung chính của Hồ sơ */}
        <div className="p-8 sm:p-8 text-center">
          <h2 className="text-lg font-medium text-[#6B7280] uppercase tracking-widest mb-4 pt-24">
            HỒ SƠ SỰ KIỆN
          </h2>
          <p className="w-[98%] h-[1px] mx-auto bg-[#090D001A]"></p>
          {/* Thông tin Sinh viên */}
          <div className="mb-4">
            <h4 className="mt-6 text-[6B7280] mb-2">Sinh viên</h4>
            <h3 className="text-xl mb-2">{data.studentName}</h3>
            <p className="text-xs text-gray-500">{data.studentInfo}</p>
          </div>
          <div className="p-4 mb-6">
            {data.subEvent && (
              <div className="mt-3 pt-2">
                <p className="text-xs font-semibold text-gray-500">
                  {data.subEvent.date}
                </p>
                <p className="font-semibold text-gray-700">
                  {data.subEvent.location}
                </p>
              </div>
            )}
          </div>

          {/* Các chi tiết thẻ thông tin */}
          <div className="flex justify-between items-start pt-4">
            {data.details.map((detail, index) => (
              <EventDetailCard
                key={index}
                icon={detail.icon}
                date={detail.date}
                location={detail.location}
                organization={detail.organization}
              />
            ))}
          </div>

          {/* Thông tin đăng ký và mã */}
          <div className="mt-4 pt-4 border-t border-dashed text-xs text-gray-500">
            <p>{data.registrationDate}</p>
            <p>{data.trackingCode}</p>
          </div>
        </div>

        {/* Footer: Các nút chức năng */}
        <div className="flex justify-between p-4 bg-gray-50 border-t border-gray-200 gap-4">
          <button className="flex-1 flex items-center justify-center py-2 mx-1 bg-[#5FA9F0] text-white rounded-lg shadow hover:bg-blue-600 transition">
            <FaFilePdf className="mr-2" />
            Tải xuống PDF
          </button>
          <button className="flex-1 flex items-center justify-center py-2 mx-1 border text-black rounded-lg hover:bg-blue-50 transition">
            <FaPrint className="mr-2" />
            In Hồ sơ
          </button>
        </div>
      </div>
    </div>
  )
}
