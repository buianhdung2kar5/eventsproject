import { PiCertificateBold } from 'react-icons/pi'
import { VscOrganization } from 'react-icons/vsc'
import { MdOutlineDateRange } from 'react-icons/md'
import { GiPositionMarker } from 'react-icons/gi'
import { IoMdPeople } from 'react-icons/io'
import '../../style/global.css'
import { dataEvents } from '../../data/events/events'
export default function ListDataEvents() {
  const dataEvent = dataEvents
  return (
    <div className="grid grid-cols-3 justify-items-stretch align-items-center w-full gap-y-8 gap-x-8 line-clamp-2">
      {dataEvent.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-white border rounded-lg w-full h-[412px] relative flex flex-col gap-4 shadow-md overflow-hidden
             transition-all duration-300 ease-in-out 
             hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03] hover:border-[#5FA9F0] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

            <div className="w-full h-[40%] pb-2">
              <img
                src={process.env.PUBLIC_URL + `${item.img}`}
                className="border-0 rounded-tr-lg rounded-tl-lg "
              />
              <div className="absolute top-3 right-3 flex items-center justify-center bg-[#5FA9F0] border-0 rounded-lg">
                <p className="text-white p-1">
                  <PiCertificateBold size="12px" />
                </p>
                <p
                  className="
                              text-white p-1 pl-0  text-[12px]
                            "
                >
                  {item.certificate}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center relative p-2">
                <p className="absolute left-2 bg-[#EFF1CF] border rounded-[10px] font-medium px-2 py-[2px] text-[12px]">
                  {item.category}
                </p>
                <p className="absolute right-4 text-[#00A63E] text-[14px]">
                  {item.price}
                </p>
              </div>
              <div className="ml-2 text-[16px] line-clamp-1">{item.name}</div>
              <div className="ml-2 flex  gap-1 items-center text-[#6B7280]">
                <VscOrganization />
                <p>{item.organization}</p>
              </div>
              <div className="ml-2 flex gap-1 items-center text-[#6B7280]">
                <MdOutlineDateRange size="14px" />
                <p className="text-14px">
                  {item.date} - {item.hours}
                </p>
              </div>
              <div className="ml-2 flex gap-1 items-center text-[#6B7280]">
                <GiPositionMarker size="14px" />
                <p className="text-14px">{item.address}</p>
              </div>
              <div className="ml-2 flex gap-1 items-center text-[14px] text-[#6B7280]">
                <IoMdPeople />
                <p>
                  {item.memberResgiter}/{item.slots} người đăng ký
                </p>
              </div>
            </div>
            <button className="bg-[#5FA9F0] text-white border rounded-lg w-[90%] mx-auto p-1 font-medium">
              Đăng ký ngay!
            </button>
          </div>
        )
      })}
    </div>
  )
}
