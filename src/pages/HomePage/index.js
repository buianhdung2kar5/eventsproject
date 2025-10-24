import { MdDateRange } from 'react-icons/md'
import { dataEvents } from '../../data/events/events'
import { PiCertificateBold } from 'react-icons/pi'
import { VscOrganization } from 'react-icons/vsc'
import { MdOutlineDateRange } from 'react-icons/md'
import { GiPositionMarker } from 'react-icons/gi'
import { IoMdPeople } from 'react-icons/io'
import ListOpTionFilterEvents from '../../components/Events/getListOptionsFilterEvents'
import { DataFilterOptions } from '../../components/Events/DataFilterOption'
import PopUpConfirmRegister from '../../feature/homePage/PopUpConfirmRegister'
import '../../style/global.css'
export default function HomePage() {
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
        <section id="logo">
          <img
            src="/image/homePage/LogoHomePage.jpg"
            className="w-full h-auto"
          />
        </section>

        <section
          id="events"
          className="w-full flex flex-col gap-6 bg-gradient-to-tl from-[#5FA9F0]/50 via-white to-[#5FA9F0]/50 justify-center items-center h-[300px] border-b"
        >
          <div className="flex flex-col items-center justify-center text-[16px] text-[#090D00]">
            <p>Sự kiện sinh viên </p>
            <p>Dành cho bạn</p>
          </div>
          <div className="text-[#6B7280] text-[16px] flex flex-col items-center justify-center">
            <p>
              Sự kiện sinh viên dành cho bạn Sự kiện sinh viên dành cho bạn Sự
              kiện sinh viên dành cho bạn Sự kiện sinh
            </p>
            <p> viên dành cho bạn Sự kiện sinh viên dành cho bạn</p>
          </div>
          <div className="flex gap-6">
            <button className="border rounded-lg bg-[#5FA9F0] p-2  flex gap-1 items-center text-[white]">
              <MdDateRange />
              <p>Khám phá sự kiện</p>
            </button>
            <button className="border rounded-lg bg-[#fff] text-black p-2">
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
          className="bg-white flex flex-col justify-center items-center gap-4 w-full pb-36"
        >
          <div className="flex flex-col items-center justify-center gap-2 border-t  w-full">
            <p className="font-bold p-2">Sự kiện nổi bật</p>
            <p className="p-2 text-[#6B7280]">
              Khám phá những sự kiện được quan tâm nhiều nhất trong thời gian
              tới
            </p>
          </div>
          <div className="grid grid-cols-3 justify-items-stretch align-items-center w-[60%] gap-y-8 gap-x-8 line-clamp-2">
            {dataEvent.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white border rounded-lg w-full h-[400px] relative flex flex-col gap-4 shadow-sm"
                >
                  <div className="w-full h-[40%] pb-2">
                    <img
                      src={`${item.img}`}
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
                    <div className="ml-2 text-[16px] line-clamp-1">
                      {item.name}
                    </div>
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
          <button className="border rounded-lg bg-white p-4 font-medium text-[16px]">
            Xem tất cả sự kiện
          </button>
        </section>
        <section className="bg-white pb-32">
          <ListOpTionFilterEvents data={DataOptionsFilter} />
        </section>
        <section className="bg-white h-[250px] p-8">
          <PopUpConfirmRegister />
        </section>
      </div>
    </>
  )
}
