import React from 'react'
import { VscOrganization } from 'react-icons/vsc'
import { MdOutlineDateRange } from 'react-icons/md'
import { GiPositionMarker } from 'react-icons/gi'
import { IoMdPeople } from 'react-icons/io'

export default function CardItem({ item, type, viewDetail }) {
  // Mapping your data structure to the UI
  const {
    id,
    img,
    name,
    organization,
    date,
    hours,
    address,
    memberResgiter,
    slots,
    benefit,
    category,
  } = item

  const isJob = type === 'job'
  const isFull = memberResgiter >= slots

  return (
    <div
      onClick={() => viewDetail(id)}
      className="flex flex-col w-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer group"
    >
      {/* 1. Image Section */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + `${img}`}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Badges (Benefit) */}
        <div className="absolute top-[0.8rem] right-[0.8rem] flex flex-wrap justify-end gap-[0.4rem]">
          {benefit}
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-col p-2 md:p-4 flex-grow">
        {/* Category Badge */}
        <div className="mb-[0.8rem] mt-4">
          <span className="bg-slate-50 text-slate-600 px-[0.8rem] py-[0.3rem] rounded-[0.8rem] text-[8px] xl:text-xs font-medium border border-slate-100">
            {category || (isJob ? 'Hậu cần' : 'Kinh doanh')}
          </span>
        </div>

        {/* Title */}
        <h3 className="md:text-sm text-xs xl:text-base font-bold text-[#2d3748] mb-[1rem] line-clamp-2 leading-tight">
          {name}
        </h3>

        {/* Info Rows */}
        <div className="space-y-[0.6rem] mb-[2rem] text-slate-500 font-medium text-[8px] xl:text-xs">
          {/* Organization */}
          {type === 'job' && (
            <div className="flex items-center gap-[0.7rem]">
              <VscOrganization className="min-w-[0.5rem]" />
              <span className="truncate">{organization}</span>
            </div>
          )}

          {/* Date & Time */}
          <div className="flex items-center gap-1">
            <MdOutlineDateRange className="min-w-2" />
            <span>
              {date} {hours && `- ${hours}`}
            </span>
          </div>

          {/* Address (If available) */}
          {address && type === 'job' && (
            <div className="flex items-center gap-1">
              <GiPositionMarker className="min-w-[0.5rem]" />
              <span className="truncate">{address}</span>
            </div>
          )}

          {/* Slots/Registration */}
          <div className="flex items-center gap-1">
            <IoMdPeople className="" />
            <span className="">
              {memberResgiter}/{slots} đã {isJob ? 'ứng tuyển' : 'đăng ký'}
            </span>
          </div>
        </div>

        {/* 3. Action Button */}
        <div className="mt-auto">
          <button
            disabled={isFull}
            className={`
              w-full py-2 rounded-[1.2rem] text-white font-bold text-[8px] xl:text-sm transition-all active:scale-[0.98]
              ${
                isFull
                  ? 'bg-gray-300 cursor-not-allowed'
                  : isJob
                    ? 'bg-[#cd001a] hover:bg-red-700 shadow-md shadow-red-100'
                    : 'bg-[#4dbcd8] hover:bg-cyan-600 shadow-md shadow-cyan-100'
              }
            `}
          >
            {isFull ? 'Hết chỗ' : isJob ? 'Ứng tuyển ngay' : 'Đăng ký ngay'}
          </button>
        </div>
      </div>
    </div>
  )
}
