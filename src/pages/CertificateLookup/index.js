import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import { CertificateCard } from '../../components/Certificate/CertificateCard'
import { CertificateModal } from '../../components/Certificate/CertificateModal'
import {
  certificateMockData,
  lookupGuideData,
} from '../../data/certificate/certificateData'
import { PATH } from '../../routes/path'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { IoMdCheckbox } from 'react-icons/io'
import PortfolioSaved from '../PortFolio/PortfolioSaved/PortfolioSaved'

const CertificateLookup = () => {
  const navigate = useNavigate()
  const [searchCode, setSearchCode] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [isActiveButton, setIsActiveButton] = useState('Hồ sơ sự kiện')
  const [confirmRobot, setConfirmRobot] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!confirmRobot) {
      alert('Vui lòng xác nhận không phải robot!')
      return
    }
    setHasSearched(true)

    if (!searchCode.trim()) {
      setSearchResults([])
      return
    }

    // Hỗ trợ tìm nhiều mã cách nhau bởi dấu phẩy
    const searchCodes = searchCode
      .split(',')
      .map((code) => code.trim().toLowerCase())

    // Tìm kiếm trong mock data
    const found = certificateMockData.filter((cert) =>
      searchCodes.some(
        (code) =>
          cert.id.toLowerCase().includes(code) ||
          cert.studentId.toLowerCase().includes(code) ||
          cert.studentName.toLowerCase().includes(code)
      )
    )

    setSearchResults(found)
  }

  const handleContactSupport = () => {
    navigate(PATH.CONTACT)
  }

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const handleDownload = (certificate) => {
    console.log('Tải xuống hồ sơ:', certificate.id)
    alert('Đang tải xuống hồ sơ PDF...')
  }


  const handleClick = (e) => {
    setIsActiveButton(e.target.id)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="w-[60%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <img
            src={process.env.PUBLIC_URL + '/image/certificateLookup/lookup.svg'}
            alt="Biểu tượng tra cứu hồ sơ"
            className="w-20 h-20 mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tra cứu hồ sơ sự kiện
          </h1>
          <p className="text-gray-600 max-w-2xl text-center">
            Nhập mã sự kiện để tra cứu
          </p>
          <div className="flex gap-4">
            <button
              id="Hồ sơ sự kiện"
              className={`${
                isActiveButton === 'Hồ sơ sự kiện' ? 'bg-[#5FA9F0]' : 'bg-white'
              } text-medium text-sm px-2 py-1 border rounded-lg cursor-pointer`}
              onClick={handleClick}
            >
              Hồ sơ sự kiện
            </button>
            <button
              id="Hồ sơ đã lưu"
              className={`${
                isActiveButton === 'Hồ sơ đã lưu' ? 'bg-[#5FA9F0]' : 'bg-white'
              } text-medium text-sm px-2 py-1 border rounded-lg cursor-pointer`}
              onClick={handleClick}
            >
              Hồ sơ đã lưu
            </button>
          </div>
        </div>

        {/* Conditional Render */}
        {isActiveButton === 'Hồ sơ đã lưu' ? (
          <PortfolioSaved />
        ) : (
          <>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="flex flex-col gap-1 mb-4">
                <p className="font-medium text-sm">Mã tra cứu</p>
                <p className="text-sm text-[#6B7280]">
                  Tra nhiều hồ sơ bằng cách thêm dấu phẩy giữa các mã
                </p>
              </div>
              <form onSubmit={handleSearch} className="space-y-6">
                <Input
                  label="Mã hồ sơ hoặc mã sự kiện"
                  name="searchCode"
                  placeholder="VD: PORTFOLIO-1-2025, 1, 2"
                  required={true}
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                />
                <div className="flex gap-1 w-full border rounded-lg bg-[#090D001A]/5 px-4 py-2">
                  <button
                    type="button"
                    onClick={() => setConfirmRobot(!confirmRobot)}
                    className="text-xl my-auto text-[#5FA9F0]"
                  >
                    {confirmRobot ? (
                      <IoMdCheckbox />
                    ) : (
                      <MdCheckBoxOutlineBlank />
                    )}
                  </button>
                  <p className="mt-[1px]">Tôi không phải người máy</p>
                </div>
                <Button
                  type="submit"
                  name="TRA CỨU"
                  fullWidth={true}
                  variant="primary"
                  confirmRobot={confirmRobot}
                />
              </form>
            </div>

            {/* Search Results Count */}
            {hasSearched && (
              <div className="mb-6">
                {searchResults.length > 0 ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <p className="text-green-800 font-medium">
                      Tìm thấy <strong></strong> hồ sơ hợp lệ
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <span className="text-4xl mb-3 block">❌</span>
                    <p className="text-red-800 font-medium mb-4">
                      Không tìm thấy hồ sơ với mã này
                    </p>
                    <Button
                      name="Liên hệ hỗ trợ"
                      onClick={handleContactSupport}
                      variant="primary"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="space-y-6 mb-8">
                <CertificateCard
                  key={searchResults.id}
                  certificate={searchResults}
                  onViewCertificate={handleViewCertificate}
                  onDownload={handleDownload}
                />
              </div>
            )}

            {/* Lookup Guide */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {lookupGuideData.title}
              </h2>
              <ul className="space-y-3">
                {lookupGuideData.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-700 flex-1">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-sm text-blue-800">
                  <strong>💡 Mẹo:</strong> Bạn có thể dùng mã demo{' '}
                  <code className="bg-blue-100 px-2 py-1 rounded">Events</code>{' '}
                  để thử nghiệm chức năng tra cứu
                </p>
              </div>
            </div>

            {/* Help Links */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Gặp vấn đề khi tra cứu? Chúng tôi sẵn sàng hỗ trợ bạn
              </p>
              <div className="flex justify-center">
                <Button
                  name="Liên hệ hỗ trợ"
                  onClick={handleContactSupport}
                  variant="primary"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  )
}

export default CertificateLookup
