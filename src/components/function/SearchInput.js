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
  // JSON bậc 2 chứa các tiêu chí và option
  const filterGroups = [
    {
      id: 0,
      name: 'Trường học',
      key: 'school',
      options: [
        { id: 1, label: 'ĐH Bách Khoa Hà Nội' },
        { id: 2, label: 'ĐH Kinh Tế Quốc Dân' },
        { id: 3, label: 'ĐH Sư Phạm Hà Nội' },
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
      ],
    },
    {
      id: 2,
      name: 'Địa điểm',
      key: 'locations',
      options: [
        { id: 1, label: 'Hà Nội' },
        { id: 2, label: 'TP. Hồ Chí Minh' },
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
      ],
    },
    {
      id: 6,
      name: 'Tiêu chí',
      key: 'certificate',
      options: [
        { id: 1, label: 'Cộng điểm đoàn' },
        { id: 2, label: 'Chứng chỉ 5 tốt' },
        { id: 3, label: 'Cộng điểm rèn luyện' },
      ],
    },
  ]

  const [openGroups, setOpenGroups] = useState({}) // lưu trạng thái mở/đóng từng tiêu chí
  const updateAndSubmit = useCallback(
    (updates) => {
      const newForm = { ...form, ...updates }
      setForm(newForm)
      setTimeout(() => onSubmit(newForm), 0)
    },
    [form, onSubmit]
  )
  console.log('input form', form)
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

            {/* Danh sách options */}
            {openGroups[group.key] &&
              group.options.map((opt) => (
                <label
                  key={opt.id}
                  className="flex items-center gap-2 cursor-pointer px-2 hover:bg-white rounded transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={form[group.key]?.includes(opt.label)}
                    onChange={() => handleOptionToggle(group.key, opt.label)}
                    className="w-4 h-4 text-[#5FA9F0] border-gray-300 rounded focus:ring-[#5FA9F0]"
                  />
                  <span className="text-sm text-gray-700">{opt.label}</span>
                </label>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}
