import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
export default function Header() {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState(null)
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

  return (
    <>
      <header>
        <div className="navi fixed top-0 left-0 w-full z-50 bg-white flex align-center justify-evenly gap-20 shadow-md">
          <div
            className="flex items-center p-4 cursor-pointer"
            onClick={() => {
              window.location.href = '/'
            }}
          >
            <img src="/image/Logo.png" className="rounded-lg h-full w-full" />
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
        </div>
      </header>
    </>
  )
}
