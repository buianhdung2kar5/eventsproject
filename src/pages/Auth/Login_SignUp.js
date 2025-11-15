import { useState } from 'react'
import '../../style/login_signup.css'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
export const LoginSignUp = ({ type, onClose }) => {
  const navigate = useNavigate()
  const [typed, setTyped] = useState(type)
  const [formData, setFormData] = useState({})

  const DataLogin = {
    username: 'admin',
    password: 'admin',
    role: 'admin',
  }

  const handleChangeType = () => {
    setTyped((prev) => (prev === 'Đăng Nhập' ? 'Đăng Ký' : 'Đăng Nhập'))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (formData.password === formData.confirmpassword) {
      const newUser = {
        username: formData.username,
        password: formData.password,
        role: formData.role,
      }
      localStorage.setItem('userInfo', JSON.stringify(newUser))
      alert('Đăng ký thành công!')
      setFormData({})
      setTyped('Đăng Nhập')
    } else {
      alert('Mật khẩu xác nhận không trùng khớp!')
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const data = localStorage.getItem('userInfo')
    const DataUser = data ? JSON.parse(data) : {}
    const dataHave = DataLogin
    if (
      (formData.username === DataUser.username &&
        formData.password === DataUser.password) ||
      (formData.username === dataHave.username &&
        formData.password === dataHave.password)
    ) {
      localStorage.setItem('UserNamePasword', JSON.stringify(formData))
      navigate(PATH.HOME)
      return
    }
    alert('Đăng nhập thất bại')
  }

  return (
    <div
      className={`container ${
        typed !== 'Đăng Nhập' ? 'active' : ''
      } w-[50%] fixed inset-0 m-auto`}
    >
      {/* --- LOGIN FORM --- */}
      <div
        className={`form-box login ${typed === 'Đăng Nhập' ? 'show' : 'hide'}`}
      >
        <div
          onClick={onClose}
          className="absolute top-10 right-10 cursor-pointer"
        >
          X
        </div>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              name="username"
              type="text"
              placeholder="Username"
              required
              onChange={handleChange}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>

      {/* --- REGISTER FORM --- */}
      <div
        className={`form-box register ${typed === 'Đăng Ký' ? 'show' : 'hide'}`}
      >
        <div
          onClick={onClose}
          className="absolute top-10 left-10 cursor-pointer"
        >
          X
        </div>
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={handleChange}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="input-box mb-0">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="relative flex flex-col">
            <span className="absolute top-0 left-0 text-sm text-red-600">
              *
            </span>
            <span className="flex items-start pt-2 pb-1 pl-1">
              Chọn vai trò:
            </span>
            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="user"
                  onChange={handleChange}
                  name="role"
                />
                <span>Người dùng</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="organization"
                  name="role"
                  onChange={handleChange}
                />
                <span>Tổ chức</span>
              </div>
            </div>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>

      {/* --- TOGGLE BOX --- */}
      <div className="toggle-box">
        {typed === 'Đăng Nhập' ? (
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={handleChangeType}>
              Register
            </button>
          </div>
        ) : (
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={handleChangeType}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
