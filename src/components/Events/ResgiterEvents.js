// Giả định dữ liệu sự kiện được truyền qua props
// const event = {
//   price: 'Miễn phí',
//   registrationOpen: 'Thứ Tư, 15/10/2025',
//   eventDate: 'Thứ Bảy, 15/11/2025',
//   time: '09:00',
//   location: 'Giảng đường AI, ĐH Bách Khoa Hà Nội',
//   school: 'ĐH Bách Khoa Hà Nội',
//   organizer: 'CLB Công nghệ BK',
//   certificate: 'Sinh viên 5 tốt',
//   spotsLeft: 144,
//   totalSpots: 300,
// };

export default function RegisterEvent({ event }) {
    // Dữ liệu mẫu (nếu props event không được truyền)
    const eventData = event || {
      price: 'Miễn phí',
      registrationOpen: 'Thứ Tư, 15/10/2025',
      eventDate: 'Thứ Bảy, 15/11/2025',
      time: '09:00',
      location: 'Giảng đường AI, ĐH Bách Khoa Hà Nội',
      school: 'ĐH Bách Khoa Hà Nội',
      organizer: 'CLB Công nghệ BK',
      certificate: 'Sinh viên 5 tốt',
      spotsLeft: 144,
      totalSpots: 300,
    };
  
    // Tính toán phần trăm chỗ đã được lấp đầy để hiển thị thanh trạng thái
    const filledPercentage = ((eventData.totalSpots - eventData.spotsLeft) / eventData.totalSpots) * 100;
    
    // Component Item hiển thị một dòng thông tin
    const InfoItem = ({ icon, title, value, isLink = false }) => (
      <div className="flex items-start mb-4">
        {/* Icon */}
        <div className="text-xl mr-4 w-5 text-center pt-0.5">
          {icon}
        </div>
        {/* Nội dung */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">{title}</p>
          {isLink ? (
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              {value}
            </a>
          ) : (
            <p className="text-sm font-medium text-gray-800">{value}</p>
          )}
        </div>
      </div>
    );
  
    return (
      <div className="p-6 bg-white rounded-xl shadow-lg max-w-sm mx-auto my-8 border border-gray-100">
        
        {/* 1. Giá vé */}
        <h2 className="text-base font-semibold text-gray-700 mb-1">Giá vé</h2>
        <p className="text-lg font-medium text-blue-600 mb-4">{eventData.price}</p>
        
        <div className="border-t border-gray-200 my-4" /> {/* Đường kẻ ngang */}
  
        {/* 2. Danh sách thông tin chi tiết */}
        <div className="space-y-4">
          <InfoItem 
            icon="🔔"
            title="Mở đăng ký" 
            value={eventData.registrationOpen} 
          />
          <InfoItem 
            icon="🗓️"
            title="Ngày diễn ra" 
            value={eventData.eventDate} 
          />
          <InfoItem 
            icon="⌚"
            title="Thời gian" 
            value={eventData.time} 
          />
          <InfoItem 
            icon="📍"
            title="Địa điểm" 
            value={eventData.location} 
          />
          <InfoItem 
            icon="🎓"
            title="Trường" 
            value={eventData.school} 
          />
          <InfoItem 
            icon="🏢"
            title="Tổ chức bởi" 
            value={eventData.organizer} 
          />
          <InfoItem 
            icon="🎖️"
            title="Chứng chỉ" 
            value={eventData.certificate} 
            isLink={true}
          />
        </div>
  
        {/* 3. Số chỗ còn lại và Thanh trạng thái */}
        <div className="mt-8 mb-2 flex justify-between items-center">
          <p className="text-base text-gray-700">Số chỗ còn lại</p>
          <p className="text-base font-semibold text-gray-800">{`${eventData.spotsLeft}/${eventData.totalSpots}`}</p>
        </div>
  
        {/* Progress Bar */}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-blue-500 transition-all duration-500 ease-out" 
            style={{ width: `${filledPercentage}%` }} 
          />
        </div>
  
        {/* 4. Nút Đăng ký */}
        <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
          Đăng ký tham gia
        </button>
      </div>
    );
  }