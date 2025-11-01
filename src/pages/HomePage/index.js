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
      icon: <MdDateRange size="32px" />,
      number: '10,000+',
      name: 'sinh viên tham gia',
    },
    {
      id: 3,
      icon: <MdDateRange size="32px" />,
      number: '50+',
      name: 'Trường ĐH',
    },
    {
      id: 4,
      icon: <MdDateRange size="32px" />,
      number: '95%',
      name: 'Đánh giá',
    },
  ]
  const dataEvent = dataEvents
  const DataOptionsFilter = DataFilterOptions
  return (
    <>
      <div
        className="
      w-full
      min-h-screen
      "
      >
        <div
          style={{
            width: '100%', // Đặt chiều rộng bạn muốn hiển thị (ví dụ 300px)
            height: '400px', // Đặt chiều cao bạn muốn hiển thị (ví dụ 100px)
            overflow: 'hidden', // Ẩn đi phần ảnh bị tràn ra ngoài
            margin: '0 0',
            // padding:'0 0'// Canh giữa (tùy chọn)
          }}
          className="p-0"
        >
          <img
            src={process.env.PUBLIC_URL + '/image/homePage/LogoHomePage.png'}
            className="w-full block pb-0"
            style={{
              height: '450px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <section
          id="events"
          className="w-full flex flex-col gap-6 bg-gradient-to-tl from-[#5FA9F0]/50 via-white to-[#5FA9F0]/50 justify-center items-center h-[250px] border-b"
        >
          <div className="text-[#6B7280] text-[16px] flex flex-col items-center justify-center">
            <p className="text-3xl font-medium text-black">
              𝓢𝓮𝓪𝓻𝓬𝓱 𝓵𝓮𝓼𝓼 - 𝓯𝓲𝓷𝓭 𝓶𝓸𝓻𝓮 𝔀𝓲𝓽𝓱 𝓔𝓿𝓮𝓷𝓽𝓼
            </p>
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
          {dataStatistic.map((item) => {
            return (
              <div key={item.id} className="flex flex-col items-center p-2">
                <div className="text-[#5FA9F0]">{item.icon}</div>
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
          <button className="border rounded-lg bg-white p-4 font-medium text-[16px]">
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
