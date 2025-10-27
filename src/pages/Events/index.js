import SearchInput from '../../components/function/SearchInput'
import ListDataEvents from '../../components/Events/ListDataEvents'
import {detailedEvents} from '../../data/events/DetailEvents'
export default function EventsPage() {
  return (
    <div className="w-full mx-auto flex flex-col items-center px-[2%] py-[clamp(2rem,4vh,3rem)]" style={{gap: 'clamp(1rem,2vw,1.5rem)'}}>
      {/* Container with 60% width for desktop, full width for mobile */}
      <div className="w-full sm:w-[60%] flex flex-col items-center" style={{gap: 'clamp(1rem,2vw,1.5rem)'}}>
        {/* Page Title */}
        <h1 className="text-[#090D00] text-center font-bold" style={{fontSize: 'clamp(1.5rem,3vw,2.5rem)'}}>
          Sự kiện dành cho sinh viên
        </h1>
        
        {/* Page Description */}
        <p className="text-[#6B7280] text-center" style={{fontSize: 'clamp(0.9rem,1.5vw,1.1rem)'}}>
          Khám phá và đăng ký tham gia các sự kiện từ các trường đại học
        </p>
        
        {/* Search Section */}
        <div className="w-full">
          <SearchInput />
        </div>
        
        {/* Results Count */}
        <p className="font-light text-center" style={{
          fontSize: 'clamp(0.8rem,1.2vw,1rem)',
          padding: 'clamp(0.5rem,1vw,1rem)'
        }}>
          Tìm thấy 9 sự kiện
        </p>
        
        {/* Events List */}
        <div className="w-full">
          <ListDataEvents />
        </div>
      </div>
    </div>
  )
}
