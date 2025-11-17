import { FiUserPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../routes/path'
export default function AccountInfo() {
  const navigate = useNavigate()
  const data = localStorage.getItem('userInfo')
  const dataUser = data
    ? JSON.parse(data)
    : localStorage.getItem('UserNamePasword')
  const dataUserParsed = data ? dataUser : JSON.parse(dataUser)
  const handleEditAccount = () => {
    navigate(PATH.PORTFOLIO)
  }
  return (
    <section className="flex flex-col justify-center items-center border rounded-lg gap-4 p-4">
      <div className="flex flex-col items-center gap-1">
        <img
          src={process.env.PUBLIC_URL + '/image/homePage/avatar.jpg'}
          alt="Ảnh Người Dùng"
          className="rounded-full h-24 w-24"
        />
        <p className="text-[#090D00] text-[16px]">{dataUserParsed.username}</p>
        <p className="text-[#6B7280] text-[14px]">11236082</p>
        <p className="text-[#6B7280] text-[14px]">Đại học Kinh tế Quốc Dân</p>
        <p className="text-[12px] text-[#090D00] py-1 px-2 border rounded-lg bg-[#EFF1CF]">
          Sinh viên
        </p>
      </div>
      <div className="bg-[#090D001A] w-[95%] h-[1px]"></div>
      <div className="w-full flex justify-center text-center gap-8">
        <div>
          <p className="font-medium text-[14px]">246</p>
          <p className="text-[12px] text-[#6B7280]">Người theo dõi</p>
        </div>
        <div>
          <p className="font-medium text-[14px]">180</p>
          <p className="text-[12px] text-[#6B7280]">Đang theo dõi</p>
        </div>
      </div>
      <button className="w-[90%] flex items-center gap-4 p-1 justify-center border rounded-[10px]">
        <FiUserPlus />
        <p onClick={handleEditAccount}>Chỉnh sửa hồ sơ</p>
      </button>
    </section>
  )
}
