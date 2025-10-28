import { MdDateRange } from 'react-icons/md'
import { PiMedalDuotone } from 'react-icons/pi'
import { CiClock1 } from 'react-icons/ci'
import { FaArrowTrendUp } from 'react-icons/fa6'

export default function AboutEventsOfAccount() {
  const data = [
    {
      id: 1,
      name: 'Sự kiện đã tham gia',
      number: 8,
      attributeText: 2,
      icon: <MdDateRange />,
    },
    {
      id: 2,
      name: 'Chứng chỉ',
      number: 5,
      attributeText: '5/10 so với mục tiêu năm học',
      icon: <PiMedalDuotone />,
    },
    {
      id: 3,
      name: 'Sự kiện sắp tới',
      number: 3,
      attributeText: 'Trong 7 ngày tới',
      icon: <CiClock1 />,
    },
    {
      id: 4,
      name: 'Điểm tích lũy',
      number: 450,
      attributeText: 'Top 15% sinh viên',
      icon: <FaArrowTrendUp />,
    },
  ]
  return (
    <section className="w-full flex flex-wrap justify-center gap-y-4 gap-x-8 mx-auto">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center w-[48%] p-4 px-0 border rounded-xl shadow-sm text-center"
        >
          <div className="flex gap-1 items-center mb-2">
            <p>{item.name}</p>
            <p className="text-2xl text-[#6B7280]">{item.icon}</p>
          </div>
          <div className="text-2xl font-bold">{item.number}</div>
          <div className="text-[#6B7280]">{item.attributeText}</div>
        </div>
      ))}
    </section>
  )
}
