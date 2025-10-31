// src/components/PortfolioManagerPage.jsx
import React, { useEffect, useState } from 'react'
import HeaderSection from './HeaderSection'
import SummaryCards from './SummaryCards'
import PortfolioItem from './PortfolioItem'
import { DetailEvents } from '../../data/events/DetailEvents'

const PortfolioManagerPage = () => {
  const combinedDataKey = 'CombinedPortfolio'
  const [portfolioData, setPortfolioData] = useState([])

  useEffect(() => {
    const dataIdRaw = localStorage.getItem('CreateProtfolio')
    if (!dataIdRaw) return

    const dataId = JSON.parse(dataIdRaw)
    if (!Array.isArray(dataId) || dataId.length === 0) return

    const currentMatchingItems = DetailEvents.filter((item) =>
      dataId.includes(item.id)
    )
    if (currentMatchingItems.length === 0) return

    let combinedPortfolioArray = []
    try {
      const stored = localStorage.getItem(combinedDataKey)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) combinedPortfolioArray = parsed
      }
    } catch (err) {
      console.error('Lỗi đọc localStorage:', err)
    }
    const newGroupSignature = JSON.stringify(
      currentMatchingItems.map((i) => i.id)
    )
    const isDuplicate = combinedPortfolioArray.some(
      (group) =>
        JSON.stringify(group.items.map((i) => i.id)) === newGroupSignature
    )
    if (isDuplicate) return

    // 4️⃣ Tạo hồ sơ gộp mới
    const firstItem = currentMatchingItems[0]
    const subItems = currentMatchingItems.map((item) => ({
      id: item.id,
      name: item.name,
      date: item.date,
      organization: item.organization,
      address: item.address,
      certificate: item.certificate,
      category: item.category,
    }))

    const newCombinedPortfolioItem = {
      id: Date.now(),
      title: firstItem.name,
      description: firstItem.aboutEvent,
      date: firstItem.date,
      views: 10,
      downloads: 6,
      activities: subItems.length,
      status: 'Đã xuất bản',
      items: subItems,
    }

    // 5️⃣ Lưu lại
    const updated = [...combinedPortfolioArray, newCombinedPortfolioItem]
    localStorage.setItem(combinedDataKey, JSON.stringify(updated))
    localStorage.removeItem('CreateProtfolio')
    setPortfolioData(updated)
  }, []) // 👈 chạy duy nhất 1 lần khi component mount

  // 6️⃣ Load lại danh sách hiện có
  useEffect(() => {
    const stored = localStorage.getItem('CombinedPortfolio')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) setPortfolioData(parsed)
      } catch {}
    }
  }, [])
  const handleDelete = (item) => {
    const data = localStorage.getItem(combinedDataKey)
    const dataParsed = data ? JSON.parse(data) : null
    const dataFiltered = dataParsed
      ? dataParsed?.filter((data) => {
          return data.id !== item.id
        })
      : []
    console.log('Dataa', dataFiltered)

    localStorage.setItem(combinedDataKey, JSON.stringify(dataFiltered))
    // window.location.reload()
  }
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 w-[60%] mx-auto">
      <div className="max-w-7xl mx-auto">
        <HeaderSection />
        <SummaryCards />

        <div className="mt-8">
          {portfolioData.length === 0 ? (
            <p className="text-center text-gray-500">Chưa có hồ sơ nào</p>
          ) : (
            portfolioData.map((item) => (
              <PortfolioItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                {...item}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioManagerPage
