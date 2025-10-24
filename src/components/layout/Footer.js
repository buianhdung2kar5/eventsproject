export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200 text-gray-600">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Mô tả thương hiệu */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Events</h2>
          <p className="text-sm leading-relaxed">
            Nền tảng sự kiện sinh viên hàng đầu Việt Nam
          </p>
        </div>

        {/* Liên kết */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Liên kết</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Sự kiện
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Tin tức
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Giới thiệu
              </a>
            </li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Hỗ trợ</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">
                Liên hệ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Điều khoản
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Chính sách
              </a>
            </li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Liên hệ</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{' '}
              <a href="mailto:info@event.vn" className="hover:text-blue-600">
                info@event.vn
              </a>
            </li>
            <li>Hotline: 1900 xxxx</li>
            <li>Địa chỉ: Hà Nội, Việt Nam</li>
          </ul>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © 2025 Events. All rights reserved.
      </div>
    </footer>
  )
}
