import HeaderOrganization from '../../layout/Header'
import { FaPlus } from 'react-icons/fa'
import StatisticCard from '../../component/StatisticCard'
import EventListCreate from '../../component/EventList'
export default function HomepageOrganization() {
  return (
    <div className="bg-white flex flex-col gap-6 px-4 py-2">
      <HeaderOrganization
        title={'Tổng quan'}
        description={'Xem tổng quan hoạt động và thống kê'}
        buttonName={'Tạo sự kiện mới'}
        buttonIcon={<FaPlus />}
      />
      <hr />
      <div className="w-[96%] mx-auto">
        <StatisticCard />
      </div>
      <div className="flex flex-col rounded-lg shadow-lg w-[96%] mx-auto">
        <div className="flex flex-col justify-center p-4">
          <p className="text-lg font-medium">Sự kiện gần đây</p>
          <p className="text-sm text-[#6B7280]">Các sự kiện bạn đã tạo</p>
        </div>
        <div
        className=""
        >
          <EventListCreate />
        </div>
      </div>
    </div>
  )
}
