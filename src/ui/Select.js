import { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaCheck } from 'react-icons/fa'

const Select = ({
  options = [],
  value = '',
  onChange = () => {},
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  error = false,
  label = '',
  required = false,
  name = '',
  id = '',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const selectRef = useRef(null)
  const dropdownRef = useRef(null)

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle option selection
  const handleSelect = (option) => {
    onChange(option.value)
    setIsOpen(false)
    setSearchTerm('')
  }

  // Get selected option label
  const selectedOption = options.find(option => option.value === value)

  return (
    <div className={`relative w-full ${className}`} ref={selectRef}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={id || name}
          className="block text-sm font-medium text-[#090D00] mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Select Button */}
      <button
        type="button"
        id={id || name}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full px-3 py-2 text-left bg-white border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:ring-[#5FA9F0] focus:border-[#5FA9F0]
          transition-colors duration-200
          ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'hover:border-gray-400'}
        `}
      >
        <div className="flex items-center justify-between">
          <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <FaChevronDown 
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div 
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden"
        >
          {/* Search Input */}
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search options..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5FA9F0] focus:border-[#5FA9F0]"
              autoFocus
            />
          </div>

          {/* Options List */}
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`
                    w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
                    flex items-center justify-between
                    ${value === option.value ? 'bg-[#5FA9F0] text-white hover:bg-[#4A8BC7]' : 'text-gray-900'}
                  `}
                >
                  <span className="text-sm">{option.label}</span>
                  {value === option.value && (
                    <FaCheck className="w-4 h-4" />
                  )}
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500 text-center">
                No options found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {typeof error === 'string' ? error : 'This field is required'}
        </p>
      )}
    </div>
  )
}

export default Select
