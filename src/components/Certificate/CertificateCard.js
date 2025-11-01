import { Button } from '../../ui/Button'

export const CertificateCard = ({
  certificate,
  onViewCertificate,
  onDownload,
}) => {
  const labelTextColor = 'text-[#6B7280]'
  return (
    <div className="w-full border rounded-lg flex flex-col px-8 py-4 gap-4">
      <div>
        <div className="flex items-center">
          <p className="">{certificate?.certificate}</p>
          <p className="">{certificate.status}</p>
        </div>
      </div>
      {/* infor User */}
      <div className={`${labelTextColor} text-xl pt-4`}>Danh sách sự kiện</div>
      {certificate.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-2 mt-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <p className="w-24 text-gray-600 text-sm">Sự kiện:</p>
                <div className="text-[#C21313] text-sm font-medium">
                  {item.eventName}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <p className="w-24 text-gray-600 text-sm">Ngày sự kiện:</p>
                <div className="text-[#090D00] text-sm">{item.issueDate}</div>
              </div>

              <div className="flex items-start gap-2">
                <p className="w-24 text-gray-600 text-sm">Địa điểm:</p>
                <div className="text-[#090D00] text-sm">{item.venue}</div>
              </div>

              <div className="flex items-start gap-2">
                <p className="w-24 text-gray-600 text-sm">Tổ chức:</p>
                <div className="text-[#090D00] text-sm">
                  {item.fieldOfStudy}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <p className="w-24 text-gray-600 text-sm">Ngày cấp:</p>
                <div className="text-[#090D00] text-sm">
                  {item.completionDate}
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="w-[95%] border h-[1px] mx-auto"></div>

      <div className="flex gap-8">
        {' '}
        <Button
          name="Xem hồ sơ"
          onClick={() => onViewCertificate(certificate)}
          fullWidth={true}
          icon={
            <img
              src={
                process.env.PUBLIC_URL +
                '/image/certificateLookup/viewCertificate.svg'
              }
              alt="Icon xem"
              className="w-5 h-5"
            />
          }
          variant="primary"
        />
        <Button
          name="Tải xuống"
          variant="secondary"
          onClick={() => onDownload(certificate)}
          fullWidth={true}
          icon={
            <img
              src={process.env.PUBLIC_URL + '/image/certificateLookup/SV5T.svg'}
              alt="Icon tải"
              className="w-5 h-5 brightness-0"
            />
          }
        />
      </div>
    </div>
  )
}
