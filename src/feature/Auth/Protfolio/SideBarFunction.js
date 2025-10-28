import { IoIosPrint } from 'react-icons/io'
import { FaDownload } from 'react-icons/fa6'
import { FaFileExport } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../routes/path'
export default function SideBarFunction({ items }) {
  const navigate = useNavigate()
  const handleExport = () => {
    navigate(PATH.PORTFOLIO)
  }
  return (
    <div className="w-full flex relative  items-center py-8 px-12 bg-[#5FA9F00D] mb-8">
      <div className="flex gap-8 items-center absolute left-8">
        <p className="8 text-white bg-[#5FA9F0] border rounded-lg px-4 py-2">
          {items.length} sự kiện đã chọn
        </p>
        <button className="bg-white border rounded-lg px-4 py-2">
          Xóa chọn
        </button>
      </div>
      <div className="flex items-center p-2 gap-4 absolute right-8">
        <button className="flex gap-2 bg-white border rounded-lg px-4 py-2">
          <IoIosPrint className="my-auto" />
          <p>In</p>
        </button>
        <button
          className="flex gap-2 bg-white border rounded-lg px-4 py-2"
          onClick={handleExport}
        >
          <FaFileExport className="my-auto" />
          <p>Xuất</p>
        </button>
        <button className="flex gap-2 p-2 item-center text-center text-white bg-[#5FA9F0] border rounded-lg">
          <FaDownload className="my-auto" />
          <p>Tải hồ sơ</p>
        </button>
      </div>
    </div>
  )
}
