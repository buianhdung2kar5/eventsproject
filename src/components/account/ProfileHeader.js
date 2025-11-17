import { FaLongArrowAltLeft } from 'react-icons/fa'
import { PATH } from '../../routes/path'
import { useNavigate } from 'react-router-dom'
export const ProfileHeader = () => {
  const navigate = useNavigate()
  const handleSave = (e) => {
    alert(e.target.value === 'save' ? 'Lưu thành công!' : 'Xuất thành công!')
    navigate(PATH.EDITPORTFOLIO)
  }
  return (
    <header className="flex items-center p-4 justify-between">
      <div className="flex flex-col gap-1">
        <div
          className="p-2 flex gap-1 items-center cursor-pointer"
          onClick={() => navigate(PATH.EDITPORTFOLIO)}
        >
          <FaLongArrowAltLeft />
          <p>Quay Lại</p>
        </div>
        <div>
          <h1 className="text-2xl font-medium text-[#5FA9F0]">
            Chỉnh sửa hồ sơ
          </h1>
          <p className="text-sm text-gray-500">
            Chọn các hoạt động và sắp xếp theo thứ tự bạn muốn hiển thị
          </p>
        </div>
      </div>

      <div>
        <button
          value="save"
          className="btn-secondary mr-2"
          onClick={handleSave}
        >
          {/* Icon Lưu nháp */}
          <span className="mr-1"></span> Lưu nháp
        </button>
        <button
          value="export"
          className="btn-primary bg-red-500 text-white rounded-full px-4 py-2"
          onClick={handleSave}
        >
          {/* Icon Xuất bản */}
          <span className="mr-1"></span> Xuất bản
        </button>
      </div>
    </header>
  )
}
