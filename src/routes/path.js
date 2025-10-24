import { LoginSignUp } from '../pages/Auth/Login_SignUp'
import HomePage from '../pages/HomePage'
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
]
