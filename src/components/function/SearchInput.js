import { useState, useCallback, useRef } from 'react'
import { IoIosArrowDropdown, IoIosArrowDropright } from 'react-icons/io'
import { FaSlidersH } from 'react-icons/fa'
import { useEffect } from 'react'
export default function SearchInput({ onSubmit }) {
  const debounceTimerRef = useRef(null)
  const initForm = {
    searchTerm: '',
    category: [],
    targetAudience: [],
    locations: [],
    eventTypes: [],
    certificate: [],
    school: [],
    price: [],
  }
  const [form, setForm] = useState(initForm)
  const [searchDataSchool, setSearchDataSchool] = useState('')
  // JSON bậc 2 chứa các tiêu chí và option
  const [filterGroups, setFilterGroups] = useState([
    {
      id: 0,
      name: 'Trường học',
      key: 'school',
      options: [
        { id: 1, label: 'ĐH Bách Khoa Hà Nội' },
        { id: 2, label: 'ĐH Kinh Tế Quốc Dân' },
        { id: 3, label: 'ĐH Sư Phạm Hà Nội' },

        { id: 4, label: 'ĐH Anh quốc Việt Nam' },
        { id: 5, label: 'ĐH Bách khoa Hà Nội' },
        { id: 6, label: 'ĐH CMC' },
        { id: 7, label: 'ĐH Công nghệ Giao thông Vận tải (Cơ sở Hà Nội)' },
        { id: 8, label: 'ĐH Công nghệ và Quản lý Hữu Nghị' },
        { id: 9, label: 'ĐH Công nghệ Đông Á' },
        { id: 10, label: 'ĐH Công nghiệp Hà Nội' },
        { id: 11, label: 'ĐH Công nghiệp Việt Hung' },
        { id: 12, label: 'ĐH Công nghiệp và Thương mại Hà Nội' },
        { id: 13, label: 'ĐH Công Đoàn' },
        { id: 14, label: 'ĐH Dược Hà Nội' },
        { id: 15, label: 'ĐH FPT (Cơ sở Hà Nội)' },
        { id: 16, label: 'ĐH Giao thông Vận tải' },
        { id: 17, label: 'ĐH Hà Nội' },
        { id: 18, label: 'ĐH Hòa Bình' },
        { id: 19, label: 'ĐH Khoa học và Công nghệ Hà Nội' },
        { id: 20, label: 'ĐH Kiểm sát Hà Nội' },
        { id: 21, label: 'ĐH Kiến trúc Hà Nội' },
        { id: 22, label: 'ĐH Kinh doanh và Công nghệ Hà Nội' },
        { id: 23, label: 'ĐH Kinh tế Kỹ thuật - Công nghiệp (Cơ sở Hà Nội)' },
        { id: 25, label: 'ĐH Lâm nghiệp' },
        { id: 26, label: 'ĐH Lao động Xã hội (Cơ sở Hà Nội)' },
        { id: 27, label: 'ĐH Lao động Xã hội (Cơ sở Sơn Tây)' },
        { id: 28, label: 'ĐH Luật Hà Nội' },
        { id: 29, label: 'ĐH Mỏ - Địa chất (Cơ sở Hà Nội)' },
        { id: 30, label: 'ĐH Mở Hà Nội' },
        { id: 31, label: 'ĐH Mỹ thuật Công nghiệp' },
        { id: 32, label: 'ĐH Mỹ thuật Việt Nam' },
        { id: 33, label: 'ĐH Ngoại thương (Cơ sở Hà Nội)' },
        { id: 34, label: 'ĐH Nguyễn Trãi' },
        { id: 35, label: 'ĐH Nội vụ Hà Nội' },
        { id: 36, label: 'ĐH Phenikaa' },
        { id: 37, label: 'ĐH Phòng cháy chữa cháy' },
        { id: 38, label: 'ĐH Phương Đông' },
        { id: 39, label: 'ĐH Quốc Gia Hà Nội' },
        { id: 40, label: 'ĐH RMIT' },
        { id: 41, label: 'ĐH Sân khấu - Điện ảnh Hà Nội' },
        { id: 42, label: 'ĐH Sư phạm Hà Nội' },
        { id: 43, label: 'ĐH Sư phạm Nghệ thuật Trung ương Hà Nội' },
        { id: 44, label: 'ĐH Sư phạm Thể dục thể thao Hà Nội' },
        { id: 45, label: 'ĐH Tài chính Ngân hàng Hà Nội' },
        { id: 46, label: 'ĐH Tài nguyên và Môi trường Hà Nội' },
        { id: 47, label: 'ĐH Thăng Long' },
        { id: 48, label: 'ĐH Thành Đô' },
        { id: 49, label: 'ĐH Thủ đô Hà Nội' },
        { id: 50, label: 'ĐH Thương mại' },
        { id: 51, label: 'ĐH Thủy Lợi' },
        { id: 52, label: 'ĐH Trần Quốc Tuấn (Sĩ quan Lục quân 1)' },
        { id: 53, label: 'ĐH Văn hóa Hà Nội' },
        { id: 54, label: 'ĐH Xây dựng' },
        { id: 55, label: 'ĐH Y Hà Nội' },
        { id: 56, label: 'ĐH Y tế Công cộng' },
        { id: 57, label: 'ĐH Đại Nam' },
        { id: 58, label: 'ĐH Điện lực' },
        { id: 59, label: 'ĐH Đông Đô' },
        { id: 60, label: 'HV Âm nhạc Quốc gia Việt Nam' },
        { id: 61, label: 'HV An ninh nhân dân' },
        { id: 62, label: 'HV Báo chí và Tuyên truyền' },
        { id: 63, label: 'HV Biên phòng' },
        { id: 64, label: 'HV Cảnh sát nhân dân' },
        { id: 65, label: 'HV Chính sách và Phát triển' },
        { id: 66, label: 'HV Chính trị Công an nhân dân' },
        { id: 67, label: 'HV Công nghệ Bưu chính Viễn thông' },
        { id: 68, label: 'HV Dân tộc' },
        { id: 69, label: 'HV Hậu cần' },
        { id: 70, label: 'HV Khoa học Quân sự' },
        { id: 71, label: 'HV Kỹ thuật Mật mã (cơ sở phía Bắc)' },
        { id: 72, label: 'HV Kỹ thuật Quân sự' },
        { id: 73, label: 'HV Ngân hàng' },
        { id: 74, label: 'HV Ngoại giao' },
        { id: 75, label: 'HV Nông nghiệp Việt Nam' },
        { id: 76, label: 'HV Phụ nữ Việt Nam' },
        { id: 77, label: 'HV Phòng không - Không quân' },
        { id: 78, label: 'HV Quản lý Giáo dục' },
        { id: 79, label: 'HV Quân y' },
        { id: 80, label: 'HV Tài chính' },
        { id: 81, label: 'HV Thanh thiếu niên Việt Nam' },
        { id: 82, label: 'HV Thiết kế và Thời trang London' },
        { id: 83, label: 'HV Tòa án' },
        { id: 84, label: 'HV Tư pháp' },
      ],
    },
    {
      id: 1,
      name: 'Lĩnh vực',
      key: 'category',
      options: [
        { id: 1, label: 'Công nghệ' },
        { id: 2, label: 'Kinh doanh' },
        { id: 3, label: 'Giáo dục' },
        { id: 4, label: 'Y tế' },
        { id: 5, label: 'Thiết kế' },
        { id: 6, label: 'An ninh mạng' },
        { id: 7, label: 'Môi trường' },
        { id: 8, label: 'Tài chính' },
        {
          id: 9,
          label: 'Logistics và Chuỗi cung ứng',
        },
        {
          id: 10,
          label: 'Nghệ Thuật',
        },
        {
          id: 11,
          label: 'Thể thao và Giải Trí',
        },
      ],
    },
    {
      id: 2,
      name: 'Địa điểm',
      key: 'locations',
      options: [
        { id: 1, label: 'Hà Nội' },
        { id: 2, label: 'Hồ Chí Minh' },
      ],
    },
    {
      id: 3,
      name: 'Hình thức sự kiện',
      key: 'eventTypes',
      options: [
        { id: 1, label: 'Workshop' },
        { id: 2, label: 'Training' },
        { id: 3, label: 'Talkshow' },
        { id: 4, label: 'Cuộc thi' },
        { id: 5, label: 'Hoạt động cộng đồng' },
        { id: 6, label: 'Triển lãm' },
        { id: 7, label: 'Khác' },
      ],
    },
    {
      id: 4,
      name: 'Giá',
      key: 'price',
      options: [
        { id: 1, label: 'Miễn phí' },
        { id: 2, label: '0 - 100.000đ' },
        { id: 3, label: '150.000đ - 500.000đ' },
      ],
    },
    {
      id: 5,
      name: 'Đối tượng tham gia',
      key: 'targetAudience',
      options: [
        { id: 1, label: 'Sinh viên' },
        { id: 2, label: 'Học sinh' },
        { id: 3, label: 'Khác' },
      ],
    },
    {
      id: 6,
      name: 'Tiêu chí',
      key: 'certificate',
      options: [
        { id: 1, label: 'Cộng điểm đoàn' },
        { id: 2, label: 'Fill tiêu chí sinh viên 5 tốt' },
        { id: 3, label: 'Cộng điểm rèn luyện' },
      ],
    },
  ])
  const dataFake = {
    id: 0,
    name: 'Trường học',
    key: 'school',
    options: [
      { id: 1, label: 'ĐH Bách Khoa Hà Nội' },
      { id: 2, label: 'ĐH Kinh Tế Quốc Dân' },
      { id: 3, label: 'ĐH Sư Phạm Hà Nội' },

      { id: 4, label: 'ĐH Anh quốc Việt Nam' },
      { id: 6, label: 'ĐH CMC' },
      { id: 7, label: 'ĐH Công nghệ Giao thông Vận tải (Cơ sở Hà Nội)' },
      { id: 8, label: 'ĐH Công nghệ và Quản lý Hữu Nghị' },
      { id: 9, label: 'ĐH Công nghệ Đông Á' },
      { id: 10, label: 'ĐH Công nghiệp Hà Nội' },
      { id: 11, label: 'ĐH Công nghiệp Việt Hung' },
      { id: 12, label: 'ĐH Công nghiệp và Thương mại Hà Nội' },
      { id: 13, label: 'ĐH Công Đoàn' },
      { id: 14, label: 'ĐH Dược Hà Nội' },
      { id: 15, label: 'ĐH FPT (Cơ sở Hà Nội)' },
      { id: 16, label: 'ĐH Giao thông Vận tải' },
      { id: 17, label: 'ĐH Hà Nội' },
      { id: 18, label: 'ĐH Hòa Bình' },
      { id: 19, label: 'ĐH Khoa học và Công nghệ Hà Nội' },
      { id: 20, label: 'ĐH Kiểm sát Hà Nội' },
      { id: 21, label: 'ĐH Kiến trúc Hà Nội' },
      { id: 22, label: 'ĐH Kinh doanh và Công nghệ Hà Nội' },
      { id: 23, label: 'ĐH Kinh tế Kỹ thuật - Công nghiệp (Cơ sở Hà Nội)' },
      { id: 25, label: 'ĐH Lâm nghiệp' },
      { id: 26, label: 'ĐH Lao động Xã hội (Cơ sở Hà Nội)' },
      { id: 27, label: 'ĐH Lao động Xã hội (Cơ sở Sơn Tây)' },
      { id: 28, label: 'ĐH Luật Hà Nội' },
      { id: 29, label: 'ĐH Mỏ - Địa chất (Cơ sở Hà Nội)' },
      { id: 30, label: 'ĐH Mở Hà Nội' },
      { id: 31, label: 'ĐH Mỹ thuật Công nghiệp' },
      { id: 32, label: 'ĐH Mỹ thuật Việt Nam' },
      { id: 33, label: 'ĐH Ngoại thương (Cơ sở Hà Nội)' },
      { id: 34, label: 'ĐH Nguyễn Trãi' },
      { id: 35, label: 'ĐH Nội vụ Hà Nội' },
      { id: 36, label: 'ĐH Phenikaa' },
      { id: 37, label: 'ĐH Phòng cháy chữa cháy' },
      { id: 38, label: 'ĐH Phương Đông' },
      { id: 39, label: 'ĐH Quốc Gia Hà Nội' },
      { id: 40, label: 'ĐH RMIT' },
      { id: 41, label: 'ĐH Sân khấu - Điện ảnh Hà Nội' },
      { id: 42, label: 'ĐH Sư phạm Hà Nội' },
      { id: 43, label: 'ĐH Sư phạm Nghệ thuật Trung ương Hà Nội' },
      { id: 44, label: 'ĐH Sư phạm Thể dục thể thao Hà Nội' },
      { id: 45, label: 'ĐH Tài chính Ngân hàng Hà Nội' },
      { id: 46, label: 'ĐH Tài nguyên và Môi trường Hà Nội' },
      { id: 47, label: 'ĐH Thăng Long' },
      { id: 48, label: 'ĐH Thành Đô' },
      { id: 49, label: 'ĐH Thủ đô Hà Nội' },
      { id: 50, label: 'ĐH Thương mại' },
      { id: 51, label: 'ĐH Thủy Lợi' },
      { id: 52, label: 'ĐH Trần Quốc Tuấn (Sĩ quan Lục quân 1)' },
      { id: 53, label: 'ĐH Văn hóa Hà Nội' },
      { id: 54, label: 'ĐH Xây dựng' },
      { id: 55, label: 'ĐH Y Hà Nội' },
      { id: 56, label: 'ĐH Y tế Công cộng' },
      { id: 57, label: 'ĐH Đại Nam' },
      { id: 58, label: 'ĐH Điện lực' },
      { id: 59, label: 'ĐH Đông Đô' },
      { id: 60, label: 'HV Âm nhạc Quốc gia Việt Nam' },
      { id: 61, label: 'HV An ninh nhân dân' },
      { id: 62, label: 'HV Báo chí và Tuyên truyền' },
      { id: 63, label: 'HV Biên phòng' },
      { id: 64, label: 'HV Cảnh sát nhân dân' },
      { id: 65, label: 'HV Chính sách và Phát triển' },
      { id: 66, label: 'HV Chính trị Công an nhân dân' },
      { id: 67, label: 'HV Công nghệ Bưu chính Viễn thông' },
      { id: 68, label: 'HV Dân tộc' },
      { id: 69, label: 'HV Hậu cần' },
      { id: 70, label: 'HV Khoa học Quân sự' },
      { id: 71, label: 'HV Kỹ thuật Mật mã (cơ sở phía Bắc)' },
      { id: 72, label: 'HV Kỹ thuật Quân sự' },
      { id: 73, label: 'HV Ngân hàng' },
      { id: 74, label: 'HV Ngoại giao' },
      { id: 75, label: 'HV Nông nghiệp Việt Nam' },
      { id: 76, label: 'HV Phụ nữ Việt Nam' },
      { id: 77, label: 'HV Phòng không - Không quân' },
      { id: 78, label: 'HV Quản lý Giáo dục' },
      { id: 79, label: 'HV Quân y' },
      { id: 80, label: 'HV Tài chính' },
      { id: 81, label: 'HV Thanh thiếu niên Việt Nam' },
      { id: 82, label: 'HV Thiết kế và Thời trang London' },
      { id: 83, label: 'HV Tòa án' },
      { id: 84, label: 'HV Tư pháp' },
    ],
  }
  const handleSearchValueSchool = (e) => {
    setSearchDataSchool(e.target.value)
    const dataSchool = dataFake.options.filter((item) =>
      item.label.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setFilterGroups((prev) =>
      prev.map((group) =>
        group.key === 'school' ? { ...group, options: dataSchool } : group
      )
    )
  }

  const [openGroups, setOpenGroups] = useState({}) // lưu trạng thái mở/đóng từng tiêu chí
  const updateAndSubmit = useCallback(
    (updates) => {
      const newForm = { ...form, ...updates }
      setForm(newForm)
      setTimeout(() => onSubmit(newForm), 0)
    },
    [form, onSubmit]
  )
  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleOptionToggle = (key, value) => {
    const current = form[key] || []
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    updateAndSubmit({ [key]: updated })
  }

  return (
    <div className="w-full">
      <div className="w-full flex gap-2 items-center">
        <FaSlidersH />
        <p>Bộ lọc</p>
      </div>
      <div className="w-full space-y-1 mb-4">
        {/* Render tất cả nhóm tiêu chí */}
        {filterGroups.map((group) => (
          <div key={group.id} className="flex flex-col gap-1">
            {/* Tiêu đề tiêu chí (dropdown) */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <div
                  onClick={() => toggleGroup(group.key)}
                  className={`py-1.5 pl-0 pr-1 rounded-full text-sm cursor-pointer transition-all font-medium ${
                    openGroups[group.key]
                      ? 'text-[#5FA9F0]'
                      : 'text-gray-700 hover:text-[#5FA9F0]'
                  }`}
                >
                  {group.name}
                </div>
                <p
                  className="py-1.5 flex items-center cursor-pointer"
                  onClick={() => toggleGroup(group.key)}
                >
                  {openGroups[group.key] ? (
                    <IoIosArrowDropdown />
                  ) : (
                    <IoIosArrowDropright />
                  )}
                </p>
              </div>
              <div>
                {group.key === 'school' && openGroups[group.key] ? (
                  <input
                    value={searchDataSchool}
                    onChange={handleSearchValueSchool}
                    className="border rounded-lg px-2 py-1 text-sm w-full placeholder:text-gray-400 placeholder:text-[11px]"
                    placeholder="Tìm kiếm theo tên trường (Không viết tắt)...."
                  />
                ) : null}
              </div>
            </div>
            {/* Danh sách options */}
            {openGroups[group.key] &&
              group.options
                .map((opt) => (
                  <label
                    key={opt.id}
                    className="flex gap-2 cursor-pointer px-2 hover:bg-white rounded transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={form[group.key]?.includes(opt.label)}
                      onChange={() => handleOptionToggle(group.key, opt.label)}
                      className="w-4 h-4 mt-0.5 min-w-4 text-[#5FA9F0] border-gray-300 rounded focus:ring-[#5FA9F0]"
                    />
                    <span className="text-sm text-gray-700">{opt.label}</span>
                  </label>
                ))
                .slice(0, group.key === 'school' ? 10 : group.options.length)}
          </div>
        ))}
      </div>
    </div>
  )
}
