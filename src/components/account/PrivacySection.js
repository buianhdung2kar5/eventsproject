export const PrivacySection = () => {
  return (
    <section className="section-container border-b pb-8 mb-8">
      <h2 className="text-base font-semibold text-gray-700 mb-4">
        Quyền riêng tư
      </h2>

      <div className="radio-option mb-3 flex items-start">
        <input
          type="radio"
          name="privacy"
          id="public"
          checked
          className="mt-1 mr-2"
        />
        <label htmlFor="public">
          <span className="font-medium">Công khai</span>
          <p className="text-sm text-gray-500">
            Ai cũng có thể tìm thấy và xem
          </p>
        </label>
      </div>

      <div className="radio-option mb-3 flex items-start">
        <input
          type="radio"
          name="privacy"
          id="link-only"
          className="mt-1 mr-2"
        />
        <label htmlFor="link-only">
          <span className="font-medium">Không công khai</span>
          <p className="text-sm text-gray-500">
            Chỉ người có link mới xem được
          </p>
        </label>
      </div>

      <div className="radio-option flex items-start text-gray-400">
        {/* Biểu tượng khóa */}
        <span className="mr-2">🔒</span>
        <label className="cursor-not-allowed">
          <span className="font-medium">Mật khẩu</span>
          <p className="text-sm">Yêu cầu mật khẩu để xem</p>
        </label>
      </div>
    </section>
  )
}
