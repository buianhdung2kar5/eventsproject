import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PortfolioModal({ portfolio, onClose }) {
  if (!portfolio) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-2xl shadow-xl p-6 relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="text-center text-gray-700 text-sm font-medium tracking-wide mb-4">
          HỒ SƠ SỰ KIỆN
        </h2>

        {/* Student Info */}
        <div className="text-center border-b border-gray-100 pb-3 mb-3">
          <p className="font-semibold text-gray-800">{portfolio.name}</p>
          <p className="text-sm text-gray-500">
            MSSV: {portfolio.studentId} – {portfolio.school}
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {portfolio.events.map((event, index) => (
            <div
              key={index}
              className="text-center border-b border-gray-100 pb-3"
            >
              <p className="text-sm text-gray-600">Đã tham gia sự kiện</p>
              <p className="font-semibold text-gray-800">“{event.title}”</p>

              <div className="grid grid-cols-3 gap-2 mt-2 text-xs text-gray-500">
                <div>
                  <p className="font-medium text-gray-700">Ngày tổ chức</p>
                  <p>{event.date}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Địa điểm</p>
                  <p>{event.location}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Đơn vị tổ chức</p>
                  <p>{event.organizer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 text-center text-xs text-gray-500">
          <p>Ngày cấp: {portfolio.issuedDate}</p>
          <p>
            Mã chứng chỉ:{' '}
            <span className="font-medium text-gray-700">
              {portfolio.certificateCode}
            </span>
          </p>
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          <Button
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
            onClick={() => alert('Downloading PDF...')}
          >
            Tải xuống PDF
          </Button>
          <Button
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl"
            onClick={onClose}
          >
            Đóng
          </Button>
        </div>
      </div>
    </div>
  )
}
