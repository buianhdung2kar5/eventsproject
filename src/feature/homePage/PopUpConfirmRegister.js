import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
const PopUpConfirmRegister = () => {
  const navigate = useNavigate()
  const handleConfirmResgiter = () => {
    navigate(PATH.REGISTER)
  }
  return (
    <div className="flex flex-col items-center justify-center bg-[#5FA9F0] gap-4 w-[60%] border rounded-lg mx-auto p-4 h-full">
      <p className="text-white text-[16px]">Sẵn sàng tham gia ?</p>
      <p className="text-white text-[16px]">
        Đăng ký ngay để không bỏ lỡ những sự kiện sinh viên thú vị, tích lũy các
        chứng chỉ và mở rộng kết nối
      </p>
      <button
        onClick={handleConfirmResgiter}
        className="px-4 py-2 font-bold text-[#5FA9F0] bg-white text-[14px] border rounded-lg"
      >
        Đăng ký ngay!
      </button>
    </div>
  )
}

export default PopUpConfirmRegister
