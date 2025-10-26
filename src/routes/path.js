import { LoginSignUp } from '../pages/Auth/Login_SignUp'
import EventsPage from '../pages/Events'
import HomePage from '../pages/HomePage'
import News from '../pages/News'
import ContactPage from '../pages/Contact'
export const PATH = {
  HOME: '/',
  EVENTS: '/events',
  NEWS: '/news',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
}
export const pathElement = [
  //auth
  {
    path: PATH.LOGIN,
    element: (
      <LoginSignUp
        type={'Đăng Nhập'}
        onClose={() => (window.location.href = '/')}
      />
    ),
  },
  {
    path: PATH.REGISTER,
    element: (
      <LoginSignUp
        type={'Đăng Ký'}
        onClose={() => (window.location.href = '/')}
      />
    ),
  },
  { path: PATH.HOME, element: <HomePage /> },
  { path: PATH.EVENTS, element: <EventsPage /> },
  { path: PATH.NEWS, element: <News /> },
  { path: PATH.CONTACT, element: <ContactPage /> },
]
