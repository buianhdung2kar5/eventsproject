import { MdDateRange } from 'react-icons/md'
import { dataEvents } from '../../data/events/events'
import ListOpTionFilterEvents from '../../components/Events/getListOptionsFilterEvents'
import { DataFilterOptions } from '../../components/Events/DataFilterOption'
import PopUpConfirmRegister from '../../feature/homePage/PopUpConfirmRegister'
import '../../style/global.css'
import ListDataEvents from '../../components/Events/ListDataEvents'
import AboutEventsWeb from '../../feature/AboutWeb/AboutEventsWeb'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
import { GoPeople } from 'react-icons/go'
import { LiaCertificateSolid } from 'react-icons/lia'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { Input } from '../../ui/Input'
import { CiSearch } from 'react-icons/ci'

export default function HomePage() {
  const navigate = useNavigate()
  const dataStatistic = [
    {
      id: 1,
      icon: <MdDateRange size="32px" />,
      number: '500+',
      name: 'Sự kiện',
    },
    {
      id: 2,
      icon: <GoPeople size="32px" />,
      number: '10,000+',
      name: 'sinh viên tham gia',
    },
    {
      id: 3,
      icon: <LiaCertificateSolid size="32px" />,
      number: '50+',
      name: 'Trường ĐH',
    },
    {
      id: 4,
      icon: <FaArrowTrendUp size="32px" />,
      number: '95%',
      name: 'Đánh giá',
    },
  ]
  const dataEvent = dataEvents
  const DataOptionsFilter = DataFilterOptions
  return (
    <>
      <div className="w-full min-h-screen">
        <section
          id="events"
          className="w-full flex flex-col gap-6 bg-gradient-to-tl from-[#5FA9F0]/50 via-white to-[#5FA9F0]/50 justify-center items-center h-[580px] border-b"
        >
          <p className="text-3xl font-medium text-black flex flex-wrap italic">
            {'Search less - Find more with EVENTS'
              .split('')
              .map((char, index) => (
                <span
                  key={index}
                  style={{
                    display: 'inline-block',
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `fadeUp 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}

            <style>
              {`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
            </style>
          </p>
          <div className="flex flex-col items-center justify-center text-[#5FA9F0] text-7xl font-poppins">
            <p>Khám phá sự kiện</p>
            <p>Kết nối tương lai</p>
          </div>
          <div className="flex flex-col items-center justify-center text-[#6B7280] text-lg">
            <p>Tham gia hàng nghìn sự kiện từ các trường đại học hàng đầu.</p>
            <p>Tích lũy chứng chỉ sinh viên 5 tốt và phát triển bản thân!</p>
          </div>
          <div className="w-[40%] relative">
            {/* Icon search */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              <CiSearch />
            </div>

            {/* Input container */}
            <div className="bg-white shadow-lg shadow-gray-300/30 rounded-full">
              <input
                className="w-full pl-12 pr-4 py-3 rounded-full focus:outline-none text-gray-700 placeholder-gray-400"
                placeholder="Tìm kiếm sự kiện, trường đại học, lĩnh vực..."
              />
            </div>
          </div>

          <div className="text-[#6B7280] text-[16px] flex flex-col items-center justify-center">
            {/* <p className="text-xl font-medium text-black flex flex-wrap italic">
              {'Search less - Find more with EVENTS'
                .split('')
                .map((char, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animation: `fadeUp 0.5s ease-out forwards`,
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}

              <style>
                {`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
              </style>
            </p> */}
          </div>
          <div className="flex gap-6">
            <button
              className="border rounded-lg bg-[#5FA9F0] p-2  flex gap-1 items-center text-[white]"
              onClick={() => navigate(PATH.EVENTS)}
            >
              <MdDateRange />
              <p>Khám phá sự kiện</p>
            </button>
            <button
              className="border rounded-lg bg-[#fff] text-black p-2"
              onClick={() => navigate(PATH.REGISTER)}
            >
              Tạo tài khoản
            </button>
          </div>
        </section>
        <section
          id="statistic"
          className="flex gap-32 items-center w-full justify-center bg-white p-8"
        >
          {dataStatistic.map((item, index) => {
            return (
              <div key={item.id} className="flex flex-col items-center p-2">
                <div
                  className={
                    index % 2 !== 0
                      ? `text-[#F05A25] bg-[#F05A25]/10 p-4 rounded-full`
                      : `text-[#5FA9F0] bg-[#5FA9F0]/10 p-4 rounded-full`
                  }
                >
                  {item.icon}
                </div>
                <p className="">{item.number}</p>
                <p>{item.name}</p>
              </div>
            )
          })}
        </section>
        <section
          id="outstandingEvents"
          className="bg-white flex flex-col justify-center items-center gap-4 w-full pb-28"
        >
          <div className="flex flex-col items-center justify-center gap-2 border-t  w-full">
            <p className="font-bold p-2">Sự kiện nổi bật</p>
            <p className="p-2 text-[#6B7280]">
              Khám phá những sự kiện được quan tâm nhiều nhất trong thời gian
              tới
            </p>
          </div>
          <div className="w-[60%]">
            <ListDataEvents />
          </div>
          <button
            className="border rounded-lg bg-white p-4 font-medium text-[16px]"
            onClick={() => navigate(PATH.EVENTS)}
          >
            Xem tất cả sự kiện
          </button>
        </section>
        <section className="bg-white w-full">
          {/* <ListOpTionFilterEvents data={DataOptionsFilter} /> */}
          <AboutEventsWeb />
        </section>
        <section className="bg-white h-[250px] p-y-8 w-full mb-8">
          <PopUpConfirmRegister />
        </section>
      </div>
    </>
  )
}
