import { FaUsers, FaStar, FaHeart } from 'react-icons/fa'
import { MdOutlineVisibility } from 'react-icons/md'
import { LuTarget } from 'react-icons/lu'

export default function AboutEventsWeb() {
  const dataTop = [
    {
      icon: <LuTarget className="text-3xl text-[#5FA9F0]" />,
      title: 'Sứ mệnh',
      desc: 'Tạo ra một nền tảng kết nối mọi người với những sự kiện ý nghĩa, giúp phát triển cộng đồng và mang đến trải nghiệm tuyệt vời cho mọi người tham gia.',
    },
    {
      icon: <MdOutlineVisibility className="text-3xl text-[#5FA9F0]" />,
      title: 'Tầm nhìn',
      desc: 'Trở thành nền tảng quản lý sự kiện số 1 tại Việt Nam, đơn giản hóa việc tổ chức và tham gia sự kiện cho mọi đối tượng.',
    },
  ]

  const dataBottom = [
    {
      icon: <FaUsers className="text-2xl text-[#5FA9F0]" />,
      title: 'Kết nối cộng đồng',
      desc: 'Tạo ra môi trường để người tổ chức gặp gỡ, kết nối và chia sẻ đam mê chung.',
    },
    {
      icon: <FaStar className="text-2xl text-[#5FA9F0]" />,
      title: 'Chất lượng',
      desc: 'Cam kết mang đến những sự kiện chất lượng nhất cho người tham gia.',
    },
    {
      icon: <FaHeart className="text-2xl text-[#5FA9F0]" />,
      title: 'Tận tâm',
      desc: 'Khách hàng là trung tâm trong mọi hành động, đảm bảo sự hài lòng và sự tin tưởng lâu dài.',
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
            className="relative bg-white border rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-500 group overflow-hidden"
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
      <div className="grid md:grid-cols-3 gap-6">
        {dataBottom.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 animate-shine"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4 bg-main-blue/10 p-4 rounded-full">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
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
