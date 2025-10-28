import { Button } from '../../ui/Button'

export const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null

  const handleDownloadPDF = () => {
    console.log('📄 Tải xuống PDF:', certificate.id)
    alert('Đang tải xuống chứng chỉ PDF...')
  }

  const handlePrint = () => {
    // Thêm class để ẩn các phần không cần in
    document.body.classList.add('printing')

    // Trigger print
    window.print()

    // Xóa class sau khi in xong
    document.body.classList.remove('printing')
  }

  return (
    <>
      {/* Print-only styles */}
      <style jsx>{`
        @media print {
          body.printing * {
            visibility: hidden;
          }
          body.printing .print-certificate,
          body.printing .print-certificate * {
            visibility: visible;
          }
          body.printing .print-certificate {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          body.printing .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center no-print">
            <h2 className="text-xl font-bold text-gray-800">Xem chứng chỉ</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="p-8">
            {/* Certificate Preview */}
            <div className="border-4 border-blue-500 rounded-lg p-8 bg-white shadow-lg print-certificate">
              <div className="text-center space-y-6">
                <div className="border-2 border-dashed border-blue-300 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    CHỨNG NHẬN
                  </h3>
                  <p className="text-lg text-gray-700">
                    CHỨNG CHỈ SINH VIÊN 5 TỐT
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">Chứng nhận rằng</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {certificate.studentName}
                  </p>
                  <p className="text-gray-600">
                    {certificate.studentId} - Đại học Bách Khoa Hà Nội
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 mb-2">Đã tham gia sự kiện</p>
                  <p className="text-xl font-semibold text-gray-800">
                    "{certificate.eventName}"
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <img
                        src={process.env.PUBLIC_URL + "/image/certificateLookup/date.svg"}
                        alt="Biểu tượng lịch"
                        className="w-5 h-5"
                      />
                      <p className="text-sm text-gray-600">Ngày tổ chức</p>
                    </div>
                    <p className="font-semibold text-gray-800">
                      {certificate.issueDate}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <img
                        src={process.env.PUBLIC_URL +"/image/certificateLookup/location.svg"}
                        alt="Biểu tượng địa điểm"
                        className="w-5 h-5"
                      />
                      <p className="text-sm text-gray-600">Địa điểm</p>
                    </div>
                    <p className="font-semibold text-gray-800">
                      {certificate.venue}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <img
                        src={process.env.PUBLIC_URL +"/image/certificateLookup/organization.svg"}
                        alt="Biểu tượng tổ chức"
                        className="w-5 h-5"
                      />
                      <p className="text-sm text-gray-600">Bộ Khoa học</p>
                    </div>
                    <p className="font-semibold text-gray-800">
                      {certificate.fieldOfStudy}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-2">
                    Ngày cấp: {certificate.completionDate}
                  </p>
                  <p className="text-sm text-gray-500">
                    Mã chứng chỉ: {certificate.id}
                  </p>
                </div>

                <div className="flex items-center justify-around pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Ban tổ chức</p>
                    <div className="w-32 border-t-2 border-gray-800"></div>
                    <p className="font-semibold mt-2">
                      {certificate.fieldOfStudy}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Người đại diện</p>
                    <div className="w-32 border-t-2 border-gray-800"></div>
                    <p className="font-semibold mt-2">Nguyễn Văn A</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src={process.env.PUBLIC_URL+ "/image/certificateLookup/SV5TModel.svg"}
                    alt="Icon SV5T model"
                    className="w-30 h-30"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6 no-print">
              <Button
                name="Tải xuống PDF"
                onClick={() => handleDownloadPDF()}
                fullWidth={true}
                icon={
                  <img
                    src={process.env.PUBLIC_URL + "/image/certificateLookup/download.svg"}
                    alt="Icon tải"
                    className="w-5 h-5"
                  />
                }
              />

              <Button
                name="In chứng chỉ"
                onClick={() => handlePrint()}
                variant="secondary"
                fullWidth={true}
                icon={
                  <img
                    src={process.env.PUBLIC_URL + "/image/certificateLookup/SV5T.svg"}
                    alt="Icon SV5T"
                    className="w-5 h-5 brightness-0"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
