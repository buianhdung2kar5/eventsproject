import SearchInput from '../../components/function/SearchInput'
import ListDataEvents from '../../components/Events/ListDataEvents'
export default function EventsPage() {
  return (
    <div className="w-full mx-auto gap-4 flex flex-col pt-8 items-center">
      <p className="text-[#090D00] text-2xl">Sự kiện dành cho sinh viên</p>
      <p className="text-[16px] text-[#6B7280]">
        Khám phá và đăng ký tham gia các sự kiện từ các trường đại học
      </p>
      <div className="w-[60%]">
        <SearchInput />
      </div>
      <p className="font-light p-4">Tìm thấy 9 sự kiện</p>
      <div className="w-[60%]">
        <ListDataEvents />
      </div>
    </div>
  )
}
