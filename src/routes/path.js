import Auth from '../pages/Auth/Auth'
import EventsPage from '../pages/Events'
import HomePage from '../pages/HomePage'
import News from '../pages/News'
import ContactPage from '../pages/Contact'
import CertificateLookup from '../pages/CertificateLookup'
import DetailAccount from '../pages/Auth/DetailAccount'
import DetaileEvents from '../pages/Events/DetailEvents'
import PortfolioManagerPage from '../pages/PortFolio/PortFolioAccount'
import Statistic from '../pages/PortFolio/Statistic/Statistic'
import SeePortfolio from '../pages/PortFolio/SeePortfolio'
import EditPortfolio from '../pages/PortFolio/EditPortfolio/EditPortfolio'
import RankingPage from '../pages/Ranking'
import PortfolioSaved from '../pages/PortFolio/PortfolioSaved/PortfolioSaved'
import EDITACCOUNT from '../pages/Auth/EditAccount'
import HomepageOrganization from '../organization/pages/HomePage/index'
import JobPage from '../pages/Job'
export const PATH = {
  HOME: '/',
  EVENTS: '/events', // <--- Dùng cho trang danh sách
  EVENT_DETAIL: '/events/:id', // <--- Dùng cho trang chi tiết (với dấu :)
  NEWS: '/news',
  LOOKUP: '/lookup',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  ACCOUNT: '/account',
  PORTFOLIO: '/portfolio',
  PORTFOLIO_DETAIL: '/portfolio/:id',
  STATISTICPORTFOLIO: '/statistic',
  EDITPORTFOLIO: '/portfolio/edit/:id',
  RANKING: '/ranking',
  PORTFOLIOSAVED: '/lookup/portfolio',
  EDITACCOUNT: '/account/edit',
  JOB: '/job',
}
// export const isOganization = localStorage.getItem('isOrganization')
const dataUser = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {}
const role = dataUser ? dataUser.role : null
const isOganization = role === 'organization'

export const pathElement = [
  //auth
  {
    path: PATH.LOGIN,
    element: (
      <Auth
        type={'login'}
        onClose={() => (window.location.href = '/eventsproject')}
      />
    ),
  },
  {
    path: PATH.REGISTER,
    element: (
      <Auth
        type={'register'}
        onClose={() => (window.location.href = '/eventsproject')}
      />
    ),
  },
  {
    path: PATH.HOME,
    element: isOganization ? <HomepageOrganization /> : <HomePage />,
  },
  { path: PATH.EVENTS, element: <EventsPage /> },
  { path: PATH.NEWS, element: <News /> },
  { path: PATH.CONTACT, element: <ContactPage /> },
  { path: PATH.LOOKUP, element: <CertificateLookup /> },
  { path: PATH.ACCOUNT, element: <DetailAccount /> },
  { path: PATH.RANKING, element: <RankingPage /> },
  { path: PATH.EVENT_DETAIL, element: <DetaileEvents /> },
  { path: PATH.EVENT_DETAIL, element: <DetaileEvents /> },
  { path: PATH.PORTFOLIO, element: <PortfolioManagerPage /> },
  { path: PATH.STATISTICPORTFOLIO, element: <Statistic /> },
  { path: PATH.PORTFOLIO_DETAIL, element: <SeePortfolio /> },
  { path: PATH.EDITPORTFOLIO, element: <EditPortfolio /> },
  { path: PATH.PORTFOLIOSAVED, element: <PortfolioSaved /> },
  { path: PATH.EDITACCOUNT, element: <EDITACCOUNT /> },
  { path: PATH.JOB, element: <JobPage /> },
]
