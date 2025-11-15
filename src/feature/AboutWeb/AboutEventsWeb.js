import { FaUsers, FaStar, FaHeart } from 'react-icons/fa'
import { MdOutlineVisibility } from 'react-icons/md'
import { LuTarget } from 'react-icons/lu'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaHandshakeSimple } from 'react-icons/fa6'

export default function AboutEventsWeb() {
  const dataTop = [
    {
      icon: <LuTarget className="text-3xl text-[#5FA9F0] " />,
      title: 'Sứ mệnh',
      desc: 'Cung cấp hệ sinh thái sự kiện giáo dục toàn diện, chất lượng, chi tiết và xác thực - Vì sự phát triển toàn diện của thế hệ trẻ.',
    },
    {
      icon: <MdOutlineVisibility className="text-3xl text-[#5FA9F0]" />,
      title: 'Tầm nhìn',
      desc: 'Trở thành nền tảng kết nối sự kiện số 1 việt nam cho học sinh sinh viên thúc đẩy phong trào hoạt động ngoại khóa của học sinh sinh viên cả nước.',
    },
  ]

  const dataBottom = [
    {
      icon: <FaUsers className="text-2xl text-[#5FA9F0]" />,
      title: 'Cá nhân hóa',
      desc: ' Ứng dụng AI để hiểu nhu cầu và hành trình phát triển của từng sinh viên, gợi ý và xuất hồ sơ năng lực cá nhân hóa theo mục tiêu riêng.',
    },
    {
      icon: <FaStar className="text-2xl text-[#5FA9F0]" />,
      title: 'Tiện ích',
      desc: 'Tối giản mọi thao tác - từ tìm kiếm, đăng ký đến lưu trữ sự kiện - mang lại trải nghiệm nhanh, thông minh và hiệu quả.',
    },
    {
      icon: <FaHeart className="text-2xl text-[#5FA9F0]" />,
      title: 'Đổi mới',
      desc: ' Liên tục cải tiến và ứng dụng công nghệ mới nhằm tạo ra nền tảng sự kiện hiện đại, năng động và khác biệt.',
    },
    {
      icon: <FaHandshakeSimple className="text-2xl text-[#5FA9F0]" />,
      title: 'Tin cậy',
      desc: 'Cam kết cung cấp thông tin sự kiện chính xác, được kiểm duyệt và minh bạch, giúp sinh viên yên tâm khi lựa chọn và tham gia',
    },
    {
      icon: <FaPeopleGroup className="text-2xl text-[#5FA9F0]" />,
      title: 'Lan tỏa giá trị',
      desc: 'Thúc đẩy học tập suốt đời, phát triển kỹ năng thế hệ trẻ và góp phần vào chuyển đổi số giáo dục hướng đến xã hội học tập năng động',
    },
  ]

  return (
    <div className="w-[60%] mx-auto text-center py-24">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Về chúng tôi</h2>
      <p className="text-gray-600 mb-12">
        Event là nền tảng quản lý và đăng ký sự kiện hàng đầu tại Việt Nam, kết
        nối hàng nghìn người tham gia với các sự kiện chất lượng trong mọi lĩnh
        vực.
      </p>

      {/* Sứ mệnh - Tầm nhìn */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {dataTop.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#fa43010d_10%] via-white to-[#FFFEFE00]
border rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 animate-shine"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4 bg-main-blue/10 p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Giá trị cốt lõi */}
      <h3 className="text-xl font-semibold mb-8">Giá trị cốt lõi</h3>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {' '}
        {/* Sửa lỗi: Dùng Flexbox và justify-center */}
        {dataBottom.map((item, index) => (
          <div
            key={index}
            // Đặt chiều rộng cho 3 cột trên màn hình md trở lên.
            // 33.333% là 1/3, trừ đi gap (giả sử gap-6 là 1.5rem ~ 24px) để đảm bảo 3 item vừa vặn.
            // Lưu ý: Giá trị 16px là ước tính cho việc căn chỉnh, bạn có thể cần điều chỉnh nhẹ
            // hoặc dùng chiều rộng flex-basis/grow/shrink thay thế, nhưng calc là cách đơn giản nhất.
            className={`w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] relative ${
              index % 2 == 0 ? 'bg-gradient-to-bl' : 'bg-gradient-to-br'
            } from-[#fa43010d_10%] via-white to-[#FFFEFE00] border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 transition-all duration-500 group overflow-hidden`}
          >
            {/* Hiệu ứng Shine (có thể cần thêm keyframes CSS ngoài) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 animate-shine"></div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4 bg-main-blue/10 p-4 rounded-full">
                {item.icon}
              </div>

              {/* Tiêu đề */}
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>

              {/* Mô tả */}
              <p className="text-gray-600 text-sm text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hiệu ứng ánh sáng chạy */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-shine {
          animation: shine 2.5s linear infinite;
        }
      `}</style>
    </div>
  )
}
