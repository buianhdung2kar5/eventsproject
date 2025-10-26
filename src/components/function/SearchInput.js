import { DataFilterOptions } from '../Events/DataFilterOption'
import { useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
export default function SearchInput() {
  const options = DataFilterOptions
  const itemOptions = 'text-[#090D00] bg-white'
  const activeOptions = 'bg-[#5FA9F0] text-white'

  const [selectedId, setSelectedId] = useState('all')
  const [hiddenFilter, setHiddenFilter] = useState(false)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-4 items-start relative">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          placeholder="Tìm kiếm sự kiện, trường đại học..."
          className="w-[50%] bg-[#F9FAFB] rounded-lg p-2 pl-10 focus:outline-none"
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
          <p className="font-medium p-2 pl-0">Lĩnh vực</p>
          <div className="flex items-center gap-4 flex-wrap p-4 pt-0 pl-0">
            <div
              key="all"
              onClick={() => setSelectedId('all')}
              className={`${
                selectedId === 'all' ? activeOptions : itemOptions
              } border rounded-lg text-[16px] p-2 cursor-pointer`}
            >
              Tất cả
            </div>

            {options.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`${
                  selectedId === item.id ? activeOptions : itemOptions
                } border rounded-lg text-[16px] p-2 cursor-pointer`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
