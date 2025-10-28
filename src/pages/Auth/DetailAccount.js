import AccountInfo from '../../feature/Auth/components/AccountInfo'
import AboutEventsOfAccount from '../../feature/Auth/components/EventsOfAccount'
import ChecKEventsAccount from '../../feature/Auth/components/CheckEventsAccount'
import PortfolioManager from'../../components/PortFolio'
export default function DetailAccount() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-[60%] flex flex-col gap-8">
        <div>
          <span className="font-medium text-[24px]">Hồ sơ cá nhân</span>
          <p className="text-[16px] text-[#6B7280]">
            Quản lý thông tin và theo dõi hoạt động của bạn
          </p>
        </div>
        <div className="w-full">
          <AccountInfo />
        </div>
        <div
        className='w-full'
        >
          <PortfolioManager />
        </div>
        <div className="w-full">
          <AboutEventsOfAccount />
        </div>
        <div className="w-full">
          <ChecKEventsAccount />
        </div>
      </div>
    </div>
  )
}
