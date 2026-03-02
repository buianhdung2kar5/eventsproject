import { WiStars } from 'react-icons/wi'
import { useNavigate } from 'react-router-dom'
import { IoMdPeople } from 'react-icons/io'
import { LiaCertificateSolid } from 'react-icons/lia'
import { BsFillCalendar3EventFill } from 'react-icons/bs'

import ListDataEvents from '../../components/Events/ListDataEvents'
export default function HomePage() {
  const navigate = useNavigate()
  const inforEvents = [
    {
      id: 1,
      label: 'Sự kiện',
      value: '500',
    },
    {
      id: 2,
      label: 'Sinh viên',
      value: '10,000',
    },
    {
      id: 3,
      label: 'Trường ĐH',
      value: '50',
    },
  ]
  const tags = [
    {
      id: 1,
      icon: (
        <BsFillCalendar3EventFill
          style={{
            fontSize: '1.5rem',
          }}
        />
      ),
      label: 'Đa dạng sự kiện',
      description:
        'Hàng nghìn sự kiện từ công nghệ, kinh doanh đến văn hóa nghệ thuật',
      className: 'bg-[#06B6D4]/10 text-gray-400',
    },
    {
      id: 2,
      icon: (
        <LiaCertificateSolid
          style={{
            fontSize: '1.5rem',
          }}
        />
      ),
      label: 'Chứng chỉ SV 5 tốt',
      description: 'Tích lũy chứng chỉ được công nhận, cộng điểm rèn luyện',
      className: 'bg-[#DB0025]/10 text-[#DB0025]',
    },
    {
      id: 3,
      icon: (
        <IoMdPeople
          style={{
            fontSize: '1.5rem',
          }}
        />
      ),
      label: 'Cộng đồng sinh viên',
      description:
        'Kết nối với hàng nghìn sinh viên cùng đam mê từ khắp Việt Nam',
      className: 'bg-[#DCFCE7] text-[#00A63E]',
    },
  ]
  return (
    <div className="flex flex-col items-center my-4 gap-12">
      <section className="w-[86%] my-8 flex items-center justify-between">
        {/* Content */}
        {/* Main Content */}
        <div className="flex flex-col justify-center items-start w-[45%] xl:gap-4 gap-2">
          <div className="w-fit flex gap-1 text-[#06B6D4] items-center rounded-3xl lg:px-4 lg:py-2 px-2 py-1 border border-[#06B6D4]/20 bg-[#06B6D4]/10 font-bold lg:text-xs text-[8px]">
            <WiStars
              style={{
                fontSize: '1.5rem',
              }}
            />
            <p>Nền tảng sự kiện sinh viên số 1 Việt Nam</p>
          </div>
          <p className="text-[#273143] font-bold 2xl:text-6xl xl:text-5xl lg:text-3xl text-xl">
            Khám phá sự kiện
          </p>
          <p className="text-[#06B6D4] font-bold xl:text-6xl lg:text-4xl text-2xl">
            Sinh Viên
          </p>
          <p className="text-[#67688C] xl:text-lg text-sm xl:py-4 py-2">
            Nền tảng kết nối sinh viên với các sự kiện, tìm kiếm cơ hội nghề
            nghiệp nhất tại Việt Nam
          </p>
          <div className="w-[80%] flex items-center py-2 px-2 justify-between">
            {inforEvents.map((item) => {
              return (
                <div key={item.id} className="flex flex-col gap-1">
                  <p className="text-[#06B6D4] xl:text-3xl text-xl font-bold">
                    {item.value}+
                  </p>
                  <p className="text-[#67688C] lg:text-sm text-xs">
                    {item.label}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="flex gap-4">
            <button
              className="2xl:px-8 2xl:py-2 px-4 py-1 bg-[#06B6D4] text-white rounded-lg shadow-lg hover:bg-[#06B6D4]/80 transition-colors duration-300 2xl:text-lg lg:text-base text-xs"
              onClick={() => {
                navigate('/events')
              }}
            >
              Khám phá ngay
            </button>
            <button
              className="2xl:px-8 2xl:py-2 px-4 py-1 bg-white text-black rounded-lg shadow-lg hover:bg-[#DB0025]/80 transition-colors duration-300 2xl:text-lg lg:text-base text-xs"
              onClick={() => {
                navigate('/jobs')
              }}
            >
              Việc làm
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="w-[45%] flex items-center justify-around 2xl:gap-4 gap-2">
          <div className="flex flex-col justify-center w-[48%] 2xl:gap-8 lg:gap-4 gap-2">
            <p className="xl:px-4 xl:py-4 px-2 py-2 w-full border rounded-2xl bg-[#DB0025] text-white shadow-lg">
              <p className="font-bold xl:text-sm text-xs">Hot</p>
              <p className="xl:text-sm text-xs">Sự kiện AI</p>
            </p>
            <img
              alt="Hot Event"
              src={process.env.PUBLIC_URL + '/image/Logo.png'}
              className="w-full h-auto max-h-40 object-cover object-center rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center w-[48%] 2xl:gap-8 lg:gap-4 gap-2">
            <img
              alt="Hot Job"
              src={process.env.PUBLIC_URL + '/image/Logo.png'}
              className="w-full h-auto max-h-40 object-cover object-center rounded-2xl"
            />
            <p className="xl:px-4 xl:py-4 px-2 py-2 w-full border rounded-2xl bg-[#06B6D4] text-white shadow-lg">
              <p className="font-bold xl:text-sm text-xs">Hot</p>
              <p className="xl:text-sm text-xs">Job AI</p>
            </p>
          </div>
        </div>
      </section>
      <section className="w-[86%] my-8 flex flex-col items-center gap-1">
        <p className="h1">Sự kiện nổi bật</p>
        <p className="text-[#67688C] 2xl:text-xl lg:text-base text-sm">
          Khám phá những sự kiện được quan tâm
        </p>
        <ListDataEvents />
        <button
          onClick={() => navigate('/events')}
          className="xl:px-6 xl:py-2 px-4 py-1 mt-4 bg-white text-black rounded-2xl shadow-lg hover:text-white hover:bg-[#06B6D4]/90 transition-colors duration-300 text-sm"
        >
          Xem thêm sự kiện
        </button>
      </section>
      <section className="w-[86%] my-8 flex flex-col justify-center items-center gap-8 mb-32">
        <p className="h1">Tại sao chọn S-Events? </p>
        <div className="flex flex-wrap justify-between gap-4">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="w-[30%] border rounded-2xl p-4 flex flex-col items-start gap-1 shadow-md"
            >
              <p className={`px-4 py-4 rounded-xl ${tag.className}`}>
                {tag.icon}
              </p>
              <p className="font-bold xl:text-lg text-sm">{tag.label}</p>
              <p className="text-xs mt-1 xl:text-sm text-gray-500">
                {tag.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
