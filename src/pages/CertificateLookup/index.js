import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "../../ui/Input"
import { Button } from "../../ui/Button"
import { CertificateCard } from "../../components/Certificate/CertificateCard"
import { CertificateModal } from "../../components/Certificate/CertificateModal"
import { certificateMockData, lookupGuideData } from "../../data/certificate/certificateData"
import { PATH } from "../../routes/path"

const CertificateLookup = () => {
    const navigate = useNavigate()
    const [searchCode, setSearchCode] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        setHasSearched(true)
        
        if (!searchCode.trim()) {
            setSearchResults([])
            return
        }

        // Hỗ trợ tìm nhiều mã cách nhau bởi dấu phẩy
        const searchCodes = searchCode.split(',').map(code => code.trim().toLowerCase())
        
        // Tìm kiếm trong mock data
        const found = certificateMockData.filter(cert => 
            searchCodes.some(code => 
                cert.id.toLowerCase().includes(code) ||
                cert.studentId.toLowerCase().includes(code) ||
                cert.studentName.toLowerCase().includes(code)
            )
        )
        
        setSearchResults(found)
        console.log(` Tìm thấy ${found.length} chứng chỉ:`, found)
    }

    const handleContactSupport = () => {
        navigate(PATH.CONTACT)
    }

    const handleViewCertificate = (certificate) => {
        setSelectedCertificate(certificate)
    }

    const handleDownload = (certificate) => {
        console.log("📥 Tải xuống chứng chỉ:", certificate.id)
        alert("Đang tải xuống chứng chỉ PDF...")
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col items-center mb-12 text-center">
                <img 
                    src="image/CertificateLookup/lookup.svg"
                    alt="Biểu tượng tra cứu chứng chỉ"
                    className="w-20 h-20 mb-6"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Tra cứu chứng chỉ
                </h1>
                <p className="text-gray-600 max-w-2xl text-center">
                    Nhập mã chứng chỉ hoặc mã sự kiện để tra cứu mã xác minh chứng chỉ của bạn
                </p>
                </div>


                {/* Search Form */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
                    <form onSubmit={handleSearch} className="space-y-6">
                        <Input
                            label="Mã chứng chỉ hoặc mã sự kiện"
                            name="searchCode"
                            placeholder="Events123 (có thể nhập nhiều mã cách nhau bởi dấu phẩy)"
                            required={true}
                            value={searchCode}
                            onChange={(e) => setSearchCode(e.target.value)}
                        />

                        <Button
                            type="submit"
                            name="🔍 TRA CỨU"
                            fullWidth={true}
                        />
                    </form>
                </div>

                {/* Search Results Count */}
                {hasSearched && (
                    <div className="mb-6">
                        {searchResults.length > 0 ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                                
                                <p className="text-green-800 font-medium">
                                     ✔  Tìm thấy <strong>{searchResults.length}</strong> chứng chỉ hợp lệ
                                </p>
                            </div>
                        ) : (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                                <span className="text-4xl mb-3 block">❌</span>
                                <p className="text-red-800 font-medium mb-4">
                                    Không tìm thấy chứng chỉ với mã này
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
                        {searchResults.map((cert) => (
                            <CertificateCard
                                key={cert.id}
                                certificate={cert}
                                onViewCertificate={handleViewCertificate}
                                onDownload={handleDownload}
                            />
                        ))}
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
                            <strong>💡 Mẹo:</strong> Bạn có thể dùng mã demo <code className="bg-blue-100 px-2 py-1 rounded">Events123</code> để thử nghĩa chức năng tra cứu
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
