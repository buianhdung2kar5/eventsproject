import { MdOutlineDateRange } from 'react-icons/md'
import { IoPeople } from 'react-icons/io5'
import { IoEyeOutline } from 'react-icons/io5'
import { RiDiscountPercentLine } from 'react-icons/ri'

export default function StatisticCard() {
  const cards = [
    {
      id: 1,
      name: 'Tổng số sự kiện',
      value: 'events',
      count: '6',
      icon: <MdOutlineDateRange size={28} />,
      percents: '+15%',
    },
    {
      id: 2,
      name: 'Lượt đăng ký',
      value: 'listRegister',
      count: '8386',
      icon: <IoPeople size={28} />,
      percents: '+12%',
    },
    {
      id: 3,
      name: 'Lượt xem',
      value: 'listWatch',
      count: '88,686',
      icon: <IoEyeOutline size={28} />,
      percents: '+10%',
    },
    {
      id: 4,
      name: 'Tỷ lệ tham gia',
      value: 'percentsAccept',
      count: '90%',
      icon: <RiDiscountPercentLine size={28} />,
      percents: '+5%',
    },
  ]

  return (
    <>
      <div className="flex w-full items-center justify-between gap-8">
        {cards.map((c, index) => {
          return (
            <div
              key={c.id}
              className="flex flex-col rounded-lg bg-white shadow-lg p-4 flex-1 gap-1"
            >
              <div className="flex justify-between items-center">
                <p
                  className={` rounded-full p-2 mb-2 ${
                    index % 2 === 0
                      ? 'text-[#5FA9F0] bg-[#5FA9F01A]'
                      : 'text-[#F05A25] bg-[#F05A251A]'
                  }`}
                >
                  {c.icon}
                </p>
                <p className="text-[#008236] text-[12px] bg-[#DCFCE7] rounded-lg px-2 py-1 h-fit">
                  {c.percents}
                </p>
              </div>
              <div className="font-medium text-2xl">{c.count}</div>
              <div className="text-sm text-[#6B7280]">{c.name}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
