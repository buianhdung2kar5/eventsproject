import { useState } from 'react'
import SearchInput from '../../components/function/SearchInput'
import ListDataEvents from '../../components/Events/ListDataEvents'
import { DetailEvents } from '../../data/events/DetailEvents'
import { Input } from '../../ui/Input'
export default function EventsPage() {
  const [formFilter, setDataFormFilter] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const startItem = (currentPage - 1) * itemsPerPage
  const endItem = startItem + itemsPerPage
  const handleSubmitFilter = (form) => {
    setDataFormFilter(form)
  }
  const handleSearchChange = (e) => {
    const { value } = e.target
    setDataFormFilter((prev) => ({
      ...prev,
      searchTerm: value,
    }))
  }

  const dataFiltered = formFilter
    ? DetailEvents.filter((item) => {
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
          school,
        } = item

        const isCategoryMatch =
          !formFilter.category?.length || formFilter.category.includes(category)

        const isEventTypeMatch =
          !formFilter.eventTypes?.length ||
          formFilter.eventTypes.includes(eventType)

        // Search: kiểm tra từ khóa trong tất cả các field liên quan
        const searchTerm = formFilter?.searchTerm?.trim().toLowerCase() || ''
        const isSearchMatch =
          !searchTerm ||
          school?.toLowerCase().includes(searchTerm) ||
          category?.toLowerCase().includes(searchTerm) ||
          eventType?.toLowerCase().includes(searchTerm) ||
          address?.toLowerCase().includes(searchTerm) ||
          benefits?.some((b) => b?.toLowerCase().includes(searchTerm)) ||
          aboutEvent?.toLowerCase().includes(searchTerm)
        const isSchoolMatch =
          !formFilter.school?.length || formFilter.school.includes(school)
        const isTargetAudienceMatch =
          !formFilter.targetAudience?.length ||
          formFilter.targetAudience.includes(object)

        const isCertificateMatch =
          !formFilter.certificate?.length ||
          formFilter.certificate.some((certFilter) => {
            if (certFilter === 'Chứng chỉ 5 tốt') {
              return (
                certificate?.toLowerCase().includes('5 tốt') ||
                benefits?.some((b) => b?.toLowerCase().includes('5 tốt')) ||
                aboutEvent?.toLowerCase().includes('5 tốt')
              )
            }
            return false
          })

        const isLocationMatch =
          !formFilter.locations?.length ||
          formFilter.locations.some((loc) => {
            const locLower = loc?.toLowerCase() || ''
            return (
              address?.toLowerCase().includes(locLower) ||
              location?.toLowerCase().includes(locLower)
            )
          })
        const arrayPrice = formFilter?.price?.map((p) =>
          p.split('-').map((x) => x.trim())
        )

        const cutPrice = arrayPrice?.map((p) =>
          p.map((x) => Number(x.replace(/[^\d]/g, '')))
        )
        const isPriceMatch = !formFilter?.price?.length
          ? true
          : Number(price?.toString().replace(/[^\d]/g, '')) === 0
          ? formFilter.price.includes('Miễn phí')
          : cutPrice.some(
              ([min, max]) =>
                Number(price?.toString().replace(/[^\d]/g, '')) >= min &&
                Number(price?.toString().replace(/[^\d]/g, '')) <= max
            )

        // console.log('iscate', isCategoryMatch)
        // console.log('isevent', isEventTypeMatch)
        // console.log('ista', isTargetAudienceMatch)
        // console.log('iscert', isCertificateMatch)
        // console.log('isloc', isLocationMatch)
        // console.log('issearch', isSearchMatch)
        return (
          isCategoryMatch &&
          isEventTypeMatch &&
          isTargetAudienceMatch &&
          isCertificateMatch &&
          isLocationMatch &&
          isSearchMatch &&
          isPriceMatch &&
          isSchoolMatch
        )
      })
    : DetailEvents
  const totalPage =
    dataFiltered?.length > itemsPerPage
      ? Math.ceil(dataFiltered?.length / itemsPerPage)
      : 1
  const dataPerPage = dataFiltered.slice(startItem, endItem)
  const handleActivePage = (index) => {
    setCurrentPage(index)
  }
  return (
    <div
      className="w-full mx-auto flex flex-col items-center px-[2%] py-[clamp(1.5rem,2.5vh,2.5rem)]"
      style={{ gap: 'clamp(1rem,2vw,1.5rem)' }}
    >
      <div
        className="w-full sm:w-[90%] flex flex-col items-center"
        style={{ gap: 'clamp(0.5rem,1vw,1rem)' }}
      >
        {/* Tiêu đề */}
        <h1
          className="text-[#090D00] text-center font-bold"
          style={{ fontSize: 'clamp(1rem,2vw,1.5rem)' }}
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
        <div className="flex gap-4 w-full">
          <div className="w-[20%] bg-white border rounded-lg p-4 shadow-md mt-2">
            <SearchInput onSubmit={handleSubmitFilter} />
          </div>
          {/* Danh sách sự kiện */}
          <div className="flex-1 flex flex-col gap-4">
            <Input
              placeholder={'Tìm kiếm sự kiện, trường đại học...'}
              value={formFilter?.searchTerm}
              onChange={handleSearchChange}
            />
            {dataFiltered.length > 0 ? (
              <ListDataEvents data={dataPerPage} />
            ) : (
              <div className="text-center text-gray-500 mt-8 w-full">
                Không tìm thấy sự kiện phù hợp.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center w-full">
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            value={page}
            onClick={() => handleActivePage(page)}
            className={`border-0 rounded-full px-3 py-1 flex items-center ${
              Number(page) === Number(currentPage) ? `bg-[#5FA9F0]` : `bg-white`
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
