import { Button } from "../../ui/Button"

export const CertificateCard = ({ certificate, onViewCertificate, onDownload }) => {
    return (
        <div className="bg-white border-2 border-dashed border-blue-400 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            {/* Header: Icon + Title + Status */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                    <img 
                        src={process.env.PUBLIC_URL+"/image/certificateLookup/SV5T.svg"}
                        alt="Biểu tượng chứng chỉ"
                        className="w-6 h-6"
                    />
                    <h3 className="font-semibold text-gray-800 text-lg">Chứng chỉ sinh viên 5 tốt</h3>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                    Hợp lệ
                </span>
            </div>

            {/* Certificate Code */}
            <div className="mb-6">
                <p className="text-sm text-gray-600">Mã: {certificate.id}</p>
            </div>

            {/* Certificate Details */}
            <div className="space-y-4 mb-6">
                {/* Sự kiện */}
                <div>
                    <p className="text-sm text-gray-600 mb-1">Sự kiện</p>
                    <p className="font-medium text-gray-800">{certificate.eventName}</p>
                </div>

                {/* Sinh viên + MSSV (2 columns) */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Sinh viên</p>
                        <p className="font-medium text-gray-800">{certificate.studentName}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">MSSV</p>
                        <p className="font-medium text-gray-800">{certificate.studentId}</p>
                    </div>
                </div>

                {/* Ngày sự kiện + Địa điểm (with icons) */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                        <img 
                            src={process.env.PUBLIC_URL+ "/image/certificateLookup/date.svg"}
                            alt="Biểu tượng lịch"
                            className="w-5 h-5"
                        />
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Ngày sự kiện: {certificate.issueDate}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img 
                            src="image/certificateLookup/location.svg"
                            alt="Biểu tượng địa điểm"
                            className="w-5 h-5"
                        />
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Địa điểm: {certificate.venue}</p>
                        </div>
                    </div>
                </div>

                {/* Tổ chức + Ngày cấp (with icons) */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                        <img 
                            src="image/certificateLookup/dateOfIssue.svg"
                            alt="Biểu tượng ngày cấp"
                            className="w-5 h-5"
                        />
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Ngày cấp: {certificate.completionDate}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img 
                            src="image/certificateLookup/organization.svg"
                            alt="Biểu tượng lịch"
                            className="w-5 h-5"
                        />
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Tổ chức: {certificate.fieldOfStudy}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <Button
                    name="Xem chứng chỉ"
                    onClick={() => onViewCertificate(certificate)}
                    fullWidth={true}
                    icon={
                        <img 
                            src="image/certificateLookup/viewCertificate.svg"
                            alt="Icon xem"
                            className="w-5 h-5"
                        />
                    }
                />
                <Button
                    name="Tải xuống"
                    variant="secondary"
                    onClick={() => onDownload(certificate)}
                    fullWidth={true}
                    icon={
                        <img 
                            src="image/certificateLookup/SV5T.svg"
                            alt="Icon tải"
                            className="w-5 h-5 brightness-0"
                        />
                    }
                />
            </div>
        </div>
    )
}
