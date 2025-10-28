import { DataFilterOptions } from '../Events/DataFilterOption'
import { useState, useCallback, useRef } from 'react'
import Select from '../../ui/Select'

export default function SearchInput({ onSubmit }) {
  const options = DataFilterOptions
  const debounceTimerRef = useRef(null)

  const [form, setForm] = useState({
    searchTerm: '',
    category: 'all',
    targetAudience: '',
    locations: [],
    eventTypes: [],
    certificate: [],
  })

  const [showAdvanced, setShowAdvanced] = useState(false)

  // Options data
  const objectOptions = [
    { value: 'all', label: 'Tất cả đối tượng' },
    { value: 'student', label: 'Học sinh' },
    { value: 'university', label: 'Sinh viên' },
  ]

  const locationOptions = [
    'Hà Nội',
    'TP. Hồ Chí Minh',
    'Đà Nẵng',
    'Huế',
    'Đà Lạt',
    'Nha Trang',
    'Phú Quốc'
  ]

  const eventTypeOptions = [
    'Workshop',
    'Training',
    'Talkshow',
    'Cuộc thi',
    'Hoạt động cộng đồng',
    'Triển lãm',
    'Khác',
  ]

  const updateAndSubmit = useCallback((updates) => {
    const newForm = { ...form, ...updates }
    setForm(newForm)
    // Auto-submit with slight delay để React update state
    setTimeout(() => onSubmit(newForm), 0)
  }, [form, onSubmit])

  const handleSearchChange = (e) => {
    const value = e.target.value
    setForm(prev => ({ ...prev, searchTerm: value }))
    
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    
    debounceTimerRef.current = setTimeout(() => {
      updateAndSubmit({ searchTerm: value })
    }, 300)
  }

  const handleCategoryChange = (name) => {
    updateAndSubmit({ category: name })
  }

  const handleAudienceChange = (value) => {
    updateAndSubmit({ targetAudience: value })
  }

  const handleLocationToggle = (location) => {
    const newLocations = form.locations.includes(location)
      ? form.locations.filter(l => l !== location)
      : [...form.locations, location]
    updateAndSubmit({ locations: newLocations })
  }

  const handleEventTypeToggle = (type) => {
    const newTypes = form.eventTypes.includes(type)
      ? form.eventTypes.filter(t => t !== type)
      : [...form.eventTypes, type]
    updateAndSubmit({ eventTypes: newTypes })
  }

  const handleCertificateToggle = (cert) => {
    const newCerts = form.certificate.includes(cert)
      ? form.certificate.filter(c => c !== cert)
      : [...form.certificate, cert]
    updateAndSubmit({ certificate: newCerts })
  }

  const handleReset = () => {
    const resetForm = {
      searchTerm: '',
      category: 'all',
      targetAudience: '',
      locations: [],
      eventTypes: [],
      certificate: [],
    }
    setForm(resetForm)
    onSubmit(resetForm)
  }

  const hasActiveFilters = form.searchTerm || form.category !== 'all' || form.locations.length > 0 || 
    form.eventTypes.length > 0 || form.certificate.length > 0 || form.targetAudience

  return (
    <div className="w-full">
      <div className="w-full flex gap-2 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Tìm kiếm sự kiện, trường..."
          value={form.searchTerm}
          onChange={handleSearchChange}
          className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA9F0] text-sm"
        />
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
        >
          {showAdvanced ? 'Ẩn bộ lọc' : 'Bộ lọc'}
        </button>
        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 rounded-lg text-sm font-medium text-red-600 transition-colors whitespace-nowrap"
          >
            Xóa lọc
          </button>
        )}
      </div>

      <div className="w-full space-y-3 mb-4">
        <div className="flex flex-wrap gap-2">
          <div
            onClick={() => handleCategoryChange('all')}
            className={`px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all font-medium ${
              form.category === 'all'
                ? 'bg-[#5FA9F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tất cả
          </div>
          {options.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCategoryChange(item.name)}
              className={`px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all font-medium ${
                form.category === item.name
                  ? 'bg-[#5FA9F0] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {showAdvanced && (
        <div className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-4">
          {/* Đối tượng */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Đối tượng
            </label>
            <Select
              options={objectOptions}
              value={form.targetAudience}
              onChange={handleAudienceChange}
              placeholder="Chọn đối tượng"
              name="audience"
              className="w-full"
            />
          </div>

          {/* Tất cả Địa điểm */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tất cả địa điểm {form.locations.length > 0 && `(${form.locations.length} được chọn)`}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[150px] overflow-y-auto pr-2">
              {locationOptions.map((location) => (
                <label
                  key={location}
                  className="flex items-center gap-2 cursor-pointer p-2 hover:bg-white rounded transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={form.locations.includes(location)}
                    onChange={() => handleLocationToggle(location)}
                    className="w-4 h-4 text-[#5FA9F0] border-gray-300 rounded focus:ring-[#5FA9F0]"
                  />
                  <span className="text-sm text-gray-700">{location}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Hình thức sự kiện */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hình thức sự kiện {form.eventTypes.length > 0 && `(${form.eventTypes.length} được chọn)`}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {eventTypeOptions.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer p-2 hover:bg-white rounded transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={form.eventTypes.includes(type)}
                    onChange={() => handleEventTypeToggle(type)}
                    className="w-4 h-4 text-[#5FA9F0] border-gray-300 rounded focus:ring-[#5FA9F0]"
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bộ lọc khác */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bộ lọc khác
            </label>
            <div className="space-y-2">
              {['Free', 'Có chứng chỉ sinh viên 5 tốt'].map((cert) => (
                <label
                  key={cert}
                  className="flex items-center gap-2 cursor-pointer p-2 hover:bg-white rounded transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={form.certificate.includes(cert)}
                    onChange={() => handleCertificateToggle(cert)}
                    className="w-4 h-4 text-[#5FA9F0] border-gray-300 rounded focus:ring-[#5FA9F0]"
                  />
                  <span className="text-sm text-gray-700">{cert}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
