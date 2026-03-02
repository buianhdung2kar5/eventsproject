import { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { MdOutlineDateRange } from 'react-icons/md'
import { IoMdPeople } from 'react-icons/io'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { IoIosSettings } from 'react-icons/io'

export default function SideBar() {
  const SideBarOptions = [
    {
      id: 1,
      label: 'Tổng quan',
      value: 'overview',
      icon: <MdDashboard />,
    },
    {
      id: 2,
      label: 'Sự kiện của tôi',
      value: 'events',
      icon: <MdOutlineDateRange />,
    },
    {
      id: 3,
      label: 'Người tham gia',
      value: 'participants',
      icon: <IoMdPeople />,
    },
    {
      id: 4,
      label: 'Thống kê',
      value: 'statistic',
      icon: <FaArrowTrendUp />,
    },
    {
      id: 5,
      label: 'Cài đặt',
      value: 'setting',
      icon: <IoIosSettings />,
    },
  ]
  const [optionActive, setOptionActive] = useState('overview')
  const handleActiveOption = (o) => {
    setOptionActive(o.value)
  }
  return (
    <>
      <div className="flex flex-col px-4 py-6 items-start gap-4 w-full">
        <div className="flex gap-4 items-center justify-center">
          <img
            src={process.env.PUBLIC_URL + '/imageO/AnhDoanhNghiep.JPG'}
            className="border rounded-full w-12 h-12"
          />
          <div className="flex flex-col gap-1">
            <p className="m-0 text-sm">NEU</p>
            <p className="m-0 text-[12px] text-[#6B7280]">Doanh Nghiệp</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start">
          {SideBarOptions.map((o) => {
            return (
              <div
                key={o.id}
                className={` w-full flex gap-2 items-center p-2 cursor-pointer  rounded-lg ${
                  optionActive === o.value
                    ? 'bg-[#5FA9F01A] text-[#5FA9F0]'
                    : ''
                }`}
                onClick={() => handleActiveOption(o)}
              >
                <p>{o.icon}</p>
                <p className="flex-1">{o.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
