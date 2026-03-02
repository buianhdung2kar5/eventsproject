import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-[#6B7280] pt-16 pb-8 w-full items-center justify-center">
      <div className="w-[90%] mx-auto px-6 flex flex-col items-center">
        {/* Main Flex: Precise percentage control via flex */}
        <div className="flex flex-col md:flex-row mb-12 w-full md:justify-center">
          {/* 1. Brand Section (~33% width) */}
          <div className="md:w-1/3 space-y-5 text-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4CC0D0] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
                S
              </div>
              <span className="text-4xl font-bold text-[#1F2937] tracking-tight">
                S-Events
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-[50%]">
              Nền tảng kết nối sinh viên với các sự kiện, tìm kiếm cơ hội nghề
              nghiệp nhất tại Việt Nam
            </p>
            {/* Social Icons matching the image circles */}
            <div className="flex gap-3">
              <SocialIcon icon={<FaFacebookF size={14} />} />
              <SocialIcon icon={<FaInstagram size={16} />} />
              <SocialIcon icon={<FaYoutube size={16} />} />
            </div>
          </div>

          {/* 2. Khám phá (~16.6% width) */}
          <div className="md:w-1/6">
            <h3 className="text-[#1F2937] font-bold mb-5">Khám phá</h3>
            <ul className="space-y-3 text-[0.875rem]">
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Sự kiện
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Việc làm CTV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Tin tức & Xu hướng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Cộng đồng
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Hỗ trợ (~25% width) */}
          <div className="md:w-1/4">
            <h3 className="text-[#1F2937] font-bold mb-5">Hỗ trợ</h3>
            <ul className="space-y-3 text-[0.875rem]">
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Tra cứu chứng nhận
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Tra cứu hồ sơ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CC0D0] transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Tải ứng dụng (~25% width) */}
          <div className="md:w-1/4">
            <h3 className="text-[#1F2937] font-bold mb-5">Tải ứng dụng</h3>
            <div className="flex flex-col gap-3">
              <AppStoreButton
                icon={<FaApple size={24} />}
                subText="Tải xuống trên"
                mainText="App Store"
              />
              <AppStoreButton
                icon={<FaGooglePlay size={20} />}
                subText="Tải về từ"
                mainText="Google Play"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex justify-center">
          <p className="text-[0.8125rem] text-gray-400">
            © 2025 S-Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#6B7280] hover:bg-[#4CC0D0] hover:text-white transition-all"
    >
      {icon}
    </a>
  )
}

function AppStoreButton({ icon, subText, mainText }) {
  return (
    <a
      href="#"
      className="flex items-center bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors w-full max-w-[12.5rem]"
    >
      <div className="mr-3 text-2xl">{icon}</div>
      <div className="flex flex-col items-start">
        <span className="text-[0.625rem] font-light leading-none mb-0.5">
          {subText}
        </span>
        <span className="text-[0.9375rem] font-semibold leading-none">
          {mainText}
        </span>
      </div>
    </a>
  )
}
