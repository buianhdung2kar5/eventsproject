import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PATH } from '../../routes/path'
import { FaUserCircle } from 'react-icons/fa'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeNav, setActiveNav] = useState(location.pathname)

  // Cập nhật activeNav khi location thay đổi
  useEffect(() => {
    setActiveNav(location.pathname)
  }, [location.pathname])

  const [logined, setLogined] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const customNavCss = {
    default:
      'px-[1%] py-[0.5%] mx-[0.5%] my-[0.5%] font-bold cursor-pointer hover:text-blue-300 transform transition-all duration-300 hover:-translate-y-1 h-fit text-[clamp(0.75rem,1.5vw,1rem)]',
    active:
      'px-[1%] py-[0.5%] mx-[0.5%] my-[0.5%] font-bold text-[#5FA9F0] cursor-pointer transform transition-all duration-300 hover:-translate-y-1 h-fit text-[clamp(0.75rem,1.5vw,1rem)]',
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
        <div className="navi fixed top-0 left-0 w-full z-50 bg-white flex items-center pl-[4%] shadow-md h-[60px]">
          {/* Logo Section */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => {
              window.location.href = '/eventsproject'
            }}
          >
            <img
              src={process.env.PUBLIC_URL + '/image/Logo.png'}
              className="rounded-md"
              style={{
                height: 'clamp(32px, 4vw, 48px)',
                width: 'clamp(32px, 4vw, 48px)'
              }}
            />
          </div>

          {/* Navigation Links - Centered between logo and auth */}
          <div className="hidden sm:flex items-center justify-center flex-1 gap-[4%] pl-[2%]">
            {[
              { id: '/', label: 'Trang chủ' },
              { id: '/events', label: 'Sự kiện' },
              { id: '/news', label: 'Tin tức' },
              { id: '/lookup', label: 'Tra cứu' },
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

          {/* Auth Section */}
          <div className="flex items-center gap-4 flex-shrink-0 pr-[2%]">
            {!logined ? (
              <div className="flex gap-4">
                <div 
                  className="px-4 py-2 font-bold cursor-pointer hover:text-blue-300 transform transition-all duration-300 hover:-translate-y-1 text-[clamp(0.6rem,1vw,0.8rem)] whitespace-nowrap" 
                  onClick={handleLogin}
                >
                  Đăng Nhập
                </div>
                <div
                  className="px-4 py-2 font-bold cursor-pointer transform transition-all duration-300 hover:-translate-y-1 bg-[#5FA9F0] rounded-xl text-[clamp(0.6rem,1vw,0.8rem)] whitespace-nowrap"
                  onClick={handleRegister}
                >
                  Đăng Ký
                </div>
              </div>
            ) : (
              <div className="relative flex items-center justify-center">
                {/* User Icon */}
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center justify-center focus:outline-none"
                >
                  <FaUserCircle 
                    className="text-gray-700 hover:text-blue-600 transition" 
                    style={{fontSize: 'clamp(1.5rem, 3vw, 2rem)'}}
                  />
                </button>

                {/* User Menu */}
                {isOpen && (
                  <div 
                    className="absolute top-full right-0 bg-white border border-gray-100 shadow-lg rounded-xl z-50 animate-fadeIn"
                    style={{
                      width: 'clamp(180px, 20vw, 240px)',
                      marginTop: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    <div className="p-[clamp(8px,1vw,12px)] border-b">
                      <button
                        className="font-semibold text-gray-800 text-[clamp(0.7rem,1.2vw,0.9rem)]"
                        onClick={handleViewDetail}
                      >
                        Tài khoản của tôi
                      </button>
                      <p className="text-[clamp(0.6rem,1vw,0.8rem)] text-gray-500">user@gmail.com</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-[clamp(8px,1vw,16px)] py-[clamp(6px,0.8vw,8px)] text-[clamp(0.7rem,1.2vw,0.9rem)] text-gray-700 hover:bg-gray-100 rounded-b-xl"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button - Only visible on small screens */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only visible on small screens */}
        {isOpen && (
          <div className="sm:hidden fixed top-[clamp(50px,8vh,80px)] left-0 w-full bg-white shadow-lg z-40">
            <div className="px-[4%] py-[2%] space-y-[1%]">
              {[
                { id: '/', label: 'Trang chủ' },
                { id: '/events', label: 'Sự kiện' },
                { id: '/news', label: 'Tin tức' },
                { id: '/lookup', label: 'Tra cứu' },
                { id: '/contact', label: 'Liên hệ' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`py-[2%] px-[2%] text-[clamp(0.8rem,1.5vw,1rem)] font-medium cursor-pointer hover:bg-gray-100 rounded ${
                    activeNav === item.id ? 'text-[#5FA9F0] bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
