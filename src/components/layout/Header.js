import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
import { FaUserCircle } from 'react-icons/fa'

export default function Header() {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState(null)
  const [logined, setLogined] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const customNavCss = {
    default:
      'p-2 m-2 font-bold cursor-pointer hover:text-blue-300 transform transition-transform duration-300 hover:-translate-y-1 h-fit',
    active:
      'p-2 m-2 font-bold text-[#5FA9F0] cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 h-fit',
  }
  const handleClick = (id) => {
    setActiveNav(id)
    navigate(id)
  }
  const handleLogin = () => {
    navigate(PATH.LOGIN)
  }
  const handleRegister = () => {
    navigate(PATH.REGISTER)
  }
  const handleViewDetail = () => {
    navigate(PATH.ACCOUNT)
  }
  const handleLogout = () => {
    localStorage.removeItem('UserNamePasword')
    localStorage.removeItem('userInfo')
    setLogined(false)
  }
  useEffect(() => {
    const checkLogin = localStorage.getItem('userInfo')
    const isLogin = checkLogin ? true : localStorage.getItem('UserNamePasword')
    const isLogined = isLogin ? true : false
    if (isLogined) setLogined(true)
  }, [])

  return (
    <>
      <header>
        <div className="navi fixed top-0 left-0 w-full z-50 bg-white flex align-center justify-evenly gap-20 shadow-md h-[60px]">
          <div
            className="flex items-center p-4 cursor-pointer"
            onClick={() => {
              window.location.href = '/eventsproject'
            }}
          >
            <img
              src={process.env.PUBLIC_URL + '/image/homePage/LogoHomePage.jpg'}
              className="rounded-md h-12 w-12"
            />
          </div>

          <div className="flex gap-20">
            {[
              { id: '/', label: 'Trang chủ' },
              { id: '/events', label: 'Sự kiện' },
              { id: '/news', label: 'Tin tức' },
              { id: '/search', label: 'Tra cứu' },
              { id: '/about', label: 'Giới thiệu' },
              { id: '/contact', label: 'Liên hệ' },
            ].map((item) => (
              <nav
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={
                  activeNav === item.id
                    ? customNavCss.active
                    : customNavCss.default
                }
              >
                {item.label}
              </nav>
            ))}
          </div>

          {!logined ? (
            <div className="flex gap-4">
              <div className={customNavCss.default} onClick={handleLogin}>
                Đăng Nhập
              </div>
              <div
                className={`${customNavCss.default} bg-[#5FA9F0] rounded-xl`}
                onClick={handleRegister}
              >
                Đăng Ký
              </div>
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              {/* Nút icon user */}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center justify-center focus:outline-none"
              >
                <FaUserCircle className="text-3xl text-gray-700 hover:text-blue-600 transition" />
              </button>

              {/* Menu tài khoản */}
              {isOpen && (
                <div className="absolute top-12 w-48 bg-white border border-gray-100 shadow-lg rounded-xl z-50 animate-fadeIn">
                  <div className="p-3 border-b">
                    <button
                      className="text-sm font-semibold text-gray-800"
                      onClick={handleViewDetail}
                    >
                      Tài khoản của tôi
                    </button>
                    <p className="text-xs text-gray-500">user@gmail.com</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-xl"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  )
}
