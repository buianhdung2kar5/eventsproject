import React, { useState } from 'react'
import {
  MdCheckCircleOutline,
  MdQrCode2,
  MdCalendarMonth,
  MdOutlineLock,
} from 'react-icons/md'
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'
import { IoIosSave } from 'react-icons/io'
import { FaCheck } from 'react-icons/fa'
import SideBarFunction from '../../../feature/Auth/Protfolio/SideBarFunction'
import { DetailEvents } from '../../../data/events/DetailEvents'
export default function CheckEventsAccount() {
  const [activeTab, setActiveTab] = useState('done')
  const [isSelected, setIsSelected] = useState([])
  const [itemSelected, setItemSelected] = useState([])
  const completedEvents = DetailEvents.map((item) => {
    return {
      id: item.id,
      title: item.name,
      date: item.date,
      certificate: item.certificate,
    }
  })

  const upcomingEvents = [
    {
      title: 'Đêm nhạc Sinh viên Acoustic',
      time: '20/11/2025 - 19:00',
      place: 'Hội trường lớn, ĐH Quốc gia Hà Nội',
    },
    {
      title: 'Workshop Kỹ năng Thuyết trình',
      time: '25/11/2025 - 14:00',
      place: 'Phòng B203, ĐH Kinh tế Quốc dân',
    },
    {
      title: 'Triển lãm Nghệ thuật Sinh viên',
      time: '1/12/2025 - 10:00',
      place: 'Sảnh chính, ĐH Mỹ thuật Công nghiệp',
    },
  ]

  const userInfo = {
    name: 'Admin',
    studentId: 'SV2021001',
    university: 'Đại học Kinh tế Quốc dân',
    email: 'admin@student.edu.vn',
    phone: '0123456789',
  }
  const handleSetChoose = (i, item) => {
    setIsSelected((prevIds) => {
      const isAlreadySelected = prevIds?.includes(i)

      if (isAlreadySelected) {
        return prevIds.filter((id) => id !== i)
      } else {
        return [...prevIds, i]
      }
    })

    setItemSelected((prevItems) => {
      const isAlreadySelected = prevItems.some(
        (prevItem) => prevItem.id === item.id
      )

      if (isAlreadySelected) {
        return prevItems.filter((prevItem) => prevItem.id !== item.id)
      } else {
        return [...prevItems, item]
      }
    })
  }
  // ======= JSX =======
  return (
    <section className="w-full mx-auto mt-6 font-sans">
      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-full p-1 justify-around mb-5">
        <button
          onClick={() => setActiveTab('done')}
          className={`flex-1 py-2 rounded-full ${
            activeTab === 'done' ? 'bg-white shadow font-semibold' : ''
          }`}
        >
          Sự kiện đã hoàn thành
        </button>
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`flex-1 py-2 rounded-full ${
            activeTab === 'upcoming' ? 'bg-white shadow font-semibold' : ''
          }`}
        >
          Sự kiện sắp tới
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex-1 py-2 rounded-full ${
            activeTab === 'settings' ? 'bg-white shadow font-semibold' : ''
          }`}
        >
          Cài đặt
        </button>
      </div>

      {/* --- Tab 1: Sự kiện đã hoàn thành --- */}
      {activeTab === 'done' && (
        <div className="border rounded-2xl p-5">
          <div className="flex mx-auto relative">
            <div>
              <h2 className="font-semibold text-lg mb-1">
                Sự kiện đã hoàn thành
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Chọn sự kiện để xuất hoặc tải hồ sơ
              </p>
            </div>
            <div className="flex gap-2">
              <button className="absolute right-24  border rounded-lg px-4 py-2 text-center">
                Bỏ chọn tất cả
              </button>
              <MdQrCode2 className="w-8 h-8 text-[#5FA9F0] absolute right-8 mt-1" />
            </div>
          </div>
          {isSelected?.length ? (
            <div className="w-full">
              <SideBarFunction items={itemSelected} />
            </div>
          ) : null}
          <div className="space-y-3">
            {completedEvents.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border rounded-xl p-4 hover:shadow-sm cursor-pointer"
                onClick={() => handleSetChoose(i, item)}
              >
                {isSelected?.includes(i) ? (
                  <div className="order-1 text-green-400">
                    <FaCheck className="text-[24px]" />
                  </div>
                ) : null}
                <div>
                  <div className="flex items-center gap-2 text-green-600">
                    <MdCheckCircleOutline />
                    <p className="font-medium text-black">{item.title}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Hoàn thành: {item.date}
                  </p>
                  <span className="inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded mt-2">
                    {item.certificate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- Tab 2: Sự kiện sắp tới --- */}
      {activeTab === 'upcoming' && (
        <div className="border rounded-2xl p-5">
          <h2 className="font-semibold text-lg">Sự kiện sắp diễn ra</h2>
          <p className="text-sm text-gray-500 mb-4">
            Các sự kiện bạn đã đăng ký
          </p>

          <div className="space-y-3">
            {upcomingEvents.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border rounded-xl p-4 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 text-blue-500">
                    <MdCalendarMonth />
                    <p className="font-medium text-black">{item.title}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <FaRegClock />
                    {item.time}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <FaMapMarkerAlt />
                    {item.place}
                  </p>
                </div>
                <button className="bg-blue-100 text-blue-600 text-sm px-3 py-1.5 rounded-full">
                  Đã đăng ký
                </button>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full border rounded-xl py-2 text-sm hover:bg-gray-50">
            Khám phá thêm sự kiện
          </button>
        </div>
      )}

      {/* --- Tab 3: Cài đặt --- */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          {/* Thông tin cá nhân */}
          <div className="border rounded-2xl p-5">
            <h2 className="font-semibold text-lg">Thông tin cá nhân</h2>
            <p className="text-sm text-gray-500 mb-4">
              Cập nhật thông tin tài khoản của bạn
            </p>

            <div className="space-y-3">
              <input
                className="w-full border rounded-lg p-2"
                value={userInfo.name}
                readOnly
              />
              <input
                className="w-full border rounded-lg p-2"
                value={userInfo.studentId}
                readOnly
              />
              <input
                className="w-full border rounded-lg p-2"
                value={userInfo.university}
                readOnly
              />
              <input
                className="w-full border rounded-lg p-2"
                value={userInfo.email}
                readOnly
              />
              <input
                className="w-full border rounded-lg p-2"
                value={userInfo.phone}
                readOnly
              />
            </div>

            <button className="mt-4 w-full bg-[#5FA9F0] text-white py-2 rounded-lg flex items-center justify-center gap-2">
              <IoIosSave />
              Lưu thay đổi
            </button>
          </div>

          {/* Đổi mật khẩu */}
          <div className="border rounded-2xl p-5">
            <h2 className="font-semibold text-lg">Đổi mật khẩu</h2>
            <p className="text-sm text-gray-500 mb-4">
              Cập nhật mật khẩu để bảo mật tài khoản
            </p>

            <div className="space-y-3">
              <input
                type="password"
                className="w-full border rounded-lg p-2"
                placeholder="Mật khẩu hiện tại"
              />
              <input
                type="password"
                className="w-full border rounded-lg p-2"
                placeholder="Mật khẩu mới"
              />
              <input
                type="password"
                className="w-full border rounded-lg p-2"
                placeholder="Xác nhận mật khẩu mới"
              />
            </div>

            <button className="mt-4 w-full bg-[#5FA9F0] text-white py-2 rounded-lg flex items-center justify-center gap-2">
              <MdOutlineLock />
              Đổi mật khẩu
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
