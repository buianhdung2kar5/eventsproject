import { DetailEvents } from '../../data/events/DetailEvents'
import { HiDotsVertical } from 'react-icons/hi'
import { IoEyeOutline } from 'react-icons/io5'
import { FaEdit } from 'react-icons/fa'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { FiCheckCircle } from 'react-icons/fi'

export default function EventListCreate() {
  const mockDataEventList = DetailEvents.filter((e) => {
    return e.organization === 'Đại học NEU'
  })
  const actionButtons = [
    {
      id: 1,
      name: 'Xem',
      icon: <IoEyeOutline />,
      value: 'see',
    },
    {
      id: 2,
      name: 'Chỉnh sửa',
      icon: <FaEdit />,
      value: 'edit',
    },
    {
      id: 3,
      name: 'Thống kê',
      icon: <FaArrowTrendUp />,
      value: 'statistic',
    },
  ]

  return (
    <>
      <div className="flex flex-col w-full p-4 gap-4">
        {mockDataEventList.map((event) => {
          return (
            <div className="p-4 border rounded-lg hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-between relative">
                <div className="flex gap-4 p-1 items-center max-h-36 overflow-hidden">
                  <img
                    className="rounded-lg w-32 h-32 object-cover flex-shrink-0"
                    src={process.env.PUBLIC_URL + event.img}
                  />
                  <div className="flex flex-col gap-2 h-full min-w-0 flex-1">
                    <p>{event.name}</p>
                    <p className="text-sm text-[#6B7280]">{event.aboutEvent}</p>
                    <div className="flex gap-1">
                      <p className="rounded-lg px-1 py-0.5 text-sm text-[#6B7280]">
                        {event.date}
                      </p>
                      <p className="rounded-lg px-1 py-0.5 text-sm text-[#6B7280]">{`${event.memberResgiter}/${event.slots} người đăng ký`}</p>
                      <p className="rounded-xl px-2 py-0.5 text-[12px] my-auto text-black bg-[#EFF1CF]">
                        {event.price}
                      </p>
                      <p className="rounded-xl px-2 py-0.5 text-[12px] my-auto text-[#5FA9F0] bg-[#5FA9F01A]">
                        {event.certificate}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-[12px] px-2 py-1 text-white bg-[#5FA9F0] flex gap-1 rounded-lg items-center">
                        <p>
                          <FiCheckCircle />
                        </p>
                        <p>Đã xuất bản</p>
                      </p>
                      {actionButtons.map((a) => {
                        return (
                          <button className="flex gap-1 px-2 py-0.5 items-center text-sm rounded-lg border">
                            <p>{a.icon}</p>
                            <p>{a.name}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-0 right-1"
                  onClick={() => alert('Đã click!')}
                >
                  <HiDotsVertical />
                </div>
              </div>
              <p></p>
            </div>
          )
        })}
      </div>
    </>
  )
}
