import AccountInfo from '../../feature/Auth/components/AccountInfo'
import AboutEventsOfAccount from '../../feature/Auth/components/EventsOfAccount'
import ChecKEventsAccount from '../../feature/Auth/components/CheckEventsAccount'
import PortfolioManager from '../../components/PortFolio'
import RankingInAccount from '../../pages/Ranking/RankingInAccount'
export default function DetailAccount() {
  return (
    <div className="w-full flex flex-col items-center gap-4 mt-8">
      <div className="w-[60%] flex flex-col gap-8">
        <div>
          <h1
            className="text-[#090D00] text-center font-bold"
            style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)' }}
          >
            Hồ sơ cá nhân
          </h1>
          <p
            className="text-[#6B7280] text-center"
            style={{ fontSize: 'clamp(0.9rem,1.5vw,1.1rem)' }}
          >
            Quản lý thông tin và theo dõi hoạt động của bạn
          </p>
        </div>
        <div className="w-full">
          <AccountInfo />
        </div>
        <div className="w-full">
          <PortfolioManager />
        </div>
        <div className="w-full">
          <AboutEventsOfAccount />
        </div>
        <div className="w-full">
          <RankingInAccount />
        </div>
        <div className="w-full">
          <ChecKEventsAccount />
        </div>
      </div>
    </div>
  )
}
