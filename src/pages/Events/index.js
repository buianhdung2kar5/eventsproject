import { useState } from 'react'
import SearchInput from '../../components/function/SearchInput'
import ListDataEvents from '../../components/Events/ListDataEvents'
import { DetailEvents } from '../../data/events/DetailEvents'

export default function EventsPage() {
  const [formFilter, setDataFormFilter] = useState(null)

  const handleSubmitFilter = (form) => {
    console.log('forrm',form);
    setDataFormFilter(form)
    
  }

  // Nếu chưa có formFilter thì hiển thị tất cả
  const dataFiltered = (formFilter ? DetailEvents.filter((item) => {
    const {
      category,
      eventType,
      object,
      certificate,
      address,
      location,
      price,
      benefits,
      aboutEvent,
      school
    } = item

    const isCategoryMatch =
      !formFilter.category || formFilter.category === 'all' || formFilter.category === category

    const isEventTypeMatch =
      !formFilter.eventTypes?.length || formFilter.eventTypes.includes(eventType)
    
    // Search: kiểm tra từ khóa trong tất cả các field liên quan
    const searchTerm = formFilter?.searchTerm?.trim().toLowerCase() || ''
    const isSearchMatch =
      !searchTerm ||
      school?.toLowerCase().includes(searchTerm) ||
      category?.toLowerCase().includes(searchTerm) ||
      eventType?.toLowerCase().includes(searchTerm) ||
      address?.toLowerCase().includes(searchTerm) ||
      benefits?.some(b => b?.toLowerCase().includes(searchTerm)) ||
      aboutEvent?.toLowerCase().includes(searchTerm)
    
    const isTargetAudienceMatch =
      !formFilter.targetAudience || formFilter.targetAudience === 'all' ||
      (formFilter.targetAudience === 'student' && (object === 'student' || object === 'university')) ||
      (formFilter.targetAudience === 'university' && object === 'university')

    const isCertificateMatch =
      !formFilter.certificate?.length ||
      formFilter.certificate.some(certFilter => {
        if (certFilter === 'Free') {
          return price?.toLowerCase() === 'free' || price === '0'
        }
        if (certFilter === 'Có chứng chỉ sinh viên 5 tốt') {
          return (
            certificate?.toLowerCase().includes('5 tốt') ||
            benefits?.some(b => b?.toLowerCase().includes('5 tốt')) ||
            aboutEvent?.toLowerCase().includes('5 tốt')
          )
        }
        return false
      })

    const isLocationMatch =
      !formFilter.locations?.length ||
      formFilter.locations.some(loc => {
        const locLower = loc?.toLowerCase() || ''
        return (
          address?.toLowerCase().includes(locLower) ||
          location?.toLowerCase().includes(locLower)
        )
      })

    return (
      isCategoryMatch &&
      isEventTypeMatch &&
      isTargetAudienceMatch &&
      isCertificateMatch &&
      isLocationMatch &&
      isSearchMatch
    )
  }) : DetailEvents)
  console.log('filter',dataFiltered);
  
  return (
    <div
      className="w-full mx-auto flex flex-col items-center px-[2%] py-[clamp(2rem,4vh,3rem)]"
      style={{ gap: 'clamp(1rem,2vw,1.5rem)' }}
    >
      <div
        className="w-full sm:w-[60%] flex flex-col items-center"
        style={{ gap: 'clamp(1rem,2vw,1.5rem)' }}
      >
        {/* Tiêu đề */}
        <h1
          className="text-[#090D00] text-center font-bold"
          style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)' }}
        >
          Sự kiện dành cho sinh viên
        </h1>

        {/* Mô tả */}
        <p
          className="text-[#6B7280] text-center"
          style={{ fontSize: 'clamp(0.9rem,1.5vw,1.1rem)' }}
        >
          Khám phá và đăng ký tham gia các sự kiện từ các trường đại học
        </p>

        {/* Thanh tìm kiếm */}
        <div className="w-full">
          <SearchInput onSubmit={handleSubmitFilter} />
        </div>

        {/* Số lượng kết quả */}
        <p
          className="font-light text-center"
          style={{
            fontSize: 'clamp(0.8rem,1.2vw,1rem)',
            padding: 'clamp(0.5rem,1vw,1rem)',
          }}
        >
          {dataFiltered.length > 0
            ? `Tìm thấy ${dataFiltered.length} sự kiện`
            : 'Không có sự kiện phù hợp'}
        </p>

        {/* Danh sách sự kiện */}
        <div className="w-full">
          <ListDataEvents data={dataFiltered} />
        </div>
      </div>
    </div>
  )
}
