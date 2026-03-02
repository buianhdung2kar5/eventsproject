import { FaGoogle } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import '../../style/login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
import { IoEye } from 'react-icons/io5'
import { IoEyeOff } from 'react-icons/io5'
import { z } from 'zod'
// define schemas
const LoginSchemas = z.object({
  username: z.string().min(1, 'Tên tài khoản là bắt buộc'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
})
export default function LoginForm() {
  const navigate = useNavigate()
  const textWelcome = 'Chào mừng bạn đến với Events'
  const arrayText = textWelcome.split(' ')
  const [errorsLogin, setErrorsLogin] = useState({
    username: '',
    password: '',
  })
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    role: 'user',
  })
  const [seePassword, setSeePassword] = useState(false)
  const rawSubmit = {
    username: 'admin',
    password: 'adminadmin',
  }
  const handleSubmit = (e) => {
    const res = LoginSchemas.safeParse(userData)
    if (res.success) {
      if (
        userData.username === rawSubmit.username &&
        userData.password === rawSubmit.password
      ) {
        localStorage.setItem('userInfo', JSON.stringify(userData))
        window.dispatchEvent(new Event('user-login'))
        navigate(PATH.HOME)
      } else {
        alert('Tài khoản hoặc mật khẩu không đúng!')
      }
    } else {
      res.error.issues.forEach((message) => {
        setErrorsLogin((prev) => ({
          ...prev,
          [message.path[0]]: message.message,
        }))
      })
    }
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="loginForm w-[32%] h-[480px] my-16 mx-auto bg-white rounded-lg p-8 flex flex-col items-center gap-4 drop-shadow-xl"
    >
      <div className="flex gap-1">
        {arrayText.map((word, index) => {
          return (
            <p
              className="bounce p-0"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {word}
            </p>
          )
        })}
      </div>
      <div className="flex flex-col w-full px-4 py-6 h-[40%] mb-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="username">Tài khoản:</label>
          <input
            id="username"
            className="rounded-lg px-2 py-1 border"
            placeholder="username"
            type="text"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
          <p
            className={`text-red-500 text-sm min-h-[1.25rem] transition-opacity ${
              errorsLogin.username ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {errorsLogin.username}
          </p>
        </div>
        <div className="flex flex-col gap-1 w-full relative">
          <label htmlFor="passworđ">Mật khẩu:</label>
          <input
            id="password"
            className="rounded-lg px-2 py-1 border "
            placeholder="password"
            type={seePassword ? 'text' : 'password'}
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <p
            className={`text-red-500 text-sm block min-h-[1.25rem] transition-opacity ${
              errorsLogin.password ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {errorsLogin.password}
          </p>
          {seePassword ? (
            <IoEye
              className="absolute right-3 top-9 cursor-pointer text-gray-400"
              onClick={() => setSeePassword(!seePassword)}
            />
          ) : (
            <IoEyeOff
              className="absolute right-3 top-9 cursor-pointer text-gray-400"
              onClick={() => setSeePassword(!seePassword)}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-end w-full px-4 gap-2">
        <button className="bg-[#5FA9F0] text-white py-2 rounded-lg w-full">
          Đăng nhập
        </button>
        <button className="ml-4 text-[#5FA9F0] text-sm">Quên mật khẩu?</button>
      </div>
      <div className="w-full px-4 flex flex-col items-center justify-center gap-2">
        <button className="text-[16px] flex gap-2 items-center justify-center rounded-lg border px-2 py-1 w-full">
          <FaGoogle className="inline ml-2" />
          <p>Đăng nhập với Google</p>
        </button>
        <button className="text-[16px] flex gap-2 items-center justify-center rounded-lg border px-2 py-1 w-full">
          <FaFacebook className="inline ml-2" />
          <p>Đăng nhập với Facebook</p>
        </button>
      </div>
    </form>
  )
}
