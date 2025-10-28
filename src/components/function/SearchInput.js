import { DataFilterOptions } from '../Events/DataFilterOption'
import { useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
import Select from '../../ui/Select'
export default function SearchInput() {
  const options = DataFilterOptions
  const itemOptions = 'text-[#090D00] bg-white'
  const activeOptions = 'bg-[#5FA9F0] text-white'

  const [hiddenFilter, setHiddenFilter] = useState(false)
  const [form, setForm] = useState({
    category: 'all',
    eventTypes: [],
    targetAudience: '',
    searchTerm: '',
    locations: []
  })
  
  const optionsInterface = [
    'Workshop',
    'Training',
    'Talkshow',
    'Cuộc thi',
    'Hoạt động cộng đồng',
    'Triển lãm',
    'Khác',
  ]
  
  const objectOptions = [
    {value:'all', label: 'Tất cả'},
    {value:'student', label: 'Học sinh'},
    {value:'university', label: 'Sinh viên'},
  ]

  const locationOptions = [
    'Tất cả',
    'Hà Nội',
    'TP. Hồ Chí Minh',
    'Đà Nẵng',
    'Huế',
    'Đà Lạt',
    'Nha Trang',
    'Phú Quốc'
  ]

  // Update form state
  const updateForm = (key, value) => {
    setForm(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleEventTypeChange = (eventType) => {
    setForm(prev => {
      const currentTypes = prev.eventTypes
      const newTypes = currentTypes.includes(eventType)
        ? currentTypes.filter(type => type !== eventType)
        : [...currentTypes, eventType]
      
      return {
        ...prev,
        eventTypes: newTypes
      }
    })
  }
const handleLocationChange = (location)=>{
  setForm(prev => {
    const currentLocations = prev.locations
    const newLocations = currentLocations.includes(location)
      ? currentLocations.filter(loc => loc !== location)
      : [...currentLocations, location]
    
    return {
      ...prev,
      locations: newLocations
    }
  })
}
  const handleSearchChange = (e) => {
    updateForm('searchText', e.target.value)
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-4 items-start relative">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          placeholder="Tìm kiếm sự kiện, trường đại học..."
          className="w-[50%] bg-[#F9FAFB] rounded-lg p-2 pl-10 focus:outline-none"
          value={form.searchTerm}
          onChange={handleSearchChange}
        />

        <div className="flex gap-2 items-center border p-2 rounded-lg font-medium">
          <CiFilter className="font-medium" />
          <button onClick={() => setHiddenFilter(!hiddenFilter)}>
            {hiddenFilter ? 'Hiện bộ lọc' : 'Ẩn bộ lọc'}
          </button>
        </div>
      </div>

      {!hiddenFilter && (
        <div className="w-full flex flex-col border rounded-lg pl-8">
          <div className="p-4 pt-4 pl-0 w-full">
            <Select
              label="Đối tượng"
              options={objectOptions}
              value={form.targetAudience}
              onChange={(value) => updateForm('targetAudience', value)}
              placeholder="Chọn đối tượng"
              name="object"
              className="w-[90%]"
            />
          </div>
          <p className='font-medium p-2 pl-0'>Địa điểm</p>
          <div className='flex flex-wrap gap-4 p-4 pt-0 pl-0'>
            {locationOptions.map((item, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <input
                  type="checkbox"
                  checked={form.locations.includes(item)}
                  onChange={() => handleLocationChange(item)}
                  className="w-4 h-4 text-[#5FA9F0] bg-gray-100 border-gray-300 rounded focus:ring-[#5FA9F0] focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </label>
            ))}
            </div>
          <p className="font-medium p-2 pl-0">Lĩnh vực</p>
          <div className="flex items-center gap-4 flex-wrap p-4 pt-0 pl-0">
            <div
              key="all"
              onClick={() => updateForm('category', 'all')}
              className={`${
                form.category === 'all' ? activeOptions : itemOptions
              } border rounded-lg text-[16px] p-2 cursor-pointer`}
            >
              Tất cả
            </div>

            {options.map((item) => (
              <div
                key={item.id}
                onClick={() => updateForm('category', item.id)}
                className={`${
                  form.category === item.id ? activeOptions : itemOptions
                } border rounded-lg text-[16px] p-2 cursor-pointer`}
              >
                {item.name}
              </div>
            ))}
          </div>
          <p className="font-medium p-2 pl-0">Hình thức sự kiện</p>
          <div className="flex flex-wrap gap-4 p-4 pt-0 pl-0">
            {optionsInterface.map((item, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <input
                  type="checkbox"
                  checked={form.eventTypes.includes(item)}
                  onChange={() => handleEventTypeChange(item)}
                  className="w-4 h-4 text-[#5FA9F0] bg-gray-100 border-gray-300 rounded focus:ring-[#5FA9F0] focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </label>
            ))}
          </div>
          
          {/* Selected Event Types Display */}
          {form.eventTypes.length > 0 && (
            <div className="p-4 pt-0 pl-0">
              <p className="text-sm font-medium text-gray-600 mb-2">
                Đã chọn: {form.eventTypes.length} loại sự kiện
              </p>
              <div className="flex flex-wrap gap-2">
                {form.eventTypes.map((type, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#5FA9F0] text-white text-xs rounded-full"
                  >
                    {type}
                    <button
                      onClick={() => handleEventTypeChange(type)}
                      className="ml-1 hover:bg-blue-600 rounded-full p-0.5"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Debug: Display current form state */}
          <div className="p-4 pt-0 pl-0 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-gray-600 mb-2">Current Filter State:</p>
            <pre className="text-xs text-gray-500 bg-white p-2 rounded border">
              {JSON.stringify(form, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
